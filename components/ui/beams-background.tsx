"use client";

import { useEffect, useRef } from "react";

/**
 * BeamsBackgroundLayer — canvas-only animated beams adapted from kokonut-ui's
 * beams-background. Customized cho luxury theme:
 * - Original: hue 190-260 (blue/violet/cyan)
 * - Adapted: hue 30-55 (amber/gold/warm gold)
 *
 * Dùng làm 1 layer trong section .relative .overflow-hidden:
 *   <section className="relative overflow-hidden">
 *     <BeamsBackgroundLayer intensity="subtle" />
 *     ...content z:10...
 *   </section>
 */

interface Beam {
  x: number;
  y: number;
  width: number;
  length: number;
  angle: number;
  speed: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

function createBeam(width: number, height: number): Beam {
  const angle = -35 + Math.random() * 10;
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 30 + Math.random() * 60,
    length: height * 2.5,
    angle: angle,
    speed: 0.6 + Math.random() * 1.2,
    opacity: 0.12 + Math.random() * 0.16,
    // Gold palette: 30-55 (warm amber → gold)
    hue: 30 + Math.random() * 25,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.02 + Math.random() * 0.03,
  };
}

interface BeamsBackgroundLayerProps {
  intensity?: "subtle" | "medium" | "strong";
  className?: string;
  /** Số beam — default 20. Giảm xuống cho mobile / hiệu năng. */
  beamCount?: number;
}

export function BeamsBackgroundLayer({
  intensity = "subtle",
  className = "",
  beamCount = 20,
}: BeamsBackgroundLayerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const beamsRef = useRef<Beam[]>([]);
  const animationFrameRef = useRef<number>(0);

  const opacityMap = {
    subtle: 0.7,
    medium: 0.85,
    strong: 1,
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    // Trên mobile dùng ít beam hơn cho mượt
    const totalBeams = isMobile ? Math.floor(beamCount * 0.6) : beamCount;

    const updateCanvasSize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;
      ctx.scale(dpr, dpr);

      beamsRef.current = Array.from({ length: totalBeams }, () =>
        createBeam(canvas.width, canvas.height)
      );
    };

    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    function resetBeam(beam: Beam, index: number, total: number) {
      if (!canvas) return beam;
      const column = index % 3;
      const spacing = canvas.width / 3;

      beam.y = canvas.height + 100;
      beam.x =
        column * spacing +
        spacing / 2 +
        (Math.random() - 0.5) * spacing * 0.5;
      beam.width = 100 + Math.random() * 100;
      beam.speed = 0.5 + Math.random() * 0.4;
      // Spread gold palette across beams
      beam.hue = 30 + (index * 25) / total;
      beam.opacity = 0.2 + Math.random() * 0.1;
      return beam;
    }

    function drawBeam(ctx: CanvasRenderingContext2D, beam: Beam) {
      ctx.save();
      ctx.translate(beam.x, beam.y);
      ctx.rotate((beam.angle * Math.PI) / 180);

      const pulsingOpacity =
        beam.opacity *
        (0.8 + Math.sin(beam.pulse) * 0.2) *
        opacityMap[intensity];

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length);

      // Gold beam — sat 75%, light 60% cho ấm áp
      gradient.addColorStop(0, `hsla(${beam.hue}, 75%, 60%, 0)`);
      gradient.addColorStop(0.1, `hsla(${beam.hue}, 75%, 60%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(0.4, `hsla(${beam.hue}, 75%, 60%, ${pulsingOpacity})`);
      gradient.addColorStop(0.6, `hsla(${beam.hue}, 75%, 60%, ${pulsingOpacity})`);
      gradient.addColorStop(0.9, `hsla(${beam.hue}, 75%, 60%, ${pulsingOpacity * 0.5})`);
      gradient.addColorStop(1, `hsla(${beam.hue}, 75%, 60%, 0)`);

      ctx.fillStyle = gradient;
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length);
      ctx.restore();
    }

    function animate() {
      if (!canvas || !ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.filter = "blur(35px)";

      const total = beamsRef.current.length;
      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed;
        beam.pulse += beam.pulseSpeed;

        if (beam.y + beam.length < -100) {
          resetBeam(beam, index, total);
        }

        drawBeam(ctx, beam);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      window.removeEventListener("resize", updateCanvasSize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [intensity, beamCount]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 pointer-events-none ${className}`}
      style={{ filter: "blur(15px)" }}
    />
  );
}
