"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { site } from "@/lib/site-config";

interface BrandLogoProps {
  /** Kích thước box logo (px). Default 40. */
  size?: number;
  /** Override src — mặc định lấy từ site.logo. */
  src?: string;
  /** Class thêm cho wrapper. */
  className?: string;
}

/**
 * Logo brand thông minh:
 * - Probe file qua Image() trước khi render → tránh nhấp nháy broken image.
 * - Nếu file load OK → render <img>.
 * - Nếu file 404 hoặc chưa drop → fallback về icon Sparkles trong khung gold gradient.
 *
 * Drop logo vào: public/brand/logo.png (hoặc .svg / .webp)
 * Khuyến nghị: hình vuông tối thiểu 256×256, nền trong suốt (PNG/SVG).
 */
export function BrandLogo({ size = 40, src, className = "" }: BrandLogoProps) {
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");
  const finalSrc = src ?? site.logo;

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      // Một số server trả 200 với ảnh rỗng → check naturalWidth
      if (img.naturalWidth > 0) setStatus("ok");
      else setStatus("error");
    };
    img.onerror = () => setStatus("error");
    img.src = finalSrc;
  }, [finalSrc]);

  // Loading hoặc errored → Sparkles fallback
  if (status !== "ok") {
    return (
      <div
        className={`rounded-lg bg-gradient-to-br from-[#D4A853] to-[#B8902E] flex items-center justify-center shrink-0 ${className}`}
        style={{ width: size, height: size }}
      >
        <Sparkles size={size * 0.5} className="text-black" strokeWidth={2.5} />
      </div>
    );
  }

  return (
    <div className={`shrink-0 ${className}`} style={{ width: size, height: size }}>
      <img
        src={finalSrc}
        alt={`${site.brandName} logo`}
        width={size}
        height={size}
        className="w-full h-full object-contain"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
