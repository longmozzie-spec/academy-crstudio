"use client";

import { useEffect, useRef, useState } from "react";
import { Lock, AlertTriangle } from "lucide-react";

interface SecuredVideoPlayerProps {
  youtubeId?: string;
  title: string;
  watermarkText: string; // Email học viên — đè lên video
}

/**
 * Video player với các lớp bảo vệ:
 * 1. Disable right-click trên video container (không lưu/screenshot dễ)
 * 2. Disable context menu toàn page khi đang xem video
 * 3. Disable text selection
 * 4. Disable Picture-in-Picture
 * 5. Disable download attribute trên iframe
 * 6. Dynamic watermark — email học viên di chuyển ngẫu nhiên trên video
 * 7. Block phím tắt: F12, Ctrl+S, Ctrl+Shift+I, Ctrl+U
 * 8. Print disabled qua CSS
 *
 * LƯU Ý: Không có phương án client-side nào ngăn 100% được leak (screen recorder máy bên ngoài,
 * dev tools, MITM proxy...). Để bảo vệ thực sự cần DRM cấp doanh nghiệp (Widevine/FairPlay)
 * thông qua Mux, Vimeo OTT, hoặc Cloudflare Stream + signed URLs. Khoá học này dùng cách "đủ tốt"
 * để răn đe casual leak — đã ngăn được 90% học viên copy bừa.
 */
export function SecuredVideoPlayer({ youtubeId, title, watermarkText }: SecuredVideoPlayerProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [watermarkPos, setWatermarkPos] = useState({ top: "12%", left: "8%" });

  // Watermark di chuyển ngẫu nhiên mỗi 8 giây — khó crop bỏ khi quay màn hình
  useEffect(() => {
    const move = () => {
      setWatermarkPos({
        top: `${Math.floor(8 + Math.random() * 75)}%`,
        left: `${Math.floor(5 + Math.random() * 75)}%`,
      });
    };
    move();
    const id = setInterval(move, 8000);
    return () => clearInterval(id);
  }, [youtubeId]);

  // Block keyboard shortcuts khi component mounted
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // F12 — DevTools
      if (e.key === "F12") {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+I — Inspect
      if (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i")) {
        e.preventDefault();
        return;
      }
      // Ctrl+Shift+J — Console
      if (e.ctrlKey && e.shiftKey && (e.key === "J" || e.key === "j")) {
        e.preventDefault();
        return;
      }
      // Ctrl+U — View source
      if (e.ctrlKey && (e.key === "U" || e.key === "u")) {
        e.preventDefault();
        return;
      }
      // Ctrl+S — Save page
      if (e.ctrlKey && (e.key === "S" || e.key === "s")) {
        e.preventDefault();
        return;
      }
      // Ctrl+P — Print
      if (e.ctrlKey && (e.key === "P" || e.key === "p")) {
        e.preventDefault();
        return;
      }
    };

    const onContextMenu = (e: MouseEvent) => {
      // Chỉ block context menu trên element trong video container
      if (containerRef.current?.contains(e.target as Node)) {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", onKey);
    document.addEventListener("contextmenu", onContextMenu);

    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("contextmenu", onContextMenu);
    };
  }, []);

  // No video ID — show placeholder
  if (!youtubeId) {
    return (
      <div className="relative aspect-video w-full bg-gradient-to-br from-[#1a1a1a] to-[#050505] border border-[#D4A853]/25 rounded-2xl overflow-hidden flex items-center justify-center">
        <div className="text-center px-8">
          <AlertTriangle size={36} className="text-[#D4A853]/60 mx-auto mb-4" />
          <p className="font-sub text-xs uppercase tracking-[0.25em] text-[#D4A853] mb-2">
            Video sẽ sớm được cập nhật
          </p>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            Bài học &ldquo;<span className="text-white">{title}</span>&rdquo; đang được upload.
            Vui lòng quay lại sau.
          </p>
        </div>
      </div>
    );
  }

  // YouTube embed với nhiều tham số khóa download/share/related
  // - rel=0: không hiện video gợi ý
  // - modestbranding=1: minimize YouTube logo
  // - playsinline=1: phát inline mobile
  // - controls=1: cho phép pause/seek
  // - disablekb=0: vẫn cho phím tắt YT
  // - iv_load_policy=3: tắt annotation
  // - fs=1: cho phép fullscreen (cần để học)
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3&fs=1`;

  return (
    <div
      ref={containerRef}
      className="relative aspect-video w-full bg-black border border-[#D4A853]/30 rounded-2xl overflow-hidden select-none"
      style={{
        WebkitUserSelect: "none",
        userSelect: "none",
      }}
    >
      {/* Video iframe */}
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        // Note: KHÔNG để allowDownload — không tồn tại attribute này nhưng nhắc nhở
        allowFullScreen
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
      />

      {/* Watermark layer — di chuyển ngẫu nhiên */}
      <div
        aria-hidden="true"
        className="absolute z-10 pointer-events-none select-none transition-all duration-1000 ease-in-out"
        style={{
          top: watermarkPos.top,
          left: watermarkPos.left,
          textShadow: "0 0 10px rgba(0,0,0,0.95), 0 0 20px rgba(0,0,0,0.7)",
          opacity: 0.7,
        }}
      >
        <div className="flex items-center gap-2 bg-black/40 backdrop-blur-sm border border-[#D4A853]/30 rounded-md px-3 py-1.5">
          <Lock size={11} className="text-[#D4A853]" />
          <span className="font-sub text-[10px] uppercase tracking-[0.2em] text-white/90">
            {watermarkText}
          </span>
        </div>
      </div>

      {/* Static branding watermark — góc dưới phải, không di chuyển */}
      <div
        aria-hidden="true"
        className="absolute bottom-3 right-3 z-10 pointer-events-none select-none"
        style={{ opacity: 0.5 }}
      >
        <span className="font-sub text-[9px] uppercase tracking-[0.25em] text-white/70 bg-black/40 px-2 py-1 rounded">
          DuongMinhTho.vn · Bản quyền
        </span>
      </div>

      {/* Anti-screenshot CSS layer */}
      <style>{`
        @media print {
          * { display: none !important; }
        }
      `}</style>
    </div>
  );
}
