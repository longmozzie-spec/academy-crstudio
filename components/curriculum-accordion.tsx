"use client";

import { useState } from "react";
import { ChevronDown, Circle, CheckCheck, Target } from "lucide-react";
import { CourseLesson } from "@/lib/site-config";

interface CurriculumAccordionProps {
  modules: { title: string; lessons: CourseLesson[] }[];
  accent: string;
}

// Detect if a "buổi" is a grading/review session for special styling
function isReview(title: string): boolean {
  return /chấm bài|sửa lỗi|nghiệm thu|đồ án/i.test(title);
}

export function CurriculumAccordion({ modules, accent }: CurriculumAccordionProps) {
  // Track which lesson keys ("moduleIdx.lessonIdx") are open
  const [open, setOpen] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  // Count total buổi across all modules
  let runningCount = 0;

  return (
    <div className="space-y-8">
      {modules.map((m, mi) => {
        // Extract "PHẦN xx" prefix if present
        const partMatch = m.title.match(/^(PHẦN \d+|Module \d+)\s*[—\-]\s*(.+)$/);
        const partLabel = partMatch?.[1] ?? `PHẦN ${String(mi + 1).padStart(2, "0")}`;
        const partTitle = partMatch?.[2] ?? m.title;

        return (
          <div key={mi} className="glass-card rounded-2xl overflow-hidden">
            {/* Module header */}
            <div
              className="px-6 md:px-8 py-5 flex items-center gap-5 border-b"
              style={{
                background: `linear-gradient(90deg, ${accent}10, transparent)`,
                borderColor: `${accent}25`,
              }}
            >
              <span
                className="font-heading font-bold text-3xl md:text-4xl shrink-0 tabular-nums"
                style={{ color: `${accent}70` }}
              >
                {String(mi + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p
                  className="font-sub text-[10px] uppercase tracking-[0.25em] mb-1.5"
                  style={{ color: accent }}
                >
                  {partLabel}
                </p>
                <h4 className="font-heading text-white text-base md:text-lg leading-tight">
                  {partTitle}
                </h4>
              </div>
            </div>

            {/* Lessons */}
            <ul className="divide-y divide-white/5">
              {m.lessons.map((l, li) => {
                const key = `${mi}.${li}`;
                const isOpen = open.has(key);

                // Normalize lesson shape
                const title = typeof l === "string" ? l : l.title;
                const goal = typeof l === "string" ? undefined : l.goal;
                const points = typeof l === "string" ? undefined : l.points;
                const hasPoints = !!points && points.length > 0;
                const hasContent = !!goal || hasPoints;
                const review = isReview(title);

                runningCount++;
                const buoiNumber = runningCount;

                return (
                  <li key={li}>
                    <button
                      type="button"
                      onClick={() => hasContent && toggle(key)}
                      disabled={!hasContent}
                      className={`w-full flex items-start gap-4 px-6 md:px-8 py-4 text-left transition-colors duration-200 ${
                        hasContent ? "hover:bg-white/[0.03] cursor-pointer" : "cursor-default"
                      }`}
                    >
                      {/* Buổi number circle */}
                      <span
                        className="shrink-0 mt-0.5 w-9 h-9 rounded-full flex items-center justify-center font-heading font-bold text-xs tabular-nums"
                        style={
                          review
                            ? { background: `${accent}25`, color: accent, border: `1px solid ${accent}50` }
                            : { background: `${accent}08`, color: `${accent}cc`, border: `1px solid ${accent}25` }
                        }
                      >
                        {String(buoiNumber).padStart(2, "0")}
                      </span>

                      {/* Title + indicators */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-3 flex-wrap">
                          <p className={`text-sm md:text-base leading-snug flex-1 min-w-0 ${review ? "text-white font-medium" : "text-gray-200"}`}>
                            {title}
                          </p>
                          {review && (
                            <span
                              className="font-sub text-[9px] uppercase tracking-[0.2em] font-bold px-2 py-0.5 rounded-full whitespace-nowrap mt-1"
                              style={{ background: `${accent}25`, color: accent }}
                            >
                              <span className="inline-flex items-center gap-1">
                                <CheckCheck size={10} strokeWidth={2.5} />
                                Chấm bài
                              </span>
                            </span>
                          )}
                        </div>

                        {/* Expand hint */}
                        {hasContent && !isOpen && (
                          <p className="text-gray-600 text-[11px] mt-1">
                            {goal && hasPoints
                              ? `Mục tiêu + ${points!.length} nội dung — bấm để xem`
                              : goal
                              ? "Bấm để xem mục tiêu"
                              : `${points!.length} nội dung — bấm để xem chi tiết`}
                          </p>
                        )}
                      </div>

                      {/* Chevron */}
                      {hasContent && (
                        <ChevronDown
                          size={18}
                          className="shrink-0 mt-2 transition-transform duration-300"
                          style={{
                            color: accent,
                            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          }}
                        />
                      )}
                    </button>

                    {/* Expanded content: Goal + Bullet points */}
                    {hasContent && (
                      <div
                        className="overflow-hidden transition-all duration-400 ease-out"
                        style={{
                          maxHeight: isOpen
                            ? `${(goal ? 110 : 0) + (hasPoints ? points!.length * 90 : 0) + 60}px`
                            : "0px",
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div className="px-6 md:px-8 pb-5 pl-[60px] md:pl-[80px] space-y-3.5">
                          {/* Goal — Mục tiêu */}
                          {goal && (
                            <div
                              className="rounded-xl px-4 py-3 flex items-start gap-3"
                              style={{
                                background: `${accent}10`,
                                border: `1px solid ${accent}28`,
                              }}
                            >
                              <Target
                                size={14}
                                className="shrink-0 mt-0.5"
                                style={{ color: accent }}
                              />
                              <div className="min-w-0">
                                <p
                                  className="font-sub text-[9px] uppercase tracking-[0.25em] mb-1"
                                  style={{ color: accent }}
                                >
                                  Mục tiêu
                                </p>
                                <p className="text-gray-200 text-[13px] leading-[1.7]">{goal}</p>
                              </div>
                            </div>
                          )}

                          {/* Points — Nội dung */}
                          {hasPoints && (
                            <div>
                              {goal && (
                                <p
                                  className="font-sub text-[9px] uppercase tracking-[0.25em] mb-2.5 mt-1"
                                  style={{ color: `${accent}aa` }}
                                >
                                  Nội dung
                                </p>
                              )}
                              <ul className="space-y-2.5">
                                {points!.map((p, pi) => (
                                  <li
                                    key={pi}
                                    className="flex items-start gap-3 text-gray-400 text-[13px] leading-[1.7]"
                                  >
                                    <Circle
                                      size={5}
                                      fill="currentColor"
                                      className="shrink-0 mt-2"
                                      style={{ color: accent }}
                                    />
                                    <span>{p}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
