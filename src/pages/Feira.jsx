import React from 'react';
import { Torn } from '../components/ui/Torn.jsx';
import { TCard } from '../components/ui/TCard.jsx';

export const Feira = () => {
  const c = {
    bg: '#e8e4d8',
    d: '#024f70',
    m: '#3e80ac',
    l: '#6bb8eb',
    o: '#f1ce53',
  };

  return (
    <div style={{ background: c.bg, minHeight: '100vh', paddingBottom: 80, overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="area-hero-sec">
        <img className="area-bg-sticker" src="/PNG-Feira/simbolo.png" alt="Símbolo" style={{ position: 'absolute', top: '10%', left: '4%', width: 140, opacity: 0.5, zIndex: 1, transform: 'rotate(-10deg)' }} />
        <img className="area-bg-sticker" src="/PNG-Feira/estrela bonita.png" alt="" style={{ position: 'absolute', top: '20%', right: '10%', width: 80, opacity: 0.9, zIndex: 1, transform: 'rotate(20deg)' }} />
        
        <div className="area-pg" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, width: '100%', textAlign: 'center' }}>
            <img src="/PNG-Feira/nome feira de intercambio.png" alt="Feira de Intercâmbio" style={{ width: '100%', maxWidth: 500, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
          </div>
          
          <div className="area-hero-card" style={{ boxShadow: `0 24px 80px ${c.m}20`, border: `2px solid ${c.l}40` }}>
            
            <h1 className="area-hero-title" style={{ color: c.d }}>
              Uma Ponte para o Mundo
            </h1>
            
            <p className="area-hero-text">
              A <strong style={{ color: c.m }}>Feira de Intercâmbio FEA USP</strong> é um grande evento coordenado pelo PET FEA USP. O projeto incentiva a internacionalização dos estudantes, promove a democratização dessa experiência e estimula esse tipo de vivência acadêmica, já que as oportunidades de intercâmbio são, em muitos casos, desconhecidas pelos estudantes.
            </p>
            <p className="area-hero-text">
              O evento é aberto ao público, não restringindo, portanto, a participação somente aos estudantes da USP. O projeto tem como objetivo compartilhar com o público da FEA USP as informações necessárias para uma organização ideal para internacionalização no âmbito acadêmico. Com o passar dos anos, o projeto evoluiu para uma feira anual que reúne empresas, consulados e universidades estrangeiras para o diálogo com o público da USP e externo. Com vários parceiros e patrocinadores, ela auxilia estudantes de qualquer lugar interessados em oportunidades de internacionalização, seja graduação, mestrado, doutorado, intercâmbio de idiomas e até mesmo trabalho no exterior.
            </p>
          </div>
        </div>
      </section>

      {/* Ripped Divider */}
      <Torn fill={c.m} bg={c.bg} />

      {/* Content Section */}
      <section className="area-sec-content" style={{ background: c.m, color: '#fff' }}>
        
        <div className="area-pg">
          <div className="area-grid">
            
            <div className="area-card" style={{ background: c.d }}>
              <img className="area-card-sticker" src="/PNG-Feira/el-passaporte.png" alt="Icon" style={{ position: 'absolute', top: -30, right: -20, width: 75, objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Público-Alvo
              </h2>
              <p className="area-card-text" style={{ color: 'rgba(255,255,255,0.95)' }}>
                Estudantes de qualquer lugar interessados em oportunidades de internacionalização, seja graduação, mestrado, doutorado, intercâmbio de idiomas e até mesmo trabalho no exterior. O evento é aberto ao público, não restringindo, portanto, a participação somente aos estudantes da USP.
              </p>
            </div>

            <div className="area-card" style={{ background: '#fff', color: c.d, transform: 'rotate(1.5deg)' }}>
              <img className="area-card-sticker" src="/PNG-Feira/el-viagem.png" alt="Icon" style={{ position: 'absolute', top: -45, left: -25, width: 95, transform: 'rotate(-10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: c.d }}>
                 Objetivos e Impacto
              </h2>
              <h3 className="area-card-sub" style={{ color: c.m }}>Principais Objetivos</h3>
              <ul className="area-card-list" style={{ color: '#444' }}>
                <li>Facilitar o acesso à informação sobre intercâmbio universitário</li>
                <li>Tirar as dúvidas dos alunos da USP em relação ao intercâmbio (custo de vida, moradias, países)</li>
                <li>Apresentar oportunidades para o estudo e mobilidade internacional em todos os níveis</li>
              </ul>
              <h3 className="area-card-sub" style={{ color: c.m }}>Contribuição para a Sociedade</h3>
              <p className="area-card-text" style={{ color: '#444' }}>
                O projeto incentiva a internacionalização dos estudantes, promove a democratização dessa experiência e estimula esse tipo de vivência acadêmica, já que as oportunidades de intercâmbio são, em muitos casos, desconhecidas pelos estudantes.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Torn fill={c.bg} bg={c.m} />

      <section className="area-sec-content" style={{ paddingBottom: 40 }}>
        <div className="area-pg">
          
          <img className="area-bg-sticker" src="/PNG-Feira/el-aviao.png" alt="" style={{ position: 'absolute', top: -50, right: -40, width: 120, opacity: 0.8, transform: 'rotate(15deg)', zIndex: 1 }} />
          
          <div style={{ marginBottom: 60, position: 'relative', zIndex: 2 }}>
            
            <div className="area-dashed-card" style={{ border: `3px dashed ${c.m}` }}>
              <img className="area-card-sticker" src="/PNG-Feira/el-bussola.png" alt="Bússola" style={{ position: 'absolute', bottom: -25, right: -15, width: 85, objectFit: 'contain' }} />
              <div className="area-dashed-badge" style={{ background: c.o }}>
                História
              </div>
              <h3 style={{ color: c.d }}>Quando e como surgiu?</h3>
              <p>
                A versão inicial da Feira surgiu em 2014, com uma organização muito mais simples do que as últimas edições, inspirada pela necessidade de um dia em que professores e estudantes com experiência de intercâmbio tivessem disponibilidade para compartilhar com o público da FEA USP as informações necessárias para uma organização ideal para internacionalização no âmbito acadêmico. Com o passar dos anos, o projeto evoluiu para uma feira anual que reúne empresas, consulados e universidades estrangeiras para o diálogo com o público da USP e externo.
              </p>
            </div>

          </div>
          
          <div style={{ position: 'relative', zIndex: 2, marginBottom: 60 }}>
            <h2 className="area-sec-title" style={{ color: c.d, marginBottom: 28 }}>Parceiros</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {['Bocconi', 'Campus France', 'Study in Finland', 'Travel Mate', 'DAAD', 'Pearson', 'Cultural Care Au Pair', 'Consulado Alemão', 'Universidade de Lisboa'].map(p => (
                <div key={p} style={{ background: '#fff', border: `1.5px solid ${c.l}`, borderRadius: 10, padding: '10px 16px', fontFamily: 'var(--fh)', fontSize: 13, fontWeight: 700, color: c.d, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  {p}
                </div>
              ))}
            </div>
            <img className="area-bg-sticker" src="/PNG-Feira/el-monumento.png" alt="" style={{ position: 'absolute', bottom: -60, left: -40, width: 140, opacity: 0.6, zIndex: -1 }} />
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
            <h2 className="area-sec-title" style={{ color: c.d, margin: 0 }}>Relatos de Impactados</h2>
            <img src="/PNG-Feira/el-exclamacao.png" alt="" style={{ width: 32, transform: 'rotate(15deg)' }} />
          </div>
          <div className="tgrid">
            <TCard text="A feira ajudou a enfrentar diversos perrengues. Antes do intercâmbio, possuía uma visão simplificada de como seria em relação a destino, dinheiro e como chegar lá. Mas, pude perceber que existe uma escolha estratégica muito maior com relação a Universidade e destino final. Percebi que não existe um padrão de experiências no intercâmbio, e cada indivíduo tem sua própria história e vivências. Alguns se apaixonam, outros vivem com um pouco menos entusiasmo, e no fim todos saem transformados de formas diferentes, pois o intercâmbio não é sobre o lugar em si, mas sim como você constrói suas experiências." name="Pedro Saldanha"   role="Participante"                 initials="PS" c1={c.m} c2={c.l} />
            <TCard text="Me ajudou a evitar perrengue em relação ao visto, já que a Campus France esteve presente durante o evento para esclarecimento de dúvidas sobre o processo."                   name="Diego Reis" role="Participante" initials="DR" c1={c.d} c2={c.m} />
          </div>

        </div>
      </section>

      {/* Results Section */}
      <section className="area-sec-content" style={{ textAlign: 'center', position: 'relative', background: c.d, overflow: 'hidden' }}>
        <img className="area-bg-sticker" src="/PNG-Feira/mundo.png" alt="" style={{ position: 'absolute', top: -100, right: -100, width: 400, opacity: 0.2, zIndex: 0 }} />
        <img className="area-bg-sticker" src="/PNG-Feira/el-estrelas.png" alt="" style={{ position: 'absolute', bottom: 40, left: 40, width: 100, opacity: 0.8, zIndex: 0 }} />
        
        <h2 className="area-sec-title" style={{ color: '#fff' }}>Resultados em 2025</h2>
        
        <div className="area-pg">
          <div className="area-stat-grid">
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">1300+</span>
              <span className="area-stat-lbl">Inscritos</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.m, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)', transform: 'translateY(-15px)' }}>
              <span className="area-stat-num">20</span>
              <span className="area-stat-lbl">Parceiros</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.o, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">18</span>
              <span className="area-stat-lbl">Palestras</span>
            </div>
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">14</span>
              <span className="area-stat-lbl">Stands</span>
            </div>

          </div>
          
          <p style={{ marginTop: 32, color: 'rgba(255,255,255,0.85)', fontSize: '0.98rem', fontFamily: 'var(--fs)', maxWidth: 600, marginLeft: 'auto', marginRight: 'auto', lineHeight: 1.6 }}>
            Divulgação em diferentes sites, como o Jornal da USP, TV Alesp e CNN Brasil.
          </p>
        </div>
      </section>
      
      {/* Gallery Section Removed */}
    </div>
  );
};
