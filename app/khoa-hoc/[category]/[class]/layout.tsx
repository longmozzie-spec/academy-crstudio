import type { Metadata } from "next";
import { findClass } from "@/lib/site-config";

interface Props {
  params: Promise<{ category: string; class: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, class: classSlug } = await params;
  const found = findClass(category, classSlug);
  if (!found) {
    return { title: "Khóa Học · Dương Minh Thơ" };
  }
  const { cls } = found;
  return {
    title: `${cls.name} — ${cls.duration ?? "Khóa học"}`,
    description: cls.description.slice(0, 160),
    openGraph: {
      title: cls.name,
      description: cls.tagline,
    },
  };
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
