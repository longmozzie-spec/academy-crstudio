"use client";

import { useEffect, useState } from "react";
import NextImage from "next/image";
import Link from "next/link";
import { ArrowRight, Award, Film, Users, Star, Quote, Sparkles } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { ContactSection } from "@/components/contact-section";
import { InstructorPhoto } from "@/components/instructor-photo";
import { site, stats } from "@/lib/site-config";

// Studio sở hữu — drop logo vào public/brand/cr-studio-logo.png (hoặc .svg / .webp)
const studio = {
  name: "CR Studio",
  url: "https://crstudio.vn",
  domain: "crstudio.vn",
  role: "Founder",
  tagline: "Studio dựng video bất động sản & cinematic chuyên nghiệp",
  logo: "/brand/cr-studio-logo.png",
};

// Kênh chia sẻ kiến thức của giảng viên
const socialChannels = [
  {
    platform: "youtube" as const,
    name: "Crom Creator",
    handle: "@cromcreator6809",
    url: "https://www.youtube.com/@cromcreator6809",
    primary: { value: "8.87K", label: "Đăng ký" },
    secondary: { value: "169", label: "Video" },
  },
  {
    platform: "tiktok" as const,
    name: "Thơ EDITOR",
    handle: "@lopphovlog",
    url: "https://www.tiktok.com/@lopphovlog",
    primary: { value: "126.3K", label: "Followers" },
    secondary: { value: "1M", label: "Likes" },
  },
];

// Logo CR Studio — fallback Sparkles trong khung gold nếu chưa drop file
function StudioLogo({ size = 56 }: { size?: number }) {
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    const img = new Image();
    img.onload = () => setStatus(img.naturalWidth > 0 ? "ok" : "error");
    img.onerror = () => setStatus("error");
    img.src = studio.logo;
  }, []);

  if (status !== "ok") {
    return (
      <div
        className="rounded-xl bg-gradient-to-br from-[#D4A853] to-[#B8902E] flex items-center justify-center shrink-0"
        style={{ width: size, height: size }}
      >
        <Sparkles size={size * 0.45} className="text-black" strokeWidth={2.5} />
      </div>
    );
  }

  return (
    <div className="shrink-0 rounded-xl overflow-hidden bg-white/5 border border-white/10" style={{ width: size, height: size }}>
      <NextImage
        src={studio.logo}
        alt={`${studio.name} logo`}
        width={size}
        height={size}
        className="w-full h-full object-contain"
      />
    </div>
  );
}

// SVG logos
function YouTubeIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
      <path
        fill="#FF0000"
        d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"
      />
    </svg>
  );
}

function TikTokIcon({ size = 20 }: { size?: number }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={size} height={size}>
      <path
        fill="currentColor"
        d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.62a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1.84-.05z"
      />
    </svg>
  );
}

// Bio placeholder data — user sẽ gửi nội dung thật sau
const instructor = {
  name: site.brandName,
  role: "Founder · Lead Instructor",
  tagline: "10+ Năm Kiến Tạo Khoảnh Khắc Bằng Hình Ảnh",
  bio: `Là một người dày dạn trong lĩnh vực hậu kỳ phim ảnh, ${site.brandName} đã đồng hành cùng hàng trăm dự án từ phim ngắn nghệ thuật, MV ca nhạc, brand film thương hiệu cho đến những thước phim giới thiệu bất động sản cao cấp. Anh đồng thời là Founder của ${studio.name} (${studio.domain}) — studio chuyên dựng video bất động sản cao cấp tại Việt Nam.

Triết lý làm nghề của ${site.brandName} đặt cảm xúc lên đầu — tin rằng mỗi cú cắt, mỗi tông màu, mỗi chuyển cảnh đều phải phục vụ cho câu chuyện và rung động của người xem. Suốt một thập kỷ dấn thân, anh không chỉ làm nghề mà còn truyền nghề — đào tạo nên thế hệ những người làm hậu kỳ trẻ với tư duy nhân văn và kỹ thuật chuẩn mực.

Bên cạnh đào tạo trực tiếp, ${site.brandName} còn sở hữu kênh YouTube chuyên chia sẻ kiến thức với gần 9.000 lượt đăng ký, và kênh TikTok với hơn 110.000 người theo dõi — nơi anh thường xuyên cập nhật những kinh nghiệm thực chiến của nghề Editor.`,
  philosophy: "Hình ảnh là ngôn ngữ của cảm xúc. Mỗi khung hình tôi dựng đều mang theo một mảnh tâm hồn — của câu chuyện, của không gian, và của chính tôi.",
};

