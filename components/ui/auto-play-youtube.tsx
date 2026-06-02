"use client";

import { useEffect, useId, useRef } from "react";

/**
 * AutoPlayYouTube — YouTube embed tự bật khi lướt tới + chỉ 1 video play cùng lúc
 *
 * - IntersectionObserver: khi video vào >60% viewport → play
 * - Khi cuộn ra khỏi viewport → pause
 * - Module-level coordinator: bất kỳ video nào bắt đầu play → tự pause các video khác
 * - Muted theo mặc định (browser bắt buộc cho autoplay không user-interaction)
 *   User click vào loa trên player để bật tiếng
 */

// ─── Global coordinator: chỉ 1 video được phát cùng lúc ────────────────────
type Subscriber = (currentlyPlayingId: string | null) => void;

let currentPlayingId: string | null = null;
const subscribers = new Set<Subscriber>();

function setCurrentPlaying(id: string | null) {
  currentPlayingId = id;
  subscribers.forEach((fn) => fn(id));
}

function subscribe(fn: Subscriber): () => void {
  subscribers.add(fn);
  return () => {
    subscribers.delete(fn);
  };
}

// ─── Component ──────────────────────────────────────────────────────────────
interface AutoPlayYouTubeProps {
  youtubeId: string;
  title: string;
  className?: string;
  /** Ngưỡng visible để auto-play (0-1). Default 0.6 (60% trong viewport). */
  threshold?: number;
}

export function AutoPlayYouTube({
  youtubeId,
  title,
  className = "",
  threshold = 0.6,
}: AutoPlayYouTubeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId();
  // Unique id mỗi instance (nếu cùng youtubeId xuất hiện 2 chỗ vẫn track riêng)
  const instanceId = `${reactId}-${youtubeId}`;
  const isPlayingRef = useRef(false);

  // Send command tới YouTube iframe qua postMessage
  const sendCommand = (func: string) => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentWindow) return;
    iframe.contentWindow.postMessage(
      JSON.stringify({ event: "command", func, args: "" }),
      "*"
    );
  };

  const play = () => {
    if (currentPlayingId === instanceId) return;
    sendCommand("playVideo");
    setCurrentPlaying(instanceId);
    isPlayingRef.current = true;
  };

  const pause = () => {
    sendCommand("pauseVideo");
    isPlayingRef.current = false;
    if (currentPlayingId === instanceId) setCurrentPlaying(null);
  };

  // Subscribe: nếu video khác play, ta pause
  useEffect(() => {
    return subscribe((newCurrentId) => {
      if (newCurrentId !== instanceId && isPlayingRef.current) {
        sendCommand("pauseVideo");
        isPlayingRef.current = false;
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [instanceId]);

  // IntersectionObserver: trigger play khi đủ visible, pause khi out
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && entry.intersectionRatio >= threshold) {
          play();
        } else if (!entry.isIntersecting && isPlayingRef.current) {
          pause();
        }
      },
      { threshold: [0, threshold, 1] }
    );

    observer.observe(el);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [threshold]);

  // URL với enablejsapi=1 để nhận postMessage, mute=1 để autoplay được phép
  const origin =
    typeof window !== "undefined"
      ? `&origin=${encodeURIComponent(window.location.origin)}`
      : "";
  const src =
    `https://www.youtube.com/embed/${youtubeId}` +
    `?enablejsapi=1&autoplay=0&mute=1&rel=0&modestbranding=1&playsinline=1&iv_load_policy=3` +
    origin;

  return (
    <div ref={containerRef} className={className}>
      <iframe
        ref={iframeRef}
        src={src}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        allowFullScreen
        className="w-full h-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
