import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giảng Viên Dương Minh Thơ — Founder CR Studio",
  description:
    "Profile giảng viên Dương Minh Thơ — Founder CR Studio, 10+ năm kinh nghiệm hậu kỳ cinematic, 3000+ học viên, YouTube Crom Creator + TikTok Thơ EDITOR.",
  openGraph: {
    title: "Giảng Viên Dương Minh Thơ — Founder CR Studio",
    description: "10+ năm kinh nghiệm hậu kỳ cinematic, 3000+ học viên đã đào tạo.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
