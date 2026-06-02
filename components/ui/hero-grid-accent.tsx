"use client";

/**
 * Hero background: lưới gold subtle + radial accent ở dưới
 * — adapted từ hero-1 component, custom cho dark/gold luxury theme.
 *
 * Dùng absolute layer bên trong section .relative:
 *   <section className="relative ...">
 *     <HeroGridAccent />
 *     ...content...
 *   </section>
 */
export function HeroGridAccent() {
  return (
    <>
      {/* Grid pattern — sợi gold tinh tế, fade dần lên trên */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 h-[600px] w-full opacity-60
          bg-[linear-gradient(to_right,rgba(212,168,83,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(212,168,83,0.10)_1px,transparent_1px)]
          bg-[size:6rem_5rem]
          [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"
      />

      {/* Radial accent halo — đèn ngầm gold ở mép dưới */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[calc(100%-90px)] lg:top-[calc(100%-150px)]
          h-[500px] w-[700px] md:h-[500px] md:w-[1100px] lg:h-[750px] lg:w-[140%]
          -translate-x-1/2 rounded-[100%] -z-10 pointer-events-none
          bg-[radial-gradient(closest-side,#0a0a0a_82%,rgba(212,168,83,0.55))]"
        style={{ animation: "fadeUpAccent 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards" }}
      />

      <style>{`
        @keyframes fadeUpAccent {
          from { opacity: 0; transform: translate(-50%, 30px); }
          to   { opacity: 1; transform: translate(-50%, 0); }
        }
      `}</style>
    </>
  );
}
