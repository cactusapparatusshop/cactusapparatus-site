import React from 'react';

export const CactusLogo = ({ className = "w-12 h-12" }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 15 A 35 35 0 1 0 50 85 A 35 35 0 1 0 50 15 Z" stroke="#d48b41" strokeWidth="6" strokeDasharray="12 8" />
    <ellipse cx="70" cy="55" rx="8" ry="3" transform="rotate(45 70 55)" stroke="#d48b41" strokeWidth="2" />
    <ellipse cx="70" cy="55" rx="8" ry="3" transform="rotate(-45 70 55)" stroke="#d48b41" strokeWidth="2" />
    <circle cx="70" cy="55" r="1.5" fill="#d48b41" />
    <path d="M32 65 L32 80 M29 65 C 29 60, 35 60, 35 65" stroke="#d48b41" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    <rect x="42" y="25" width="16" height="60" rx="8" fill="#4caf50" />
    <rect x="46" y="25" width="8" height="60" fill="#a5d6a7" opacity="0.3" />
    <path d="M42 55 L30 55 A 6 6 0 0 1 24 49 L24 38 A 6 6 0 0 1 36 38 L36 45" stroke="#4caf50" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M58 65 L70 65 A 6 6 0 0 0 76 59 L76 45 A 6 6 0 0 0 64 45 L64 55" stroke="#4caf50" strokeWidth="12" strokeLinecap="round" strokeLinejoin="round" />
    <line x1="25" y1="85" x2="75" y2="85" stroke="#123f2b" strokeWidth="4" strokeLinecap="round" />
  </svg>
);
