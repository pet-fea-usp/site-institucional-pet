import React, { useState, useEffect } from 'react';

export const Countdown = ({ target }) => {
  const [t, setT] = useState({ d: 0, h: 0, m: 0, s: 0 });
  useEffect(() => {
    const tick = () => {
      const diff = new Date(target) - Date.now();
      if (diff <= 0) return;
      setT({ d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000), s: Math.floor((diff % 60000) / 1000) });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [target]);
  const p = n => String(n).padStart(2, '0');
  return (
    <div className="cdn">
      {[['dias', t.d], ['horas', t.h], ['min', t.m], ['seg', t.s]].map(([l, v]) => (
        <div key={l} className="cdi"><span className="cdn-n">{p(v)}</span><span className="cdn-l">{l}</span></div>
      ))}
    </div>
  );
};
