import React from 'react';
import { Torn } from '../components/ui/Torn.jsx';
import { TCard } from '../components/ui/TCard.jsx';

export const Finfra = () => {
  const c = {
    bg: '#e8e4d8', // Light background
    d: '#32620e', // Dark text / secondary dark green
    m: '#24915d', // Main accent / primary green
    l: '#81a969', // Light green
    o: '#bc1823', // Red highlight
    d2: '#1a182e' // Darker text for readability
  };

  return (
    <div style={{ background: c.bg, minHeight: '100vh', paddingBottom: 80, overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="area-hero-sec">
        <img className="area-bg-sticker" src="/PNG-Finfra/simbolo.png" alt="Símbolo" style={{ position: 'absolute', top: '10%', left: '4%', width: 140, opacity: 0.5, zIndex: 1, transform: 'rotate(-10deg)' }} />
        
        <div className="area-pg" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, width: '100%', textAlign: 'center' }}>
            <img src="/PNG-Finfra/finfra logo principal.png" alt="Finfra" style={{ width: '100%', maxWidth: 480, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
          </div>
          
          <div className="area-hero-card" style={{ boxShadow: `0 24px 80px ${c.m}30`, border: `2px solid ${c.l}40` }}>
            
            <h1 className="area-hero-title" style={{ color: c.d }}>
              Gestão e Estrutura
            </h1>
            
            <p className="area-hero-text">
              O <strong style={{ color: c.m }}>Finfra</strong> (Finanças e Infraestrutura) atua como a coordenadoria estratégica responsável pela saúde financeira, padronização de processos e suporte estrutural do PET FEA USP.
            </p>
            <p className="area-hero-text">
              O público-alvo é composto pelos próprios membros do PET interessados em desenvolver competências em planejamento orçamentário, análise financeira e administração de recursos. A contribuição da área para a sociedade ocorre de forma indireta: ao assegurar uma gestão transparente, ética e sustentável do orçamento, o Finfra viabiliza a continuidade de todos os projetos de extensão e pesquisa do grupo.
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
              <img className="area-card-sticker" src="/PNG-Finfra/el-moedas.png" alt="Moedas" style={{ position: 'absolute', top: -30, right: -20, width: 75, objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Público-Alvo
              </h2>
              <p className="area-card-text" style={{ color: 'rgba(255,255,255,0.95)' }}>
                Membros do PET FEA USP interessados em gestão financeira, organização de processos e planejamento orçamentário. É voltada para pessoas que desejam desenvolver habilidades analíticas ligadas à administração de recursos, infraestrutura e suporte estratégico.
              </p>
            </div>

            <div className="area-card" style={{ background: '#fff', color: c.d, transform: 'rotate(1.5deg)' }}>
              <img className="area-card-sticker" src="/PNG-Finfra/el-cadernetas.png" alt="Cadernetas" style={{ position: 'absolute', top: -45, left: -25, width: 95, transform: 'rotate(-10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: c.d }}>
                 Principais Objetivos
              </h2>
              <ul className="area-card-list" style={{ color: '#444' }}>
                <li>Garantir uma gestão financeira organizada e transparente.</li>
                <li>Apoiar estruturalmente os projetos e coordenadorias do PET.</li>
                <li>Melhorar a eficiência na utilização dos recursos da entidade.</li>
                <li>Organizar e padronizar processos internos.</li>
                <li>Promover o planejamento financeiro e controle orçamentário.</li>
                <li>Manter a infraestrutura da "salinha" funcional e acessível.</li>
              </ul>
            </div>

            <div className="area-card" style={{ background: c.o, color: '#fff', transform: 'rotate(-1deg)' }}>
              <img className="area-card-sticker" src="/PNG-Finfra/el-carteira.png" alt="Carteira" style={{ position: 'absolute', top: -35, right: -25, width: 75, transform: 'rotate(10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Contribuição para a Sociedade
              </h2>
              <p className="area-card-text" style={{ color: '#fff' }}>
                O Finfra contribui para a sociedade ao garantir que os recursos do grupo sejam geridos de forma ética e eficiente, permitindo a viabilização de projetos de extensão que impactam o público externo. Além disso, forma membros com alta capacidade analítica e de gestão de recursos para o mercado e para o ambiente acadêmico.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Torn fill={c.bg} bg={c.m} />

      <section className="area-sec-content" style={{ paddingBottom: 40 }}>
        <div className="area-pg">
          
          <img className="area-bg-sticker" src="/PNG-Finfra/el-porcentagem.png" alt="" style={{ position: 'absolute', top: -50, right: -40, width: 120, opacity: 0.8, transform: 'rotate(15deg)', zIndex: 1 }} />
          
          <div style={{ marginBottom: 40, position: 'relative', zIndex: 2 }}>
            
            <div className="area-dashed-card" style={{ border: `3px dashed ${c.m}` }}>
              <img className="area-card-sticker" src="/PNG-Finfra/el-cifrao.png" alt="Cifrão" style={{ position: 'absolute', bottom: -25, right: -15, width: 85, objectFit: 'contain' }} />
              <img className="area-bg-sticker" src="/PNG-Finfra/el-mao.png" alt="" style={{ position: 'absolute', top: -30, right: 120, width: 60, opacity: 0.6, transform: 'rotate(-15deg)' }} />
              <div className="area-dashed-badge" style={{ background: c.m }}>
                História
              </div>
              <h3 style={{ color: c.d }}>Quando e como surgiu?</h3>
              <p style={{ marginBottom: 14 }}>
                Surgiu entre os anos de 2017 e 2019. Inicialmente, a área estava vinculada ao RH do PET com o foco em administrar as bolsas-auxílio concedidas a estudantes que atendiam a critérios específicos. Para desafogar o RH e resolver problemas como bolsas ociosas e engajamento de beneficiários, a área foi estruturada de forma independente.
              </p>
              <p style={{ margin: 0 }}>
                Entre 2021 e 2022, assumiu também a gestão da infraestrutura da entidade (que antes era descentralizada), passando a cuidar do espaço físico ("salinha") e materiais. Ao longo dos anos, evoluiu para uma coordenadoria estratégica de controle orçamentário global.
              </p>
            </div>

          </div>
          
        </div>
      </section>

      {/* Results Section */}
      <section className="area-sec-content" style={{ textAlign: 'center', position: 'relative', background: c.d, overflow: 'hidden' }}>
        <img className="area-bg-sticker" src="/PNG-Finfra/el-bolsa.png" alt="" style={{ position: 'absolute', top: -30, right: -40, width: 200, opacity: 0.2, zIndex: 0 }} />
        <img className="area-bg-sticker" src="/PNG-Finfra/el-poucas moedas.png" alt="" style={{ position: 'absolute', bottom: 40, left: 40, width: 100, opacity: 0.4, zIndex: 0 }} />
        <img className="area-bg-sticker" src="/PNG-Finfra/el-carteira com dinheiro.png" alt="" style={{ position: 'absolute', top: '40%', right: '10%', width: 150, opacity: 0.15, transform: 'rotate(25deg)', zIndex: 0 }} />
        
        <h2 className="area-sec-title" style={{ color: '#fff' }}>Resultados em 2025</h2>
        
        <div className="area-pg">
          <div className="area-stat-grid">
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num" style={{ color: c.d, fontSize: '2.2rem' }}>+ R$ 30k</span>
              <span className="area-stat-lbl">Captados e administrados pela área</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.m, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)', transform: 'translateY(-15px)' }}>
              <span className="area-stat-num" style={{ fontSize: '2.6rem' }}>R$ 3k</span>
              <span className="area-stat-lbl">Lucro da carteira de investimentos</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.o, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">6</span>
              <span className="area-stat-lbl">Capacitações financeiras realizadas</span>
            </div>
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)', transform: 'translateY(-15px)' }}>
              <span className="area-stat-num" style={{ color: c.d, fontSize: '1.8rem' }}>Instituto C</span>
              <span className="area-stat-lbl">Apoio enviado e conteúdo a +20 pessoas</span>
            </div>

          </div>
        </div>

        <div style={{ marginTop: 32, background: 'rgba(255,255,255,0.1)', padding: '16px 28px', borderRadius: 20, display: 'inline-block', position: 'relative', zIndex: 2, maxWidth: '90%' }}>
           <p style={{ color: '#fff', fontFamily: 'var(--fs)', fontSize: '1.05rem', margin: 0, lineHeight: 1.5 }}>✓ Aquisição de um novo armário para expansão do armazenamento institucional.</p>
        </div>

      </section>
      
    </div>
  );
};
