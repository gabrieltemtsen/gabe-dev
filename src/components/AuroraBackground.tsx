import React from 'react';

/**
 * Animated aurora-like gradients that subtly move in the background.
 */
const AuroraBackground: React.FC = () => {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute -top-32 left-1/2 h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-rose-500 opacity-30 blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 h-96 w-96 translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-sky-500 via-blue-500 to-indigo-500 opacity-40 blur-2xl" />
    </div>
  );
};

export default AuroraBackground;
