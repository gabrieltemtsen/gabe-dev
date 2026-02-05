import React, { useEffect, useRef } from 'react';

/**
 * Star-filled purple universe background used behind the main layout.
 */
interface Star {
  radius: number;
  angle: number;
  size: number;
  speed: number;
}

const UniverseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      // Render a static gradient background without star animation
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = w;
      canvas.height = h;
      return;
    }

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const { innerWidth: w, innerHeight: h } = window;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      canvas.style.width = `${w}px`;
      canvas.style.height = `${h}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();
    window.addEventListener('resize', resize);

    const createStar = (): Star => ({
      radius: Math.random() * Math.min(canvas.width, canvas.height) * 0.5,
      angle: Math.random() * Math.PI * 2,
      size: Math.random() * 1.5 + 0.5,
      speed: Math.random() * 0.001 + 0.0005,
    });

    const starCount = Math.max(120, Math.floor(Math.min(window.innerWidth, window.innerHeight) / 6));
    const stars: Star[] = Array.from({ length: starCount }, createStar);

    let animationId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      stars.forEach((s) => {
        s.angle += s.speed;
        const x = cx + Math.cos(s.angle) * s.radius;
        const y = cy + Math.sin(s.angle) * s.radius;

        ctx.beginPath();
        ctx.arc(x, y, s.size, 0, Math.PI * 2);
        ctx.fill();
      });
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
      {/* Deep purple gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-fuchsia-900 to-black" />
      {/* Moving star field */}
      <canvas ref={canvasRef} className="absolute inset-0" />
    </div>
  );
};

export default UniverseBackground;
