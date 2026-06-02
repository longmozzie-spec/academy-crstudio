"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site-config";

/**
 * Ảnh nền cinematic cho Hero — render absolute fill phía sau nội dung.
 * - Drop file vào public/brand/hero-bg.jpg (khuyến nghị 1920×1080 trở lên, dung lượng <500KB).
 * - Nếu file không tồn tại → component trả về null (giữ aurora gradient hiện có).
 * - Tự đè dark overlay theo site.heroBackgroundOverlay để text vẫn rõ.
 */
export function HeroBackground() {
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  // Preload image to detect 404
  useEffect(() => {
    const img = new Image();
    img.onload = () => setLoaded(true);
    img.onerror = () => setErrored(true);
    img.src = site.heroBackground;
  }, []);

  if (errored || !loaded) return null;

  const overlay = Math.max(0, Math.min(1, site.heroBackgroundOverlay ?? 0.55));
  const blur = Math.max(0, site.heroBackgroundBlur ?? 0);

  return (
    <>
      {/* Image layer — có blur subtle để tạo cảm giác "mờ mờ" */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{
          backgroundImage: `url('${site.heroBackground}')`,
          filter: blur > 0 ? `blur(${blur}px)` : undefined,
        }}
        aria-hidden="true"
      />
      {/* Dark overlay */}
      <div
        className="absolute inset-0"
        style={{ background: `rgba(0,0,0,${overlay})` }}
        aria-hidden="true"
      />
      {/* Vignette + bottom fade for readability */}
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.5)_100%)]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0a0a0a]"
        aria-hidden="true"
      />
    </>
  );
}
