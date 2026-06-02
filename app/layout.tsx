import type { Metadata } from "next";
import { Playfair_Display, Montserrat } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { FloatingConsult } from "@/components/floating-consult";
import { ThemeProvider } from "@/components/theme-provider";

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  display: "swap",
});

// Montserrat dùng cho cả Sub-heading (Medium/SemiBold uppercase) lẫn Body (Light/Regular)
const montserrat = Montserrat({
  variable: "--font-sub",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://duongminhtho.vn"),
  title: {
    default: "Dương Minh Thơ — Học Viện Hậu Kỳ Cinematic",
    template: "%s · Dương Minh Thơ",
  },
  description:
    "DuongMinhTho.com — Đào tạo dựng phim cinematic chuyên sâu: Premiere, After Effects, Quay phim thực chiến. Mentor kèm cặp 1-1, tích hợp A.I.",
  keywords: [
    "Dương Minh Thơ",
    "DuongMinhTho",
    "khóa học dựng video",
    "khóa học hậu kỳ",
    "cinematic editing",
    "color grading",
    "motion graphics",
    "after effects nâng cao",
    "premiere nâng cao",
    "quay phim thực chiến",
  ],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://duongminhtho.vn",
    siteName: "Dương Minh Thơ — Học Viện Hậu Kỳ Cinematic",
    title: "Dương Minh Thơ — Học Viện Hậu Kỳ Cinematic",
    description:
      "Đào tạo dựng phim cinematic chuyên sâu: Premiere, After Effects, Quay phim thực chiến.",
    images: [{ url: "/brand/hero-bg.jpg", width: 1200, height: 630, alt: "Dương Minh Thơ" }],
  },
  icons: {
    icon: "/brand/logo.png",
    apple: "/brand/logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="vi"
      suppressHydrationWarning
      className={`${playfair.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          forcedTheme="dark"
          enableSystem={false}
        >
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <FloatingConsult />
        </ThemeProvider>
      </body>
    </html>
  );
}
