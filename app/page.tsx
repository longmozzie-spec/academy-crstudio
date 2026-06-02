"use client";

import { useState } from "react";
import Link from "next/link";
import { Play, ChevronRight, Sparkles, ArrowRight, Award, Users, Film, Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { VideoModal } from "@/components/ui/video-modal";
import { VideoCard } from "@/components/ui/video-card";
import { ContactSection } from "@/components/contact-section";
import { InstructorPhoto } from "@/components/instructor-photo";
import { HeroBackground } from "@/components/hero-background";
import { HeroSignaturePanel } from "@/components/hero-signature";
import { DigitalLoomCanvas } from "@/components/ui/digital-loom-canvas";
import { site, featuredVideos, courseCategories, stats, Video } from "@/lib/site-config";

// ─── HERO ──────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden grain pt-24">
      {/* Hero background image — appears only if file exists at public/brand/hero-bg.jpg */}
      <HeroBackground />

      {/* Digital Loom — sợi gold dệt subtle phía sau aurora */}
      <DigitalLoomCanvas
        threadColor="rgba(212, 168, 83, 0.28)"
        threadCount={45}
        trailOpacity={0.04}
      />

      {/* Aurora backgrounds (luôn hiện, đè lên ảnh nền + threads) */}
      <div className="aurora-blob w-[700px] h-[700px] bg-[#D4A853]/20 -top-40 -right-40" />
      <div
        className="aurora-blob w-[600px] h-[600px] bg-[#2F7D5B]/10 -bottom-40 -left-40"
        style={{ animationDelay: "-9s" }}
      />

      {/* Decorative vertical line */}
      <div className="absolute left-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-[#D4A853]/40 to-transparent hidden lg:block" />
      <div className="absolute right-8 top-32 bottom-32 w-px bg-gradient-to-b from-transparent via-[#D4A853]/40 to-transparent hidden lg:block" />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.85)_100%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-[7fr_5fr] gap-12 lg:gap-20 items-center">
          {/* LEFT — Editorial copy */}
          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-px bg-[#D4A853]" />
                <span className="font-sub text-[#D4A853] text-[11px] uppercase tracking-[0.35em]">
                  10 Năm Bảo Chứng Chất Lượng
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1
                className="font-heading text-white mb-6"
                style={{
                  fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                  lineHeight: 1.05,
                  letterSpacing: "-0.015em",
                }}
              >
                Kể Chuyện Bằng
                <br />
                <span className="text-gold-gradient italic">Thước Phim</span>
              </h1>
            </Reveal>

            <Reveal delay={240}>
              <p className="text-gray-300 text-base md:text-lg leading-[1.85] max-w-xl mb-10">
                Đồng hành cùng <span className="text-[#D4A853]">{site.brandName}</span> để khai phá ngôn ngữ hình ảnh của riêng bạn. Nơi hậu kỳ không chỉ là cắt dựng kỹ thuật, mà là <span className="italic text-white">nghệ thuật thổi hồn và cảm xúc</span> vào từng khung hình.
              </p>
            </Reveal>

            <Reveal delay={360}>
              <div className="flex flex-wrap gap-4 mb-14">
                <Link
                  href="/khoa-hoc"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F0C870] to-[#D4A853] hover:from-[#FAD58A] hover:to-[#E5B860] text-black font-bold px-7 py-4 rounded-full transition-all duration-200 cursor-pointer"
                >
                  Khám Phá Khóa Học
                  <ChevronRight size={16} />
                </Link>
                <Link
                  href="/du-an"
                  className="inline-flex items-center gap-2 border border-[#D4A853]/50 hover:border-[#D4A853] text-[#D4A853] font-semibold px-7 py-4 rounded-full transition-all duration-200 cursor-pointer hover:bg-[#D4A853]/5"
                >
                  <Play size={14} />
                  Xem Dự Án
                </Link>
              </div>
            </Reveal>

            <Reveal delay={480}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 pt-8 border-t border-[#D4A853]/15 max-w-xl">
                {stats.map((s) => (
                  <div key={s.label}>
                    <div className="flex items-baseline gap-1">
                      <span className="font-heading text-3xl md:text-4xl text-gold-gradient font-bold">{s.num}</span>
                      <span className="font-heading text-lg text-[#D4A853]">{s.suffix}</span>
                    </div>
                    <p className="text-gray-500 text-[10px] md:text-xs mt-1.5 uppercase tracking-[0.18em] font-sub">{s.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* RIGHT — Decorative editorial panel (ảnh signature) */}
          <Reveal delay={400}>
            <HeroSignaturePanel />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

// ─── ABOUT INSTRUCTOR (mini) ──────────────────────────────────────────────────
function AboutMini() {
  return (
    <section className="relative py-28 md:py-36 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
          <Reveal>
            <div className="relative aspect-[3/4] max-w-sm">
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#D4A853]/60" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#D4A853]/60" />
              <div className="relative w-full h-full overflow-hidden">
                <InstructorPhoto showInitials={false} />
              </div>
              {/* Name plate */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0a0a0a] border border-[#D4A853]/30 px-6 py-3 whitespace-nowrap">
                <p className="font-heading text-white text-base font-bold tracking-wide text-center">
                  {site.brandName}
                </p>
                <p className="font-sub text-[#D4A853] text-[10px] uppercase tracking-[0.25em] text-center mt-0.5">
                  Founder · Lead Instructor
                </p>
              </div>
            </div>
          </Reveal>

          <div>
            <Reveal>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-px bg-[#D4A853]" />
                <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
                  Về Giảng Viên
                </span>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-heading text-white mb-6"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.2 }}
              >
                Người Kiến Tạo <br />
                <span className="text-gold-gradient italic">Khoảnh Khắc</span>
              </h2>
            </Reveal>
            <Reveal delay={200}>
              <p className="text-gray-300 text-base md:text-lg leading-[1.9] mb-8 max-w-2xl">
                {site.brandName} là người dày dạn trong lĩnh vực hậu kỳ cinematic, đã tham gia hàng trăm dự án từ phim ngắn, MV, brand film đến phim giới thiệu bất động sản cao cấp. Với triết lý <span className="italic text-white">"hình ảnh là ngôn ngữ của cảm xúc"</span>, giảng viên đào tạo học viên không chỉ về <span className="text-[#D4A853]">kỹ thuật</span>, mà còn về <span className="text-[#D4A853]">tư duy đạo diễn</span> và <span className="text-[#D4A853]">cảm nhận thẩm mỹ</span>.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <Link
                href="/giang-vien"
                className="inline-flex items-center gap-2 font-sub text-sm text-[#D4A853] hover:text-[#F0C870] transition-colors link-underline"
              >
                Xem profile chi tiết
                <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FEATURED VIDEOS ─────────────────────────────────────────────────────────
function FeaturedVideos() {
  const [active, setActive] = useState<Video | null>(null);

  return (
    <section className="relative py-28 md:py-36 px-6">
      <div className="aurora-blob w-[500px] h-[500px] bg-[#D4A853]/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto relative">
        <div className="flex items-end justify-between mb-12 flex-wrap gap-6">
          <Reveal>
            <div className="flex items-center gap-3">
              <div className="w-10 h-px bg-[#D4A853]" />
              <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
                Dự Án Nổi Bật
              </span>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <Link
              href="/du-an"
              className="inline-flex items-center gap-2 font-sub text-sm text-[#D4A853] hover:text-[#F0C870] transition-colors group"
            >
              Xem toàn bộ dự án
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {featuredVideos.map((v, i) => (
            <Reveal key={v.id} delay={i * 100}>
              <VideoCard item={v} onOpen={() => setActive(v)} />
            </Reveal>
          ))}
        </div>
      </div>

      <VideoModal
        key={active?.id}
        youtubeId={active?.youtubeId}
        facebookUrl={active?.facebookUrl}
        isShort={active?.isShort ?? false}
        isOpen={active !== null}
        onClose={() => setActive(null)}
      />
    </section>
  );
}

// ─── COURSES TEASER ───────────────────────────────────────────────────────────
function CoursesTeaser() {
  return (
    <section className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <div className="flex items-center gap-3 justify-center mb-5">
              <div className="w-10 h-px bg-[#D4A853]" />
              <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
                Lộ Trình
              </span>
              <div className="w-10 h-px bg-[#D4A853]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="font-heading text-white mb-4"
              style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15 }}
            >
              Hai Hành Trình, <span className="text-gold-gradient italic">Một Đỉnh Cao</span>
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Bắt đầu từ con số 0, hoặc bứt phá lên đẳng cấp chuyên nghiệp — bạn sẽ luôn tìm thấy lộ trình phù hợp.
            </p>
          </Reveal>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {courseCategories.map((c, i) => {
            const isFree = c.variant === "free";
            const accent = isFree ? "#4FAE7E" : "#D4A853";
            return (
              <Reveal key={c.id} delay={i * 150}>
                <Link
                  href={`/khoa-hoc/${c.slug}`}
                  className={`group block relative rounded-3xl p-8 md:p-10 h-full transition-all duration-500 hover:-translate-y-1 overflow-hidden ${
                    isFree
                      ? "glass-card hover:emerald-glow"
                      : "bg-gradient-to-br from-[#D4A853]/15 via-[#D4A853]/5 to-transparent border-2 border-[#D4A853]/40 gold-glow hover:gold-glow-strong"
                  }`}
                >
                  <div
                    className="absolute -top-20 -right-20 w-56 h-56 rounded-full blur-3xl opacity-25 group-hover:opacity-50 transition-opacity duration-500"
                    style={{ background: accent }}
                  />

                  <div className="relative">
                    <div className="flex items-start justify-between mb-6">
                      <div
                        className="text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                        style={{
                          background: `${accent}18`,
                          border: `1px solid ${accent}45`,
                          color: accent,
                        }}
                      >
                        {c.badge}
                      </div>
                      <ArrowRight
                        size={20}
                        className="transition-all duration-300 group-hover:translate-x-1"
                        style={{ color: accent }}
                      />
                    </div>

                    <h3 className="font-heading text-white text-2xl md:text-3xl mb-2 leading-tight">
                      {c.name}
                    </h3>
                    <p
                      className="font-sub text-xs uppercase tracking-[0.2em] mb-6"
                      style={{ color: accent }}
                    >
                      {c.subtitle}
                    </p>

                    <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">
                      {c.description}
                    </p>

                    <div className="pt-5 border-t border-white/8">
                      <p className="font-sub text-[10px] uppercase tracking-[0.22em] text-gray-500 mb-3">
                        {c.classes.length} lớp chuyên môn
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {c.classes.map((cls) => (
                          <span
                            key={cls.slug}
                            className="text-xs px-3 py-1.5 rounded-full"
                            style={{
                              background: `${accent}12`,
                              color: accent,
                              border: `1px solid ${accent}25`,
                            }}
                          >
                            {cls.shortName}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── WHY US ──────────────────────────────────────────────────────────────────
const features = [
  { icon: Award, title: "Mentor 1-1", desc: "Học trực tiếp từ giảng viên có hơn 10 năm kinh nghiệm thực chiến trong ngành." },
  { icon: Users, title: "Cộng Đồng", desc: "Tham gia cộng đồng học viên năng động, hỗ trợ lẫn nhau trong nghề." },
  { icon: Film, title: "Footage Thực Tế", desc: "Học với footage từ những dự án thật, không phải tài liệu mẫu khô khan." },
  { icon: Star, title: "Bảo Hành Trọn Đời", desc: "Học một lần, kiến thức cập nhật cả đời. Hỗ trợ sau khóa học không giới hạn." },
];

function WhyUs() {
  return (
    <section className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Reveal>
            <div className="flex items-center gap-3 justify-center mb-5">
              <div className="w-10 h-px bg-[#D4A853]" />
              <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
                Tại Sao Chọn Chúng Tôi
              </span>
              <div className="w-10 h-px bg-[#D4A853]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h2
              className="font-heading text-white"
              style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", lineHeight: 1.15 }}
            >
              Chất Lượng <span className="text-gold-gradient italic">Bảo Chứng</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 100}>
              <div className="glass-card rounded-2xl p-7 h-full">
                <div className="w-14 h-14 rounded-2xl bg-[#D4A853]/10 border border-[#D4A853]/25 flex items-center justify-center mb-5">
                  <f.icon size={22} className="text-[#D4A853]" />
                </div>
                <h3 className="font-heading text-white text-xl mb-3">{f.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── PAGE ──────────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <>
      <Hero />
      <div className="section-divider mx-6" role="separator" />
      <AboutMini />
      <div className="section-divider mx-6" role="separator" />
      <FeaturedVideos />
      <div className="section-divider mx-6" role="separator" />
      <CoursesTeaser />
      <div className="section-divider mx-6" role="separator" />
      <WhyUs />
      <div className="section-divider mx-6" role="separator" />
      <ContactSection />
    </>
  );
}
