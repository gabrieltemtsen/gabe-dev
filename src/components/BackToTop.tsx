import { useEffect, useState } from 'react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', onScroll, { passive: true } as AddEventListenerOptions);
    if (!reduceMotion) onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = () => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  if (!visible) return null;
  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Back to top"
      className="fixed bottom-6 right-6 z-40 rounded-full bg-white/90 px-4 py-3 text-slate-900 shadow-lg shadow-indigo-500/20 ring-1 ring-black/5 transition hover:-translate-y-0.5 dark:bg-slate-800 dark:text-white"
    >
      ↑ Top
    </button>
  );
}
