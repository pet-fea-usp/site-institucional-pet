import React from 'react';
import { Torn } from '../components/ui/Torn.jsx';

export const Marketing = () => {
  const c = {
    bg: '#e8e4d8',
    d: '#b84c65',
    m: '#e05f85',
    l: '#f7838d',
    o: '#f6aa51',
  };

  return (
    <div style={{ background: c.bg, minHeight: '100vh', paddingBottom: 80, overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="area-hero-sec" style={{ backgroundColor: '#f7838d' }}>
        <img className="area-bg-sticker" src="/PNG-Marketing/estrela 1.png" alt="Estrela" style={{ position: 'absolute', top: '10%', left: '4%', width: 200, height: 200, opacity: 0.8, zIndex: 1, transform: 'rotate(-10deg)' }} />
        <img className="area-bg-sticker" src="/PNG-Marketing/estrela 2.png" alt="Estrela" style={{ position: 'absolute', bottom: '10%', right: '5%', width: 200, height: 200, opacity: 0.9, zIndex: 1, transform: 'rotate(15deg)' }} />
        
        <div className="area-pg" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, width: '100%', textAlign: 'center' }}>
            <img src="/PNG-Marketing/marketing logo.png" alt="Marketing Logo" style={{ width: '100%', maxWidth: 600, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
          </div>
          
          <div className="area-hero-card" style={{ boxShadow: '0 24px 80px rgba(184, 76, 101, 0.15)', border: `2px solid ${c.l}40` }}>
            
            <h1 className="area-hero-title" style={{ color: c.d }}>
              O que fazemos?
            </h1>
            
            <p className="area-hero-text">
              A coordenadoria é responsável por impulsionar as demais áreas e potencializar a entrega de resultados. Quando o Marketing divulga o edital do Micro para MEIs, impulsionamos os resultados do projeto, assim como quando divulgamos a Feira e ajudamos a aumentar o número de inscritos. Em suma, <strong style={{ color: c.m }}>somos um catalisador dos resultados do PET</strong>.
            </p>
            <p className="area-hero-text">
              Responsável pela gestão da imagem do PET e suas áreas frente ao público externo por meio de diferentes canais e formatos, a área pode ser dividida em stakeholders internos e externos. Os internos incluem os membros atuais da entidade e a professora tutora. Por outro lado, a principal prioridade é o público externo. Nesse caso, são os feanos, outras entidades da USP e membros egressos.
            </p>
          </div>
        </div>
      </section>

      {/* Ripped Divider */}
      <Torn fill={c.m} bg="#f7838d" />

      {/* Content Section */}
      <section className="area-sec-content" style={{ background: c.m, color: '#fff' }}>
        <img className="area-bg-sticker" src="/PNG-Marketing/seta.png" alt="Seta" style={{ position: 'absolute', top: -30, right: 40, width: 80, paddingTop: 23, opacity: 0.8, transform: 'rotate(15deg)' }} />
        
        <div className="area-pg">
          <div className="area-grid">
            
            <div className="area-card" style={{ background: c.d }}>
              <img className="area-card-sticker" src="/PNG-Marketing/simbolo boca.png" alt="Boca" style={{ position: 'absolute', top: -30, right: -20, width: 80 }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                <img src="/PNG-Marketing/estrela 3.png" alt="Estrela" style={{ width: 28, height: 28 }} /> Público-Alvo
              </h2>
              <p className="area-card-text" style={{ color: 'rgba(255,255,255,0.95)' }}>
                A área de Marketing pode ser dividida em stakeholders internos e externos. Os internos incluem os membros atuais da entidade e a professora tutora. Por outro lado, a principal prioridade é o público externo. Nesse caso, são os feanos, outras entidades da USP e membros egressos.
              </p>
            </div>

            <div className="area-card" style={{ background: '#fff', color: c.d, transform: 'rotate(1.5deg)' }}>
              <img className="area-card-sticker" src="/PNG-Marketing/megafone.png" alt="Megafone" style={{ position: 'absolute', top: -45, left: -25, width: 100, transform: 'rotate(-10deg)' }} />
              <h2 className="area-card-title" style={{ color: c.d }}>
                 Objetivos e Impacto
              </h2>
              <h3 className="area-card-sub" style={{ color: c.m }}>Principais Objetivos</h3>
              <p className="area-card-text" style={{ marginBottom: 20, color: '#444' }}>
                Gestão da imagem do PET e suas áreas frente ao público externo por meio de diferentes canais e formatos.
              </p>
              <h3 className="area-card-sub" style={{ color: c.m }}>Contribuição para a Sociedade</h3>
              <p className="area-card-text" style={{ color: '#444' }}>
                A coordenadoria é responsável por impulsionar as demais áreas e potencializar a entrega de resultados. Quando o Marketing divulga o edital do Micro para MEIs, impulsionamos os resultados do projeto, assim como quando divulgamos a Feira e ajudamos a aumentar o número de inscritos. Em suma, somos um catalisador dos resultados do PET.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Torn fill={c.bg} />

      <section className="area-sec-content" style={{ paddingBottom: 40 }}>
        <div className="area-pg">
          <div className="area-grid">
            
            <div className="area-dashed-card" style={{ border: `3px dashed ${c.m}` }}>
              <img className="area-card-sticker" src="/PNG-Marketing/filmadora.png" alt="Filmadora" style={{ position: 'absolute', bottom: -30, right: -20, width: 90 }} />
              <div className="area-dashed-badge" style={{ background: c.o }}>
                História
              </div>
              <h3 style={{ color: c.d }}>Quando e como surgiu?</h3>
              <p style={{ fontStyle: 'italic' }}>
                Sem dados disponíveis.
              </p>
            </div>

            <div className="area-dashed-card" style={{ border: `3px dashed ${c.m}` }}>
              <img className="area-card-sticker" src="/PNG-Marketing/camera.png" alt="Câmera" style={{ position: 'absolute', top: -40, right: -20, width: 85 }} />
              <div className="area-dashed-badge" style={{ background: c.l }}>
                Relatos
              </div>
              <h3 style={{ color: c.d }}>Relatos de impactados</h3>
              <p style={{ fontStyle: 'italic' }}>
                Sem dados disponíveis.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="area-sec-content" style={{ textAlign: 'center', position: 'relative' }}>
        <img className="area-bg-sticker" src="/PNG-Marketing/boca.png" alt="Boca Recorte" style={{ position: 'absolute', left: '10%', bottom: '20%', width: 140, opacity: 0.5 }} />
        <h2 className="area-sec-title" style={{ color: c.d }}>Resultados em 2025</h2>
        
        <div className="area-pg">
          <div className="area-stat-grid">
            
            <div className="area-stat-circle" style={{ background: c.d, color: '#fff', boxShadow: '0 12px 40px rgba(184,76,101,0.3)' }}>
              <span className="area-stat-num" style={{ fontSize: '2rem' }}>Coordenadoria</span>
              <span className="area-stat-lbl">MKT</span>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};

