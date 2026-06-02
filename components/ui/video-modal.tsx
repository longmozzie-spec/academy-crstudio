"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface VideoModalProps {
  youtubeId?: string;
  facebookUrl?: string;
  isShort?: boolean;
  isOpen: boolean;
  onClose: () => void;
}

export function VideoModal({ youtubeId, facebookUrl, isShort = false, isOpen, onClose }: VideoModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, onClose]);

  if (!isOpen || (!youtubeId && !facebookUrl)) return null;

  // Build embed URL
  let embedUrl = "";
  if (facebookUrl) {
    // Facebook plugin video embed
    const encoded = encodeURIComponent(facebookUrl);
    embedUrl = `https://www.facebook.com/plugins/video.php?href=${encoded}&show_text=false&autoplay=true`;
  } else if (youtubeId) {
    embedUrl = `https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`;
  }

  // FB reels are vertical → force isShort
  const isVertical = isShort || !!facebookUrl;

  const containerStyle = isVertical
    ? { width: "min(95vw, calc(88vh * 9 / 16))", aspectRatio: "9 / 16" }
    : { width: "min(95vw, 1600px)", aspectRatio: "16 / 9", maxHeight: "88vh" };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Video player"
      onClick={onClose}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/90 backdrop-blur-sm cursor-pointer"
      style={{ animation: "modalFadeIn 220ms ease-out" }}
    >
      <button
        onClick={(e) => { e.stopPropagation(); onClose(); }}
        aria-label="Đóng video"
        className="absolute top-6 right-6 md:top-8 md:right-8 z-20 text-white/80 hover:text-[#D4A853] transition-colors duration-200 cursor-pointer"
      >
        <X size={32} strokeWidth={1.5} />
      </button>

      {/* Mở trên Facebook (cho FB reels) */}
      {facebookUrl && (
        <a
          href={facebookUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-6 left-6 md:top-8 md:left-8 z-20 inline-flex items-center gap-2 text-white/80 hover:text-[#D4A853] transition-colors text-xs font-sub uppercase tracking-[0.2em]"
        >
          ↗ Mở trên Facebook
        </a>
      )}

      <div
        className="relative z-10 cursor-default"
        style={{
          ...containerStyle,
          animation: "videoScaleIn 320ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <iframe
          src={embedUrl}
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="w-full h-full bg-black shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
          style={{ border: 0 }}
        />
      </div>

      <style>{`
        @keyframes modalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes videoScaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
}
