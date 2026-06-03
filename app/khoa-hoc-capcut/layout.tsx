import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CapCut Pro Creator — 18 Buổi Sản Xuất Video Ngắn + A.I",
  description:
    "Khóa CapCut chuyên sâu 18 buổi: tư duy kịch bản — keyframe — sound design — color grading — phối hợp Photoshop A.I — tự động hóa workflow. Portfolio 5-7 video.",
  openGraph: {
    title: "CapCut Pro Creator + A.I Workflow",
    description: "18 buổi thực chiến — Portfolio 5-7 video đa thể loại.",
    images: [{ url: "/brand/hero-bg.png", width: 1200, height: 630, alt: "CapCut Pro Creator + A.I" }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
