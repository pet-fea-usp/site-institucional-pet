import React from 'react';
import { SH } from '../components/ui/SH.jsx';
import { PhotoPh } from '../components/ui/PhotoPh.jsx';
import { FAQ } from '../components/ui/FAQ.jsx';
import { Torn } from '../components/ui/Torn.jsx';
import { IcoSearch, IcoBulb, IcoCoin, IcoPlane, IcoMail, IcoPin } from '../components/icons.jsx';

export const Home = ({ go }) => {
  const faqGroups = [
    [
      { q: 'O que é o PET?',               a: 'O PET é uma entidade horizontal ligada ao MEC que leva à sociedade o tripé universitário — pesquisa, ensino e extensão — por meio dos projetos. Em 30 anos formamos líderes comprometidos com impacto social.' },
      { q: 'Quais as vantagens do PET?',   a: 'Projetos com impacto social real, desenvolvimento de habilidades técnicas e interpessoais, mentoria de professores e ex-membros, networking com empresas e organizações parceiras.' },
      { q: 'Quais são as coordenadorias?', a: 'O PET possui três coordenadorias internas: Marketing (MKT), Relações Externas (REX) e Finanças & Infraestrutura (FINFRA), além dos quatro projetos de impacto social.' },
    ],
    [
      { q: 'Quando ocorre o PS?',           a: 'O PS ocorre anualmente, no início do 2° semestre (ago/set). Fique de olho nas redes @petfeausp!' },
      { q: 'Quem pode se inscrever?',       a: 'Todos os alunos regularmente matriculados na FEA-USP (Economia, Administração, Contabilidade e Atuária).' },
      { q: 'Como é o Processo Seletivo?',   a: 'Etapas: análise de currículo, redação/case, dinâmica em grupo e entrevista individual. Detalhes são divulgados nas redes e no site.' },
    ],
  ];

  const projs = [
    { id: 'pesquisa', simbolo: '/PNG-Pesquisa/el-simbolo.png', recorte: '/PNG-Pesquisa/pesquisa logo principal.png', c: '#bc1823', bg: '#ef3a5d', title: 'Projeto de Pesquisa',        desc: 'Iniciação científica e produção acadêmica desde 1994. Membros escolhem temas e publicam pesquisas anualmente sob orientação de professores da FEA.' },
    { id: 'micro',    simbolo: '/PNG-Micro/simbolo.png', recorte: '/PNG-Micro/micro logo principal.png', c: '#49326b', bg: '#49326b', title: 'Aprender para Empreender',   desc: 'Consultoria estratégica gratuita para MEIs. Em parceria com o SEBRAE — mais de 20 microempreendedores atendidos, 26 membros capacitados.' },
    { id: 'guiar',    simbolo: '/PNG-Guiar/simbolo calculadora.png', recorte: '/PNG-Guiar/guiar logo recorte.png', c: '#009e97', bg: '#009e97',  title: 'GUIAR',                      desc: 'Democratizando o acesso à Educação Financeira. Em 2025, impactamos 120 alunos do ensino médio com avaliação média de 4,8/5.' },
    { id: 'feira',    simbolo: '/PNG-Feira/simbolo.png', recorte: '/PNG-Feira/nome feira de intercambio.png', c: '#3e80ac', bg: '#024f70',  title: 'Feira de Intercâmbio',       desc: 'A maior feira de intercâmbio da USP com 480+ participantes em 2024. Conectando estudantes a consulados e universidades do mundo.' },
  ];

  return (
    <>
      {/* HERO */}
      <section className="hero halftone">
        <div className="hb hb1" /><div className="hb hb2" />
        <div className="ctn hero-c">
          <div className="two" style={{ alignItems: 'center' }}>
            <div>
              <div className="hbdg afu">✦ 30 anos de impacto social</div>
              <h1 className="afu d1">Levando o conhecimento da <span className="ac">FEA-USP</span> a quem mais precisa</h1>
              <p className="hlead afu d2">O PET FEA USP conecta estudantes a projetos de impacto real — pesquisa científica, consultoria para MEIs, educação financeira e intercâmbio acadêmico.</p>
              <div className="hacts afu d3">
                <button className="btn bp blg" onClick={() => go('sobre')}>Conheça o PET →</button>
                <button className="btn bgw blg" onClick={() => go('sobre')}>Processo Seletivo</button>
              </div>
            </div>
            {/* A imagem deve ser enviada para a pasta public com o nome equipe.jpg */}
            <img src="/logo-institucional.png" alt="PET FEA USP" style={{ width: '100%', maxWidth: 460, height: 'auto', objectFit: 'contain', display: 'block', margin: '0 auto' }} />
          </div>
        </div>
      </section>

      <Torn fill="var(--off)" />

      {/* PROJETOS */}
      <section className="sec bg-off">
        <div className="ctn">
          <SH label="Nossos Projetos" title="Conheça nossas frentes de impacto:"
            sub="Pesquisa, consultoria, educação financeira e intercâmbio — cada projeto representa um pilar do tripé universitário." />
          <div className="pgrid">
            {projs.map(p => (
              <div key={p.id} className="pc" onClick={() => go(p.id)}>
                <div className="pct">
                  <div className="pico" style={{ background: p.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src={p.simbolo} alt="" style={{ width: 50, height: 50, objectFit: 'contain' }} />
                  </div>
                  <div>
                    <img src={p.recorte} alt={p.title} style={{ height: 72, objectFit: 'contain', marginBottom: 3 }} />
                  </div>
                </div>
                <div className="pcb">
                  <p>{p.desc}</p>
                  <div className="plink" style={{ color: p.c }}>Saiba mais →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Torn fill="var(--p)" />

      {/* SOBRE BREVE */}
      <section className="sec" style={{ background: 'var(--p)' }}>
        <div className="ctn">
          <div className="two">
            <div>
              <SH label="Sobre o PET" title="O que é o PET FEA USP?" white
                sub="Uma entidade horizontal que há 30 anos forma líderes comprometidos com pesquisa, ensino e extensão universitária." />
              <p style={{ color: 'rgba(255,255,255,.72)', fontSize: 15.5, lineHeight: 1.8, marginBottom: 16 }}>
                Ligado ao MEC, o PET é composto por estudantes da FEA-USP que acreditam que o conhecimento deve ser democratizado.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 24 }}>
                <button className="btn bp" onClick={() => go('sobre')}>Conheça a equipe</button>
                <button className="btn bgw" onClick={() => go('sobre')}>Nossos valores</button>
              </div>
            </div>
            {/* Estatísticas — números brancos em fundo azul */}
            <div className="sbar grid-2" style={{ background: 'rgba(255,255,255,.06)', borderRadius: 22, overflow: 'hidden', gap: 0 }}>
              {[['30+', 'Anos de existência'], ['2000+', 'Pessoas impactadas'], ['4', 'Projetos ativos'], ['36', 'Membros ativos']].map(([n, l]) => (
                <div key={l} className="si" style={{ borderBottom: '1px solid rgba(255,255,255,.08)', borderRight: '1px solid rgba(255,255,255,.08)' }}>
                  <div className="snum">{n}</div>
                  <div className="slbl">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Torn fill="#fff" />

      {/* FAQ + CONTATO */}
      <section className="sec">
        <div className="ctn">
          <div className="two-t">
            {/* FAQ */}
            <div>
              <SH label="FAQ" title="Perguntas frequentes" />
              <FAQ groups={faqGroups} tabs={['Sobre o PET', 'Sobre o PS']} />
            </div>

            {/* Contato */}
            <div>
              <SH label="Contato" title="Fale com a gente" />
              <div className="cif">
                <div className="cico-w"><IcoMail s={20} c="#004E70" /></div>
                <div><h4>E-mail</h4><p>feausppet@gmail.com</p></div>
              </div>
              <div className="cif">
                <div className="cico-w"><IcoPin s={20} c="#004E70" /></div>
                <div><h4>Endereço</h4><p>Av. Prof. Luciano Gualberto, 908 — Butantã, SP</p></div>
              </div>
              <div className="fr" style={{ marginTop: 10 }}>
                <div className="fg2"><label className="flbl">Nome</label><input className="finp" placeholder="Seu nome" /></div>
                <div className="fg2"><label className="flbl">Sobrenome</label><input className="finp" placeholder="Sobrenome" /></div>
                <div className="fg2"><label className="flbl">E-mail</label><input className="finp" type="email" placeholder="seu@email.com" /></div>
                <div className="fg2"><label className="flbl">Assunto</label><input className="finp" placeholder="Assunto" /></div>
                <div className="fg2 s2"><label className="flbl">Mensagem</label><textarea className="fta" placeholder="Sua mensagem..." /></div>
              </div>
              <button className="btn bp bfull" style={{ marginTop: 14 }}>Enviar mensagem →</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
