"use client";

import { useState, useMemo } from "react";
import { Filter } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { VideoModal } from "@/components/ui/video-modal";
import { VideoCard } from "@/components/ui/video-card";
import { ContactSection } from "@/components/contact-section";
import { allProjects, Video } from "@/lib/site-config";

type AuthorFilter = "all" | "instructor" | "student";

export default function DuAnPage() {
  const [active, setActive] = useState<Video | null>(null);
  const [authorFilter, setAuthorFilter] = useState<AuthorFilter>("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  const categories = useMemo(() => {
    const cats = new Set<string>();
    allProjects.forEach((p) => p.category && cats.add(p.category));
    return ["all", ...Array.from(cats)];
  }, []);

  const filtered = useMemo(() => {
    return allProjects.filter((p) => {
      if (authorFilter !== "all" && p.author !== authorFilter) return false;
      if (categoryFilter !== "all" && p.category !== categoryFilter) return false;
      return true;
    });
  }, [authorFilter, categoryFilter]);

  const counts = {
    all: allProjects.length,
    instructor: allProjects.filter((p) => p.author === "instructor").length,
    student: allProjects.filter((p) => p.author === "student").length,
  };

  return (
    <>
      {/* HERO */}
      <section className="relative pt-40 pb-16 px-4 sm:px-6 overflow-hidden">
        <div className="aurora-blob w-[600px] h-[600px] bg-[#D4A853]/15 top-0 left-1/2 -translate-x-1/2" />

        <div className="max-w-5xl mx-auto text-center relative">
          <Reveal>
            <div className="flex items-center gap-3 justify-center mb-6">
              <div className="w-10 h-px bg-[#D4A853]" />
              <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
                Dự Án
              </span>
              <div className="w-10 h-px bg-[#D4A853]" />
            </div>
          </Reveal>
          <Reveal delay={100}>
            <h1
              className="font-heading text-white mb-6"
              style={{ fontSize: "clamp(1.85rem, 6vw, 5rem)", lineHeight: 1.05 }}
            >
              Tuyển Tập <br />
              <span className="text-gold-gradient italic">Khoảnh Khắc</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
              Toàn bộ dự án mà giảng viên đã thực hiện cùng những bài tốt nghiệp tinh tuyển của học viên — minh chứng cho hành trình kiến tạo nghệ thuật bằng hình ảnh.
            </p>
          </Reveal>
        </div>
      </section>

      {/* FILTERS */}
      <section className="px-4 sm:px-6 mb-10">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="glass-card rounded-2xl p-5 md:p-6 flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-8">
              {/* Author tabs */}
              <div className="flex items-center gap-2">
                <Filter size={14} className="text-[#D4A853] hidden md:block" />
                <span className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-400 hidden md:block">
                  Tác giả
                </span>
                <div className="flex gap-1.5 ml-2 flex-wrap">
                  {([
                    { key: "all", label: "Tất Cả", count: counts.all },
                    { key: "instructor", label: "Giảng Viên", count: counts.instructor },
                    { key: "student", label: "Học Viên", count: counts.student },
                  ] as { key: AuthorFilter; label: string; count: number }[]).map((t) => (
                    <button
                      key={t.key}
                      onClick={() => setAuthorFilter(t.key)}
                      className={`px-4 py-2 rounded-full text-xs font-sub uppercase tracking-[0.15em] transition-all duration-200 cursor-pointer ${
                        authorFilter === t.key
                          ? "bg-[#D4A853] text-black font-bold"
                          : "bg-white/5 text-gray-400 hover:text-[#D4A853] hover:bg-white/8"
                      }`}
                    >
                      {t.label}
                      <span className={`ml-2 ${authorFilter === t.key ? "text-black/60" : "text-gray-600"}`}>
                        {t.count}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="hidden lg:block w-px h-8 bg-white/10" />

              {/* Category tabs */}
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-400 hidden md:block shrink-0">
                  Thể loại
                </span>
                <div className="flex gap-1.5 ml-2 flex-wrap">
                  {categories.map((c) => (
                    <button
                      key={c}
                      onClick={() => setCategoryFilter(c)}
                      className={`px-3.5 py-1.5 rounded-full text-xs transition-all duration-200 cursor-pointer ${
                        categoryFilter === c
                          ? "bg-[#D4A853]/15 border border-[#D4A853]/50 text-[#D4A853]"
                          : "bg-white/5 border border-transparent text-gray-400 hover:text-white"
                      }`}
                    >
                      {c === "all" ? "Tất cả thể loại" : c}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* GRID */}
      <section className="px-4 sm:px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-gray-400">Không có dự án nào khớp với bộ lọc.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((v, i) => (
                <Reveal key={v.id} delay={(i % 6) * 80}>
                  <VideoCard item={v} onOpen={() => setActive(v)} />
                </Reveal>
              ))}
            </div>
          )}

          {/* Count */}
          <div className="mt-12 text-center">
            <p className="font-sub text-xs uppercase tracking-[0.25em] text-gray-400">
              Hiển thị <span className="text-[#D4A853]">{filtered.length}</span> / {allProjects.length} dự án
            </p>
          </div>
        </div>
      </section>

      <VideoModal
        key={active?.id}
        youtubeId={active?.youtubeId}
        facebookUrl={active?.facebookUrl}
        isShort={active?.isShort ?? false}
        isOpen={active !== null}
        onClose={() => setActive(null)}
      />

      <div className="section-divider mx-6" />
      <ContactSection />
    </>
  );
}
