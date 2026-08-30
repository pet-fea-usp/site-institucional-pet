import React from 'react';

export const Torn = ({ fill = '#fff', bg = 'transparent' }) => (
  <div className="torn">
    <svg viewBox="0 0 1200 30" preserveAspectRatio="none" style={{ backgroundColor: bg }}>
      <path
        d="M0,20 L30,8 L60,22 L90,5 L120,18 L150,4 L180,16 L210,7 L240,21 L270,6 L300,19 L330,5
           L360,17 L390,8 L420,22 L450,5 L480,16 L510,8 L540,21 L570,5 L600,18 L630,6 L660,19
           L690,8 L720,22 L750,7 L780,20 L810,5 L840,18 L870,8 L900,22 L930,6 L960,19 L990,5
           L1020,18 L1050,8 L1080,22 L1110,7 L1140,19 L1170,6 L1200,20 L1200,30 L0,30 Z"
        fill={fill}
      />
    </svg>
  </div>
);

