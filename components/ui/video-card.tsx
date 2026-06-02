"use client";

import { useState } from "react";
import { Play, Film } from "lucide-react";
import { Video } from "@/lib/site-config";

interface VideoCardProps {
  item: Video;
  onOpen: () => void;
  showLabel?: boolean;
}

// Facebook brand SVG path
function FacebookIcon({ size = 28 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className="fill-current"
    >
      <path d="M24 12.073C24 5.404 18.627 0 12 0S0 5.404 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.236 2.686.236v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.267h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z" />
    </svg>
  );
}

export function VideoCard({ item, onOpen, showLabel = true }: VideoCardProps) {
  const isFacebook = !!item.facebookUrl;
  const youtubeThumb = item.youtubeId ? `https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg` : undefined;
  const initialThumb = item.thumb ?? youtubeThumb;
  // Track image load error → fallback về placeholder
  const [thumbErrored, setThumbErrored] = useState(false);
  const thumb = thumbErrored ? undefined : initialThumb;

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`Phát video: ${item.title}`}
      onClick={onOpen}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onOpen(); } }}
      className="group glass-card rounded-2xl overflow-hidden cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#D4A853] transition-transform duration-500 hover:-translate-y-1"
    >
      <div className="aspect-video bg-gradient-to-br from-gray-900 to-black relative overflow-hidden">
        {thumb ? (
          <img
            src={thumb}
            alt={item.title}
            loading="lazy"
            decoding="async"
            onError={() => setThumbErrored(true)}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          // Facebook reels placeholder — không có thumbnail công khai
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0a0a0a]">
            {/* Decorative grid */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(212,168,83,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(212,168,83,0.4) 1px, transparent 1px)",
                backgroundSize: "32px 32px",
              }}
            />
            {/* Big icon glow */}
            <div className="relative">
              <div className="absolute inset-0 blur-2xl bg-[#1877F2]/30" />
              <div className="relative text-[#1877F2]/90 transition-transform duration-500 group-hover:scale-110">
                <FacebookIcon size={56} />
              </div>
            </div>
            {/* Reel badge */}
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#1877F2]/40">
              <span className="font-sub text-[10px] uppercase tracking-[0.18em] text-[#1877F2] inline-flex items-center gap-1.5">
                <Film size={10} />
                Facebook Reel
              </span>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-black/40 group-hover:from-black/60 transition-all duration-300 pointer-events-none" />

        {/* Category pill — only for non-FB (FB has its own badge) */}
        {item.category && !isFacebook && (
          <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-[#D4A853]/30">
            <span className="font-sub text-[10px] uppercase tracking-[0.18em] text-[#D4A853]">
              {item.category}
            </span>
          </div>
        )}

        {/* Play button */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-black/60 backdrop-blur-sm border-2 border-[#D4A853]/70 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-[#D4A853] group-hover:border-[#D4A853]">
            <Play size={22} className="text-[#D4A853] ml-1 transition-colors duration-300 group-hover:text-black" fill="currentColor" />
          </div>
        </div>

        {/* Title bottom */}
        {showLabel && (
          <div className="absolute bottom-0 left-0 right-0 p-5">
            <p className="font-heading text-white text-lg leading-tight">
              {item.title}
            </p>
            {item.author && (
              <p className="font-sub text-[10px] uppercase tracking-[0.2em] text-[#D4A853]/80 mt-1.5">
                {item.author === "instructor" ? "Giảng Viên" : "Học Viên"}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
