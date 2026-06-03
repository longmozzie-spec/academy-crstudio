import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { site, courseCategories } from "@/lib/site-config";
import { BrandLogo } from "@/components/brand-logo";

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-[#D4A853]/15 bg-[#050505] relative">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="lg:col-span-1">
          <div className="flex items-center gap-3 mb-5">
            <a
              href="https://crstudio.vn"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Truy cập CR Studio"
              title="Mở crstudio.vn"
              className="inline-flex shrink-0 hover:scale-105 transition-transform"
            >
              <BrandLogo size={44} />
            </a>
            <div className="leading-none">
              <div className="font-heading text-white text-lg">{site.brandName}</div>
              <div className="font-sub text-[9px] uppercase tracking-[0.25em] text-[#D4A853] mt-1.5">
                {site.brandDomain}
              </div>
            </div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed mb-5">
            {site.shortBio}
          </p>
          <p className="font-sub text-[#D4A853] text-[10px] uppercase tracking-[0.3em]">
            Tinh Hoa · Chiều Sâu · Cảm Xúc
          </p>
        </div>

        {/* Nav */}
        <div>
          <h4 className="font-sub text-white font-bold text-xs uppercase tracking-[0.2em] mb-5">
            Điều Hướng
          </h4>
          <ul className="space-y-3">
            {[
              { label: "Trang Chủ", href: "/" },
              { label: "Khóa Học", href: "/khoa-hoc" },
              { label: "Giảng Viên", href: "/giang-vien" },
              { label: "Dự Án", href: "/du-an" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-gray-400 hover:text-[#D4A853] text-sm transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Courses */}
        <div>
          <h4 className="font-sub text-white font-bold text-xs uppercase tracking-[0.2em] mb-5">
            Các Lớp
          </h4>
          <ul className="space-y-3 text-sm">
            {courseCategories.flatMap((cat) =>
              cat.classes.map((cls) => {
                const isFree = cat.variant === "free";
                return (
                  <li key={`${cat.slug}-${cls.slug}`}>
                    <Link
                      href={`/khoa-hoc/${cat.slug}/${cls.slug}`}
                      className={`text-gray-400 transition-colors flex items-center gap-2 ${
                        isFree ? "hover:text-[#4FAE7E]" : "hover:text-[#D4A853]"
                      }`}
                    >
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded ${
                          isFree
                            ? "bg-[#4FAE7E]/15 text-[#4FAE7E]"
                            : "bg-[#D4A853]/15 text-[#D4A853]"
                        }`}
                      >
                        {cat.badge}
                      </span>
                      {cls.shortName}
                    </Link>
                  </li>
                );
              })
            )}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-sub text-white font-bold text-xs uppercase tracking-[0.2em] mb-5">
            Liên Hệ
          </h4>
          <ul className="space-y-3 text-sm">
            <li>
              <a href={`tel:${site.contact.phone}`} className="text-gray-400 hover:text-[#D4A853] transition-colors flex items-center gap-2">
                <Phone size={14} className="text-[#D4A853] shrink-0" />
                {site.contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="text-gray-400 hover:text-[#D4A853] transition-colors flex items-center gap-2">
                <Mail size={14} className="text-[#D4A853] shrink-0" />
                {site.contact.email}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-[#D4A853]/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-400 text-xs">
            © {new Date().getFullYear()} <span className="text-[#D4A853]">{site.brandName}</span> · All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Crafted with passion · Designed for storytellers.
          </p>
        </div>
      </div>
    </footer>
  );
}
