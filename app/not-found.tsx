import type { Metadata } from "next";
import Link from "next/link";
import { Home, Search, ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "404 — Không Tìm Thấy Trang",
  description: "Trang bạn tìm không tồn tại hoặc đã được di chuyển. Quay về trang chủ để khám phá Dương Minh Thơ Academy.",
};

export default function NotFound() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 py-24">
      {/* Aurora ambient */}
      <div className="aurora-blob w-[700px] h-[700px] bg-[#D4A853]/15 -top-40 -left-32" />
      <div
        className="aurora-blob w-[500px] h-[500px] bg-[#D4A853]/10 -bottom-32 -right-32"
        style={{ animationDelay: "-8s" }}
      />

      <div className="relative z-10 max-w-2xl text-center">
        {/* Decorative gold corners */}
        <div className="relative inline-block mb-10">
          <div className="absolute -top-4 -left-4 w-8 h-8 border-t-2 border-l-2 border-[#D4A853]" />
          <div className="absolute -bottom-4 -right-4 w-8 h-8 border-b-2 border-r-2 border-[#D4A853]" />
          <div
            className="font-heading text-[100px] sm:text-[140px] md:text-[180px] leading-none px-8 sm:px-12"
            style={{
              background: "linear-gradient(135deg, #D4A853 0%, #F0C870 50%, #D4A853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 700,
              letterSpacing: "-0.04em",
            }}
          >
            404
          </div>
        </div>

        <div className="flex items-center gap-3 justify-center mb-5">
          <div className="w-10 h-px bg-[#D4A853]" />
          <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
            Lạc Lối Trong Khoảnh Khắc
          </span>
          <div className="w-10 h-px bg-[#D4A853]" />
        </div>

        <h1
          className="font-heading text-white mb-6"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)", lineHeight: 1.2 }}
        >
          Trang Này Chưa Được{" "}
          <span
            className="italic"
            style={{
              background: "linear-gradient(135deg, #D4A853 0%, #F0C870 50%, #D4A853 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Kiến Tạo
          </span>
        </h1>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-10 max-w-md mx-auto">
          Hoặc bạn đã gõ sai đường dẫn, hoặc trang này đã được di chuyển. Hãy quay về trang chủ để tiếp tục hành trình.
        </p>

        <div className="flex flex-wrap gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F0C870] to-[#D4A853] hover:from-[#FAD58A] hover:to-[#E5B860] text-black font-bold px-6 py-3.5 rounded-full transition-all duration-200"
          >
            <Home size={16} />
            Trang Chủ
          </Link>
          <Link
            href="/khoa-hoc"
            className="inline-flex items-center gap-2 border border-[#D4A853]/50 hover:border-[#D4A853] text-[#D4A853] font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:bg-[#D4A853]/5"
          >
            <Search size={14} />
            Khám Phá Khóa Học
          </Link>
          <Link
            href="/du-an"
            className="inline-flex items-center gap-2 border border-[#D4A853]/50 hover:border-[#D4A853] text-[#D4A853] font-semibold px-6 py-3.5 rounded-full transition-all duration-200 hover:bg-[#D4A853]/5"
          >
            <ArrowLeft size={14} />
            Xem Dự Án
          </Link>
        </div>
      </div>
    </section>
  );
}
