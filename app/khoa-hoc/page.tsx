"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ContactSection } from "@/components/contact-section";
import { courseCategories } from "@/lib/site-config";

export default function KhoaHocOverview() {
  return (
    <>
      <section className="relative pt-40 pb-20 px-4 sm:px-6 overflow-hidden">
        <div className="aurora-blob w-[600px] h-[600px] bg-[#D4A853]/15 top-0 right-0" />
        <div
          className="aurora-blob w-[500px] h-[500px] bg-[#4FAE7E]/10 bottom-0 left-0"
          style={{ animationDelay: "-7s" }}
        />

        <div className="max-w-5xl mx-auto text-center relative">
          <Reveal>
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-10 h-px bg-[#D4A853]" />
              <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
                Khóa Học
              </span>
              <div className="w-10 h-px bg-[#D4A853]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="font-heading text-white mb-6"
              style={{ fontSize: "clamp(1.85rem, 6vw, 5rem)", lineHeight: 1.05 }}
            >
              Hai Lộ Trình <br />
              <span className="text-gold-gradient italic">Cùng Một Đam Mê</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Dù bạn vừa bắt đầu hay đã có nền tảng — luôn có một lộ trình được thiết kế riêng để bạn bứt phá đến đẳng cấp tiếp theo.
            </p>
          </Reveal>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* TWO CATEGORY CARDS */}
      <section className="py-14 md:py-20 lg:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {courseCategories.map((cat, i) => {
              const isFree = cat.variant === "free";
              const accent = isFree ? "#4FAE7E" : "#D4A853";
              const accent2 = isFree ? "#2F7D5B" : "#F0C870";

              return (
                <Reveal key={cat.id} delay={i * 150}>
                  <Link
                    href={`/khoa-hoc/${cat.slug}`}
                    className="group block relative rounded-3xl p-5 sm:p-8 md:p-12 h-full overflow-hidden transition-all duration-500 hover:-translate-y-1"
                    style={{
                      background: `linear-gradient(180deg, ${accent}15, ${accent}03)`,
                      border: `2px solid ${accent}40`,
                      boxShadow: `0 0 30px ${accent}15`,
                    }}
                  >
                    {/* Blob */}
                    <div
                      className="absolute -top-32 -right-32 w-72 h-72 rounded-full blur-3xl opacity-30 group-hover:opacity-60 transition-opacity duration-500"
                      style={{ background: accent }}
                    />

                    <div className="relative">
                      <div className="flex items-start justify-between mb-8">
                        <div
                          className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                          style={{
                            background: `${accent}20`,
                            border: `1px solid ${accent}50`,
                            color: accent,
                          }}
                        >
                          {cat.badge}
                        </div>
                        <ArrowRight
                          size={24}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                          style={{ color: accent }}
                        />
                      </div>

                      <h2
                        className="font-heading text-white mb-3 leading-tight"
                        style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)" }}
                      >
                        {cat.name}
                      </h2>
                      <p
                        className="font-sub text-sm uppercase tracking-[0.18em] mb-6"
                        style={{ color: accent }}
                      >
                        {cat.subtitle}
                      </p>

                      <p className="text-gray-300 leading-relaxed mb-8">
                        {cat.description}
                      </p>

                      <div className="pt-6 border-t" style={{ borderColor: `${accent}25` }}>
                        <p className="font-sub text-[11px] uppercase tracking-[0.2em] text-gray-400 mb-4">
                          {cat.classes.length} lớp chuyên môn
                        </p>
                        <div className="space-y-2.5">
                          {cat.classes.map((cls) => (
                            <div
                              key={cls.slug}
                              className="flex items-center gap-3 text-sm text-gray-300 group/cls"
                            >
                              <span
                                className="w-1.5 h-1.5 rounded-full shrink-0"
                                style={{ background: accent }}
                              />
                              <span className="group-hover/cls:text-white transition-colors">{cls.name}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="mt-8">
                        <span
                          className="font-sub text-sm uppercase tracking-[0.18em]"
                          style={{ color: accent }}
                        >
                          {isFree ? "Học miễn phí ngay" : "Khám phá lộ trình PRO"} →
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />
      <ContactSection />
    </>
  );
}
