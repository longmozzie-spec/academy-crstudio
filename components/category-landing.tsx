"use client";

import Link from "next/link";
import { ArrowRight, Film, Layers, Camera as CameraIcon, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CourseCategory } from "@/lib/site-config";

const softwareIcon = {
  Premiere: Film,
  "After Effect": Layers,
  Camera: CameraIcon,
};

export function CategoryLanding({ category }: { category: CourseCategory }) {
  const isFree = category.variant === "free";
  const accent = isFree ? "#4FAE7E" : "#D4A853";
  const accent2 = isFree ? "#2F7D5B" : "#F0C870";

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div
          className="aurora-blob w-[700px] h-[700px] top-0 -right-32"
          style={{ background: `${accent}22` }}
        />
        <div
          className="aurora-blob w-[500px] h-[500px] bottom-0 -left-32"
          style={{ background: `${accent}10`, animationDelay: "-7s" }}
        />

        <div className="max-w-5xl mx-auto text-center relative">
          <Reveal>
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-10 h-px" style={{ background: accent }} />
              <span
                className="font-sub text-xs uppercase tracking-[0.3em]"
                style={{ color: accent }}
              >
                {category.name}
              </span>
              <div className="w-10 h-px" style={{ background: accent }} />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1
              className="font-heading text-white mb-6"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)", lineHeight: 1.05 }}
            >
              {isFree ? (
                <>
                  Bắt Đầu Hành Trình <br />
                  <span
                    className="italic"
                    style={{
                      background: `linear-gradient(135deg, ${accent}, ${accent2})`,
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    Hoàn Toàn Miễn Phí
                  </span>
                </>
              ) : (
                <>
                  Bứt Phá Đến <br />
                  <span className="text-gold-gradient italic">Đẳng Cấp Chuyên Nghiệp</span>
                </>
              )}
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-4">
              {category.description}
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full" style={{ background: `${accent}15`, border: `1px solid ${accent}40` }}>
              <Sparkles size={14} style={{ color: accent }} />
              <span className="font-sub text-xs uppercase tracking-[0.2em]" style={{ color: accent }}>
                {category.classes.length} lớp chuyên môn
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* CLASSES GRID */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <Reveal>
              <div className="flex items-center gap-3 justify-center mb-5">
                <div className="w-10 h-px" style={{ background: accent }} />
                <span className="font-sub text-xs uppercase tracking-[0.3em]" style={{ color: accent }}>
                  Lựa Chọn Lớp Học
                </span>
                <div className="w-10 h-px" style={{ background: accent }} />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-heading text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.15 }}
              >
                Chọn Lộ Trình <span className="italic" style={{ color: accent }}>Phù Hợp</span>
              </h2>
            </Reveal>
          </div>

          <div
            className={`grid gap-6 ${
              category.classes.length === 2
                ? "md:grid-cols-2"
                : "md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {category.classes.map((cls, i) => {
              const Icon = softwareIcon[cls.software] ?? Film;
              return (
                <Reveal key={cls.slug} delay={i * 120}>
                  <Link
                    href={`/khoa-hoc/${category.slug}/${cls.slug}`}
                    className="group block relative rounded-3xl p-7 md:p-8 h-full transition-all duration-500 hover:-translate-y-1 glass-card overflow-hidden"
                    style={{ borderColor: `${accent}30` }}
                  >
                    {/* Background blob */}
                    <div
                      className="absolute -top-20 -right-20 w-48 h-48 rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"
                      style={{ background: accent }}
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-14 h-14 rounded-2xl flex items-center justify-center"
                          style={{
                            background: `linear-gradient(135deg, ${accent}25, ${accent}08)`,
                            border: `1px solid ${accent}40`,
                          }}
                        >
                          <Icon size={22} style={{ color: accent }} />
                        </div>
                        <div
                          className="text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                          style={{
                            background: `${accent}15`,
                            border: `1px solid ${accent}40`,
                            color: accent,
                          }}
                        >
                          {category.badge}
                        </div>
                      </div>

                      <h3 className="font-heading text-white text-2xl md:text-3xl mb-2 leading-tight group-hover:text-[#F0C870] transition-colors">
                        {cls.name}
                      </h3>
                      <p
                        className="font-sub text-xs uppercase tracking-[0.18em] mb-5"
                        style={{ color: accent }}
                      >
                        {cls.tagline}
                      </p>

                      <p className="text-gray-300 text-sm leading-relaxed mb-6 line-clamp-3">
                        {cls.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-7 pt-5 border-t border-white/8">
                        {cls.duration && (
                          <span className="text-[11px] text-gray-400 px-2.5 py-1 rounded-full bg-white/5">
                            {cls.duration}
                          </span>
                        )}
                        {cls.level && (
                          <span className="text-[11px] text-gray-400 px-2.5 py-1 rounded-full bg-white/5">
                            {cls.level}
                          </span>
                        )}
                        {cls.format && (
                          <span className="text-[11px] text-gray-400 px-2.5 py-1 rounded-full bg-white/5">
                            {cls.format}
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between">
                        <span
                          className="font-sub text-sm uppercase tracking-[0.15em]"
                          style={{ color: accent }}
                        >
                          {isFree ? "Học miễn phí" : "Xem chi tiết"}
                        </span>
                        <ArrowRight
                          size={20}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          style={{ color: accent }}
                        />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
