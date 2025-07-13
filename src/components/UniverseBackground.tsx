import React from 'react';

/**
 * Star-filled purple universe background used behind the main layout.
 */
const UniverseBackground: React.FC = () => (
  <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
    {/* Deep purple gradient */}
    <div className="absolute inset-0 bg-gradient-to-br from-purple-800 via-fuchsia-900 to-black" />
    {/* Star field overlay */}
    <div className="absolute inset-0 bg-stars opacity-50" />
  </div>
);

export default UniverseBackground;