const achievements = [
  { icon: Film, label: "Dự án đã thực hiện", value: "200+" },
  { icon: Users, label: "Học viên đào tạo", value: "3000+" },
  { icon: Award, label: "Năm kinh nghiệm", value: "10+" },
  { icon: Star, label: "Đánh giá học viên", value: "4.9/5" },
];

const expertise = [
  "Cinematic Color Grading",
  "Motion Graphics & Compositing",
  "Map Animation / Geolayers",
  "Storytelling & Pacing",
  "Brand Film & Commercial",
  "Real Estate Cinematic",
];

export default function GiangVienPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-24 px-4 sm:px-6 overflow-hidden">
        <div className="aurora-blob w-[700px] h-[700px] bg-[#D4A853]/15 -top-40 -right-40" />
        <div className="aurora-blob w-[500px] h-[500px] bg-[#2F7D5B]/8 bottom-0 left-0" style={{ animationDelay: "-7s" }} />

        <div className="max-w-7xl mx-auto relative">
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 lg:gap-20 items-center">
            {/* LEFT — Photo */}
            <Reveal>
              <div className="relative aspect-[3/4] max-w-md mx-auto lg:mx-0">
                {/* Gold corners */}
                <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 border-[#D4A853]" />
                <div className="absolute -bottom-4 -right-4 w-16 h-16 border-b-2 border-r-2 border-[#D4A853]" />

                <div className="relative w-full h-full overflow-hidden border border-[#D4A853]/20">
                  <InstructorPhoto />
                  {/* Soft vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Name plate */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#0a0a0a] border border-[#D4A853]/30 px-7 py-4 whitespace-nowrap shadow-[0_10px_30px_rgba(0,0,0,0.7)]">
                  <p className="font-heading text-white text-xl text-center">
                    {instructor.name}
                  </p>
                  <p className="font-sub text-[#D4A853] text-[10px] uppercase tracking-[0.3em] text-center mt-1">
                    {instructor.role}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* RIGHT — Editorial copy */}
            <div className="lg:pt-8">
              <Reveal>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-px bg-[#D4A853]" />
                  <span className="font-sub text-[#D4A853] text-[11px] uppercase tracking-[0.35em]">
                    Profile Giảng Viên
                  </span>
                </div>
              </Reveal>

              <Reveal delay={100}>
                <h1
                  className="font-heading text-white mb-4"
                  style={{ fontSize: "clamp(2.25rem, 5.5vw, 4.5rem)", lineHeight: 1.05 }}
                >
                  {instructor.name.split(" ").slice(0, -1).join(" ")}
                  <br />
                  <span className="text-gold-gradient italic">
                    {instructor.name.split(" ").slice(-1)[0]}
                  </span>
                </h1>
              </Reveal>

              <Reveal delay={200}>
                <p className="font-sub text-[#D4A853] uppercase text-sm tracking-[0.2em] mb-8">
                  {instructor.tagline}
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="w-16 h-px bg-gradient-to-r from-[#D4A853] to-transparent mb-8" />
              </Reveal>

              <Reveal delay={400}>
                <div className="text-gray-300 text-base md:text-lg leading-[1.9] mb-8 whitespace-pre-line">
                  {instructor.bio}
                </div>
              </Reveal>

              {/* Founder banner — CR Studio */}
              <Reveal delay={430}>
                <div className="mb-4">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-[#D4A853]" />
                    <span className="font-sub text-[10px] uppercase tracking-[0.3em] text-[#D4A853]">
                      Founder
                    </span>
                  </div>

                  <a
                    href={studio.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative block rounded-2xl p-5 md:p-6 overflow-hidden transition-all duration-300 hover:-translate-y-0.5"
                    style={{
                      background: "linear-gradient(135deg, rgba(212,168,83,0.15), rgba(212,168,83,0.04))",
                      border: "1px solid rgba(212,168,83,0.4)",
                      boxShadow: "0 0 24px rgba(212, 168, 83, 0.12)",
                    }}
                  >
                    {/* Decorative blob */}
                    <div className="absolute -top-16 -right-16 w-44 h-44 rounded-full blur-3xl bg-[#D4A853]/15 group-hover:bg-[#D4A853]/25 transition-colors duration-500" />

                    <div className="relative flex items-center gap-4">
                      <StudioLogo size={56} />

                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-[9px] font-bold uppercase tracking-[0.25em] px-2 py-0.5 rounded-full bg-[#D4A853]/20 text-[#D4A853] border border-[#D4A853]/40">
                            {studio.role}
                          </span>
                        </div>
                        <p className="font-heading text-white text-lg md:text-xl leading-tight group-hover:text-[#F0C870] transition-colors">
                          {studio.name}
                        </p>
                        <p className="font-sub text-gray-400 text-xs mt-1 truncate">
                          {studio.tagline}
                        </p>
                      </div>

                      <div className="flex flex-col items-end gap-1 shrink-0">
                        <span className="font-heading text-[#D4A853] text-sm">
                          {studio.domain}
                        </span>
                        <ArrowRight
                          size={16}
                          className="text-[#D4A853] group-hover:translate-x-1 transition-transform -rotate-45"
                        />
                      </div>
                    </div>
                  </a>
                </div>
              </Reveal>

              {/* Channel cards — YouTube + TikTok */}
              <Reveal delay={450}>
                <div className="mb-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-px bg-[#D4A853]" />
                    <span className="font-sub text-[10px] uppercase tracking-[0.3em] text-[#D4A853]">
                      Kênh Chia Sẻ Kiến Thức
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {socialChannels.map((c) => {
                      const isYT = c.platform === "youtube";
                      return (
                        <a
                          key={c.platform}
                          href={c.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group glass-card rounded-2xl p-5 flex items-center gap-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#D4A853]/45"
                        >
                          {/* Logo box */}
                          <div
                            className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border ${
                              isYT
                                ? "bg-[#FF0000]/8 border-[#FF0000]/25 text-[#FF0000]"
                                : "bg-white/5 border-white/15 text-white"
                            }`}
                          >
                            {isYT ? <YouTubeIcon size={26} /> : <TikTokIcon size={24} />}
                          </div>

                          {/* Info */}
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2">
                              <p className="font-heading text-white text-base leading-tight truncate group-hover:text-[#D4A853] transition-colors">
                                {c.name}
                              </p>
                              <ArrowRight
                                size={14}
                                className="text-gray-600 group-hover:text-[#D4A853] group-hover:translate-x-0.5 transition-all shrink-0 -rotate-45"
                              />
                            </div>
                            <p className="font-sub text-gray-400 text-[11px] mb-2 truncate">
                              {c.handle}
                            </p>
                            <div className="flex items-center gap-4">
                              <div>
                                <span className="font-heading text-[#D4A853] font-bold text-sm">
                                  {c.primary.value}
                                </span>
                                <span className="font-sub text-[9px] uppercase tracking-[0.15em] text-gray-400 ml-1">
                                  {c.primary.label}
                                </span>
                              </div>
                              <div className="w-px h-3 bg-white/10" />
                              <div>
                                <span className="font-heading text-gray-300 font-bold text-sm">
                                  {c.secondary.value}
                                </span>
                                <span className="font-sub text-[9px] uppercase tracking-[0.15em] text-gray-400 ml-1">
                                  {c.secondary.label}
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      );
                    })}
                  </div>
                </div>
              </Reveal>

              <Reveal delay={500}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://crstudio.vn"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F0C870] to-[#D4A853] hover:from-[#FAD58A] hover:to-[#E5B860] text-black font-bold px-7 py-4 rounded-full transition-all duration-200 cursor-pointer"
                  >
                    Xem Portfolio
                    <ArrowRight size={16} className="-rotate-45" />
                  </a>
                  <a
                    href="#contact"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="inline-flex items-center gap-2 border border-[#D4A853]/50 hover:border-[#D4A853] text-[#D4A853] font-semibold px-7 py-4 rounded-full transition-all duration-200 cursor-pointer hover:bg-[#D4A853]/5"
                  >
                    Đăng Ký Học Cùng
                  </a>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* PHILOSOPHY QUOTE */}
      <section className="relative py-14 md:py-20 lg:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <Quote size={48} className="text-[#D4A853]/40 mx-auto mb-8" />
          </Reveal>
          <Reveal delay={100}>
            <p
              className="font-heading text-white italic mb-8"
              style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", lineHeight: 1.4 }}
            >
              "{instructor.philosophy}"
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="w-16 h-px bg-[#D4A853] mx-auto mb-4" />
            <p className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
              — {instructor.name}
            </p>
          </Reveal>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* ACHIEVEMENTS */}
      <section className="relative py-14 md:py-20 lg:py-28 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Reveal>
              <div className="flex items-center gap-3 justify-center mb-5">
                <div className="w-10 h-px bg-[#D4A853]" />
                <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
                  Thành Tựu
                </span>
                <div className="w-10 h-px bg-[#D4A853]" />
              </div>
            </Reveal>
            <Reveal delay={100}>
              <h2
                className="font-heading text-white"
                style={{ fontSize: "clamp(1.5rem, 4vw, 3rem)", lineHeight: 1.15 }}
              >
                Một Thập Kỷ <span className="text-gold-gradient italic">Tận Hiến</span>
              </h2>
            </Reveal>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
            {achievements.map((a, i) => (
              <Reveal key={a.label} delay={i * 100}>
                <div className="glass-card rounded-2xl p-5 sm:p-7 text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#D4A853]/10 border border-[#D4A853]/25 flex items-center justify-center mx-auto mb-5">
                    <a.icon size={22} className="text-[#D4A853]" />
                  </div>
                  <div className="font-heading text-4xl text-gold-gradient font-bold mb-2">
                    {a.value}
                  </div>
                  <p className="font-sub text-xs uppercase tracking-[0.2em] text-gray-400">
                    {a.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Expertise */}
          <div className="grid lg:grid-cols-[5fr_7fr] gap-12 items-start">
            <Reveal>
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-px bg-[#D4A853]" />
                  <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
                    Chuyên Môn
                  </span>
                </div>
                <h3
                  className="font-heading text-white mb-4"
                  style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", lineHeight: 1.2 }}
                >
                  Lĩnh Vực <br />
                  <span className="text-gold-gradient italic">Sở Trường</span>
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  Những lĩnh vực mà giảng viên có hơn một thập kỷ kinh nghiệm thực chiến, sẵn sàng truyền lại cho học viên.
                </p>
              </div>
            </Reveal>

            <Reveal delay={150}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {expertise.map((e, i) => (
                  <div
                    key={e}
                    className="glass-card rounded-xl px-5 py-4 flex items-center gap-3 group"
                  >
                    <span className="font-heading text-[#D4A853]/50 font-bold text-sm">
                      0{i + 1}
                    </span>
                    <span className="text-white text-sm group-hover:text-[#D4A853] transition-colors">
                      {e}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <div className="section-divider mx-6" />

      {/* CTA Portfolio */}
      <section className="relative py-14 md:py-20 lg:py-28 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <div className="relative rounded-3xl bg-gradient-to-br from-[#D4A853]/15 via-[#D4A853]/5 to-transparent border-2 border-[#D4A853]/40 p-6 sm:p-10 md:p-16 text-center overflow-hidden gold-glow">
              <div className="aurora-blob w-[400px] h-[400px] bg-[#D4A853]/15 -top-20 -right-20" />

              <div className="relative">
                <Award size={36} className="text-[#D4A853] mx-auto mb-6" />
                <h2
                  className="font-heading text-white mb-4"
                  style={{ fontSize: "clamp(1.5rem, 3.5vw, 2.5rem)", lineHeight: 1.2 }}
                >
                  Xem Toàn Bộ <span className="text-gold-gradient italic">Portfolio</span>
                </h2>
                <p className="text-gray-300 max-w-xl mx-auto mb-8">
                  Khám phá hơn 200 dự án thực tế tại CR Studio — studio chuyên dựng video bất động sản cao cấp do giảng viên sáng lập.
                </p>
                <a
                  href="https://crstudio.vn"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F0C870] to-[#D4A853] hover:from-[#FAD58A] hover:to-[#E5B860] text-black font-bold px-7 py-4 rounded-full transition-all duration-200 cursor-pointer"
                >
                  Vào CR Studio
                  <ArrowRight size={16} className="-rotate-45" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ContactSection />
    </>
  );
}
