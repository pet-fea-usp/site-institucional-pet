import React, { useState } from 'react';
import { SH } from '../components/ui/SH.jsx';
import { PhotoPh } from '../components/ui/PhotoPh.jsx';
import { Torn } from '../components/ui/Torn.jsx';
import { IcoSearch, IcoMega, IcoNet, IcoWallet, IcoUsers } from '../components/icons.jsx';

export const Sobre = ({ go }) => {
  const [filter, setFilter] = useState('Todos');

  const members = [
    { name: 'Gabriela Saito Pereira',      role: 'Líder',    coord: 'MKT',   ini: 'GS', c1: '#004E70', c2: '#28BEAC' },
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
