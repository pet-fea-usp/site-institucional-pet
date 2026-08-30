import React from 'react';

export const IcoSearch = ({ s = 28, c = '#FF5757' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <circle cx="11" cy="11" r="7.5" stroke={c} strokeWidth="2.2" />
    <line x1="17" y1="17" x2="25" y2="25" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
    <line x1="8"  y1="11" x2="14" y2="11" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    <line x1="11" y1="8"  x2="11" y2="14" stroke={c} strokeWidth="1.8" strokeLinecap="round" />
    <circle cx="3" cy="3" r="1" fill={c} opacity=".25" />
    <circle cx="7" cy="3" r="1" fill={c} opacity=".2"  />
    <circle cx="3" cy="7" r="1" fill={c} opacity=".2"  />
  </svg>
);

export const IcoBulb = ({ s = 28, c = '#6975C2' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <path d="M14 4C9.6 4 6 7.6 6 12C6 15.2 7.8 17.8 10.5 19.4V22H17.5V19.4C20.2 17.8 22 15.2 22 12C22 7.6 18.4 4 14 4Z"
      stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
    <line x1="10" y1="25" x2="18" y2="25" stroke={c} strokeWidth="2"   strokeLinecap="round" />
    <line x1="11" y1="22" x2="11" y2="25" stroke={c} strokeWidth="1.8" />
    <line x1="17" y1="22" x2="17" y2="25" stroke={c} strokeWidth="1.8" />
    <circle cx="24" cy="4" r="1" fill={c} opacity=".3"  />
    <circle cx="24" cy="8" r="1" fill={c} opacity=".25" />
  </svg>
);

export const IcoCoin = ({ s = 28, c = '#3AAD9D' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke={c} strokeWidth="2.2" />
    <path d="M14 7V9M14 19V21" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <path d="M10.5 11.5C10.5 10.4 11.4 9.5 12.8 9.5H15.2C16.7 9.5 17.8 10.4 17.8 11.8C17.8 13.2 16.8 14 14 14.5C11.2 15 10 15.8 10 17.2C10 18.6 11.3 19.5 13 19.5H15.2C16.6 19.5 17.5 18.6 17.5 17.5"
      stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IcoPlane = ({ s = 28, c = '#5ea2e5' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <path d="M3 14L25 3L19 25L13 16L3 14Z" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
    <line x1="13" y1="16" x2="25" y2="3" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <circle cx="3" cy="3" r="1" fill={c} opacity=".3"  />
    <circle cx="7" cy="3" r="1" fill={c} opacity=".25" />
  </svg>
);

export const IcoGlobe = ({ s = 28, c = '#5ea2e5' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke={c} strokeWidth="2.2" />
    <path d="M14 4C14 4 10 9 10 14C10 19 14 24 14 24C14 24 18 19 18 14C18 9 14 4 14 4Z" stroke={c} strokeWidth="2" />
    <line x1="4" y1="14" x2="24" y2="14" stroke={c} strokeWidth="2" />
    <path d="M5.5 9H22.5M5.5 19H22.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

export const IcoMega = ({ s = 28, c = '#F57F1F' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <path d="M4 10H8V18H4C2.9 18 2 17.1 2 16V12C2 10.9 2.9 10 4 10Z" stroke={c} strokeWidth="2.2" />
    <path d="M8 10L22 4V24L8 18V10Z" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M8 18L10 26" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="25" cy="6"  r="1" fill={c} opacity=".3"  />
    <circle cx="25" cy="10" r="1" fill={c} opacity=".25" />
  </svg>
);

export const IcoNet = ({ s = 28, c = '#004E70' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="4"  r="3" stroke={c} strokeWidth="2" />
    <circle cx="4"  cy="22" r="3" stroke={c} strokeWidth="2" />
    <circle cx="24" cy="22" r="3" stroke={c} strokeWidth="2" />
    <line x1="12"  y1="6.5"  x2="5.5"  y2="19.5" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <line x1="16"  y1="6.5"  x2="22.5" y2="19.5" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <line x1="7"   y1="22"   x2="21"   y2="22"   stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IcoWallet = ({ s = 28, c = '#28BEAC' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <rect x="1" y="7" width="26" height="18" rx="3" stroke={c} strokeWidth="2.2" />
    <path d="M6 4H22C23.1 4 24 4.9 24 6" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <line x1="1" y1="13" x2="27" y2="13" stroke={c} strokeWidth="2" />
    <circle cx="21" cy="19" r="2.5" stroke={c} strokeWidth="2" />
  </svg>
);

export const IcoUsers = ({ s = 28, c = '#004E70' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <circle cx="9"  cy="9" r="4" stroke={c} strokeWidth="2.2" />
    <circle cx="20" cy="9" r="4" stroke={c} strokeWidth="2.2" />
    <path d="M1 24C1 19.6 4.6 16 9 16C13.4 16 17 19.6 17 24" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M20 16C23 16 27 18.2 27 23"                       stroke={c} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const IcoChart = ({ s = 28, c = '#004E70' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <rect x="3"  y="14" width="5" height="10" stroke={c} strokeWidth="2" rx="1" />
    <rect x="11" y="8"  width="5" height="16" stroke={c} strokeWidth="2" rx="1" />
    <rect x="19" y="4"  width="5" height="20" stroke={c} strokeWidth="2" rx="1" />
    <line x1="1" y1="26" x2="27" y2="26" stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IcoTrophy = ({ s = 28, c = '#F57F1F' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <path d="M8 3H20V16C20 19.3 17.3 22 14 22C10.7 22 8 19.3 8 16V3Z" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M8 7H4V11C4 13.2 5.8 15 8 15"   stroke={c} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M20 7H24V11C24 13.2 22.2 15 20 15" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M10 28H18M14 22V28"              stroke={c} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

export const IcoPin = ({ s = 22, c = '#004E70' }) => (
  <svg width={s} height={s} viewBox="0 0 22 22" fill="none">
    <path d="M11 1C7.7 1 5 3.7 5 7C5 12 11 20 11 20C11 20 17 12 17 7C17 3.7 14.3 1 11 1Z"
      stroke={c} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="11" cy="7" r="2.5" stroke={c} strokeWidth="2" />
  </svg>
);

export const IcoMail = ({ s = 22, c = '#004E70' }) => (
  <svg width={s} height={s} viewBox="0 0 22 22" fill="none">
    <rect x="1" y="4" width="20" height="14" rx="3" stroke={c} strokeWidth="2" />
    <path d="M1 7L11 13L21 7" stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const IcoCam = ({ s = 32, c = 'rgba(255,255,255,.35)' }) => (
  <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
    <path d="M2 10C2 8.9 2.9 8 4 8H9L11 4H21L23 8H28C29.1 8 30 8.9 30 10V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V10Z"
      stroke={c} strokeWidth="2" />
    <circle cx="16" cy="18" r="5" stroke={c} strokeWidth="2" />
  </svg>
);

export const IcoIG = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="2" width="18" height="18" rx="5" stroke="#fff" strokeWidth="2" />
    <circle cx="11" cy="11" r="4" stroke="#fff" strokeWidth="2" />
    <circle cx="16.5" cy="5.5" r="1.2" fill="#fff" />
  </svg>
);

export const IcoLI = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="2" width="18" height="18" rx="4" stroke="#fff" strokeWidth="2" />
    <circle cx="6.5" cy="6.5" r="1.2" fill="#fff" />
    <line x1="6.5" y1="9" x2="6.5" y2="17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 9V17M10 13C10 11 11.2 9 13 9C15 9 16 11 16 13V17"
      stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IcoTT = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M13 3C13 3 13.2 8 18 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M13 3V15C13 17.2 11.2 19 9 19C6.8 19 5 17.2 5 15C5 12.8 6.8 11 9 11C9.7 11 10.4 11.2 11 11.5V3"
      stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export const IcoYT = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M19 7.5C18.7 6.4 17.8 5.6 16.7 5.3C14.8 5 11 5 11 5C11 5 7.2 5 5.3 5.4C4.2 5.7 3.3 6.5 3 7.6C2.6 9.3 2.6 11 2.6 11C2.6 11 2.6 12.7 3 14.4C3.3 15.5 4.2 16.4 5.3 16.7C7.2 17 11 17 11 17C11 17 14.8 17 16.7 16.6C17.8 16.3 18.7 15.5 19 14.4C19.4 12.7 19.4 11 19.4 11C19.4 11 19.4 9.3 19 7.5Z"
      stroke="#fff" strokeWidth="2" />
    <polygon points="9,8.5 14.5,11 9,13.5" fill="#fff" />
  </svg>
);

export const IcoFB = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M17 2H14C11.8 2 10 3.8 10 6V9H7V13H10V20H14V13H17L18 9H14V6C14 5.4 14.4 5 15 5H17V2Z"
      stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
