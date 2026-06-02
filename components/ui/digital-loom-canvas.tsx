"use client";

import { useRef, useEffect } from "react";

interface DigitalLoomCanvasProps {
  threadColor?: string;       // default "rgba(100, 100, 255, 0.5)"
  threadCount?: number;       // default 80
  trailOpacity?: number;      // 0-1, độ mờ của trail (default 0.1)
  className?: string;
}

/**
 * Chỉ canvas + animation, không có wrapper. Dùng để chèn vào bất kỳ section nào
 * như một background layer.
 *
 * Ví dụ:
 *   <section className="relative">
 *     <DigitalLoomCanvas threadColor="rgba(212,168,83,0.2)" threadCount={40} />
 *     <div className="relative z-10">...content...</div>
 *   </section>
 */
export function DigitalLoomCanvas({
  threadColor = "rgba(100, 100, 255, 0.5)",
  threadCount = 80,
  trailOpacity = 0.1,
  className = "",
}: DigitalLoomCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let threads: Thread[] = [];
    let animId: number;
    let width: number, height: number;

    class Thread {
      x: number = 0;
      y: number = 0;
      speed: number = 0;
      amplitude: number = 0;
      frequency: number = 0;
      phase: number = 0;

      constructor() {
        this.reset();
      }

      reset() {
        width = window.innerWidth;
        height = window.innerHeight;
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.speed = Math.random() * 0.5 + 0.1;
        this.amplitude = Math.random() * 20 + 10;
        this.frequency = Math.random() * 0.02 + 0.01;
        this.phase = Math.random() * Math.PI * 2;
      }

      update() {
        this.x += this.speed;
        if (this.x > width) {
          this.x = 0;
          this.y = Math.random() * height;
        }
      }

      draw() {
        if (!ctx) return;
        const startX = Math.max(this.x - 200, 0);
        ctx.beginPath();
        ctx.moveTo(
          startX,
          this.y + Math.sin(startX * this.frequency + this.phase) * this.amplitude
        );
        for (let i = startX; i < this.x; i++) {
          ctx.lineTo(
            i,
            this.y + Math.sin(i * this.frequency + this.phase) * this.amplitude
          );
        }
        ctx.strokeStyle = threadColor;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }
    }

    const setup = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      threads = Array.from({ length: threadCount }, () => new Thread());
      // initial transparent fill
      ctx.clearRect(0, 0, width, height);
    };

    const animate = () => {
      ctx.globalCompositeOperation = "source-over";
      ctx.fillStyle = `rgba(0, 0, 0, ${trailOpacity})`;
      ctx.fillRect(0, 0, width, height);
      ctx.globalCompositeOperation = "lighter";
      threads.forEach((thread) => {
        thread.update();
        thread.draw();
      });
      animId = requestAnimationFrame(animate);
    };

    setup();
    animate();
    window.addEventListener("resize", setup);

    return () => {
      window.removeEventListener("resize", setup);
      cancelAnimationFrame(animId);
    };
  }, [threadColor, threadCount, trailOpacity]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}
    />
  );
}
