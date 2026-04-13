import React, { useState, useEffect } from 'react';

// ═══════════════════════════════════════════════════════
// PETFEA USP — App.jsx  (CSS → styles.css separado)
// Páginas: Home | Sobre Nós | Blog | Feira | Pesquisa | Micro | Guiar
// ═══════════════════════════════════════════════════════

// ─── LOGO SVG ─────────────────────────────────────────
const Logo = ({ ht = 36, white = false }) => {
  const b  = white ? '#fff'                  : '#004E70';
  const or = white ? 'rgba(255,255,255,.8)'  : '#F57F1F';
  const gt = white ? 'rgba(255,255,255,.4)'  : '#6B7280';
  return (
    <svg height={ht} viewBox="0 0 200 62" fill="none" style={{ flexShrink: 0 }}>
      {/* teal mark — top loop */}
      <path d="M18 8 C10 2 2 9 3 17 C4 24 11 28 18 25 C24 22 27 15 24 8 C21 3 13 2 9 7"
        stroke={b} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* teal mark — bottom loop */}
      <path d="M10 32 C3 37 1 45 8 49 C15 53 24 47 22 40 C20 33 13 31 10 35"
        stroke={b} strokeWidth="3" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* teal connector */}
      <path d="M18 25 C15 27 12 29 10 35"
        stroke={b} strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* orange S-curve */}
      <path d="M9 7 C16 0 30 3 32 12 C34 20 27 27 17 26 C9 25 7 31 10 38 C13 44 22 47 26 43"
        stroke={or} strokeWidth="3.2" fill="none" strokeLinecap="round" />
      {/* wordmark */}
      <text x="44" y="32" fontFamily="League Spartan,Arial Black,sans-serif" fontSize="30" fontWeight="900" fill={b}>PET</text>
      <text x="96" y="32" fontFamily="League Spartan,Arial Black,sans-serif" fontSize="30" fontWeight="900" fill={or}>FEA</text>
      <text x="97" y="47" fontFamily="League Spartan,Arial Black,sans-serif" fontSize="11" fontWeight="700" fill={gt} letterSpacing="4">USP</text>
    </svg>
  );
};

