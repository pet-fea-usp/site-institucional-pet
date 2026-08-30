import React from 'react';
import { Torn } from '../components/ui/Torn.jsx';
import { TCard } from '../components/ui/TCard.jsx';

export const Pesquisa = () => {
  const c = {
    bg: '#e8e4d8',
    d: '#bc1823',
    m: '#de0f3f',
    l: '#ef3a5d',
    o: '#6ac66b',
  };

  return (
    <div style={{ background: c.bg, minHeight: '100vh', paddingBottom: 80, overflowX: 'hidden' }}>
      {/* Hero Section */}
      <section className="area-hero-sec">
        <img className="area-bg-sticker" src="/PNG-Pesquisa/el-simbolo.png" alt="Símbolo" style={{ position: 'absolute', top: '10%', left: '80%', width: 140, opacity: 0.5, zIndex: 1, transform: 'rotate(-10deg)' }} />
        
        <div className="area-pg" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 8, width: '100%', textAlign: 'center' }}>
            <img src="/PNG-Pesquisa/pesquisa logo principal.png" alt="Pesquisa" style={{ width: '100%', maxWidth: 520, objectFit: 'contain', display: 'block', margin: '0 auto' }} />
          </div>
          
          <div className="area-hero-card" style={{ boxShadow: `0 24px 80px ${c.m}20`, border: `2px solid ${c.l}40` }}>
            
            <h1 className="area-hero-title" style={{ color: c.d }}>
              Ciência e Sociedade
            </h1>
            
            <p className="area-hero-text">
              O <strong style={{ color: c.m }}>Projeto de Pesquisa</strong> produz conteúdo científico de qualidade e transmite esse conhecimento para a sociedade. A área atua com a comunidade interna através de orientações, e comunidade externa, através de parcerias com outras entidades da FEA com o objetivo de construir um cenário coletivo propenso à produção de pesquisa acadêmica realizada por membros da entidade.
            </p>
            <p className="area-hero-text">
              A pesquisa acompanha o PET FEA USP desde o início, e compõe o tripé universitário da entidade. O projeto se reinventa desde o seu lançamento, e o formato atual é uma inovação da gestão de 2026. Com o seu trabalho, a equipe do projeto auxilia na criação de conteúdo acadêmico de qualidade, além de realizar, mentorias a entidades que solicitam a ajuda do projeto.
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
              <img className="area-card-sticker" src="/PNG-Pesquisa/el-cerebro.png" alt="Cérebro" style={{ position: 'absolute', top: -30, right: -20, width: 75, objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Público-Alvo
              </h2>
              <p className="area-card-text" style={{ color: 'rgba(255,255,255,0.95)' }}>
                A pesquisa atua com a comunidade interna através de orientações, e comunidade externa, através de parcerias com outras entidades da FEA com o objetivo de construir um cenário coletivo propenso à produção de pesquisa acadêmica realizada por membros da entidade.
              </p>
            </div>

            <div className="area-card" style={{ background: '#fff', color: c.d, transform: 'rotate(1.5deg)' }}>
              <img className="area-card-sticker" src="/PNG-Pesquisa/el-computador.png" alt="Computador" style={{ position: 'absolute', top: -45, left: -25, width: 95, transform: 'rotate(-10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: c.d }}>
                 Objetivos e Impacto
              </h2>
              <h3 className="area-card-sub" style={{ color: c.m }}>Principais Objetivos</h3>
              <ul className="area-card-list" style={{ color: '#444' }}>
                <li>Auxiliar na criação de material acadêmico de qualidade</li>
                <li>Realização de mentorias à entidades que necessitam de auxílio nesse setor</li>
                <li>Demonstração de outras possibilidades de pesquisa</li>
                <li>Orientar a submissão da pesquisa em bolsas de organizações externas e internas</li>
              </ul>
              <h3 className="area-card-sub" style={{ color: c.m }}>Contribuição para a Sociedade</h3>
              <p className="area-card-text" style={{ color: '#444' }}>
                A pesquisa produz conteúdo científico de qualidade e transmite esse conhecimento para a sociedade.
              </p>
            </div>

            <div className="area-card" style={{ background: c.o, color: '#fff', transform: 'rotate(-1deg)' }}>
              <img className="area-card-sticker" src="/PNG-Pesquisa/el-interrogacao grande.png" alt="Por que pesquisar?" style={{ position: 'absolute', top: -35, right: -25, width: 75, transform: 'rotate(10deg)', objectFit: 'contain' }} />
              <h2 className="area-card-title" style={{ color: '#fff' }}>
                 Benefícios
              </h2>
              <ul className="area-card-list" style={{ color: 'rgba(255,255,255,0.95)' }}>
                <li style={{ marginBottom: 8 }}>Desenvolver pensamento crítico e científico</li>
                <li style={{ marginBottom: 8 }}>Aprender metodologias de pesquisa aplicadas</li>
                <li style={{ marginBottom: 8 }}>Publicar artigos e participar de congressos</li>
                <li style={{ marginBottom: 8 }}>Orientação de professores da FEA</li>
                <li>Iniciação científica no currículo desde o 1° ano</li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      <Torn fill={c.bg} bg={c.m} />

      <section className="area-sec-content" style={{ paddingBottom: 40 }}>
        <div className="area-pg">
          
          <img className="area-bg-sticker" src="/PNG-Pesquisa/el-binoculos.png" alt="" style={{ position: 'absolute', top: -50, right: -40, width: 120, opacity: 0.8, transform: 'rotate(15deg)', zIndex: 1 }} />
          
          <div style={{ marginBottom: 60, position: 'relative', zIndex: 2 }}>
            
            <div className="area-dashed-card" style={{ border: `3px dashed ${c.m}` }}>
              <img className="area-card-sticker" src="/PNG-Pesquisa/el-maquina-de-escrever.png" alt="Máquina de Escrever" style={{ position: 'absolute', bottom: -25, right: -15, width: 85, objectFit: 'contain' }} />
              <div className="area-dashed-badge" style={{ background: c.o }}>
                História
              </div>
              <h3 style={{ color: c.d }}>Quando e como surgiu?</h3>
              <p style={{ marginBottom: 14 }}>
                A pesquisa acompanha o PET FEA USP desde o início, e compõe o tripé universitário da entidade. O projeto se reinventa desde o seu lançamento, e o formato atual é uma inovação da gestão de 2026.
              </p>
              <p style={{ margin: 0 }}>
                Em 1994, surgiu o Projeto de Pesquisa — o primeiro pilar explorado pelo PET FEA-USP, com o propósito de fomentar a produção científica de alto nível. Os membros são livres para escolher temas, implementar metodologias e produzir pesquisas com orientação de professores da FEA.
              </p>
            </div>

          </div>
          
          <div style={{ position: 'relative', zIndex: 2, marginBottom: 60 }}>
            <h2 className="area-sec-title" style={{ color: c.d, marginBottom: 28 }}>Temas de Pesquisa Atuais</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, justifyContent: 'center' }}>
              {['Impacto do crédito em MEIs paulistanos', 'Políticas de inclusão financeira no Brasil', 'Empreendedorismo feminino na periferia de SP', 'Desigualdade educacional e ensino superior', 'Sustentabilidade em cadeias de suprimento', 'Finanças comportamentais e consumo'].map(t => (
                <div key={t} style={{ background: '#fff', border: `1.5px solid ${c.l}`, borderRadius: 10, padding: '10px 16px', fontFamily: 'var(--fh)', fontSize: 13, fontWeight: 700, color: c.d, boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                  {t}
                </div>
              ))}
            </div>
            <img className="area-bg-sticker" src="/PNG-Pesquisa/el-interrogacao pequena.png" alt="" style={{ position: 'absolute', bottom: -60, left: -20, width: 80, opacity: 0.6, zIndex: -1, transform: 'rotate(-20deg)' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 28 }}>
            <h2 className="area-sec-title" style={{ color: c.d, margin: 0 }}>Relatos de Impactados</h2>
            <img src="/PNG-Pesquisa/el-exclamacao.png" alt="" style={{ width: 32, transform: 'rotate(15deg)' }} />
          </div>
          <div className="tgrid">
            <TCard text="A Iniciação Científica que fiz ano passado tinha como tema: Como as formas de ingresso podem modificar ou não as experiências de jovens oriundos de classes populares dentro da universidade. Ela abriu portas para atuar na área analítica, onde eu preciso saber quais dados são importantes, qual história eles me contam, e etc.. Além disso, por trabalhar em uma farmacêutica focada em especialidades de neuro, percebo que a área de marketing precisa ter muito cuidado e estudo com pesquisa, tanto de mercado quanto científica para pensar em estratégias." name="Maria Claúdia"   role="Impactada"                 initials="MC" c1={c.m} c2={c.l} />
            <TCard text="O Projeto de Pesquisa me deu base para ingressar num programa de pós-graduação. Aprendi metodologia científica com autonomia real." name="Rafael Oliveira"  role="Ex-membro, doutorando USP"     initials="RO" c1={c.d} c2={c.m} />
            <TCard text="Nunca imaginei que no 1° semestre conseguiria publicar uma pesquisa. O suporte dos membros experientes foi fundamental."            name="Fernanda Castro"  role="Pesquisadora PET, 3° ano"       initials="FC" c1={c.o} c2={c.d} />
            <TCard text="Aprender a escrever cientificamente mudou minha forma de pensar. A academia não é bicho de sete cabeças."                           name="Lucas Martins"    role="Membro PET, Economia"           initials="LM" c1={c.m} c2={c.o} />
          </div>

        </div>
      </section>

      {/* Results Section */}
      <section className="area-sec-content" style={{ textAlign: 'center', position: 'relative', background: c.d, overflow: 'hidden' }}>
        <img className="area-bg-sticker" src="/PNG-Pesquisa/el-relogio de areia.png" alt="" style={{ position: 'absolute', top: -30, right: 40, width: 140, opacity: 0.4, zIndex: 0 }} />
        <img className="area-bg-sticker" src="/PNG-Pesquisa/el-livro.png" alt="" style={{ position: 'absolute', bottom: 40, left: 40, width: 120, opacity: 0.6, zIndex: 0 }} />
        
        <h2 className="area-sec-title" style={{ color: '#fff' }}>Resultados em 2025</h2>
        
        <div className="area-pg">
          <div className="area-stat-grid">
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">2</span>
              <span className="area-stat-lbl">Pesquisas em andamento</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.m, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)', transform: 'translateY(-15px)' }}>
              <span className="area-stat-num">1</span>
              <span className="area-stat-lbl">Pesquisa finalizada</span>
            </div>

            <div className="area-stat-circle" style={{ background: c.o, color: '#fff', boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">Várias</span>
              <span className="area-stat-lbl">Palestras p/ interno</span>
            </div>
            
            <div className="area-stat-circle" style={{ background: '#fff', color: c.d, boxShadow: '0 12px 40px rgba(0,0,0,0.3)' }}>
              <span className="area-stat-num">2</span>
              <span className="area-stat-lbl">Visitações</span>
            </div>

          </div>
        </div>
      </section>
      
    </div>
  );
};
