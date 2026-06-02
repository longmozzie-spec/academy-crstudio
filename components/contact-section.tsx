"use client";

import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Clock, MapPin, Send, MessageCircle, ChevronDown, Check } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { site, courseCategories } from "@/lib/site-config";

// Lấy danh sách 3 lớp Nâng Cao để hiện trong dropdown "Quan tâm khóa"
const advancedClasses = courseCategories
  .find((c) => c.variant === "advanced")
  ?.classes ?? [];

const courseOptions = [
  ...advancedClasses.map((cls) => ({ value: cls.slug, label: cls.name })),
  { value: "all", label: "Tất cả khóa nâng cao" },
];

// Custom dropdown — khớp theme đen + gold, KHÔNG dùng <select> native (vì popover của OS không style được)
function CourseSelect() {
  const [open, setOpen] = useState(false);
  const [highlight, setHighlight] = useState(0);
  const [selected, setSelected] = useState<{ value: string; label: string } | null>(null);
  const ref = useRef<HTMLDivElement>(null);

  // Click outside → đóng
  useEffect(() => {
    if (!open) return;
    const onMouseDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", onMouseDown);
    return () => document.removeEventListener("mousedown", onMouseDown);
  }, [open]);

  // Keyboard navigation
  const onKey = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!open) {
      if (e.key === "Enter" || e.key === " " || e.key === "ArrowDown") {
        e.preventDefault();
        setOpen(true);
      }
      return;
    }
    if (e.key === "Escape") {
      e.preventDefault();
      setOpen(false);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHighlight((h) => (h + 1) % courseOptions.length);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlight((h) => (h - 1 + courseOptions.length) % courseOptions.length);
    } else if (e.key === "Enter") {
      e.preventDefault();
      const opt = courseOptions[highlight];
      setSelected(opt);
      setOpen(false);
    }
  };

  return (
    <div ref={ref} className="relative" onKeyDown={onKey}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className={`w-full bg-white/[0.03] border ${
          open ? "border-[#D4A853]/60 bg-white/[0.05]" : "border-white/10"
        } rounded-xl px-5 py-3.5 text-left outline-none transition-all duration-200 flex items-center justify-between focus:border-[#D4A853]/60 focus:bg-white/[0.05]`}
      >
        <span className={selected ? "text-white" : "text-gray-600"}>
          {selected ? selected.label : "-- Chọn --"}
        </span>
        <ChevronDown
          size={16}
          className={`text-[#D4A853] shrink-0 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown panel */}
      <div
        role="listbox"
        className={`absolute left-0 right-0 top-full mt-2 z-30 transition-all duration-200 origin-top ${
          open
            ? "opacity-100 visible scale-100 translate-y-0"
            : "opacity-0 invisible scale-[0.98] -translate-y-1 pointer-events-none"
        }`}
      >
        <div className="rounded-xl bg-[#0a0a0a]/95 backdrop-blur-xl border border-[#D4A853]/35 shadow-[0_20px_60px_rgba(0,0,0,0.7)] overflow-hidden p-1.5">
          {courseOptions.map((opt, i) => {
            const isSelected = selected?.value === opt.value;
            const isHighlight = highlight === i;
            return (
              <button
                key={opt.value}
                type="button"
                role="option"
                aria-selected={isSelected}
                onMouseEnter={() => setHighlight(i)}
                onClick={() => {
                  setSelected(opt);
                  setOpen(false);
                }}
                className={`w-full flex items-center justify-between gap-3 px-4 py-2.5 rounded-lg text-left text-sm transition-colors duration-150 ${
                  isHighlight
                    ? "bg-[#D4A853]/15 text-white"
                    : "text-gray-300 hover:bg-white/5"
                }`}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && (
                  <Check size={14} className="text-[#D4A853] shrink-0" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Hidden input để form submit nếu cần */}
      <input type="hidden" name="course" value={selected?.value ?? ""} />
    </div>
  );
}

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-28 md:py-36 px-6 overflow-hidden"
    >
      {/* Aurora */}
      <div className="aurora-blob w-[480px] h-[480px] bg-[#D4A853]/12 -top-32 -left-32" />
      <div
        className="aurora-blob w-[480px] h-[480px] bg-[#4FAE7E]/8 bottom-0 -right-32"
        style={{ animationDelay: "-6s" }}
      />

      <div className="max-w-6xl mx-auto relative">
        {/* Section header */}
        <Reveal>
          <div className="flex items-center gap-3 justify-center mb-5">
            <div className="w-10 h-px bg-[#D4A853]" />
            <span className="font-sub text-[#D4A853] text-xs uppercase tracking-[0.3em]">
              Liên Hệ
            </span>
            <div className="w-10 h-px bg-[#D4A853]" />
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2
            id="contact-heading"
            className="font-heading text-white text-center mb-4"
            style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)", lineHeight: 1.15 }}
          >
            Tư Vấn <span className="text-gold-gradient italic">Miễn Phí</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-gray-400 text-center max-w-2xl mx-auto text-base md:text-lg mb-16">
            Để lại thông tin, chúng tôi sẽ liên hệ trong vòng <span className="text-[#D4A853]">2 giờ</span> để tư vấn lộ trình học phù hợp nhất với bạn.
          </p>
        </Reveal>

        <div className="grid lg:grid-cols-[5fr_4fr] gap-6 lg:gap-10">
          {/* LEFT — Form */}
          <Reveal delay={300}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Cảm ơn bạn! Chúng tôi sẽ liên hệ sớm nhất.");
              }}
              className="glass-card rounded-3xl p-7 md:p-10 gold-glow"
            >
              <h3 className="font-heading text-white text-2xl mb-1">Đăng Ký Nhận Tư Vấn</h3>
              <p className="text-gray-500 text-sm mb-7 font-sub">
                Thông tin của bạn được bảo mật tuyệt đối.
              </p>

              <div className="space-y-5">
                <div>
                  <label htmlFor="name" className="block font-sub text-xs uppercase tracking-[0.2em] text-[#D4A853] mb-2">
                    Họ và Tên
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    placeholder="Nguyễn Văn A"
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-[#D4A853]/60 focus:bg-white/[0.05] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 outline-none transition-all duration-200"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block font-sub text-xs uppercase tracking-[0.2em] text-[#D4A853] mb-2">
                      Số Điện Thoại
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      placeholder="0xxx xxx xxx"
                      className="w-full bg-white/[0.03] border border-white/10 focus:border-[#D4A853]/60 focus:bg-white/[0.05] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 outline-none transition-all duration-200"
                    />
                  </div>
                  <div>
                    <label className="block font-sub text-xs uppercase tracking-[0.2em] text-[#D4A853] mb-2">
                      Quan Tâm Khóa
                    </label>
                    <CourseSelect />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block font-sub text-xs uppercase tracking-[0.2em] text-[#D4A853] mb-2">
                    Lời Nhắn
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Bạn muốn được tư vấn về điều gì?"
                    className="w-full bg-white/[0.03] border border-white/10 focus:border-[#D4A853]/60 focus:bg-white/[0.05] rounded-xl px-5 py-3.5 text-white placeholder:text-gray-600 outline-none transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#F0C870] to-[#D4A853] hover:from-[#FAD58A] hover:to-[#E5B860] text-black font-bold py-4 rounded-full transition-all duration-200 cursor-pointer"
                >
                  <Send size={16} />
                  Gửi Đăng Ký
                </button>

                <p className="text-gray-500 text-xs text-center">
                  Bằng việc gửi đi, bạn đồng ý nhận tư vấn từ chúng tôi.
                </p>
              </div>
            </form>
          </Reveal>

          {/* RIGHT — Contact info */}
          <Reveal delay={400}>
            <div className="space-y-4 h-full flex flex-col">
              <a
                href={`tel:${site.contact.phone}`}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:gold-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4A853]/15 flex items-center justify-center group-hover:bg-[#D4A853]/25 transition-colors">
                  <Phone size={18} className="text-[#D4A853]" />
                </div>
                <div className="min-w-0">
                  <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                    Điện Thoại / Zalo
                  </p>
                  <p className="text-white font-heading text-lg truncate">
                    {site.contact.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${site.contact.email}`}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:gold-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4A853]/15 flex items-center justify-center group-hover:bg-[#D4A853]/25 transition-colors">
                  <Mail size={18} className="text-[#D4A853]" />
                </div>
                <div className="min-w-0">
                  <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                    Email
                  </p>
                  <p className="text-white font-heading text-lg truncate">
                    {site.contact.email}
                  </p>
                </div>
              </a>

              <a
                href={site.contact.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:gold-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4A853]/15 flex items-center justify-center group-hover:bg-[#D4A853]/25 transition-colors">
                  <MessageCircle size={18} className="text-[#D4A853]" />
                </div>
                <div className="min-w-0">
                  <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                    Facebook / Messenger
                  </p>
                  <p className="text-white font-heading text-lg truncate">
                    Nhắn tin trực tiếp
                  </p>
                </div>
              </a>

              <div className="glass-card rounded-2xl p-5 flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#D4A853]/15 flex items-center justify-center">
                  <MapPin size={18} className="text-[#D4A853]" />
                </div>
                <div className="min-w-0">
                  <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                    Địa Chỉ
                  </p>
                  <p className="text-white text-sm">
                    {site.contact.address}
                  </p>
                </div>
              </div>

              <div className="glass-card rounded-2xl p-5 flex items-center gap-4 flex-1">
                <div className="w-12 h-12 rounded-xl bg-[#D4A853]/15 flex items-center justify-center">
                  <Clock size={18} className="text-[#D4A853]" />
                </div>
                <div>
                  <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-500 mb-1">
                    Giờ Hỗ Trợ
                  </p>
                  <p className="text-white text-sm">{site.contact.hours}</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