// ─── TORN PAPER DIVIDER ───────────────────────────────
const Torn = ({ fill = '#fff' }) => (
  <div className="torn">
    <svg viewBox="0 0 1200 30" preserveAspectRatio="none">
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

// ─── HALFTONE SVG ICONS ───────────────────────────────
const IcoSearch = ({ s = 28, c = '#FF5757' }) => (
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

const IcoBulb = ({ s = 28, c = '#6975C2' }) => (
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

const IcoCoin = ({ s = 28, c = '#3AAD9D' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke={c} strokeWidth="2.2" />
    <path d="M14 7V9M14 19V21" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <path d="M10.5 11.5C10.5 10.4 11.4 9.5 12.8 9.5H15.2C16.7 9.5 17.8 10.4 17.8 11.8C17.8 13.2 16.8 14 14 14.5C11.2 15 10 15.8 10 17.2C10 18.6 11.3 19.5 13 19.5H15.2C16.6 19.5 17.5 18.6 17.5 17.5"
      stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IcoPlane = ({ s = 28, c = '#5ea2e5' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <path d="M3 14L25 3L19 25L13 16L3 14Z" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
    <line x1="13" y1="16" x2="25" y2="3" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <circle cx="3" cy="3" r="1" fill={c} opacity=".3"  />
    <circle cx="7" cy="3" r="1" fill={c} opacity=".25" />
  </svg>
);

const IcoGlobe = ({ s = 28, c = '#5ea2e5' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="10" stroke={c} strokeWidth="2.2" />
    <path d="M14 4C14 4 10 9 10 14C10 19 14 24 14 24C14 24 18 19 18 14C18 9 14 4 14 4Z" stroke={c} strokeWidth="2" />
    <line x1="4" y1="14" x2="24" y2="14" stroke={c} strokeWidth="2" />
    <path d="M5.5 9H22.5M5.5 19H22.5" stroke={c} strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

const IcoMega = ({ s = 28, c = '#F57F1F' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <path d="M4 10H8V18H4C2.9 18 2 17.1 2 16V12C2 10.9 2.9 10 4 10Z" stroke={c} strokeWidth="2.2" />
    <path d="M8 10L22 4V24L8 18V10Z" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M8 18L10 26" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
    <circle cx="25" cy="6"  r="1" fill={c} opacity=".3"  />
    <circle cx="25" cy="10" r="1" fill={c} opacity=".25" />
  </svg>
);

const IcoNet = ({ s = 28, c = '#004E70' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="4"  r="3" stroke={c} strokeWidth="2" />
    <circle cx="4"  cy="22" r="3" stroke={c} strokeWidth="2" />
    <circle cx="24" cy="22" r="3" stroke={c} strokeWidth="2" />
    <line x1="12"  y1="6.5"  x2="5.5"  y2="19.5" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <line x1="16"  y1="6.5"  x2="22.5" y2="19.5" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <line x1="7"   y1="22"   x2="21"   y2="22"   stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IcoWallet = ({ s = 28, c = '#28BEAC' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <rect x="1" y="7" width="26" height="18" rx="3" stroke={c} strokeWidth="2.2" />
    <path d="M6 4H22C23.1 4 24 4.9 24 6" stroke={c} strokeWidth="2" strokeLinecap="round" />
    <line x1="1" y1="13" x2="27" y2="13" stroke={c} strokeWidth="2" />
    <circle cx="21" cy="19" r="2.5" stroke={c} strokeWidth="2" />
  </svg>
);

const IcoUsers = ({ s = 28, c = '#004E70' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <circle cx="9"  cy="9" r="4" stroke={c} strokeWidth="2.2" />
    <circle cx="20" cy="9" r="4" stroke={c} strokeWidth="2.2" />
    <path d="M1 24C1 19.6 4.6 16 9 16C13.4 16 17 19.6 17 24" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M20 16C23 16 27 18.2 27 23"                       stroke={c} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const IcoChart = ({ s = 28, c = '#004E70' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <rect x="3"  y="14" width="5" height="10" stroke={c} strokeWidth="2" rx="1" />
    <rect x="11" y="8"  width="5" height="16" stroke={c} strokeWidth="2" rx="1" />
    <rect x="19" y="4"  width="5" height="20" stroke={c} strokeWidth="2" rx="1" />
    <line x1="1" y1="26" x2="27" y2="26" stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IcoTrophy = ({ s = 28, c = '#F57F1F' }) => (
  <svg width={s} height={s} viewBox="0 0 28 28" fill="none">
    <path d="M8 3H20V16C20 19.3 17.3 22 14 22C10.7 22 8 19.3 8 16V3Z" stroke={c} strokeWidth="2.2" strokeLinejoin="round" />
    <path d="M8 7H4V11C4 13.2 5.8 15 8 15"   stroke={c} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M20 7H24V11C24 13.2 22.2 15 20 15" stroke={c} strokeWidth="2.2" strokeLinecap="round" />
    <path d="M10 28H18M14 22V28"              stroke={c} strokeWidth="2.2" strokeLinecap="round" />
  </svg>
);

const IcoPin = ({ s = 22, c = '#004E70' }) => (
  <svg width={s} height={s} viewBox="0 0 22 22" fill="none">
    <path d="M11 1C7.7 1 5 3.7 5 7C5 12 11 20 11 20C11 20 17 12 17 7C17 3.7 14.3 1 11 1Z"
      stroke={c} strokeWidth="2" strokeLinejoin="round" />
    <circle cx="11" cy="7" r="2.5" stroke={c} strokeWidth="2" />
  </svg>
);

const IcoMail = ({ s = 22, c = '#004E70' }) => (
  <svg width={s} height={s} viewBox="0 0 22 22" fill="none">
    <rect x="1" y="4" width="20" height="14" rx="3" stroke={c} strokeWidth="2" />
    <path d="M1 7L11 13L21 7" stroke={c} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IcoCam = ({ s = 32, c = 'rgba(255,255,255,.35)' }) => (
  <svg width={s} height={s} viewBox="0 0 32 32" fill="none">
    <path d="M2 10C2 8.9 2.9 8 4 8H9L11 4H21L23 8H28C29.1 8 30 8.9 30 10V26C30 27.1 29.1 28 28 28H4C2.9 28 2 27.1 2 26V10Z"
      stroke={c} strokeWidth="2" />
    <circle cx="16" cy="18" r="5" stroke={c} strokeWidth="2" />
  </svg>
);

// Social icons
const IcoIG = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="2" width="18" height="18" rx="5" stroke="#fff" strokeWidth="2" />
    <circle cx="11" cy="11" r="4" stroke="#fff" strokeWidth="2" />
    <circle cx="16.5" cy="5.5" r="1.2" fill="#fff" />
  </svg>
);
const IcoLI = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <rect x="2" y="2" width="18" height="18" rx="4" stroke="#fff" strokeWidth="2" />
    <circle cx="6.5" cy="6.5" r="1.2" fill="#fff" />
    <line x1="6.5" y1="9" x2="6.5" y2="17" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M10 9V17M10 13C10 11 11.2 9 13 9C15 9 16 11 16 13V17"
      stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IcoTT = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M13 3C13 3 13.2 8 18 9" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
    <path d="M13 3V15C13 17.2 11.2 19 9 19C6.8 19 5 17.2 5 15C5 12.8 6.8 11 9 11C9.7 11 10.4 11.2 11 11.5V3"
      stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
const IcoYT = () => (
  <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
    <path d="M19 7.5C18.7 6.4 17.8 5.6 16.7 5.3C14.8 5 11 5 11 5C11 5 7.2 5 5.3 5.4C4.2 5.7 3.3 6.5 3 7.6C2.6 9.3 2.6 11 2.6 11C2.6 11 2.6 12.7 3 14.4C3.3 15.5 4.2 16.4 5.3 16.7C7.2 17 11 17 11 17C11 17 14.8 17 16.7 16.6C17.8 16.3 18.7 15.5 19 14.4C19.4 12.7 19.4 11 19.4 11C19.4 11 19.4 9.3 19 7.5Z"
      stroke="#fff" strokeWidth="2" />
    <polygon points="9,8.5 14.5,11 9,13.5" fill="#fff" />
  </svg>
);

// ─── SHARED COMPONENTS ────────────────────────────────

const SH = ({ label, title, sub, center, white }) => (
  <div className={`sh${center ? ' c' : ''}`}>
    {label && <div className={`lbl${white ? ' w' : ''}`}>{label}</div>}
    <h2 className={`sht${white ? ' w' : ''}`}>{title}</h2>
    {sub && <p className={`shs${white ? ' w' : ''}`}>{sub}</p>}
  </div>
);

const PhotoPh = ({ aspect = 1.5, label = 'Adicionar foto aqui', dark = false }) => (
  <div className={dark ? 'ph ph-dark' : 'ph'} style={{ aspectRatio: aspect }}>
    <IcoCam s={32} c={dark ? '#9CCBD5' : 'rgba(255,255,255,.35)'} />
    <span className={dark ? 'ph-lbl ph-lbl-dark' : 'ph-lbl'}>{label}</span>
  </div>
);

const TCard = ({ text, name, role, initials, c1, c2 }) => (
  <div className="tc">
    <div className="tq">&ldquo;</div>
    <p>{text}</p>
    <div className="tu">
      <div className="tav" style={{ background: `linear-gradient(135deg,${c1},${c2})` }}>{initials}</div>
      <div className="ti"><strong>{name}</strong><span>{role}</span></div>
    </div>
  </div>
);

const FAQ = ({ groups, tabs }) => {
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

const Countdown = ({ target }) => {
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

// ─── HEADER ───────────────────────────────────────────
const Header = ({ page, go }) => {
  const [drop, setDrop] = useState(false);
  const [mob,  setMob]  = useState(false);
  const projs = [
    { id: 'pesquisa', label: 'Projeto de Pesquisa',      c: '#FF5757' },
    { id: 'micro',    label: 'Aprender para Empreender', c: '#6975C2' },
    { id: 'guiar',    label: 'GUIAR',                    c: '#3AAD9D' },
    { id: 'feira',    label: 'Feira de Intercâmbio',     c: '#5ea2e5' },
  ];
  const nav  = p => { go(p); setMob(false); setDrop(false); };
  const isP  = ['pesquisa', 'micro', 'guiar', 'feira'].includes(page);

  return (
    <header className="hdr">
      <div className="hdr-in">
        {/* Logo */}
        <div style={{ cursor: 'pointer' }} onClick={() => nav('home')}>
          <Logo ht={34} />
        </div>

        {/* Desktop nav */}
        <nav className="nav">
          <button className={`nb${page === 'home' ? ' act' : ''}`} onClick={() => nav('home')}>Início</button>

          <div className="ni" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button className={`nb${isP ? ' act' : ''}`}>Projetos ▾</button>
            {drop && (
              <div className="drop">
                {projs.map(p => (
                  <div key={p.id} className="di" onClick={() => nav(p.id)}>
                    <div className="ddot" style={{ background: p.c }} />
                    {p.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          <button className={`nb${page === 'sobre' ? ' act' : ''}`} onClick={() => nav('sobre')}>Sobre Nós</button>
          <button className={`nb${page === 'blog'  ? ' act' : ''}`} onClick={() => nav('blog')}>Blog</button>
          <button className="nb ncta" onClick={() => nav('sobre')}>Processo Seletivo</button>
        </nav>

        {/* Hamburger */}
        <button className="hbg" onClick={() => setMob(!mob)}>
          <span /><span /><span />
        </button>
      </div>

      {/* Mobile nav */}
      <nav className={`mnav${mob ? ' open' : ''}`}>
        <div className="mi" onClick={() => nav('home')}>Início</div>
        <div className="mi">Projetos</div>
        {projs.map(p => (
          <div key={p.id} className="msi" onClick={() => nav(p.id)}>
            <div style={{ width: 8, height: 8, borderRadius: '50%', background: p.c, flexShrink: 0 }} />
            {p.label}
          </div>
        ))}
        <div className="mdiv" />
        <div className="mi" onClick={() => nav('sobre')}>Sobre Nós</div>
        <div className="mi" onClick={() => nav('blog')}>Blog</div>
        <div className="mcta" onClick={() => nav('sobre')}>Processo Seletivo →</div>
      </nav>
    </header>
  );
};

// ─── FOOTER ───────────────────────────────────────────
const Footer = ({ go }) => (
  <footer className="ftr">
    <div className="ctn">
      <div className="fg">
        {/* Brand */}
        <div>
          <Logo ht={36} white />
          <p style={{ fontSize: 14, color: 'rgba(255,255,255,.6)', lineHeight: 1.8, margin: '14px 0 22px', maxWidth: 260 }}>
            Programa de Educação Tutorial da FEA-USP — pesquisa, ensino e extensão a serviço da sociedade desde 1994.
          </p>
          <div style={{ display: 'flex', gap: 8 }}>
            {[IcoIG, IcoLI, IcoTT, IcoYT].map((IC, i) => (
              <div key={i} className="soc"><IC /></div>
            ))}
          </div>
        </div>

        {/* Projetos */}
        <div>
          <div className="fh5">Projetos</div>
          {[['pesquisa', 'Projeto de Pesquisa'], ['micro', 'Aprender para Empreender'], ['guiar', 'GUIAR'], ['feira', 'Feira de Intercâmbio']].map(([id, lb]) => (
            <span key={id} className="fli" onClick={() => go(id)}>{lb}</span>
          ))}
        </div>

        {/* Contatos */}
        <div>
          <div className="fh5">Contatos</div>
          {[['Instagram', '@petfeausp'], ['LinkedIn', 'PET FEA USP'], ['TikTok', '@petfeausp'], ['E-mail', 'feausppet@gmail.com']].map(([k, v]) => (
            <span key={k} className="fli">
              {v}<span style={{ display: 'block', fontSize: 11, color: 'rgba(255,255,255,.38)' }}>{k}</span>
            </span>
          ))}
        </div>

        {/* Endereço */}
        <div>
          <div className="fh5">Endereço</div>
          <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.7)', lineHeight: 1.7 }}>
            Av. Prof. Luciano Gualberto, 908<br />Butantã, São Paulo/SP<br />05508-010
          </p>
        </div>
      </div>

      <div className="fbot">
        <p>© 2025 PET FEA USP — Todos os direitos reservados</p>
        <span>Política de Privacidade</span>
      </div>
    </div>
  </footer>
);

// ═══════════════════════════════════════════════════════
// PÁGINAS
// ═══════════════════════════════════════════════════════

// ─── HOME ─────────────────────────────────────────────
const Home = ({ go }) => {
  const faqGroups = [
    [
      { q: 'O que é o PET?',               a: 'O PET é uma entidade horizontal ligada ao MEC que leva à sociedade o tripé universitário — pesquisa, ensino e extensão — por meio dos projetos. Em 30 anos formamos líderes comprometidos com impacto social.' },
      { q: 'Quais as vantagens do PET?',   a: 'Projetos com impacto social real, desenvolvimento de habilidades técnicas e interpessoais, mentoria de professores e ex-membros, networking com empresas e organizações parceiras.' },
      { q: 'Quais são as coordenadorias?', a: 'O PET possui três coordenadorias internas: Marketing (MKT), Relações Externas (REX) e Finanças & Infraestrutura (FINFRA), além dos quatro projetos de impacto social.' },
    ],
    [
      { q: 'Quando ocorre o PS?',           a: 'O PS ocorre anualmente, no início do 2° semestre (ago/set). Fique de olho nas redes @petfeausp!' },
      { q: 'Quem pode se inscrever?',       a: 'Todos os alunos regularmente matriculados na FEA-USP (Economia, Administração, Contabilidade e Atuária).' },
      { q: 'Como é o Processo Seletivo?',   a: 'Etapas: análise de currículo, redação/case, dinâmica em grupo e entrevista individual. Detalhes são divulgados nas redes e no site.' },
    ],
  ];

  const projs = [
    { id: 'pesquisa', Ico: IcoSearch, tag: 'Pesquisa', c: '#FF5757', bg: 'rgba(255,87,87,.1)',   title: 'Projeto de Pesquisa',        desc: 'Iniciação científica e produção acadêmica desde 1994. Membros escolhem temas e publicam pesquisas anualmente sob orientação de professores da FEA.' },
    { id: 'micro',    Ico: IcoBulb,   tag: 'Micro',    c: '#6975C2', bg: 'rgba(105,117,194,.1)', title: 'Aprender para Empreender',   desc: 'Consultoria estratégica gratuita para MEIs. Em parceria com o SEBRAE — mais de 20 microempreendedores atendidos, 26 membros capacitados.' },
    { id: 'guiar',    Ico: IcoCoin,   tag: 'GUIAR',    c: '#3AAD9D', bg: 'rgba(58,173,157,.1)',  title: 'GUIAR',                      desc: 'Democratizando o acesso à Educação Financeira. Em 2025, impactamos 120 alunos do ensino médio com avaliação média de 4,8/5.' },
    { id: 'feira',    Ico: IcoPlane,  tag: 'Feira',    c: '#5ea2e5', bg: 'rgba(94,162,229,.1)',  title: 'Feira de Intercâmbio',       desc: 'A maior feira de intercâmbio da USP com 480+ participantes em 2024. Conectando estudantes a consulados e universidades do mundo.' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero halftone">
        <div className="hb hb1" /><div className="hb hb2" />
        <div className="ctn hero-c">
          <div className="two" style={{ alignItems: 'center' }}>
            <div>
              <div className="hbdg afu">✦ 30 anos de impacto social</div>
              <h1 className="afu d1">Levando o conhecimento da <span className="ac">FEA-USP</span> a quem mais precisa</h1>
              <p className="hlead afu d2">O PET FEA USP conecta estudantes a projetos de impacto real — pesquisa científica, consultoria para MEIs, educação financeira e intercâmbio acadêmico.</p>
              <div className="hacts afu d3">
                <button className="btn bp blg" onClick={() => go('sobre')}>Conheça o PET →</button>
                <button className="btn bgw blg" onClick={() => go('sobre')}>Processo Seletivo</button>
              </div>
            </div>
            {/* ↓ Substitua por <img src="..." /> quando tiver a foto */}
            <PhotoPh aspect={0.8} label="Foto da equipe / evento" />
          </div>
        </div>
      </section>

      <Torn fill="var(--off)" />

      {/* PROJETOS */}
      <section className="sec bg-off">
        <div className="ctn">
          <SH label="Nossos Projetos" title="Quatro frentes de impacto"
            sub="Pesquisa, consultoria, educação financeira e intercâmbio — cada projeto representa um pilar do tripé universitário." />
          <div className="pgrid">
            {projs.map(p => (
              <div key={p.id} className="pc" onClick={() => go(p.id)}>
                <div className="pct">
                  <div className="pico" style={{ background: p.bg }}><p.Ico s={26} c={p.c} /></div>
                  <div>
                    <div style={{ fontFamily: 'var(--fh)', fontSize: 10.5, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1.5, color: p.c, marginBottom: 3 }}>{p.tag}</div>
                    <div style={{ fontSize: 12, color: 'var(--gr)' }}>PET FEA USP</div>
                  </div>
                </div>
                <div className="pcb">
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="plink" style={{ color: p.c }}>Saiba mais →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Torn fill="var(--p)" />

      {/* SOBRE BREVE */}
      <section className="sec" style={{ background: 'var(--p)' }}>
        <div className="ctn">
          <div className="two">
            <div>
              <SH label="Sobre o PET" title="O que é o PET FEA USP?" white
                sub="Uma entidade horizontal que há 30 anos forma líderes comprometidos com pesquisa, ensino e extensão universitária." />
              <p style={{ color: 'rgba(255,255,255,.72)', fontSize: 15.5, lineHeight: 1.8, marginBottom: 16 }}>
                Ligado ao MEC, o PET é composto por estudantes da FEA-USP que acreditam que o conhecimento deve ser democratizado.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
                <button className="btn bp" onClick={() => go('sobre')}>Conheça a equipe</button>
                <button className="btn bgw" onClick={() => go('sobre')}>Nossos valores</button>
              </div>
            </div>
            {/* Estatísticas — números brancos em fundo azul */}
            <div className="sbar" style={{ gridTemplateColumns: 'repeat(2,1fr)', background: 'rgba(255,255,255,.06)', borderRadius: 22, overflow: 'hidden' }}>
              {[['30+', 'Anos de existência'], ['2000+', 'Pessoas impactadas'], ['4', 'Projetos ativos'], ['36', 'Membros ativos']].map(([n, l]) => (
                <div key={l} className="si" style={{ borderBottom: '1px solid rgba(255,255,255,.08)', borderRight: '1px solid rgba(255,255,255,.08)' }}>
                  <div className="snum">{n}</div>
                  <div className="slbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Torn fill="#fff" />

      {/* FAQ + CONTATO */}
      <section className="sec">
        <div className="ctn">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 56 }}>
            {/* FAQ */}
            <div>
              <SH label="FAQ" title="Perguntas frequentes" />
              <FAQ groups={faqGroups} tabs={['Sobre o PET', 'Sobre o PS']} />
            </div>

            {/* Contato */}
            <div>
              <SH label="Contato" title="Fale com a gente" />
              <div className="cif">
                <div className="cico-w"><IcoMail s={20} c="#004E70" /></div>
                <div><h4>E-mail</h4><p>feausppet@gmail.com</p></div>
              </div>
              <div className="cif">
                <div className="cico-w"><IcoPin s={20} c="#004E70" /></div>
                <div><h4>Endereço</h4><p>Av. Prof. Luciano Gualberto, 908 — Butantã, SP</p></div>
              </div>
              <div className="fr" style={{ marginTop: 10 }}>
                <div className="fg2"><label className="flbl">Nome</label><input className="finp" placeholder="Seu nome" /></div>
                <div className="fg2"><label className="flbl">Sobrenome</label><input className="finp" placeholder="Sobrenome" /></div>
                <div className="fg2"><label className="flbl">E-mail</label><input className="finp" type="email" placeholder="seu@email.com" /></div>
                <div className="fg2"><label className="flbl">Assunto</label><input className="finp" placeholder="Assunto" /></div>
                <div className="fg2 s2"><label className="flbl">Mensagem</label><textarea className="fta" placeholder="Sua mensagem..." /></div>
              </div>
              <button className="btn bp bfull" style={{ marginTop: 14 }}>Enviar mensagem →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ─── SOBRE NÓS ────────────────────────────────────────
const Sobre = ({ go }) => {
  const [filter, setFilter] = useState('Todos');

  const members = [
    { name: 'Gabriela Saito Pereira',      role: 'Líder',    coord: ('MKT', 'Micro'),   ini: 'AS', c1: '#004E70', c2: '#28BEAC' },
    { name: 'Bruno Costa',    role: 'VP de Projetos',coord: 'Gestão',   ini: 'BC', c1: '#F57F1F', c2: '#F7BC1E' },
    { name: 'Carla Nunes',    role: 'Líder GUIAR',   coord: 'GUIAR',    ini: 'CN', c1: '#3AAD9D', c2: '#58C5B0' },
    { name: 'Diego Melo',     role: 'Líder Micro',   coord: 'Micro',    ini: 'DM', c1: '#6975C2', c2: '#9CCBD5' },
    { name: 'Elena Faria',    role: 'Líder Pesquisa',coord: 'Pesquisa', ini: 'EF', c1: '#FF5757', c2: '#C4522E' },
    { name: 'Felipe Ramos',   role: 'Líder Feira',   coord: 'Feira',    ini: 'FR', c1: '#5ea2e5', c2: '#004E70' },
    { name: 'Gabi Lima',      role: 'MKT',           coord: 'MKT',      ini: 'GL', c1: '#F57F1F', c2: '#F7BC1E' },
    { name: 'Henrique Souza', role: 'REX',           coord: 'REX',      ini: 'HS', c1: '#004E70', c2: '#28BEAC' },
    { name: 'Isabela Torres', role: 'FINFRA',        coord: 'FINFRA',   ini: 'IT', c1: '#28BEAC', c2: '#9CCBD5' },
    { name: 'João Pedro',     role: 'Membro GUIAR',  coord: 'GUIAR',    ini: 'JP', c1: '#3AAD9D', c2: '#7DD856' },
  ];
  const filters = ['Todos', 'Gestão', 'Pesquisa', 'Micro', 'GUIAR', 'Feira', 'MKT', 'REX', 'FINFRA'];
  const shown   = filter === 'Todos' ? members : members.filter(m => m.coord === filter);

  const coordenadorias = [
    { Ico: IcoMega,   bg: 'rgba(245,127,31,.1)',  c: '#F57F1F', name: 'Marketing',              tag: 'MKT',    desc: 'Responsável pela identidade visual, comunicação e redes sociais do PET. Produz conteúdo gráfico, vídeos e materiais institucionais, garantindo consistência de marca em todos os projetos.' },
    { Ico: IcoNet,    bg: 'rgba(0,78,112,.1)',     c: '#004E70', name: 'Relações Externas',      tag: 'REX',    desc: 'Gerencia parcerias institucionais, relacionamento com empresas, ONGs e alumni. Organiza eventos de networking, palestras institucionais e cuida do relacionamento com entidades externas.' },
    { Ico: IcoWallet, bg: 'rgba(40,190,172,.1)',   c: '#28BEAC', name: 'Finanças e Infraestrutura', tag: 'FINFRA', desc: 'Administra o orçamento, subsídios e bolsas dos membros. Cuida da infraestrutura física (sala, equipamentos) e realiza prestação de contas junto à FEA-USP e ao MEC.' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero halftone" style={{ padding: '70px 0' }}>
        <div className="hb hb1" /><div className="hb hb2" />
        <div className="ctn hero-c afu">
          <div className="hbdg">✦ PET FEA USP</div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,50px)' }}>Quem Somos</h1>
          <p className="hlead">Conheça a história, os valores e as pessoas que constroem o PET há mais de 30 anos.</p>
        </div>
      </section>

      <Torn fill="var(--off)" />

      {/* HISTÓRIA + TRIPÉ */}
      <section className="sec bg-off">
        <div className="ctn">
          <div className="two-t">
            <div>
              <SH label="Nossa História" title="30 anos transformando vidas" />
              <p style={{ color: 'var(--gr)', fontSize: 15.5, lineHeight: 1.8, marginBottom: 12 }}>
                O PET FEA USP é um Programa de Educação Tutorial ligado ao MEC, presente na FEA-USP desde 1994. Em 30 anos,
                todos os membros tiveram em comum: alunos da FEA que queriam gerar{' '}
                <strong style={{ color: 'var(--o)' }}>impacto social</strong>.
              </p>
              <p style={{ color: 'var(--gr)', fontSize: 15.5, lineHeight: 1.8 }}>
                Como entidade horizontal, valorizamos a pluralidade de ideias e a democratização do conhecimento — levando
                à sociedade o tripé universitário: pesquisa, ensino e extensão.
              </p>
            </div>
            <div className="trg">
              {[
                { Ico: IcoSearch, c: '#FF5757', t: 'Pesquisa', d: 'Produção científica de alto nível com orientação de professores da FEA.' },
                { Ico: IcoMega,   c: '#F57F1F', t: 'Ensino',   d: 'Workshops, palestras e conteúdo digital compartilhando o conhecimento.' },
                { Ico: IcoUsers,  c: '#004E70', t: 'Extensão', d: 'GUIAR e Micro levam o conhecimento universitário a quem mais precisa.' },
              ].map(tr => (
                <div key={tr.t} className="trc">
                  <tr.Ico s={30} c={tr.c} />
                  <h3>{tr.t}</h3><p>{tr.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALORES */}
      <section className="sec">
        <div className="ctn">
          <SH label="Nossa Essência" title="Nossos Valores" center />
          <div className="vg">
            {[
              { n: 1, t: 'Mente sã, corpo são',          d: 'Equilíbrio entre bem-estar mental e físico. Promovemos um ambiente saudável de crescimento intelectual e emocional.' },
              { n: 2, t: 'Democratizar o Conhecimento',  d: 'É um dever retribuir à sociedade que financia nossa formação. Agimos em prol de uma comunidade mais igualitária.' },
              { n: 3, t: 'Ajudar quem Precisa',          d: 'O conhecimento é um direito de todos. Por meio dos projetos, incentivamos a troca de saberes além do meio acadêmico.' },
              { n: 4, t: 'Pluralidade de Ideias',        d: 'Como organização horizontal, a diversidade de pensamentos enriquece debates e incentiva o respeito às diferenças.' },
            ].map(v => (
              <div key={v.n} className="vc">
                <div className="vnum">{v.n}</div>
                <h3>{v.t}</h3><p>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Torn fill="var(--off)" />

      {/* COORDENADORIAS */}
      <section className="sec bg-off">
        <div className="ctn">
          <SH label="Estrutura Interna" title="Coordenadorias"
            sub="Além dos projetos de impacto social, o PET é sustentado por três coordenadorias que garantem o funcionamento da entidade."
            center />
          <div className="cog">
            {coordenadorias.map(cd => (
              <div key={cd.tag} className="cocard">
                <div className="coico" style={{ background: cd.bg }}><cd.Ico s={26} c={cd.c} /></div>
                <h3>{cd.name}</h3>
                <span className="cotag" style={{ color: cd.c }}>{cd.tag}</span>
                <p>{cd.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEMBROS */}
      <section className="sec">
        <div className="ctn">
          <SH label="A Equipe" title="Membros & Alumnis"
            sub="Filtre por coordenadoria ou projeto e conheça as pessoas que fazem o PET acontecer." />
          <div className="flr">
            {filters.map(fb => (
              <button key={fb} className={`fbtn${filter === fb ? ' act' : ''}`} onClick={() => setFilter(fb)}>{fb}</button>
            ))}
          </div>
          <div className="mg">
            {shown.map((m, i) => (
              <div key={i} className="mc">
                <div className="mav" style={{ background: `linear-gradient(135deg,${m.c1},${m.c2})` }}>{m.ini}</div>
                <div className="minf"><h4>{m.name}</h4><span>{m.role}</span></div>
              </div>
            ))}
          </div>

          {/* Galeria de fotos */}
          <div style={{ marginTop: 44 }}>
            <SH label="Galeria" title="Nosso dia a dia" />
            <div className="gal">
              {/* ↓ Substitua cada PhotoPh por <img src="..." /> quando tiver as fotos */}
              {Array.from({ length: 8 }).map((_, i) => (
                <PhotoPh key={i} aspect={1} label="" dark />
              ))}
            </div>
          </div>

          {/* PS Banner */}
          <div style={{ marginTop: 44 }}>
            <div className="psb">
              <div>
                <h3>Quer fazer parte do PET?</h3>
                <p>As inscrições para o Processo Seletivo abrem anualmente. Não perca a oportunidade!</p>
              </div>
              <button className="btn bw">Quero me inscrever →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// ─── BLOG ─────────────────────────────────────────────
const Blog = () => {
  const posts = [
    { Ico: IcoChart,  bg: 'rgba(0,78,112,.1)',    c: '#004E70', tag: 'Pesquisa', title: 'Impacto das políticas de crédito em MEIs de São Paulo',       date: 'Mar 2025', autor: 'Elena Faria',  desc: 'Pesquisa dos membros analisa o acesso ao crédito formal por MEIs paulistanos.' },
    { Ico: IcoPlane,  bg: 'rgba(94,162,229,.1)',  c: '#5ea2e5', tag: 'Feira',    title: 'Feira de Intercâmbio 2024: mais de 480 participantes',         date: 'Out 2024', autor: 'Felipe Ramos', desc: 'A décima edição reuniu estudantes, consulados e agências num evento histórico.' },
    { Ico: IcoCoin,   bg: 'rgba(58,173,157,.1)',  c: '#3AAD9D', tag: 'GUIAR',   title: 'GUIAR nas Etecs: 120 alunos, nota 4,8/5',                      date: 'Set 2025', autor: 'Carla Nunes',  desc: 'Parceria com Etecs Cepam e Prof. Camargo Aranha levou educação financeira ao EM.' },
    { Ico: IcoBulb,   bg: 'rgba(105,117,194,.1)', c: '#6975C2', tag: 'Micro',   title: 'Parceria com SEBRAE amplia o Aprender para Empreender',         date: 'Ago 2025', autor: 'Diego Melo',   desc: 'O Micro firma parceria para ampliar o programa de consultoria estratégica para MEIs.' },
    { Ico: IcoTrophy, bg: 'rgba(245,127,31,.08)', c: '#F57F1F', tag: 'PET',     title: 'PET FEA USP comemora 30 anos de existência',                   date: 'Jul 2024', autor: 'Redação PET',  desc: 'Em 2024, o PET celebrou três décadas de impacto social e formação de líderes.' },
    { Ico: IcoGlobe,  bg: 'rgba(94,162,229,.1)',  c: '#5ea2e5', tag: 'GUIAR',   title: 'Parceria com Instituto Vivendas e Lacoste Foundation',          date: 'Jun 2025', autor: 'Carla Nunes',  desc: 'O GUIAR firmou colaboração para levar educação financeira a jovens da ONG.' },
  ];

  return (
    <>
      <section className="hero halftone" style={{ padding: '70px 0' }}>
        <div className="hb hb1" />
        <div className="ctn hero-c afu">
          <div className="hbdg">✦ Blog & Notícias</div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,48px)' }}>Novidades do PET</h1>
          <p className="hlead">Acompanhe as últimas notícias e conquistas dos nossos projetos.</p>
        </div>
      </section>

      <Torn fill="#fff" />

      <section className="sec">
        <div className="ctn">
          <div className="bgrd">
            {posts.map((p, i) => (
              <div key={i} className="bc">
                <div className="bth" style={{ background: p.bg }}><p.Ico s={48} c={p.c} /></div>
                <div className="bb">
                  <div className="btag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="bm"><span>Por {p.autor}</span><span>{p.date}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

// ─── FEIRA DE INTERCÂMBIO ─────────────────────────────
const Feira = () => (
  <>
    {/* HERO */}
    <section style={{ background: '#05052D', color: '#fff', padding: '78px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(94,162,229,.1) 1.5px,transparent 1.5px)', backgroundSize: '16px 16px' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 70% 50%,rgba(94,162,229,.2) 0%,transparent 60%)' }} />
      <div className="ctn" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 22 }}>
          <div style={{ width: 68, height: 68, borderRadius: 18, background: 'rgba(94,162,229,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IcoGlobe s={34} c="#5ea2e5" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: '#5ea2e5', marginBottom: 5 }}>PET FEA USP</div>
            <h1 style={{ fontSize: 'clamp(24px,4vw,50px)' }}>Feira de Intercâmbio</h1>
          </div>
        </div>
        <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.72)', maxWidth: 520, lineHeight: 1.8, marginBottom: 28 }}>
          A maior feira de intercâmbio da USP, conectando estudantes a oportunidades internacionais desde 2014.
        </p>
        <div className="hacts">
          <button className="btn bp">Inscreva-se 2026 →</button>
          <button className="btn bgw">Baixar edital</button>
        </div>
      </div>
    </section>

    <Torn fill="#004E70" />

    {/* COUNTDOWN + STATS */}
    <section style={{ background: '#004E70', padding: '56px 0' }}>
      <div className="ctn">
        <div className="two">
          <div>
            <div className="lbl w">Próxima Edição</div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(20px,2.6vw,30px)', margin: '0 0 12px' }}>Feira de Intercâmbio 2026</h2>
            <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.75, marginBottom: 26 }}>Setembro de 2026 — FEA-USP.</p>
            <Countdown target="2026-09-15T09:00:00" />
          </div>
          {/* Números em BRANCO no fundo azul */}
          <div className="ig">
            {[['480+', 'Participantes em 2024'], ['12+', 'Palestrantes'], ['18+', 'Stands parceiros'], ['10+', 'Anos de história']].map(([n, l]) => (
              <div key={l} className="ic"><div className="in">{n}</div><div className="il">{l}</div></div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <Torn fill="#fff" />

    {/* SOBRE */}
    <section className="sec">
      <div className="ctn">
        <div className="two">
          <div>
            <SH label="Sobre a Feira" title="O que é a Feira de Intercâmbio?" />
            <p style={{ color: 'var(--gr)', lineHeight: 1.8, marginBottom: 14 }}>
              O PET promove anualmente a maior Feira de Intercâmbio da USP, com parceria de empresas, consulados e universidades.
              Iniciada em 2014 como "Dia do Intercâmbio", hoje conta com palestras, estandes e o Manual de Intercâmbio gratuito.
            </p>
            <button className="btn bp">Manual de Intercâmbio →</button>
          </div>
          {/* ↓ Substitua por galeria real de fotos */}
          <div className="gal">
            {Array.from({ length: 8 }).map((_, i) => <PhotoPh key={i} aspect={1} label="" dark />)}
          </div>
        </div>
      </div>
    </section>

    {/* PARCEIROS */}
    <section className="sec bg-off">
      <div className="ctn">
        <SH label="Parceiros" title="Quem já esteve conosco" center />
        <div className="pw">
          {['Bocconi', 'Campus France', 'Study in Finland', 'Travel Mate', 'DAAD', 'Pearson', 'Cultural Care Au Pair', 'Consulado Alemão', 'Universidade de Lisboa'].map(p => (
            <div key={p} className="pch">{p}</div>
          ))}
        </div>
        {/* ↓ Espaço para logos dos parceiros */}
        <div style={{ marginTop: 32 }}>
          <PhotoPh aspect={5} label="Logos dos parceiros" dark />
        </div>
      </div>
    </section>

    {/* DEPOIMENTOS */}
    <section className="sec">
      <div className="ctn">
        <SH label="Depoimentos" title="O que dizem os participantes" center />
        <div className="tgrid">
          <TCard text="A Feira me ajudou a encontrar o programa certo. As informações sobre bolsas e processos seletivos foram essenciais." name="Maria Santos"  role="Estudante de Economia, FEA-USP"        initials="MS" c1="#5ea2e5" c2="#004E70" />
          <TCard text="Como parceiro, ficamos impressionados com a organização. Uma iniciativa que conecta jovens talentos ao mundo."    name="João Vitor"    role="Representante, Travel Mate"              initials="JV" c1="#004E70" c2="#28BEAC" />
          <TCard text="Participei em 2023 e 2024. A qualidade das palestras e o acesso direto a consulados foi surpreendente."          name="Ana Carolina"  role="Estudante de Administração, FEA-USP"    initials="AC" c1="#F57F1F" c2="#F7BC1E" />
        </div>
      </div>
    </section>

    <Torn fill="var(--p)" />

    {/* NEWSLETTER */}
    <section style={{ background: 'var(--p)', padding: '60px 0' }}>
      <div className="ctn">
        <div className="two">
          <div>
            <div className="lbl w">Newsletter</div>
            <h2 style={{ color: '#fff', fontSize: 'clamp(20px,2.6vw,30px)', margin: '0 0 10px' }}>Fique por dentro</h2>
            <p style={{ color: 'rgba(255,255,255,.7)', lineHeight: 1.75 }}>Receba novidades sobre a Feira diretamente no seu e-mail.</p>
          </div>
          <div className="nlf">
            <input className="nli" type="email" placeholder="Seu melhor e-mail" />
            <button className="btn bp">Inscrever →</button>
          </div>
        </div>
      </div>
    </section>
  </>
);

// ─── PROJETO DE PESQUISA ──────────────────────────────
const Pesquisa = () => (
  <>
    <section style={{ background: 'linear-gradient(135deg,#1a1a2e,#16213e)', color: '#fff', padding: '76px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,87,87,.1) 1.5px,transparent 1.5px)', backgroundSize: '16px 16px' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 30% 50%,rgba(255,87,87,.2) 0%,transparent 55%)' }} />
      <div className="ctn" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 22 }}>
          <div style={{ width: 68, height: 68, borderRadius: 18, background: 'rgba(255,87,87,.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IcoSearch s={34} c="#FF5757" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: '#FF5757', marginBottom: 5 }}>PET FEA USP</div>
            <h1 style={{ fontSize: 'clamp(22px,4vw,48px)' }}>Projeto de Pesquisa</h1>
          </div>
        </div>
        <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.72)', maxWidth: 520, lineHeight: 1.8 }}>
          Uma introdução à iniciação científica — um pilar universitário desde 1994.
        </p>
      </div>
    </section>

    <Torn fill="var(--off)" />

    <section className="sec bg-off">
      <div className="ctn">
        <div className="two-t">
          <div>
            <SH label="História" title="Pesquisa de alto nível desde 1994" />
            <p style={{ color: 'var(--gr)', lineHeight: 1.8, marginBottom: 12 }}>
              Em 1994, surgiu o Projeto de Pesquisa — o primeiro pilar explorado pelo PET FEA-USP, com o propósito de fomentar
              a produção científica de alto nível.
            </p>
            <p style={{ color: 'var(--gr)', lineHeight: 1.8 }}>
              Os membros são livres para escolher temas, implementar metodologias e produzir pesquisas com orientação de professores da FEA.
            </p>
          </div>
          <div>
            <SH label="Por que pesquisar?" title="Benefícios" />
            <div className="icl">
              {['Desenvolver pensamento crítico e científico', 'Aprender metodologias de pesquisa aplicadas', 'Publicar artigos e participar de congressos', 'Orientação de professores da FEA', 'Iniciação científica no currículo desde o 1° ano'].map((b, i) => (
                <div key={i} className="icli">
                  <div className="icli-dot" style={{ background: '#FF5757' }}>✓</div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sec">
      <div className="ctn">
        <SH label="Em andamento" title="Temas de pesquisa atuais" center />
        <div className="thg">
          {['Impacto do crédito em MEIs paulistanos', 'Políticas de inclusão financeira no Brasil', 'Empreendedorismo feminino na periferia de SP', 'Desigualdade educacional e ensino superior', 'Sustentabilidade em cadeias de suprimento', 'Finanças comportamentais e consumo'].map((t, i) => (
            <div key={i} className="th"><div className="td" style={{ background: '#FF5757' }} />{t}</div>
          ))}
        </div>
      </div>
    </section>

    <section className="sec bg-off">
      <div className="ctn">
        <SH label="Depoimentos" title="O que dizem os pesquisadores" center />
        <div className="tgrid">
          <TCard text="O Projeto de Pesquisa me deu base para ingressar num programa de pós-graduação. Aprendi metodologia científica com autonomia real." name="Rafael Oliveira"  role="Ex-membro, doutorando USP"     initials="RO" c1="#FF5757" c2="#C4522E" />
          <TCard text="Nunca imaginei que no 1° semestre conseguiria publicar uma pesquisa. O suporte dos membros experientes foi fundamental."            name="Fernanda Castro"  role="Pesquisadora PET, 3° ano"       initials="FC" c1="#004E70" c2="#28BEAC" />
          <TCard text="Aprender a escrever cientificamente mudou minha forma de pensar. A academia não é bicho de sete cabeças."                           name="Lucas Martins"    role="Membro PET, Economia"           initials="LM" c1="#F57F1F" c2="#F7BC1E" />
        </div>
      </div>
    </section>
  </>
);

// ─── MICRO (APRENDER PARA EMPREENDER) ────────────────
const Micro = () => (
  <>
    <section style={{ background: '#121416', color: '#fff', padding: '76px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(105,117,194,.1) 1.5px,transparent 1.5px)', backgroundSize: '16px 16px' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 60% 40%,rgba(105,117,194,.25) 0%,transparent 60%)' }} />
      <div className="ctn" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 22 }}>
          <div style={{ width: 68, height: 68, borderRadius: 18, background: 'rgba(105,117,194,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IcoBulb s={34} c="#6975C2" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: '#6975C2', marginBottom: 5 }}>PET FEA USP</div>
            <h1 style={{ fontSize: 'clamp(20px,4vw,48px)' }}>Aprender para Empreender</h1>
          </div>
        </div>
        <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.72)', maxWidth: 540, lineHeight: 1.8, marginBottom: 26 }}>
          Consultoria estratégica gratuita para microempreendedores individuais evoluírem seus negócios.
        </p>
        <button className="btn bp">Quero ser atendido →</button>
      </div>
    </section>

    <Torn fill="var(--off)" />

    <section className="sec bg-off">
      <div className="ctn">
        <div className="two-t">
          <div>
            <SH label="O projeto" title="O que é o Micro?" />
            <p style={{ color: 'var(--gr)', lineHeight: 1.8, marginBottom: 12 }}>
              O Aprender Para Empreender — carinhosamente chamado de Micro — foi criado em 2019 para capacitar MEIs.
              Reformulado em 2024 com parceria com o SEBRAE, nossos membros são capacitados como consultores estratégicos.
            </p>
            <p style={{ color: 'var(--gr)', lineHeight: 1.8 }}>
              Capacitação em 4 áreas: <strong>planejamento estratégico</strong>, <strong>marketing</strong>,{' '}
              <strong>controle financeiro</strong> e <strong>legislação aplicável ao MEI</strong>.
            </p>
          </div>
          <div>
            <div style={{ background: '#fff', borderRadius: 22, padding: 22, marginBottom: 16 }}>
              <SH label="Parceria" title="SEBRAE" />
              <p style={{ color: 'var(--gr)', fontSize: 13.5, lineHeight: 1.75 }}>
                Em 2025, o Micro firmou parceria com o SEBRAE, com visitas técnicas à Deloitte e acesso a ferramentas de
                gestão profissional para os MEIs atendidos.
              </p>
              {/* ↓ Espaço para logo do SEBRAE */}
              <PhotoPh aspect={3} label="Logo do SEBRAE" dark />
            </div>
            {/* Números em BRANCO no fundo azul */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
              {[['20+', 'MEIs atendidos'], ['26', 'Membros capacitados'], ['+70', 'Consultorias 2025'], ['4', 'Áreas de formação']].map(([n, l]) => (
                <div key={l} style={{ background: 'var(--p)', borderRadius: 14, padding: 18, textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--fh)', fontSize: 30, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{n}</div>
                  <div style={{ fontSize: 12, color: 'rgba(255,255,255,.65)', marginTop: 6, lineHeight: 1.5 }}>{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="sec">
      <div className="ctn">
        <SH label="Processo" title="Como funciona" center />
        <div className="stg">
          {[
            { n: 1, c: '#6975C2', t: 'Capacitação (6 meses)', d: 'Formação intensiva em planejamento estratégico, marketing digital, controle financeiro e legislação para MEIs.' },
            { n: 2, c: '#F57F1F', t: 'Diagnóstico do MEI',   d: 'Cada consultor realiza diagnóstico completo, identificando gargalos e oportunidades de melhoria.' },
            { n: 3, c: '#3AAD9D', t: 'Consultoria (6 meses)', d: 'O MEI recebe plano de ação personalizado e acompanhamento semanal para implementar as melhorias.' },
          ].map(s => (
            <div key={s.n} className="stc">
              <div className="stn" style={{ background: s.c }}>{s.n}</div>
              <h3>{s.t}</h3><p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="sec bg-off">
      <div className="ctn">
        <SH label="Depoimentos" title="O que dizem os MEIs" center />
        <div className="tgrid">
          <TCard text="Os consultores traziam sempre exemplos ao longo da consultoria, para ajudar na construção das ferramentas." name="Ana Carolina"    role="Participante"       initials="AC" c1="#6975C2" c2="#9CCBD5" />
          <TCard text="Depois da consultoria, consegui organizar meu fluxo de caixa e aumentar minha margem em 18%."             name="Roberto Silva"   role="MEI, São Paulo"     initials="RS" c1="#004E70" c2="#28BEAC" />
          <TCard text="Profissionalismo dos consultores. Percebi o quanto havia para melhorar no meu negócio."                    name="Luciana Ferreira" role="MEI, São Paulo"    initials="LF" c1="#F57F1F" c2="#F7BC1E" />
        </div>
      </div>
    </section>
  </>
);

// ─── GUIAR ────────────────────────────────────────────
const Guiar = () => (
  <>
    <section style={{ background: '#0a2922', color: '#fff', padding: '76px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(58,173,157,.1) 1.5px,transparent 1.5px)', backgroundSize: '16px 16px' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 40% 60%,rgba(58,173,157,.25) 0%,transparent 60%)' }} />
      <div className="ctn" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 22 }}>
          <div style={{ width: 68, height: 68, borderRadius: 18, background: 'rgba(58,173,157,.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <IcoCoin s={34} c="#3AAD9D" />
          </div>
          <div>
            <div style={{ fontFamily: 'var(--fh)', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 2, color: '#3AAD9D', marginBottom: 5 }}>PET FEA USP</div>
            <h1 style={{ fontSize: 'clamp(24px,4vw,50px)' }}>GUIAR</h1>
          </div>
        </div>
        <p style={{ fontSize: 16.5, color: 'rgba(255,255,255,.72)', maxWidth: 520, lineHeight: 1.8, marginBottom: 26 }}>
          Democratizando o acesso à Educação Financeira — levando conhecimento a quem mais precisa desde 2007.
        </p>
        <button className="btn bp">Seja um parceiro →</button>
      </div>
    </section>

    <Torn fill="var(--off)" />

    <section className="sec bg-off">
      <div className="ctn">
        <div className="two-t">
          <div>
            <SH label="Como tudo começou" title="A história do GUIAR" />
            <p style={{ color: 'var(--gr)', lineHeight: 1.8, marginBottom: 12 }}>
              A ideia nasceu em 2006 quando um membro do PET esqueceu um livro sobre orçamento familiar no ônibus fretado.
              Encontrando o motorista lendo-o, teve a ideia de criar um curso de educação financeira para quem não teve acesso ao tema.
            </p>
            <p style={{ color: 'var(--gr)', lineHeight: 1.8 }}>
              O GUIAR iniciou em 2007 com o objetivo de levar educação financeira básica a públicos vulneráveis fora da universidade
              — o pilar de extensão do tripé universitário.
            </p>
          </div>
          <div>
            <SH label="Como funciona" title="Ciclos e públicos-alvo" />
            <div className="icl">
              {['A cada ciclo, um público-alvo específico é escolhido pelos membros', 'O GUIAR desenvolve materiais adaptados a cada realidade', 'Oficinas são realizadas in loco nas organizações parceiras', 'Avaliações garantem a qualidade e impacto do aprendizado', 'Os resultados são documentados para novas parcerias'].map((b, i) => (
                <div key={i} className="icli">
                  <div className="icli-dot" style={{ background: '#3AAD9D' }}>✓</div>
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    <Torn fill="var(--p)" />

    {/* IMPACTO — números em BRANCO no fundo azul */}
    <section style={{ background: 'var(--p)', padding: '56px 0' }}>
      <div className="ctn">
        <SH label="Impacto" title="O GUIAR em 2025" white center />
        <div className="ig">
          {[['120', 'Alunos impactados'], ['4,8/5', 'Avaliação média'], ['3', 'Organizações parceiras'], ['2', 'Etecs parceiras']].map(([n, l]) => (
            <div key={l} className="ic"><div className="in">{n}</div><div className="il">{l}</div></div>
          ))}
        </div>
        <p style={{ color: 'rgba(255,255,255,.7)', fontSize: 13.5, lineHeight: 1.8, maxWidth: 760, margin: '26px auto 0', textAlign: 'center' }}>
          Em 2025, o impacto foi ampliado com parcerias com duas escolas públicas e três organizações sociais. Nas Etecs Cepam e
          Prof. Camargo Aranha, foram realizadas oficinas que impactaram 120 alunos com avaliação média de 4,8/5.
        </p>
      </div>
    </section>

    <Torn fill="var(--off)" />

    {/* PARCEIROS */}
    <section className="sec bg-off">
      <div className="ctn">
        <SH label="Parcerias recentes" title="Quem o GUIAR já alcançou" center />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 16 }}>
          {[
            { name: 'Etecs Cepam & Prof. Camargo Aranha', desc: 'Oficinas de educação financeira para alunos do ensino médio em 2025.',        Ico: IcoMega,   c: '#3AAD9D' },
            { name: 'Instituto C',                         desc: 'Atende famílias em situações atípicas e promove a autonomia financeira.',       Ico: IcoUsers,  c: '#004E70' },
            { name: 'Instituto Salve Quebrada',            desc: 'Leva oportunidades e fomenta o desenvolvimento da periferia paulistana.',       Ico: IcoNet,    c: '#7DD856' },
            { name: 'Instituto Vivendas / Lacoste Foundation', desc: 'Levou educação financeira a jovens participantes da ONG.',                  Ico: IcoGlobe,  c: '#F57F1F' },
          ].map((p, i) => (
            <div key={i} style={{ padding: 22, background: '#fff', borderRadius: 14, border: '1.5px solid var(--bdr)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
              <div style={{ width: 46, height: 46, borderRadius: 12, background: `${p.c}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <p.Ico s={22} c={p.c} />
              </div>
              <div>
                <h4 style={{ fontFamily: 'var(--fh)', fontSize: 14, fontWeight: 800, color: 'var(--p)', marginBottom: 5 }}>{p.name}</h4>
                <p style={{ fontSize: 13, color: 'var(--gr)', lineHeight: 1.7 }}>{p.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* DEPOIMENTOS */}
    <section className="sec">
      <div className="ctn">
        <SH label="Depoimentos" title="O impacto em palavras" center />
        <div className="tgrid">
          <TCard text="O curso mudou minha relação com o dinheiro. Aprendi a fazer um orçamento real e parei de entrar no cheque especial." name="Joana Souza"   role="Participante, Etec Cepam"                 initials="JS" c1="#3AAD9D" c2="#7DD856" />
          <TCard text="Ver jovens ensinando educação financeira de forma acessível foi transformador para nossos alunos."                   name="Prof. Marcos Lima" role="Coordenador, Etec Prof. Camargo Aranha" initials="ML" c1="#004E70" c2="#28BEAC" />
          <TCard text="Participar do GUIAR foi a experiência mais significativa do meu tempo no PET. Impacto real, concreto e humano."      name="Beatriz Alves"  role="Ex-membro GUIAR, PET FEA USP"           initials="BA" c1="#F57F1F" c2="#F7BC1E" />
        </div>
      </div>
    </section>
  </>
);

// ═══════════════════════════════════════════════════════
// APP — ROUTER SIMPLES
// ═══════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState('home');

  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = {
    home:     () => <Home     go={go} />,
    sobre:    () => <Sobre    go={go} />,
    blog:     () => <Blog />,
    feira:    () => <Feira />,
    pesquisa: () => <Pesquisa />,
    micro:    () => <Micro />,
    guiar:    () => <Guiar />,
  };

  return (
    <div>
      <Header page={page} go={go} />
      <main>{pages[page] ? pages[page]() : pages.home()}</main>
      <Footer go={go} />
    </div>
  );
}