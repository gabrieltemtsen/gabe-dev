import React, { useEffect, useRef } from 'react';

/**
 * Star-filled purple universe background used behind the main layout.
 */
interface Star {
  x: number;
  y: number;
  r: number;
  vx: number;
  vy: number;
}

const UniverseBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();
    window.addEventListener('resize', resize);

    const createStar = (): Star => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 1.5 + 0.5,
      vx: (Math.random() - 0.5) * 0.2,
      vy: (Math.random() - 0.5) * 0.2,
    });

    const stars: Star[] = Array.from({ length: 150 }, createStar);

    let animationId: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#fff';
      stars.forEach((s) => {
        s.x += s.vx;
        s.y += s.vy;

        if (s.x < 0) s.x = canvas.width;
        if (s.x > canvas.width) s.x = 0;
        if (s.y < 0) s.y = canvas.height;
        if (s.y > canvas.height) s.y = 0;

        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
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
