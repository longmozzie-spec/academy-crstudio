"use client";

import { useParams, notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Clock, GraduationCap,
  Layers, Award, Film, PlayCircle, Camera as CameraIcon,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ContactSection } from "@/components/contact-section";
import { LessonSlider } from "@/components/lesson-slider";
import { CurriculumAccordion } from "@/components/curriculum-accordion";
import { AutoPlayYouTube } from "@/components/ui/auto-play-youtube";
import { findClass } from "@/lib/site-config";

const softwareIcon = {
  Premiere: Film,
  "After Effect": Layers,
  Camera: CameraIcon,
};

export default function ClassDetailPage() {
  const params = useParams();
  const categorySlug = typeof params.category === "string" ? params.category : "";
  const classSlug = typeof params.class === "string" ? params.class : "";
  const found = findClass(categorySlug, classSlug);

  if (!found) {
    notFound();
  }

  const { category, cls } = found!;
  const isFree = category.variant === "free";
  const accent = isFree ? "#4FAE7E" : "#D4A853";
  const accent2 = isFree ? "#2F7D5B" : "#F0C870";
  const Icon = softwareIcon[cls.software] ?? Film;

  // Sibling classes (other classes in the same category) for "Next class" recommendation
  const otherClasses = category.classes.filter((c) => c.slug !== cls.slug);

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="aurora-blob w-[600px] h-[600px] top-0 -right-32" style={{ background: `${accent}20` }} />
        <div className="aurora-blob w-[400px] h-[400px] bottom-0 -left-32" style={{ background: `${accent}10`, animationDelay: "-7s" }} />

        <div className="max-w-7xl mx-auto relative">
          {/* Breadcrumb */}
          <Reveal>
            <div className="flex items-center gap-2 mb-8 font-sub text-xs uppercase tracking-[0.2em]">
              <Link href="/khoa-hoc" className="text-gray-400 hover:text-[#D4A853]">
                Khóa Học
              </Link>
              <span className="text-gray-700">/</span>
              <Link
                href={`/khoa-hoc/${category.slug}`}
                className="text-gray-400 hover:text-[#D4A853]"
              >
                {category.name}
              </Link>
              <span className="text-gray-700">/</span>
              <span style={{ color: accent }}>{cls.shortName}</span>
            </div>
          </Reveal>

          <div className="grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-16 items-start min-w-0">
            {/* LEFT — Intro */}
            <div>
              <Reveal delay={100}>
                <div className="inline-flex items-center gap-3 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{
                      background: `linear-gradient(135deg, ${accent}25, ${accent}08)`,
                      border: `1px solid ${accent}40`,
                    }}
                  >
                    <Icon size={24} style={{ color: accent }} />
                  </div>
                  <div
                    className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                    style={{
                      background: `${accent}15`,
                      border: `1px solid ${accent}40`,
                      color: accent,
                    }}
                  >
                    {category.badge}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={200}>
                <h1
                  className="font-heading text-white mb-4"
                  style={{ fontSize: "clamp(1.75rem, 5vw, 4rem)", lineHeight: 1.05 }}
                >
                  {cls.name}
                </h1>
              </Reveal>

              <Reveal delay={300}>
                <p className="font-sub uppercase tracking-[0.2em] text-sm mb-8" style={{ color: accent }}>
                  {cls.tagline}
                </p>
              </Reveal>

              <Reveal delay={400}>
                <p className="text-gray-300 text-base md:text-lg leading-[1.85] mb-8">
                  {cls.description}
                </p>
              </Reveal>

              {/* Meta */}
              <Reveal delay={500}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 py-6 border-y border-white/8">
                  <div className="flex sm:block items-center gap-3">
                    <Clock size={16} className="sm:mb-2 shrink-0" style={{ color: accent }} />
                    <div>
                      <p className="font-sub text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-0.5 sm:mb-1">Thời lượng</p>
                      <p className="text-white text-sm font-medium leading-tight">{cls.duration ?? "Đang cập nhật"}</p>
                    </div>
                  </div>
                  <div className="flex sm:block items-center gap-3">
                    <GraduationCap size={16} className="sm:mb-2 shrink-0" style={{ color: accent }} />
                    <div>
                      <p className="font-sub text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-0.5 sm:mb-1">Cấp độ</p>
                      <p className="text-white text-sm font-medium leading-tight">{cls.level ?? "Đang cập nhật"}</p>
                    </div>
                  </div>
                  <div className="flex sm:block items-center gap-3">
                    <Layers size={16} className="sm:mb-2 shrink-0" style={{ color: accent }} />
                    <div>
                      <p className="font-sub text-[10px] uppercase tracking-[0.18em] text-gray-400 mb-0.5 sm:mb-1">Hình thức</p>
                      <p className="text-white text-sm font-medium leading-tight">{cls.format ?? "Đang cập nhật"}</p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Advanced only: price + CTA buttons */}
              {!isFree && (
                <>
                  <Reveal delay={600}>
                    <div className="flex items-baseline gap-3 mt-8 mb-6">
                      <span
                        className="font-heading text-4xl sm:text-5xl font-bold"
                        style={{
                          background: `linear-gradient(135deg, ${accent}, ${accent2})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          backgroundClip: "text",
                        }}
                      >
                        {cls.price ?? "[Học phí]"}
                      </span>
                      <span className="text-gray-400">{cls.priceUnit ?? ""}</span>
                    </div>
                  </Reveal>
                  <Reveal delay={650}>
                    <div className="flex flex-wrap gap-3">
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-2 font-bold px-7 py-4 rounded-full transition-all duration-200 cursor-pointer"
                        style={{
                          background: `linear-gradient(135deg, ${accent2}, ${accent})`,
                          color: "black",
                        }}
                      >
                        Đăng Ký Lớp Học
                        <ArrowRight size={16} />
                      </a>
                      <a
                        href="#contact"
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex items-center gap-2 border font-semibold px-7 py-4 rounded-full transition-all duration-200 cursor-pointer"
                        style={{ borderColor: `${accent}50`, color: accent }}
                      >
                        Tư Vấn Miễn Phí
                      </a>
                    </div>
                  </Reveal>
                </>
              )}
            </div>

            {/* RIGHT — Side panel */}
            <div>
              {isFree ? (
                /* FREE — Multi-session video slider */
                <Reveal delay={400}>
                  {cls.sessions && cls.sessions.length > 0 ? (
                    <LessonSlider sessions={cls.sessions} accent={accent} accent2={accent2} />
                  ) : (
                    <div
                      className="relative rounded-3xl overflow-hidden border"
                      style={{ borderColor: `${accent}40`, background: `linear-gradient(180deg, ${accent}10, transparent)` }}
                    >
                      <div className="aspect-video bg-black flex items-center justify-center">
                        <div className="text-center p-8">
                          <PlayCircle size={56} style={{ color: accent }} className="mx-auto mb-4 opacity-60" />
                          <p className="font-sub text-xs uppercase tracking-[0.25em] mb-2" style={{ color: accent }}>
                            Chưa Có Buổi Học
                          </p>
                          <p className="text-gray-400 text-sm">
                            Bạn sẽ thêm danh sách buổi vào{" "}
                            <code className="text-[#D4A853] text-xs bg-black/50 px-2 py-0.5 rounded">
                              site-config.ts
                            </code>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </Reveal>
              ) : (
                /* ADVANCED — Features panel (Quyền lợi học viên) */
                <Reveal delay={400}>
                  <div
                    className="rounded-3xl p-8"
                    style={{
                      background: `linear-gradient(180deg, ${accent}12, ${accent}03)`,
                      border: `1px solid ${accent}30`,
                    }}
                  >
                    <h3 className="font-heading text-white text-xl mb-6 flex items-center gap-2">
                      <Sparkles size={18} style={{ color: accent }} />
                      Quyền lợi học viên
                    </h3>
                    <ul className="space-y-3">
                      {(cls.features ?? []).map((f, i) => (
                        <li key={i} className="flex items-start gap-3 text-gray-200 text-sm leading-relaxed">
                          <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: accent }} />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* INTRO VIDEO — chỉ render nếu lớp có khai báo introVideoYoutubeId (kể cả rỗng) */}
      {cls.introVideoYoutubeId !== undefined && (
        <section className="py-12 md:py-18 lg:py-24 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-10">
              <Reveal>
                <div className="flex items-center gap-3 justify-center mb-5">
                  <div className="w-10 h-px" style={{ background: accent }} />
                  <span
                    className="font-sub text-xs uppercase tracking-[0.3em]"
                    style={{ color: accent }}
                  >
                    Video Giới Thiệu
                  </span>
                  <div className="w-10 h-px" style={{ background: accent }} />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="font-heading text-white"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}
                >
                  Trailer <span className="italic" style={{ color: accent }}>Khóa Học</span>
                </h2>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <div
                className="relative rounded-3xl overflow-hidden border aspect-video"
                style={{
                  borderColor: `${accent}35`,
                  background: `linear-gradient(180deg, ${accent}08, transparent)`,
                  boxShadow: `0 0 30px ${accent}15`,
                }}
              >
                {cls.introVideoYoutubeId ? (
                  <AutoPlayYouTube
                    youtubeId={cls.introVideoYoutubeId}
                    title={`Video giới thiệu ${cls.name}`}
                    className="absolute inset-0"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#1a1a1a] to-[#050505]">
                    <div className="text-center px-8">
                      <PlayCircle size={56} style={{ color: accent }} className="mx-auto mb-4 opacity-60" />
                      <p
                        className="font-sub text-xs uppercase tracking-[0.25em] mb-2"
                        style={{ color: accent }}
                      >
                        Video Trailer
                      </p>
                      <p className="text-gray-400 text-sm max-w-md mx-auto">
                        Video giới thiệu khóa &ldquo;<span className="text-white">{cls.name}</span>&rdquo; sẽ sớm được cập nhật.
                      </p>
                      <p className="text-gray-600 text-[11px] mt-3">
                        Dev: thêm YouTube ID vào{" "}
                        <code className="text-[#D4A853] bg-black/40 px-1.5 py-0.5 rounded">
                          introVideoYoutubeId
                        </code>{" "}
                        trong site-config.ts
                      </p>
                    </div>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {cls.introVideoYoutubeId !== undefined && <div className="section-divider mx-6" />}

      {/* OUTCOMES */}
      {cls.outcomes && cls.outcomes.length > 0 && (
        <section className="py-12 md:py-18 lg:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-px" style={{ background: accent }} />
                  <span className="font-sub text-xs uppercase tracking-[0.3em]" style={{ color: accent }}>
                    Bạn sẽ đạt được
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="font-heading text-white"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
                >
                  Sau Khóa Học, <span className="italic" style={{ color: accent }}>Bạn Có Thể</span>
                </h2>
              </Reveal>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4">
              {cls.outcomes.map((o, i) => (
                <Reveal key={i} delay={i * 80}>
                  <div className="glass-card rounded-2xl p-6 flex gap-4 h-full">
                    <span
                      className="font-heading font-bold text-3xl shrink-0"
                      style={{ color: accent }}
                    >
                      0{i + 1}
                    </span>
                    <p className="text-gray-200 leading-relaxed pt-1">{o}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      <div className="section-divider mx-6" />

      {/* CURRICULUM */}
      {cls.modules && cls.modules.length > 0 && (
        <section className="py-12 md:py-18 lg:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-px" style={{ background: accent }} />
                  <span className="font-sub text-xs uppercase tracking-[0.3em]" style={{ color: accent }}>
                    Lộ trình học
                  </span>
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="font-heading text-white"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
                >
                  Chương Trình <span className="italic" style={{ color: accent }}>Chi Tiết</span>
                </h2>
              </Reveal>
            </div>

            <Reveal>
              <CurriculumAccordion modules={cls.modules} accent={accent} />
            </Reveal>
          </div>
        </section>
      )}

      <div className="section-divider mx-6" />

      {/* STUDENT WORKS — sản phẩm của học viên trong lớp */}
      {cls.studentWorks !== undefined && (
        <section className="py-12 md:py-18 lg:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <Reveal>
                <div className="flex items-center gap-3 justify-center mb-5">
                  <div className="w-10 h-px" style={{ background: accent }} />
                  <span className="font-sub text-xs uppercase tracking-[0.3em]" style={{ color: accent }}>
                    Sản Phẩm Học Viên
                  </span>
                  <div className="w-10 h-px" style={{ background: accent }} />
                </div>
              </Reveal>
              <Reveal delay={100}>
                <h2
                  className="font-heading text-white"
                  style={{ fontSize: "clamp(1.5rem, 4vw, 2.75rem)", lineHeight: 1.15 }}
                >
                  Tinh Hoa <span className="italic" style={{ color: accent }}>Từ Học Trò</span>
                </h2>
              </Reveal>
              <Reveal delay={200}>
                <p className="text-gray-400 max-w-2xl mx-auto mt-4 text-sm md:text-base">
                  Những bài tốt nghiệp xuất sắc của học viên — minh chứng cho lộ trình thực chiến của khóa.
                </p>
              </Reveal>
            </div>

            {cls.studentWorks.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cls.studentWorks.map((w, i) => {
                  const youtubeThumb = w.youtubeId ? `https://i.ytimg.com/vi/${w.youtubeId}/hqdefault.jpg` : undefined;
                  const thumb = w.thumb ?? youtubeThumb;
                  const link = w.youtubeId
                    ? `https://www.youtube.com/watch?v=${w.youtubeId}`
                    : w.facebookUrl ?? "#";

                  return (
                    <Reveal key={w.id} delay={(i % 3) * 80}>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group glass-card rounded-2xl overflow-hidden block transition-transform duration-500 hover:-translate-y-1"
                      >
                        <div className="aspect-video relative overflow-hidden bg-gradient-to-br from-[#1a1a1a] to-[#050505]">
                          {thumb ? (
                            <Image
                              src={thumb}
                              alt={w.title}
                              fill
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <PlayCircle size={36} style={{ color: accent }} className="opacity-50" />
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-black/30 pointer-events-none" />
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <p className="font-heading text-white text-base leading-tight">{w.title}</p>
                            {w.studentName && (
                              <p className="font-sub text-[10px] uppercase tracking-[0.2em] mt-1" style={{ color: accent }}>
                                {w.studentName}
                              </p>
                            )}
                          </div>
                        </div>
                      </a>
                    </Reveal>
                  );
                })}
              </div>
            ) : (
              // Placeholder grid khi chưa có sản phẩm — 6 khung mờ
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <Reveal key={i} delay={(i % 3) * 60}>
                    <div
                      className="aspect-video rounded-2xl border border-dashed flex items-center justify-center"
                      style={{
                        borderColor: `${accent}25`,
                        background: `linear-gradient(180deg, ${accent}04, transparent)`,
                      }}
                    >
                      <div className="text-center px-4">
                        <PlayCircle size={28} style={{ color: `${accent}55` }} className="mx-auto mb-2" />
                        <p className="font-sub text-[10px] uppercase tracking-[0.22em]" style={{ color: `${accent}90` }}>
                          Sản phẩm #{String(i).padStart(2, "0")}
                        </p>
                        <p className="text-gray-600 text-[11px] mt-1">Sẽ cập nhật</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            )}

            {cls.studentWorks.length === 0 && (
              <div className="mt-8 text-center">
                <p className="text-gray-600 text-[11px] font-sub uppercase tracking-[0.22em]">
                  Dev: thêm vào{" "}
                  <code className="text-[#D4A853] bg-black/40 px-1.5 py-0.5 rounded normal-case tracking-normal">
                    studentWorks: [...]
                  </code>{" "}
                  trong site-config.ts
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      {cls.studentWorks !== undefined && <div className="section-divider mx-6" />}

      {/* OTHER CLASSES */}
      {otherClasses.length > 0 && (
        <section className="py-12 md:py-18 lg:py-24 px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12">
              <Reveal>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-px" style={{ background: accent }} />
                  <span className="font-sub text-xs uppercase tracking-[0.3em]" style={{ color: accent }}>
                    Lớp khác trong {category.name}
                  </span>
                </div>
              </Reveal>
            </div>

            <div className={`grid gap-5 ${otherClasses.length === 1 ? "md:grid-cols-1 max-w-xl" : "md:grid-cols-2"}`}>
              {otherClasses.map((c) => {
                const SubIcon = softwareIcon[c.software] ?? Film;
                return (
                  <Link
                    key={c.slug}
                    href={`/khoa-hoc/${category.slug}/${c.slug}`}
                    className="glass-card rounded-2xl p-6 flex items-center gap-5 group hover:-translate-y-0.5 transition-all duration-300"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: `${accent}15`, border: `1px solid ${accent}30` }}
                    >
                      <SubIcon size={20} style={{ color: accent }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-white text-base group-hover:text-[#D4A853] transition-colors">
                        {c.name}
                      </p>
                      <p className="text-gray-400 text-xs mt-1 truncate">{c.tagline}</p>
                    </div>
                    <ArrowRight size={18} className="text-gray-400 group-hover:translate-x-1 transition-transform shrink-0" style={{ color: accent }} />
                  </Link>
                );
              })}
            </div>

            {/* Back to category */}
            <div className="mt-10 text-center">
              <Link
                href={`/khoa-hoc/${category.slug}`}
                className="inline-flex items-center gap-2 font-sub text-sm uppercase tracking-[0.18em] hover:opacity-80 transition-opacity"
                style={{ color: accent }}
              >
                <ArrowLeft size={14} />
                Quay lại {category.name}
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* CONTACT — only show for advanced classes (free classes don't need consult per user request) */}
      {!isFree && <ContactSection />}
    </>
  );
}
