import React, { useState, useEffect } from 'react';
import { Logo } from './Logo.jsx';

export const Header = ({ page, go }) => {
  const [drop, setDrop] = useState(false);
  const [dropC, setDropC] = useState(false);
  const [mob,  setMob]  = useState(false);
  const [mobProj, setMobProj] = useState(false);
  const [mobC, setMobC] = useState(false);

  useEffect(() => {
    if (mob) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mob]);
  
  const projs = [
    { id: 'pesquisa', label: 'Pesquisa',                 c: '#bc1823' },
    { id: 'micro',    label: 'Micro',                    c: '#49326b' },
    { id: 'guiar',    label: 'Guiar',                    c: '#009e97' },
    { id: 'feira',    label: 'Feira de Intercâmbio',     c: '#3e80ac' },
  ];

  const coords = [
    { id: 'marketing', label: 'Marketing', c: '#b84c65' },
    { id: 'rexin',     label: 'REXin',     c: '#f57f1f' },
    { id: 'finfra',    label: 'Finfra',    c: '#24915d' },
    { id: 'rh',        label: 'RH',        c: '#f7bc1e' },
  ];

  const nav  = p => { go(p); setMob(false); setDrop(false); setDropC(false); };
  const isP  = ['pesquisa', 'micro', 'guiar', 'feira'].includes(page);
  const isC  = ['marketing', 'rexin', 'finfra', 'rh'].includes(page);

  const pc = page === 'marketing' ? '#b84c65' : page === 'guiar' ? '#009e97' : page === 'feira' ? '#3e80ac' : page === 'pesquisa' ? '#bc1823' : page === 'micro' ? '#49326b' : page === 'rexin' ? '#f57f1f' : page === 'finfra' ? '#24915d' : page === 'rh' ? '#f7bc1e' : null;

  return (
    <>
      <header className="hdr">
      <div className="hdr-in">
        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', height: 44, overflow: 'hidden' }} onClick={() => nav('home')}>
          {page === 'marketing' ? (
            <img src="/PNG-Marketing/texto rosa.png" alt="Marketing" style={{ maxHeight: 240, maxWidth: 380, objectFit: 'contain' }} />
          ) : page === 'rexin' ? (
            <img src="/PNG-Rexin/texto laranja.png" alt="REXin" style={{ maxHeight: 120, maxWidth: 300, objectFit: 'contain' }} />
          ) : page === 'finfra' ? (
            <img src="/PNG-Finfra/texto verde.png" alt="Finfra" style={{ maxHeight: 240, maxWidth: 380, objectFit: 'contain' }} />
          ) : page === 'rh' ? (
            <img src="/PNG-RH/texto laranja.png" alt="RH" style={{ maxHeight: 120, maxWidth: 300, objectFit: 'contain' }} />
          ) : page === 'guiar' ? (
            <img src="/PNG-Guiar/texto azul.png" alt="Guiar" style={{ maxHeight: 240, maxWidth: 380, objectFit: 'contain' }} />
          ) : page === 'feira' ? (
            <img src="/PNG-Feira/texto preto.png" alt="Feira de Intercâmbio" style={{ maxHeight: 240, maxWidth: 380, objectFit: 'contain' }} />
          ) : page === 'pesquisa' ? (
            <img src="/PNG-Pesquisa/texto vermelho.png" alt="Pesquisa" style={{ maxHeight: 240, maxWidth: 380, objectFit: 'contain' }} />
          ) : page === 'micro' ? (
            <img src="/PNG-Micro/texto roxo.png" alt="Micro" style={{ maxHeight: 240, maxWidth: 380, objectFit: 'contain' }} />
          ) : (
            <Logo ht={60} />
          )}
        </div>

        {/* Desktop Navbar */}
        <nav className="nav">
          <button className={`nb${page === 'home' ? ' act' : ''}`} style={pc ? { color: pc } : {}} onClick={() => nav('home')}>Início</button>

          <div className="ni" onMouseEnter={() => setDrop(true)} onMouseLeave={() => setDrop(false)}>
            <button className={`nb${isP ? ' act' : ''}`} style={pc ? { color: pc } : {}}>
              <span>Projetos</span>&nbsp;<span>▾</span>
            </button>
            {drop && (
              <div className="drop-wrapper">
                <div className="drop">
                  {projs.map(p => (
                    <div key={p.id} className="di" onClick={() => nav(p.id)}>
                      <div className="ddot" style={{ background: p.c }} />
                      {p.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <div className="ni" onMouseEnter={() => setDropC(true)} onMouseLeave={() => setDropC(false)}>
            <button className={`nb${isC ? ' act' : ''}`} style={pc ? { color: pc } : {}}>
              <span>Coordenadorias</span>&nbsp;<span>▾</span>
            </button>
            {dropC && (
              <div className="drop-wrapper">
                <div className="drop">
                  {coords.map(p => (
                    <div key={p.id} className="di" onClick={() => nav(p.id)}>
                      <div className="ddot" style={{ background: p.c }} />
                      {p.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button className={`nb${page === 'sobre' ? ' act' : ''}`} style={pc ? { color: pc } : {}} onClick={() => nav('sobre')}>Sobre Nós</button>
          <button className={`nb${page === 'blog'  ? ' act' : ''}`} style={pc ? { color: pc } : {}} onClick={() => nav('blog')}>Blog</button>
          <button 
            className="nb ncta" 
            style={pc ? { background: pc, color: '#fff' } : {}}
            onClick={() => nav('sobre')}
          >
            Processo Seletivo
          </button>
        </nav>

        {/* Mobile Hamburger Button */}
        <button className="hbg" onClick={() => setMob(!mob)} aria-label="Menu">
          <span className={mob ? 'open' : ''} />
          <span className={mob ? 'open' : ''} />
          <span className={mob ? 'open' : ''} />
        </button>
      </div>
    </header>

    {/* Mobile Overlay */}
    {mob && <div className="moverlay" onClick={() => setMob(false)}></div>}

    {/* Mobile Navigation Drawer */}
    <nav className={`mnav${mob ? ' open' : ''}`}>
      <div className="mnav-hdr">
        <button className="mnav-close" onClick={() => setMob(false)} aria-label="Fechar Menu">
          ✕
        </button>
      </div>

      <div className="mnav-body">
        <div className={`mi${page === 'home' ? ' act' : ''}`} onClick={() => nav('home')}>
          Início
        </div>
        
        <div className="mi-group">
          <div className={`mi${isP ? ' act' : ''}`} onClick={() => { setMobProj(!mobProj); if (!mobProj) setMobC(false); }}>
            <span>Projetos</span>
            <span className={`m-arrow ${mobProj ? 'up' : 'down'}`}>▾</span>
          </div>
          <div className={`msub${mobProj ? ' open' : ''}`}>
            {projs.map(p => (
              <div key={p.id} className="msi" onClick={() => nav(p.id)}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: p.c, flexShrink: 0 }} />
                {p.label}
              </div>
            ))}
          </div>
        </div>

        <div className="mi-group">
          <div className={`mi${isC ? ' act' : ''}`} onClick={() => { setMobC(!mobC); if (!mobC) setMobProj(false); }}>
            <span>Coordenadorias</span>
            <span className={`m-arrow ${mobC ? 'up' : 'down'}`}>▾</span>
          </div>
          <div className={`msub${mobC ? ' open' : ''}`}>
            {coords.map(p => (
              <div key={p.id} className="msi" onClick={() => nav(p.id)}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: p.c, flexShrink: 0 }} />
                {p.label}
              </div>
            ))}
          </div>
        </div>

        <div className={`mi${page === 'sobre' ? ' act' : ''}`} onClick={() => nav('sobre')}>
          Sobre Nós
        </div>
        <div className={`mi${page === 'blog'  ? ' act' : ''}`} onClick={() => nav('blog')}>
          Blog
        </div>
      </div>

      <div className="mcta">
        <div className="mcta-btn" onClick={() => nav('sobre')} style={pc ? { background: pc } : {}}>
          Processo Seletivo →
        </div>
      </div>
    </nav>
  </>
);
};
