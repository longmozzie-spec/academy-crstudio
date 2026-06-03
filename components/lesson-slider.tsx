"use client";

import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, PlayCircle, ListVideo } from "lucide-react";
import { LessonSession } from "@/lib/site-config";

interface LessonSliderProps {
  sessions: LessonSession[];
  accent: string;        // hex color
  accent2?: string;      // optional secondary
  className?: string;
}

export function LessonSlider({ sessions, accent, accent2, className = "" }: LessonSliderProps) {
  const [index, setIndex] = useState(0);
  const total = sessions.length;
  const active = sessions[index];

  const prev = useCallback(() => setIndex((i) => (i - 1 + total) % total), [total]);
  const next = useCallback(() => setIndex((i) => (i + 1) % total), [total]);

  // Keyboard arrow keys
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      // Ignore when user is typing in inputs
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [prev, next]);

  if (!active) return null;

  const start = active.startSeconds ? `&start=${active.startSeconds}` : "";
  const embedUrl = `https://www.youtube.com/embed/${active.youtubeId}?rel=0&modestbranding=1&playsinline=1${start}`;

  return (
    <div
      className={`relative rounded-3xl overflow-hidden border max-w-full ${className}`}
      style={{
        borderColor: `${accent}40`,
        background: `linear-gradient(180deg, ${accent}10, transparent)`,
      }}
    >
      {/* Video player */}
      <div className="relative aspect-video bg-black group/player">
        <iframe
          key={active.youtubeId + (active.startSeconds ?? "")}
          className="absolute inset-0 w-full h-full"
          src={embedUrl}
          title={active.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />

        {/* Prev/Next arrows — float over the video edges */}
        {total > 1 && (
          <>
            <button
              onClick={prev}
              aria-label="Buổi trước"
              className="absolute left-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border flex items-center justify-center cursor-pointer transition-all duration-300 opacity-0 group-hover/player:opacity-100 hover:scale-105"
              style={{ borderColor: `${accent}60`, color: accent }}
            >
              <ChevronLeft size={20} strokeWidth={2.5} />
            </button>
            <button
              onClick={next}
              aria-label="Buổi kế tiếp"
              className="absolute right-3 top-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-black/70 backdrop-blur-md border flex items-center justify-center cursor-pointer transition-all duration-300 opacity-0 group-hover/player:opacity-100 hover:scale-105"
              style={{ borderColor: `${accent}60`, color: accent }}
            >
              <ChevronRight size={20} strokeWidth={2.5} />
            </button>
          </>
        )}
      </div>

      {/* Top control bar */}
      <div className="flex items-center justify-between gap-2 sm:gap-4 px-3 sm:px-5 py-3 sm:py-4 bg-black/60 border-t" style={{ borderColor: `${accent}25` }}>
        <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 overflow-hidden">
          <PlayCircle size={18} className="shrink-0" style={{ color: accent }} />
          <div className="min-w-0 overflow-hidden">
            <p className="font-sub text-[9px] sm:text-[10px] uppercase tracking-[0.2em] sm:tracking-[0.25em] text-gray-400 mb-0.5">
              Đang phát
            </p>
            <p className="text-white font-heading text-xs sm:text-sm truncate">{active.title}</p>
          </div>
        </div>

        {/* Counter + arrows */}
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <span
            className="font-heading text-xs sm:text-sm tabular-nums px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border whitespace-nowrap"
            style={{
              borderColor: `${accent}40`,
              background: `${accent}10`,
              color: accent,
            }}
          >
            <span className="font-bold">{String(index + 1).padStart(2, "0")}</span>
            <span className="text-gray-600 mx-1 sm:mx-1.5">/</span>
            <span className="text-gray-400">{String(total).padStart(2, "0")}</span>
          </span>
          {total > 1 && (
            <>
              <button
                onClick={prev}
                aria-label="Buổi trước"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 shrink-0"
                style={{
                  borderColor: `${accent}40`,
                  color: accent,
                  background: `${accent}08`,
                }}
              >
                <ChevronLeft size={14} className="sm:w-4 sm:h-4" />
              </button>
              <button
                onClick={next}
                aria-label="Buổi kế tiếp"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border flex items-center justify-center cursor-pointer transition-all duration-200 hover:scale-105 shrink-0"
                style={{
                  borderColor: `${accent}40`,
                  color: accent,
                  background: `${accent}08`,
                }}
              >
                <ChevronRight size={14} className="sm:w-4 sm:h-4" />
              </button>
            </>
          )}
        </div>
      </div>

      {/* Session list */}
      {total > 1 && (
        <div className="px-3 sm:px-5 py-4 sm:py-5 border-t" style={{ borderColor: `${accent}20`, background: "rgba(0,0,0,0.4)" }}>
          <div className="flex items-center gap-2 mb-4">
            <ListVideo size={14} style={{ color: accent }} />
            <p className="font-sub text-[10px] uppercase tracking-[0.25em]" style={{ color: accent }}>
              Danh sách buổi học
            </p>
            <div className="flex-1 h-px" style={{ background: `${accent}20` }} />
            <p className="font-sub text-[10px] uppercase tracking-[0.2em] text-gray-400">
              {total} buổi
            </p>
          </div>

          <ul className="space-y-1.5">
            {sessions.map((s, i) => {
              const isActive = i === index;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => setIndex(i)}
                    className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-left transition-all duration-200 cursor-pointer group/item ${
                      isActive ? "" : "hover:bg-white/5"
                    }`}
                    style={
                      isActive
                        ? {
                            background: `linear-gradient(90deg, ${accent}25, ${accent}05)`,
                            border: `1px solid ${accent}45`,
                          }
                        : { border: "1px solid transparent" }
                    }
                  >
                    <span
                      className="font-heading text-sm font-bold tabular-nums shrink-0 w-7 text-center"
                      style={{ color: isActive ? (accent2 ?? accent) : `${accent}80` }}
                    >
                      {s.id}
                    </span>
                    <span
                      className={`flex-1 text-sm truncate ${
                        isActive ? "text-white font-medium" : "text-gray-400 group-hover/item:text-white"
                      }`}
                    >
                      {s.title}
                    </span>
                    {isActive && (
                      <span
                        className="text-[9px] uppercase tracking-[0.2em] font-bold px-2 py-0.5 rounded-full shrink-0"
                        style={{ background: `${accent}25`, color: accent }}
                      >
                        Đang xem
                      </span>
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          <p className="font-sub text-[10px] text-gray-600 text-center mt-4">
            Tip: nhấn phím <span className="text-gray-400">←</span> / <span className="text-gray-400">→</span> để chuyển buổi
          </p>
        </div>
      )}
    </div>
  );
}
