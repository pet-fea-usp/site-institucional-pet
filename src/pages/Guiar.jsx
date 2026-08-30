import React from 'react';
import { Torn } from '../components/ui/Torn.jsx';
import { TCard } from '../components/ui/TCard.jsx';
import { IcoCoin, IcoMega, IcoUsers, IcoNet, IcoGlobe } from '../components/icons.jsx';

export const Guiar = () => {
  const c = {
    bg: '#e8e4d8',
    d: '#009e97',
    m: '#37c2bb',
    l: '#a5e8d3',
    o: '#024f70',
  };

  return (
    <div style={{ background: c.bg, minHeight: '100vh', paddingBottom: 80, overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="area-hero-sec">
        <img className="area-bg-sticker" src="/PNG-Guiar/peca.png" alt="Peça" style={{ position: 'absolute', top: '10%', left: '4%', width: 140, opacity: 0.8, zIndex: 1, transform: 'rotate(-10deg)' }} />
        <img className="area-bg-sticker" src="/PNG-Guiar/moedas.png" alt="Moedas" style={{ position: 'absolute', bottom: '10%', right: '5%', width: 160, opacity: 0.9, zIndex: 1, transform: 'rotate(15deg)' }} />
        <img className="area-bg-sticker" src="/PNG-Guiar/simbolo calculadora.png" alt="Calculadora" style={{ position: 'absolute', top: '10%', right: '4%', width: 140, opacity: 0.9, zIndex: 1, transform: 'rotate(10deg)' }} />
        
        <div className="area-pg" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8, width: '100%', textAlign: 'center' }}>
            <img src="/PNG-Guiar/guiar logo recorte.png" alt="Guiar Logo" style={{ width: '100%', maxWidth: 540, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
          </div>
          
          <div className="area-hero-card" style={{ boxShadow: '0 24px 80px rgba(58, 173, 157, 0.15)', border: `2px solid ${c.l}40` }}>
            
            <h1 className="area-hero-title" style={{ color: c.d }}>
              Educação Financeira para Todos
            </h1>
            
            <p className="area-hero-text">
              Criado em 2007, o projeto <strong style={{ color: c.m }}>Guiar</strong> promove a democratização da educação financeira para públicos socialmente vulneráveis, como idosos, pessoas com deficiência e estudantes de escolas públicas.
            </p>
            <p className="area-hero-text">
              A partir de conteúdos didáticos e uma linguagem simplificada, o Guiar leva conhecimento financeiro e ajuda o público atingido a realizar decisões financeiras saudáveis para sua vida pessoal e em outras áreas. Em 2025, o projeto promoveu duas palestras em ETECs e uma visita a uma ONG com a participação de uma turma de trancistas de periferia, levando autonomia e conhecimentos adquiridos na faculdade para o público presente.
            </p>
          </div>
        </div>
      </section>

      {/* Ripped Divider */}
      <Torn fill={c.m} bg={c.bg} />

      {/* Content Section */}
      <section className="area-sec-content" style={{ background: c.m, color: '#fff' }}>
        <img className="area-bg-sticker" src="/PNG-Guiar/seta.png" alt="Seta" style={{ position: 'absolute', top: -30, right: 40, width: 80, paddingTop: 23, opacity: 0.8, transform: 'rotate(15deg)' }} />
        
        <div className="area-pg">
          <div className="area-grid">
            
            <div className="area-card" style={{ background: c.d }}>
              <img className="area-card-sticker" src="/PNG-Guiar/estrela.png" alt="Estrela" style={{ position: 'absolute', top: -30, right: -20, width: 75 }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Público-Alvo
              </h2>
              <p className="area-card-text" style={{ color: 'rgba(255,255,255,0.95)' }}>
                O Guiar tem como objetivo alcançar escolas e organizações não governamentais (ONGs) que atendem a populações socialmente vulneráveis. A cada ciclo, um público-alvo específico é escolhido pelos membros, adaptando os materiais à realidade do público.
              </p>
            </div>

            <div className="area-card" style={{ background: '#fff', color: c.d, transform: 'rotate(1.5deg)' }}>
              <img className="area-card-sticker" src="/PNG-Guiar/megafone.png" alt="Megafone" style={{ position: 'absolute', top: -45, left: -25, width: 95, transform: 'rotate(-10deg)' }} />
              <h2 className="area-card-title" style={{ color: c.d }}>
                 Objetivos e Impacto
              </h2>
              <h3 className="area-card-sub" style={{ color: c.m }}>Principais Objetivos</h3>
              <ul className="area-card-list" style={{ color: '#444' }}>
                <li>Ensino de educação financeira</li>
                <li>Democratização do conhecimento em finanças</li>
                <li>Criação de materiais com linguagem acessível ao público</li>
                <li>Contribuição com o ensino público</li>
              </ul>
              <h3 className="area-card-sub" style={{ color: c.m }}>Contribuição para a Sociedade</h3>
              <p className="area-card-text" style={{ color: '#444' }}>
                A atuação do GUIAR promove a democratização do ensino de finanças para além do ambiente universitário. O projeto promove a transformação positiva dos públicos-alvo e busca contribuir para a melhoria da qualidade de vida e da autonomia financeira de cada pessoa atingida.
              </p>
            </div>

          </div>
        </div>
      </section>

      <Torn fill={c.bg} bg={c.m} />

      <section className="area-sec-content" style={{ paddingBottom: 40 }}>
        <div className="area-pg">
          <div className="area-grid" style={{ marginBottom: 48 }}>
            
            <div className="area-dashed-card" style={{ border: `3px dashed ${c.m}` }}>
              <img className="area-card-sticker" src="/PNG-Guiar/livro.png" alt="Livro" style={{ position: 'absolute', bottom: -30, right: -20, width: 90 }} />
              <div className="area-dashed-badge" style={{ background: c.o }}>
                História
              </div>
              <h3 style={{ color: c.d }}>Quando e como surgiu?</h3>
              <p>
                O Projeto GUIAR foi criado em 2007, com o objetivo de trazer a educação financeira para públicos socialmente vulneráveis. No ano, um dos membros do PET esqueceu seu livro de finanças dentro do ônibus fretado. Ao encontrar o item, descobriu que o próprio motorista estava lendo-o nas paradas entre viagens. Com isso, a equipe na época teve a ideia de oferecer um curso semestral focado em finanças pessoais para funcionários da USP, utilizando de linguagem acessível, de modo que o público aprendesse a administrar melhor o seu próprio dinheiro.
              </p>
            </div>

            <div className="area-dashed-card" style={{ border: `3px dashed ${c.m}` }}>
              <img className="area-card-sticker" src="/PNG-Guiar/exclamacao.png" alt="Exclamação" style={{ position: 'absolute', top: -40, right: -20, width: 80 }} />
              <div className="area-dashed-badge" style={{ background: c.l }}>
                Relatos
              </div>
              <h3 style={{ color: c.d }}>A voz de quem participou</h3>
              <p style={{ fontStyle: 'italic', marginBottom: 12 }}>
                "A forma como a matéria é trazida e explicada é muito boa e didática."
              </p>
              <p style={{ fontStyle: 'italic', marginBottom: 12 }}>
                "Muito bons os slides, o clima de amizade entre quem apresentava deixou ainda mais legal tudo."
              </p>
              <p style={{ fontStyle: 'italic', margin: 0 }}>
                "Adorei o joguinho e como eles interagem conosco! Obrigada!"
              </p>
            </div>
          </div>
          
          <h2 className="area-sec-title" style={{ color: c.d, marginBottom: 32 }}>Mais depoimentos...</h2>
          <div className="tgrid">
            <TCard text="O curso mudou minha relação com o dinheiro. Aprendi a fazer um orçamento real e parei de entrar no cheque especial." name="Joana Souza"   role="Participante, Etec Cepam"                 initials="JS" c1={c.m} c2={c.l} />
            <TCard text="Ver jovens ensinando educação financeira de forma acessível foi transformador para nossos alunos."                   name="Prof. Marcos Lima" role="Coordenador, Etec Prof. Camargo Aranha" initials="ML" c1={c.d} c2={c.m} />
            <TCard text="Participar do GUIAR foi a experiência mais significativa do meu tempo no PET. Impacto real, concreto e humano."      name="Beatriz Alves"  role="Ex-membro GUIAR, PET FEA USP"           initials="BA" c1={c.o} c2="#F7BC1E" />
          </div>

        </div>
      </section>
      
      {/* Parcerias e Impacto */}
      <section className="area-sec-content" style={{ background: c.d, color: '#fff' }}>
        <div className="area-pg">
          <h2 className="area-sec-title" style={{ color: '#fff' }}>Parcerias Históricas</h2>
          <div className="grid-2">
            {[
              { name: 'Etecs Cepam & Prof. Camargo Aranha', desc: 'Oficinas de educação financeira para alunos do ensino médio em 2025.',        Ico: IcoMega,   c: '#3AAD9D' },
              { name: 'Instituto C',                         desc: 'Atende famílias em situações atípicas e promove a autonomia financeira.',       Ico: IcoUsers,  c: '#004E70' },
              { name: 'Instituto Salve Quebrada',            desc: 'Leva oportunidades e fomenta o desenvolvimento da periferia paulistana.',       Ico: IcoNet,    c: '#7DD856' },
              { name: 'Instituto Vivendas / Lacoste Foundation', desc: 'Levou educação financeira a jovens participantes da ONG.',                  Ico: IcoGlobe,  c: '#F57F1F' },
            ].map((p, i) => (
              <div key={i} style={{ padding: '20px 22px', background: 'rgba(255,255,255,0.05)', borderRadius: 16, border: '1px solid rgba(255,255,255,0.1)', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.c}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <p.Ico s={22} c={p.c} />
                </div>
                <div>
                  <h4 style={{ fontFamily: 'var(--fh)', fontSize: 16, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{p.name}</h4>
                  <p style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.55 }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="area-sec-content" style={{ textAlign: 'center', position: 'relative', background: c.bg }}>
        <img className="area-bg-sticker" src="/PNG-Guiar/lampada.png" alt="Lâmpada" style={{ position: 'absolute', left: '10%', bottom: '20%', width: 140, opacity: 0.5 }} />
        <img className="area-bg-sticker" src="/PNG-Guiar/guiar logo recorte.png" alt="Recorte" style={{ position: 'absolute', right: '10%', top: '10%', width: 180, opacity: 0.4 }} />
        <h2 className="area-sec-title" style={{ color: c.d }}>Resultados em 2025</h2>
        
        <div className="area-pg">
          <div className="area-stat-grid">
            
            <div className="area-stat-circle" style={{ background: c.d, color: '#fff', boxShadow: '0 12px 40px rgba(58,173,157,0.3)' }}>
              <span className="area-stat-num">2</span>
              <span className="area-stat-lbl">ETECs atingidas</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.m, color: '#fff', boxShadow: '0 12px 40px rgba(58,173,157,0.3)' }}>
              <span className="area-stat-num">1</span>
              <span className="area-stat-lbl">ONG (Trancistas)</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.o, color: '#fff', boxShadow: '0 12px 40px rgba(58,173,157,0.3)' }}>
              <span className="area-stat-num">120</span>
              <span className="area-stat-lbl">Alunos Impactados</span>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
