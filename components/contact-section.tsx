"use client";

import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/lib/site-config";

export function ContactSection() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative py-16 md:py-24 lg:py-32 px-4 sm:px-6 overflow-hidden"
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
            style={{ fontSize: "clamp(1.65rem, 5vw, 3.5rem)", lineHeight: 1.15 }}
          >
            Tư Vấn <span className="text-gold-gradient italic">Miễn Phí</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <p className="text-gray-400 text-center max-w-2xl mx-auto text-base md:text-lg mb-16">
            Liên hệ trực tiếp với chúng tôi qua các kênh dưới đây — phản hồi trong vòng <span className="text-[#D4A853]">2 giờ</span>.
          </p>
        </Reveal>

        <div className="max-w-3xl mx-auto">
          {/* Contact info — centered, no form */}
          <Reveal delay={300}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href={`tel:${site.contact.phone}`}
                className="glass-card rounded-2xl p-5 flex items-center gap-4 hover:gold-glow transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#D4A853]/15 flex items-center justify-center group-hover:bg-[#D4A853]/25 transition-colors">
                  <Phone size={18} className="text-[#D4A853]" />
                </div>
                <div className="min-w-0">
                  <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1">
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
                  <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1">
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
                  <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1">
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
                  <p className="font-sub text-[10px] uppercase tracking-[0.25em] text-gray-400 mb-1">
                    Địa Chỉ
                  </p>
                  <p className="text-white text-sm">
                    {site.contact.address}
                  </p>
                </div>
              </div>

            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
