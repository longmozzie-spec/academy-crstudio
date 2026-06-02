"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { site } from "@/lib/site-config";

/**
 * Panel signature decorative phải Hero — ảnh đại diện thương hiệu/phong cách.
 * - Drop file vào public/brand/hero-signature.jpg.
 * - Nếu file tồn tại: hiển thị ảnh full-bleed + overlay tối + quote đè lên dưới.
 * - Nếu không có file: hiển thị Sparkles icon + quote (như hiện tại).
 */
export function HeroSignaturePanel() {
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");

  useEffect(() => {
    const img = new Image();
    img.onload = () => setStatus(img.naturalWidth > 0 ? "ok" : "error");
    img.onerror = () => setStatus("error");
    img.src = site.heroSignatureImage;
  }, []);

  const hasImage = status === "ok";

  return (
    <div className="relative aspect-[4/5] max-w-md mx-auto lg:mx-0 lg:ml-auto">
      {/* Gold corners */}
      <div className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 border-[#D4A853]" />
      <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 border-[#D4A853]" />

      <div className="relative w-full h-full rounded-sm overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#050505] border border-[#D4A853]/20">
        {/* Ảnh signature — chỉ render khi load OK */}
        {hasImage && (
          <>
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url('${site.heroSignatureImage}')` }}
              aria-hidden="true"
            />
            {/* Dark gradient overlay — đủ để quote đọc rõ ở dưới, ảnh vẫn nhìn rõ ở trên */}
            <div
              className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/85"
              aria-hidden="true"
            />
          </>
        )}

        {/* Content overlay — căn đáy khi có ảnh (để không che mặt), căn giữa khi placeholder */}
        <div
          className={`absolute inset-0 flex justify-center p-10 ${
            hasImage ? "items-end pb-14" : "items-center"
          }`}
        >
          <div className="text-center">
            {/* Icon — ẩn khi đã có ảnh thật */}
            {!hasImage && (
              <div className="w-20 h-20 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center mx-auto mb-6">
                <Sparkles size={28} className="text-[#D4A853]" />
              </div>
            )}

            <p
              className={`font-heading italic mb-3 ${
                hasImage
                  ? "text-white text-xl md:text-2xl drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)]"
                  : "text-white text-2xl"
              }`}
            >
              &ldquo;{site.heroSignatureQuote}&rdquo;
            </p>

            <div className="w-12 h-px bg-[#D4A853] mx-auto my-4" />
            <p className="font-sub text-[#D4A853] text-[10px] uppercase tracking-[0.3em]">
              {site.brandName}
            </p>
          </div>
        </div>

        {/* Decorative meta corners */}
        <div className="absolute top-4 left-4 font-heading text-[#D4A853]/60 text-xs tracking-[0.4em]">
          01 / 04
        </div>
        <div className="absolute bottom-4 right-4 font-heading text-[#D4A853]/60 text-xs tracking-[0.4em]">
          EST. 2025
        </div>
      </div>
    </div>
  );
}
