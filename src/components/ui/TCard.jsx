import React from 'react';

export const TCard = ({ text, name, role, initials, c1, c2 }) => (
  <div className="tc">
    <div className="tq">&ldquo;</div>
    <p>{text}</p>
    <div className="tu">
      <div className="tav" style={{ background: `linear-gradient(135deg,${c1},${c2})` }}>{initials}</div>
      <div className="ti"><strong>{name}</strong><span>{role}</span></div>
    </div>
  </div>
);
