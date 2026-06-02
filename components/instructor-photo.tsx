"use client";

import { useState } from "react";
import { site } from "@/lib/site-config";

interface InstructorPhotoProps {
  /** Override the photo path. Defaults to site.instructorPhoto. */
  src?: string;
  /** CSS object-position. Defaults to site.instructorPhotoPosition. */
  position?: string;
  /** Show instructor name on the placeholder when no file is present. */
  showInitials?: boolean;
  className?: string;
}

/**
 * Hiển thị ảnh giảng viên với fallback tự động.
 * Drop ảnh vào: public/instructor/avatar.jpg (hoặc tên khác và cập nhật site-config.ts).
 */
export function InstructorPhoto({
  src,
  position,
  showInitials = true,
  className = "",
}: InstructorPhotoProps) {
  const [errored, setErrored] = useState(false);
  const finalSrc = src ?? site.instructorPhoto;
  const finalPosition = position ?? site.instructorPhotoPosition;
  const initials = site.brandName
    .replace(/[\[\]]/g, "")
    .split(" ")
    .map((n) => n[0])
    .filter(Boolean)
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (errored) {
    // Placeholder when no photo file exists yet
    return (
      <div className={`relative w-full h-full overflow-hidden bg-gradient-to-br from-[#1a1a1a] via-[#0f0f0f] to-[#050505] flex items-center justify-center ${className}`}>
        <div className="text-center px-6">
          {showInitials && (
            <div className="w-24 h-24 rounded-full bg-[#D4A853]/10 border border-[#D4A853]/30 flex items-center justify-center mx-auto mb-5">
              <span className="font-heading text-3xl text-[#D4A853]">{initials || "?"}</span>
            </div>
          )}
          <p className="font-sub text-xs uppercase tracking-[0.3em] text-[#D4A853]/70 mb-1.5">
            Ảnh Giảng Viên
          </p>
          <p className="text-gray-600 text-[11px] leading-relaxed max-w-[200px] mx-auto">
            Thả ảnh vào{" "}
            <code className="text-[#D4A853] bg-black/40 px-1.5 py-0.5 rounded text-[10px]">
              public/instructor/avatar.jpg
            </code>
          </p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={finalSrc}
      alt={`${site.brandName} – Giảng viên`}
      onError={() => setErrored(true)}
      loading="lazy"
      decoding="async"
      className={`absolute inset-0 w-full h-full object-cover ${className}`}
      style={{ objectPosition: finalPosition }}
    />
  );
}
