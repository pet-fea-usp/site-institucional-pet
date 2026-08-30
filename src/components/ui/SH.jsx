import React from 'react';

export const SH = ({ label, title, sub, center, white }) => (
  <div className={`sh${center ? ' c' : ''}`}>
    {label && <div className={`lbl${white ? ' w' : ''}`}>{label}</div>}
    <h2 className={`sht${white ? ' w' : ''}`}>{title}</h2>
    {sub && <p className={`shs${white ? ' w' : ''}`}>{sub}</p>}
  </div>
);
