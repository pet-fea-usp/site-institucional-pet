import React from 'react';
import { Torn } from '../components/ui/Torn.jsx';
import { TCard } from '../components/ui/TCard.jsx';

export const Rexin = () => {
  const c = {
    bg: '#e8e4d8', // Light background
    d: '#1a182e', // Dark text
    m: '#f57f1f', // Main accent
    l: '#ff944e', // Light accent
    o: '#28beac', // Secondary highlight (greenish)
    d2: '#d4701e' // Darker orange
  };

  return (
    <div style={{ background: c.bg, minHeight: '100vh', paddingBottom: 80, overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="area-hero-sec">
        <img className="area-bg-sticker" src="/PNG-Rexin/simbolo.png" alt="Símbolo" style={{ position: 'absolute', top: '10%', left: '4%', width: 140, opacity: 0.5, zIndex: 1, transform: 'rotate(-10deg)' }} />
        
        <div className="area-pg" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, width: '100%', textAlign: 'center' }}>
            <img src="/PNG-Rexin/rexin logo principal.png" alt="REXin" style={{ width: '100%', maxWidth: 480, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
          </div>
          
          <div className="area-hero-card" style={{ boxShadow: `0 24px 80px ${c.m}30`, border: `2px solid ${c.l}40` }}>
            
            <h1 className="area-hero-title" style={{ color: c.d2 }}>
              Ponte Estratégica
            </h1>
            
            <p className="area-hero-text">
              O <strong style={{ color: c.m }}>REXin</strong> (Relações Externas e Internas) é uma coordenadoria que atua como ponte estratégica entre os diferentes públicos do PET FEA USP, focando tanto no fortalecimento da cultura interna quanto na projeção da entidade para o ambiente externo.
            </p>
            <p className="area-hero-text">
              No âmbito interno, o REXin dedica-se aos membros ingressantes, veteranos e egressos, promovendo o engajamento e o senso de pertencimento por meio de integrações e suporte à cultura organizacional. Externamente, a área estabelece conexões com a comunidade da FEA, outras entidades estudantis, empresas parceiras e profissionais de diversas áreas, facilitando o networking e a troca de experiências.
            </p>
          </div>
        </div>
      </section>

      {/* Ripped Divider */}
      <Torn fill={c.d2} bg={c.bg} />

      {/* Content Section */}
      <section className="area-sec-content" style={{ background: c.d2, color: '#fff' }}>
        
        <div className="area-pg">
          <div className="area-grid">
            
            <div className="area-card" style={{ background: c.d }}>
              <img className="area-card-sticker" src="/PNG-Rexin/el-parceria.png" alt="Parceria" style={{ position: 'absolute', top: -30, right: -20, width: 75, objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Público-Alvo
              </h2>
              <p className="area-card-text" style={{ color: 'rgba(255,255,255,0.95)' }}>
                O público-alvo engloba tanto o ambiente interno quanto o externo. Internamente, tem como foco os membros da entidade (ingressantes, veteranos e egressos), atuando no fortalecimento da cultura, engajamento e senso de pertencimento. Externamente, relaciona-se com a FEA-USP, outras entidades, estudantes da faculdade, empresas parceiras e profissionais envolvidos em eventos e capacitações.
              </p>
            </div>

            <div className="area-card" style={{ background: '#fff', color: c.d, transform: 'rotate(1.5deg)' }}>
              <img className="area-card-sticker" src="/PNG-Rexin/el-megafone.png" alt="Megafone" style={{ position: 'absolute', top: -45, left: -25, width: 95, transform: 'rotate(-10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: c.d2 }}>
                 Objetivos e Conexões
              </h2>
              <ul className="area-card-list" style={{ color: '#444' }}>
                <li style={{ marginBottom: 10 }}><strong style={{ color: c.m }}>Âmbito interno:</strong> fortalecer a cultura e senso de pertencimento, promovendo integração entre os membros (ingressantes, veteranos e egressos).</li>
                <li style={{ marginBottom: 10 }}><strong style={{ color: c.m }}>Âmbito externo:</strong> construir relações com a FEA, entidades, empresas e profissionais, promovendo eventos que ampliam o repertório.</li>
                <li><strong style={{ color: c.m }}>Networking:</strong> estimular a troca e conexão entre membros, egressos e parceiros.</li>
              </ul>
            </div>

            <div className="area-card" style={{ background: c.o, color: c.d, transform: 'rotate(-1deg)' }}>
              <img className="area-card-sticker" src="/PNG-Rexin/el-pizza.png" alt="Pizza" style={{ position: 'absolute', top: -35, right: -25, width: 75, transform: 'rotate(10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Contribuição para a Sociedade
              </h2>
              <p className="area-card-text" style={{ color: '#fff' }}>
                A contribuição social manifesta-se na democratização do conhecimento e no debate de temas relevantes. Ao organizar palestras em datas como Dia da Mulher, Mês do Orgulho e Consciência Negra, abertas ao público feano, o REXin cria espaços para discussões e reflexões que ampliam o repertório do público universitário.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Torn fill={c.bg} bg={c.d2} />

      <section className="area-sec-content" style={{ paddingBottom: 40 }}>
        <div className="area-pg">
          
          <img className="area-bg-sticker" src="/PNG-Rexin/el-fone.png" alt="" style={{ position: 'absolute', top: -50, right: -40, width: 120, opacity: 0.8, transform: 'rotate(15deg)', zIndex: 1 }} />
          
          <div style={{ marginBottom: 40, position: 'relative', zIndex: 2 }}>
            
            <div className="area-dashed-card" style={{ border: `3px dashed ${c.m}` }}>
              <img className="area-card-sticker" src="/PNG-Rexin/el-calendario.png" alt="Calendário" style={{ position: 'absolute', bottom: -25, right: -15, width: 85, objectFit: 'contain' }} />
              <img className="area-bg-sticker" src="/PNG-Rexin/el-tomate.png" alt="" style={{ position: 'absolute', top: -30, right: 120, width: 60, opacity: 0.6, transform: 'rotate(-15deg)' }} />
              <div className="area-dashed-badge" style={{ background: c.m }}>
                História
              </div>
              <h3 style={{ color: c.d2 }}>Quando e como surgiu?</h3>
              <p style={{ marginBottom: 14 }}>
                Criado originalmente em 2017 como "REX", o projeto surgiu com o propósito de aproximar os grupos PET da USP, buscando maior representatividade em conselhos e a criação de projetos conjuntos, criando conexão, trocando experiências e fortalecendo esse movimento dentro e fora da universidade.
              </p>
              <p style={{ margin: 0 }}>
                Com o tempo a área evoluiu e, em 2024, o projeto passou por uma transição importante ao assumir oficialmente a gestão das relações internas e a manutenção da cultura. Essa mudança marcou a transição de REX para REXin, em que o “in” simboliza justamente essa nova frente interna.
              </p>
            </div>

          </div>
          
        </div>
      </section>

      {/* Results Section */}
      <section className="area-sec-content" style={{ textAlign: 'center', position: 'relative', background: c.m, overflow: 'hidden' }}>
        <img className="area-bg-sticker" src="/PNG-Rexin/el-bolsa.png" alt="" style={{ position: 'absolute', top: -30, right: -40, width: 200, opacity: 0.2, zIndex: 0 }} />
        <img className="area-bg-sticker" src="/PNG-Rexin/el-seta.png" alt="" style={{ position: 'absolute', bottom: 40, left: 40, width: 100, opacity: 0.4, zIndex: 0 }} />
        <img className="area-bg-sticker" src="/PNG-Rexin/el-hotdog.png" alt="" style={{ position: 'absolute', top: '40%', right: '10%', width: 150, opacity: 0.15, transform: 'rotate(25deg)', zIndex: 0 }} />
        
        <h2 className="area-sec-title" style={{ color: '#fff' }}>Resultados em 2025</h2>
        
        <div className="area-pg">
          <div className="area-stat-grid">
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num" style={{ color: c.d2, fontSize: '2.4rem' }}>3</span>
              <span className="area-stat-lbl">Eventos de integração: Rolê, Viagem e PET31</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.d2, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)', transform: 'translateY(-15px)' }}>
              <span className="area-stat-num">1</span>
              <span className="area-stat-lbl">Palestra Mês do Orgulho</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.o, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">1</span>
              <span className="area-stat-lbl">Visitação corporativa Deloitte</span>
            </div>
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)', transform: 'translateY(-15px)' }}>
              <span className="area-stat-num" style={{ color: c.d2 }}>2</span>
              <span className="area-stat-lbl">Capacitações (Liderança e LinkedIn)</span>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
};
