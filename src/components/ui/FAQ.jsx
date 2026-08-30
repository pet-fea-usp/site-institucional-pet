import React, { useState } from 'react';

export const FAQ = ({ groups, tabs }) => {
  const [t, setT] = useState(0);
  const [o, setO] = useState(null);
  const items = tabs ? groups[t] : groups;
  return (
    <div>
      {tabs && (
        <div className="ftabs">
          {tabs.map((tb, i) => (
            <button key={i} className={`ftab${t === i ? ' act' : ''}`}
              onClick={() => { setT(i); setO(null); }}>{tb}</button>
          ))}
        </div>
      )}
      {items.map((it, i) => (
        <div key={i} className={`fi${o === i ? ' op' : ''}`}>
          <button className="fq" onClick={() => setO(o === i ? null : i)}>
            {it.q}<div className="fiq">+</div>
          </button>
          {o === i && <div className="fa">{it.a}</div>}
        </div>
      ))}
    </div>
  );
};
