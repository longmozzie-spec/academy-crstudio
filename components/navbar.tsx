"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, Menu, X, ChevronDown, ChevronRight, Film, Layers, Camera } from "lucide-react";
import { site, courseCategories } from "@/lib/site-config";
import { BrandLogo } from "@/components/brand-logo";

const softwareIcon = {
  Premiere: Film,
  "After Effect": Layers,
  Camera: Camera,
};

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [coursesOpen, setCoursesOpen] = useState(false);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [mobileCategoryOpen, setMobileCategoryOpen] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setCoursesOpen(false);
    setExpandedCategory(null);
  }, [pathname]);

  const handleConsult = (e: React.MouseEvent) => {
    const contact = document.getElementById("contact");
    if (contact) {
      e.preventDefault();
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <header
      role="banner"
      className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-500 ${
        scrolled
          ? "bg-black/85 backdrop-blur-xl border border-[#D4A853]/25 shadow-[0_8px_32px_rgba(0,0,0,0.7)]"
          : "bg-black/40 backdrop-blur-md border border-white/5"
      }`}
    >
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-5 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3 group" aria-label="Trang chủ">
          <BrandLogo size={40} className="group-hover:scale-105 transition-transform" />
          <div className="leading-none">
            <div className="font-heading text-white text-base tracking-wide">
              {site.brandName}
            </div>
            <div className="font-sub text-[9px] uppercase tracking-[0.25em] text-[#D4A853]/80 mt-1">
              {site.brandDomain}
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-7">
          <Link
            href="/"
            className={`font-sub text-sm transition-colors duration-200 ${
              isActive("/") && pathname === "/" ? "text-[#D4A853]" : "text-gray-300 hover:text-[#D4A853]"
            }`}
          >
            Trang Chủ
          </Link>

          {/* Khóa Học with nested dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setCoursesOpen(true)}
            onMouseLeave={() => {
              setCoursesOpen(false);
              setExpandedCategory(null);
            }}
          >
            <Link
              href="/khoa-hoc"
              className={`flex items-center gap-1 font-sub text-sm transition-colors duration-200 cursor-pointer ${
                isActive("/khoa-hoc") ? "text-[#D4A853]" : "text-gray-300 hover:text-[#D4A853]"
              }`}
            >
              Khóa Học
              <ChevronDown
                size={14}
                className={`transition-transform duration-300 ${coursesOpen ? "rotate-180" : ""}`}
              />
            </Link>

            {/* Mega dropdown */}
            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-4 transition-all duration-300 ${
                coursesOpen
                  ? "opacity-100 visible translate-y-0"
                  : "opacity-0 invisible translate-y-2 pointer-events-none"
              }`}
            >
              <div className="w-[480px] rounded-2xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#D4A853]/25 shadow-[0_20px_60px_rgba(0,0,0,0.85)] p-3">
                {courseCategories.map((cat) => {
                  const isExpanded = expandedCategory === cat.id;
                  const isFree = cat.variant === "free";
                  const accent = isFree ? "#4FAE7E" : "#D4A853";

                  return (
                    <div key={cat.id} className="mb-1 last:mb-0">
                      {/* Category row */}
                      <div
                        onMouseEnter={() => setExpandedCategory(cat.id)}
                        className="group/cat flex items-center gap-3 p-3 rounded-xl hover:bg-[#D4A853]/8 transition-all duration-200 cursor-pointer"
                      >
                        <Link
                          href={`/khoa-hoc/${cat.slug}`}
                          className="flex items-center gap-3 flex-1 min-w-0"
                        >
                          <div
                            className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 font-heading font-bold text-xs"
                            style={{
                              background: `linear-gradient(135deg, ${accent}25, ${accent}10)`,
                              border: `1px solid ${accent}50`,
                              color: accent,
                            }}
                          >
                            {cat.badge}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-heading text-white text-sm leading-tight group-hover/cat:text-[#D4A853] transition-colors">
                              {cat.name}
                            </div>
                            <div className="text-gray-400 text-[11px] leading-tight mt-0.5 truncate">
                              {cat.subtitle}
                            </div>
                          </div>
                        </Link>
                        <ChevronDown
                          size={16}
                          className={`shrink-0 transition-all duration-300 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                          style={{ color: accent }}
                        />
                      </div>

                      {/* Classes flyout — expanded inline */}
                      <div
                        className="overflow-hidden transition-all duration-400"
                        style={{
                          maxHeight: isExpanded ? `${cat.classes.length * 64 + 8}px` : "0px",
                          opacity: isExpanded ? 1 : 0,
                        }}
                      >
                        <div className="ml-12 mr-1 pl-3 border-l border-dashed pt-1 pb-1" style={{ borderColor: `${accent}30` }}>
                          {cat.classes.map((cls) => {
                            const Icon = softwareIcon[cls.software] ?? Film;
                            return (
                              <Link
                                key={cls.slug}
                                href={`/khoa-hoc/${cat.slug}/${cls.slug}`}
                                className="flex items-center gap-3 px-3 py-2.5 rounded-lg hover:bg-white/5 transition-all duration-200 group/cls"
                              >
                                <Icon size={14} style={{ color: accent }} className="shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <div className="font-sub text-white text-xs group-hover/cls:text-[#D4A853] transition-colors leading-tight">
                                    {cls.shortName}
                                  </div>
                                  <div className="text-gray-600 text-[10px] mt-0.5 truncate">
                                    {cls.tagline}
                                  </div>
                                </div>
                                <ChevronRight size={12} className="text-gray-600 shrink-0 group-hover/cls:translate-x-0.5 group-hover/cls:text-[#D4A853] transition-all" />
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  );
                })}

                {/* CapCut Pro Creator — Premium gated course */}
                <Link
                  href="/khoa-hoc-capcut"
                  className="group/cc mt-1.5 flex items-center gap-3 p-3 rounded-xl border border-[#D4A853]/30 bg-gradient-to-r from-[#D4A853]/12 to-transparent hover:from-[#D4A853]/20 transition-all duration-200"
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0 font-heading font-bold text-[10px] bg-gradient-to-br from-[#F0C870] to-[#D4A853] text-black"
                  >
                    PRO
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-heading text-white text-sm leading-tight group-hover/cc:text-[#F0C870] transition-colors">
                        CapCut Pro Creator
                      </span>
                      <span className="text-[8px] font-bold uppercase tracking-[0.15em] text-[#D4A853] bg-[#D4A853]/15 border border-[#D4A853]/40 px-1.5 py-0.5 rounded">
                        Video
                      </span>
                    </div>
                    <div className="text-gray-400 text-[11px] leading-tight mt-0.5 truncate">
                      18 buổi · A.I Workflow · Yêu cầu đăng nhập
                    </div>
                  </div>
                  <ChevronRight size={14} className="text-[#D4A853] group-hover/cc:translate-x-0.5 transition-transform" />
                </Link>

                <div className="border-t border-[#D4A853]/10 mt-3 pt-3 px-3 pb-1">
                  <Link
                    href="/khoa-hoc"
                    className="font-sub text-[#D4A853] text-[10px] uppercase tracking-[0.25em] hover:text-[#F0C870] transition-colors"
                  >
                    Xem tất cả khóa học →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <Link
            href="/giang-vien"
            className={`font-sub text-sm transition-colors duration-200 ${
              isActive("/giang-vien") ? "text-[#D4A853]" : "text-gray-300 hover:text-[#D4A853]"
            }`}
          >
            Giảng Viên
          </Link>
          <Link
            href="/du-an"
            className={`font-sub text-sm transition-colors duration-200 ${
              isActive("/du-an") ? "text-[#D4A853]" : "text-gray-300 hover:text-[#D4A853]"
            }`}
          >
            Dự Án
          </Link>
        </div>

        {/* CTA */}
        <a
          href="/#contact"
          onClick={handleConsult}
          className="hidden md:inline-flex items-center gap-2 bg-gradient-to-r from-[#F0C870] to-[#D4A853] hover:from-[#FAD58A] hover:to-[#E5B860] text-black font-bold text-sm px-5 py-2.5 rounded-full transition-all duration-200 cursor-pointer cta-pulse"
        >
          <Sparkles size={14} strokeWidth={2.5} />
          Tư Vấn Miễn Phí
        </a>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          className="lg:hidden text-white cursor-pointer p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} className="text-[#D4A853]" /> : <Menu size={22} className="text-[#D4A853]" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden px-5 pb-6 border-t border-[#D4A853]/15 mt-2 pt-5 overflow-hidden">
          <div className="flex flex-col gap-1 max-w-full">
            <Link href="/" className="block py-3 font-sub text-sm text-gray-300">Trang Chủ</Link>

            <Link href="/khoa-hoc" className="block py-3 font-sub text-sm text-gray-300">Khóa Học</Link>
            <div className="ml-3 pl-4 border-l border-[#D4A853]/20 mb-3">
              {courseCategories.map((cat) => {
                const isOpen = mobileCategoryOpen === cat.id;
                const isFree = cat.variant === "free";
                const accent = isFree ? "#4FAE7E" : "#D4A853";
                return (
                  <div key={cat.id}>
                    <button
                      onClick={() => setMobileCategoryOpen(isOpen ? null : cat.id)}
                      className="w-full flex items-center justify-between py-2 text-left"
                    >
                      <span className="flex items-center gap-2">
                        <span
                          className="text-[10px] font-bold px-1.5 py-0.5 rounded"
                          style={{ background: `${accent}20`, color: accent }}
                        >
                          {cat.badge}
                        </span>
                        <span className="text-gray-300 text-sm">{cat.name}</span>
                      </span>
                      <ChevronDown
                        size={14}
                        className={`transition-transform ${isOpen ? "rotate-180" : ""}`}
                        style={{ color: accent }}
                      />
                    </button>
                    {isOpen && (
                      <div className="ml-3 pl-3 border-l border-dashed mb-2" style={{ borderColor: `${accent}30` }}>
                        {cat.classes.map((cls) => (
                          <Link
                            key={cls.slug}
                            href={`/khoa-hoc/${cat.slug}/${cls.slug}`}
                            className="block py-2 text-gray-400 text-xs hover:text-[#D4A853]"
                          >
                            {cls.shortName}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* CapCut Pro Creator (Premium) — mobile */}
            <Link
              href="/khoa-hoc-capcut"
              className="block py-3 font-sub text-sm text-gray-300 flex items-center gap-2"
            >
              <span className="text-[9px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-gradient-to-br from-[#F0C870] to-[#D4A853] text-black">
                PRO
              </span>
              CapCut Pro Creator
            </Link>

            <Link href="/giang-vien" className="block py-3 font-sub text-sm text-gray-300">Giảng Viên</Link>
            <Link href="/du-an" className="block py-3 font-sub text-sm text-gray-300">Dự Án</Link>

            <a
              href="/#contact"
              onClick={handleConsult}
              className="mt-3 flex w-full items-center justify-center gap-2 bg-gradient-to-r from-[#F0C870] to-[#D4A853] text-black font-bold px-5 py-3 rounded-full"
            >
              <Sparkles size={14} strokeWidth={2.5} />
              Tư Vấn Miễn Phí
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
