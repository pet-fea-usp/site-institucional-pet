import React from 'react';
import { Torn } from '../components/ui/Torn.jsx';

export const Rh = () => {
  const c = {
    bg: '#e8e4d8', // Light background
    d: '#f7838d', // Yellow / secondary
    m: '#f7bc1e', // Main accent / pinkish red
    l: '#f6aa51', // Light accent
    o: '#ff914d', // Orange highlight
    d2: '#1a182e'
  };

  return (
    <div style={{ background: c.bg, minHeight: '100vh', paddingBottom: 80, overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="area-hero-sec">
        <img className="area-bg-sticker" src="/PNG-RH/el-estrela.png" alt="Símbolo" style={{ position: 'absolute', top: '10%', left: '4%', width: 140, opacity: 0.5, zIndex: 1, transform: 'rotate(-10deg)' }} />
        <img className="area-bg-sticker" src="/PNG-RH/el-estrela 2.png" alt="Estrela" style={{ position: 'absolute', bottom: '15%', right: '4%', width: 120, opacity: 0.5, zIndex: 1, transform: 'rotate(10deg)' }} />
        
        <div className="area-pg" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, width: '100%', textAlign: 'center' }}>
            <img src="/PNG-RH/rh logo principal.png" alt="RH" style={{ width: '100%', maxWidth: 480, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
          </div>
          
          <div className="area-hero-card" style={{ boxShadow: `0 24px 80px ${c.m}30`, border: `2px solid ${c.l}40` }}>
            
            <h1 className="area-hero-title" style={{ color: c.m }}>
              Gestão de Pessoas e Clima
            </h1>
            
            <p className="area-hero-text">
              O <strong style={{ color: c.m }}>Recursos Humanos (RH)</strong> atua como uma coordenadoria de suporte e controle estritamente interno, sendo responsável pela gestão do capital humano, manutenção do clima organizacional e fiscalização dos processos burocráticos do PET FEA USP.
            </p>
            <p className="area-hero-text">
              O público-alvo da coordenadoria é composto exclusivamente pelos membros integrados à entidade, englobando os petianos ingressantes, os veteranos e o corpo de gestão do grupo. A atuação se desdobra no acompanhamento próximo dos membros ativos, na averiguação do nível de engajamento e no monitoramento do andamento e dos relatórios de cada projeto.
            </p>
          </div>
        </div>
      </section>

      {/* Ripped Divider */}
      <Torn fill={c.m} bg={c.bg} />

      {/* Content Section */}
      <section className="area-sec-content" style={{ background: c.m, color: c.d2 }}>
        
        <div className="area-pg">
          <div className="area-grid">
            
            <div className="area-card" style={{ background: c.d }}>
              <img className="area-card-sticker" src="/PNG-RH/el-conversas.png" alt="Conversas" style={{ position: 'absolute', top: -30, right: -20, width: 75, objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Público-Alvo
              </h2>
              <p className="area-card-text" style={{ color: 'rgba(255,255,255,0.95)' }}>
                Petianos ingressantes, veteranos e membros da gestão da entidade.
              </p>
            </div>

            <div className="area-card" style={{ background: '#fff', color: c.d2, transform: 'rotate(1.5deg)' }}>
              <img className="area-card-sticker" src="/PNG-RH/el-lupa.png" alt="Lupa" style={{ position: 'absolute', top: -45, left: -25, width: 95, transform: 'rotate(-10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: c.m }}>
                 Principais Objetivos
              </h2>
              <ul className="area-card-list" style={{ color: '#444' }}>
                <li>Acompanhar de perto os membros ativos e o andamento de suas atividades.</li>
                <li>Garantir um clima organizacional agradável e saudável para todos.</li>
                <li>Oferecer capacitações internas para o desenvolvimento do grupo.</li>
                <li>Responsabilizar-se pelas demandas burocráticas e administrativas da entidade.</li>
                <li>Averiguar o engajamento e fiscalizar o cumprimento das políticas internas.</li>
                <li>Idealizar capacitações e visitações de interesse coletivo em conjunto com REXin.</li>
                <li>Controlar documentos oficiais ligados a desligamentos, bolsas, AACs, entre outros.</li>
              </ul>
            </div>

            <div className="area-card" style={{ background: c.o, color: '#fff', transform: 'rotate(-1deg)' }}>
              <img className="area-card-sticker" src="/PNG-RH/el-olho com coracao.png" alt="Olho com coração" style={{ position: 'absolute', top: -35, right: -25, width: 75, transform: 'rotate(10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Contribuição Social
              </h2>
              <p className="area-card-text" style={{ color: '#fff' }}>
                A contribuição para a sociedade acontece de forma indireta. A área atua na manutenção do bem-estar e no suporte aos membros ativos da entidade, garantindo que eles estejam engajados e capacitados para gerar impacto positivo e democratizar o conhecimento nas esferas acadêmica e financeira junto à sociedade.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Torn fill={c.bg} bg={c.m} />

      <section className="area-sec-content" style={{ paddingBottom: 40 }}>
        <div className="area-pg">
          
          <img className="area-bg-sticker" src="/PNG-RH/el-interrogacao.png" alt="" style={{ position: 'absolute', top: -50, right: -40, width: 120, opacity: 0.8, transform: 'rotate(15deg)', zIndex: 1 }} />
          
          <div style={{ marginBottom: 40, position: 'relative', zIndex: 2 }}>
            
            <div className="area-dashed-card" style={{ border: `3px dashed ${c.m}` }}>
              <img className="area-card-sticker" src="/PNG-RH/orelha.png" alt="Orelha" style={{ position: 'absolute', bottom: -25, right: -15, width: 85, objectFit: 'contain' }} />
              <img className="area-bg-sticker" src="/PNG-RH/el-boca aberta.png" alt="" style={{ position: 'absolute', top: -30, right: 120, width: 60, opacity: 0.6, transform: 'rotate(-15deg)' }} />
              <div className="area-dashed-badge" style={{ background: c.m, color: c.d2 }}>
                História
              </div>
              <h3 style={{ color: c.d2 }}>Quando e como surgiu?</h3>
              <p style={{ margin: 0 }}>
                Embora os dados exatos de fundação não tenham sido localizados, registros encontrados no Drive da entidade indicam que a área existe formalmente desde pelo menos 2016, estimando-se que sua criação tenha ocorrido antes desse período.
              </p>
            </div>

          </div>
          
        </div>
      </section>

      {/* Results Section */}
      <section className="area-sec-content" style={{ textAlign: 'center', position: 'relative', background: c.d, overflow: 'hidden' }}>
        <img className="area-bg-sticker" src="/PNG-RH/el-microfone.png" alt="" style={{ position: 'absolute', top: -30, right: -40, width: 200, opacity: 0.2, zIndex: 0 }} />
        <img className="area-bg-sticker" src="/PNG-RH/el-emoji.png" alt="" style={{ position: 'absolute', bottom: 40, left: 40, width: 100, opacity: 0.4, zIndex: 0 }} />
        
        <h2 className="area-sec-title" style={{ color: '#fff' }}>Resultados em 2025</h2>
        
        <div className="area-pg">
          <div style={{ position: 'relative', zIndex: 2, background: 'rgba(255,255,255,0.08)', padding: '24px 20px', borderRadius: 20, border: '1px solid rgba(255,255,255,0.15)' }}>
            <p className="area-card-text" style={{ color: '#fff', maxWidth: 800, margin: '0 auto', textAlign: 'justify' }}>
              Por se tratar de uma coordenadoria de suporte e controle estritamente interno (focada em clima, burocracias e fiscalização de relatórios/políticas), a área reportou que métricas de impacto social direto não se aplicam aos resultados consolidados do RH. O foco principal é garantir que o grupo permaneça motivado e estruturado para gerar impacto externo positivo.
            </p>
          </div>
        </div>

      </section>
      
    </div>
  );
};
