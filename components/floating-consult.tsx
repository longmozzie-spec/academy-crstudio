"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";
import { usePathname } from "next/navigation";

export function FloatingConsult() {
  const [visible, setVisible] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    const contact = document.getElementById("contact");
    if (contact) {
      e.preventDefault();
      contact.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Hide on contact-only routes if needed (none right now)
  if (!visible) return null;

  return (
    <a
      href="/#contact"
      onClick={handleClick}
      aria-label="Tư vấn miễn phí"
      className="fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 bg-gradient-to-r from-[#F0C870] to-[#D4A853] hover:from-[#FAD58A] hover:to-[#E5B860] text-black font-bold text-sm px-5 py-3.5 rounded-full transition-all duration-300 cursor-pointer cta-pulse shadow-[0_12px_36px_rgba(212,168,83,0.45)]"
      style={{ animation: "fadeSwap 400ms ease-out" }}
    >
      <Sparkles size={16} strokeWidth={2.5} />
      <span className="hidden sm:inline">Tư Vấn Miễn Phí</span>
    </a>
  );
}
