import React from 'react';
import { Torn } from '../components/ui/Torn.jsx';
import { TCard } from '../components/ui/TCard.jsx';

export const Micro = () => {
  const c = {
    bg: '#e8e4d8',
    d: '#49326b',
    m: '#b17bda',
    l: '#d2c7ff',
    o: '#f6aa51',
  };

  return (
    <div style={{ background: c.bg, minHeight: '100vh', paddingBottom: 80, overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="area-hero-sec">
        <img className="area-bg-sticker" src="/PNG-Micro/simbolo.png" alt="Símbolo" style={{ position: 'absolute', top: '10%', left: '4%', width: 140, opacity: 0.5, zIndex: 1, transform: 'rotate(-10deg)' }} />
        
        <div className="area-pg" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 12, width: '100%', textAlign: 'center' }}>
            <img src="/PNG-Micro/micro logo principal.png" alt="Micro" style={{ width: '100%', maxWidth: 480, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
          </div>
          
          <div className="area-hero-card" style={{ boxShadow: `0 24px 80px ${c.m}20`, border: `2px solid ${c.l}40` }}>
            
            <h1 className="area-hero-title" style={{ color: c.d }}>
              Transformando Conhecimento em Impacto
            </h1>
            
            <p className="area-hero-text">
              O <strong style={{ color: c.m }}>Micro</strong> é um projeto do PET FEA USP voltado a transformar o conhecimento acadêmico gerado na universidade em impacto real na economia, focando na democratização do acesso à informação em gestão.
            </p>
            <p className="area-hero-text">
              O público-alvo principal da coordenadoria é composto por microempreendedores, empreendedores informais e pessoas interessadas em abrir o próprio negócio (fase de incubação). O foco do suporte é direcionado àqueles que estão em qualquer estágio do negócio, mas que possuem pouco ou nenhum acesso a capacitações formais de gestão e necessitam aprimorar a tomada de decisões em áreas cruciais como finanças, marketing e operações. Paralelamente, o projeto também visa o desenvolvimento teórico e prático de hard e soft skills de seus próprios membros na área de negócios.
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
              <img className="area-card-sticker" src="/PNG-Micro/el-ideia lampada.png" alt="Ideia" style={{ position: 'absolute', top: -30, right: -20, width: 75, objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Público-Alvo
              </h2>
              <p className="area-card-text" style={{ color: 'rgba(255,255,255,0.95)' }}>
                O público-alvo principal são microempreendedores, especialmente aqueles que: têm pouco ou nenhum acesso à capacitação formal em gestão; estão em qualquer fase de seu negócio; precisam melhorar decisões em áreas como finanças, marketing e operações. Além disso, o projeto também impacta empreendedores informais e pessoas interessadas em abrir o próprio negócio (incubação).
              </p>
            </div>

            <div className="area-card" style={{ background: '#fff', color: c.d, transform: 'rotate(1.5deg)' }}>
              <img className="area-card-sticker" src="/PNG-Micro/el-cerebro.png" alt="Cérebro" style={{ position: 'absolute', top: -45, left: -25, width: 95, transform: 'rotate(-10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: c.d }}>
                 Objetivos e Impacto
              </h2>
              <h3 className="area-card-sub" style={{ color: c.m }}>Principais Objetivos</h3>
              <ul className="area-card-list" style={{ color: '#444' }}>
                <li>Capacitar micro e pequenos empreendedores de forma acessível</li>
                <li>Traduzir conteúdos acadêmicos para uma linguagem prática e aplicável</li>
                <li>Gerar impacto social, fortalecendo negócios reais</li>
                <li>Ampliar alcance, combinando atuação online e presencial</li>
                <li>Apoiar o desenvolvimento sustentável dos empreendimentos</li>
                <li>Desenvolver hard e soft skills dos membros do projeto</li>
              </ul>
            </div>

            <div className="area-card" style={{ background: c.o, color: c.d, transform: 'rotate(-1deg)' }}>
              <img className="area-card-sticker" src="/PNG-Micro/el-astronauta.png" alt="Astronauta" style={{ position: 'absolute', top: -35, right: -25, width: 75, transform: 'rotate(10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: c.d }}>
                 Contribuição para a Sociedade
              </h2>
              <p className="area-card-text" style={{ color: '#111' }}>
                A principal contribuição é a democratização do acesso ao conhecimento em gestão. Na prática, isso significa: ajudar pequenos negócios a sobreviverem e crescerem; melhorar a tomada de decisão dos empreendedores; contribuir para a geração de renda e emprego; reduzir a desigualdade de acesso à informação entre grandes e pequenos negócios. É basicamente transformar conhecimento acadêmico em impacto real na economia.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Torn fill={c.bg} bg={c.m} />

      <section className="area-sec-content" style={{ paddingBottom: 40 }}>
        <div className="area-pg">
          
          <img className="area-bg-sticker" src="/PNG-Micro/el-planeta.png" alt="" style={{ position: 'absolute', top: -50, right: -40, width: 120, opacity: 0.8, transform: 'rotate(15deg)', zIndex: 1 }} />
          
          <div style={{ marginBottom: 60, position: 'relative', zIndex: 2 }}>
            
            <div className="area-dashed-card" style={{ border: `3px dashed ${c.m}` }}>
              <img className="area-card-sticker" src="/PNG-Micro/el-mao escrevendo.png" alt="Máquina de Escrever" style={{ position: 'absolute', bottom: -25, right: -15, width: 85, objectFit: 'contain' }} />
              <div className="area-dashed-badge" style={{ background: c.m }}>
                História
              </div>
              <h3 style={{ color: c.d }}>Quando e como surgiu?</h3>
              <p style={{ marginBottom: 14 }}>
                O projeto surgiu em 2019, dentro do PET FEA-USP, com a proposta de levar conhecimento prático da universidade para micro e pequenos empreendedores por meio de aulas presenciais gratuitas.
              </p>
              <p style={{ margin: 0 }}>
                Com a pandemia, houve uma adaptação importante, uma vez que a área foi reformulada para o digital, passando a atuar com produção de conteúdo (posts educativos), cartilhas e consultorias online.
              </p>
            </div>

          </div>
          
          <div style={{ position: 'relative', zIndex: 2, marginBottom: 60 }}>
            <h2 className="area-sec-title" style={{ color: c.d, marginBottom: 28 }}>Como Funciona</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {[
                { n: 1, c: '#6975C2', t: 'Capacitação (6 meses)', d: 'Formação intensiva em planejamento estratégico, marketing digital, controle financeiro e legislação para MEIs.' },
                { n: 2, c: '#9CCBD5', t: 'Diagnóstico do MEI',   d: 'Cada consultor realiza diagnóstico completo, identificando gargalos e oportunidades de melhoria.' },
                { n: 3, c: '#1a182e', t: 'Consultoria (6 meses)', d: 'O MEI recebe plano de ação personalizado e acompanhamento semanal para implementar as melhorias.' },
              ].map(s => (
                <div key={s.n} style={{ display: 'flex', gap: 16, alignItems: 'center', background: '#fff', padding: '18px 20px', borderRadius: 16, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', border: `1px solid ${c.l}40` }}>
                  <div style={{ width: 44, height: 44, borderRadius: '50%', background: s.c, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', fontWeight: 'bold', flexShrink: 0 }}>{s.n}</div>
                  <div>
                    <h3 style={{ fontSize: '1.2rem', color: c.d, marginBottom: 4 }}>{s.t}</h3>
                    <p style={{ fontFamily: 'var(--fs)', color: '#666', fontSize: '0.95rem', margin: 0, lineHeight: 1.5 }}>{s.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div style={{ position: 'relative', zIndex: 2, marginBottom: 60, background: '#fff', padding: '28px 24px', borderRadius: 20, border: `2px solid ${c.l}60`, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20, boxShadow: '0 12px 40px rgba(0,0,0,0.05)' }}>
             <div style={{ flex: '1 1 280px' }}>
               <h2 style={{ fontSize: '1.5rem', color: c.d, marginBottom: 10 }}>Parceria com o SEBRAE</h2>
               <p style={{ fontFamily: 'var(--fs)', color: '#666', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                 Em 2025, o Micro firmou parceria com o SEBRAE, com visitas técnicas à Deloitte e acesso a ferramentas de gestão profissional para os MEIs atendidos.
               </p>
             </div>
             <div style={{ background: c.d, color: '#fff', padding: '12px 24px', borderRadius: 12, fontWeight: 'bold', fontSize: '1.2rem', letterSpacing: 2 }}>SEBRAE</div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
            <h2 className="area-sec-title" style={{ color: c.d, margin: 0 }}>Relatos de Impactados</h2>
          </div>
          <div className="tgrid">
            <TCard text="Me permiti olhar de forma profunda para o meu negócio e estou disposta a colocar tudo em prática" name="Kim Albuquerque"   role="Participante"                 initials="KA" c1={c.m} c2={c.o} />
            <TCard text="Nesse projeto há um grupo de jovens muitos talentosos e comprometidos. Parabéns." name="Elaine Leite"  role="Participante"     initials="EL" c1={c.d} c2={c.m} />
            <TCard text="Os consultores traziam sempre exemplos ao longo da consultoria, para ajudar na construção das ferramentas."            name="Ana Carolina"  role="Participante"       initials="AC" c1={c.o} c2={c.d} />
            <TCard text="Estou enfrentando os meus medos, acredito que vai dar tudo certo."                           name="Elaine Leite"    role="Participante"           initials="EL" c1={c.m} c2={c.d} />
            <TCard text="Motivador e estava ansioso de saber no final o plano de ação."                           name="Edson"    role="Participante 2025"           initials="E" c1={c.d} c2={c.o} />
            <TCard text="Consultores empenhados e dedicados em ajudar. Escutaram minhas dúvidas com atenção e sempre dispostos em ajudar."                           name="Regina"    role="Participante 2025"           initials="R" c1={c.m} c2={c.l} />
          </div>

        </div>
      </section>

      {/* Results Section */}
      <section className="area-sec-content" style={{ textAlign: 'center', position: 'relative', background: c.d, overflow: 'hidden' }}>
        <img className="area-bg-sticker" src="/PNG-Micro/el-lua.png" alt="" style={{ position: 'absolute', top: -30, right: -40, width: 200, opacity: 0.2, zIndex: 0 }} />
        <img className="area-bg-sticker" src="/PNG-Micro/el-estrela 1.png" alt="" style={{ position: 'absolute', bottom: 40, left: 40, width: 60, opacity: 0.6, zIndex: 0 }} />
        
        <h2 className="area-sec-title" style={{ color: '#fff' }}>Resultados em 2025</h2>
        
        <div className="area-pg">
          <div className="area-stat-grid">
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">9</span>
              <span className="area-stat-lbl">MEIs atendidos</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.m, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)', transform: 'translateY(-15px)' }}>
              <span className="area-stat-num">72</span>
              <span className="area-stat-lbl">Sessões de consultoria</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.o, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">18</span>
              <span className="area-stat-lbl">Membros consultores</span>
            </div>
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">18</span>
              <span className="area-stat-lbl">Materiais entregues</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.m, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)', transform: 'translateY(-15px)' }}>
              <span className="area-stat-num">7</span>
              <span className="area-stat-lbl">Apostilas feitas</span>
            </div>
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">4</span>
              <span className="area-stat-lbl">Palestras</span>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
};
