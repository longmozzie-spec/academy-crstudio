import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Khóa Học — Lộ Trình Hậu Kỳ Cinematic Chuyên Sâu",
  description:
    "2 nhánh khóa học: Nhập môn 0Đ (Premiere + After Effect) và Nâng Cao (Premiere, After Effects, Quay Phim Thực Chiến) — học cùng mentor 1-1.",
  openGraph: {
    title: "Khóa Học — Lộ Trình Hậu Kỳ Cinematic",
    description: "Premiere · After Effects · Quay Phim Thực Chiến — mentor kèm cặp.",
    images: [{ url: "/brand/hero-signature.jpg", width: 1200, height: 630, alt: "Khóa Học Hậu Kỳ Cinematic" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
