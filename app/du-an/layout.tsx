import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dự Án — Tuyển Tập Cinematic & Bài Tốt Nghiệp Học Viên",
  description:
    "Toàn bộ dự án Real Estate, Brand Film, Commercial, VFX của Dương Minh Thơ + 15 bài tốt nghiệp tinh tuyển của học viên.",
  openGraph: {
    title: "Dự Án — Tuyển Tập Cinematic",
    description: "Real Estate cao cấp, Brand Film, VFX, và bài tốt nghiệp học viên.",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
