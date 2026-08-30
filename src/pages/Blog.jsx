import React from 'react';
import { Torn } from '../components/ui/Torn.jsx';
import { IcoChart, IcoPlane, IcoCoin, IcoBulb, IcoTrophy, IcoGlobe } from '../components/icons.jsx';

export const Blog = () => {
  const posts = [
    { Ico: IcoChart,  bg: 'rgba(0,78,112,.1)',    c: '#004E70', tag: 'Pesquisa', title: 'Impacto das políticas de crédito em MEIs de São Paulo',       date: 'Mar 2025', autor: 'Elena Faria',  desc: 'Pesquisa dos membros analisa o acesso ao crédito formal por MEIs paulistanos.' },
    { Ico: IcoPlane,  bg: 'rgba(94,162,229,.1)',  c: '#5ea2e5', tag: 'Feira',    title: 'Feira de Intercâmbio 2024: mais de 480 participantes',         date: 'Out 2024', autor: 'Felipe Ramos', desc: 'A décima edição reuniu estudantes, consulados e agências num evento histórico.' },
    { Ico: IcoCoin,   bg: 'rgba(58,173,157,.1)',  c: '#3AAD9D', tag: 'GUIAR',   title: 'GUIAR nas Etecs: 120 alunos, nota 4,8/5',                      date: 'Set 2025', autor: 'Carla Nunes',  desc: 'Parceria com Etecs Cepam e Prof. Camargo Aranha levou educação financeira ao EM.' },
    { Ico: IcoBulb,   bg: 'rgba(105,117,194,.1)', c: '#6975C2', tag: 'Micro',   title: 'Parceria com SEBRAE amplia o Aprender para Empreender',         date: 'Ago 2025', autor: 'Diego Melo',   desc: 'O Micro firma parceria para ampliar o programa de consultoria estratégica para MEIs.' },
    { Ico: IcoTrophy, bg: 'rgba(245,127,31,.08)', c: '#F57F1F', tag: 'PET',     title: 'PET FEA USP comemora 30 anos de existência',                   date: 'Jul 2024', autor: 'Redação PET',  desc: 'Em 2024, o PET celebrou três décadas de impacto social e formação de líderes.' },
    { Ico: IcoGlobe,  bg: 'rgba(94,162,229,.1)',  c: '#5ea2e5', tag: 'GUIAR',   title: 'Parceria com Instituto Vivendas e Lacoste Foundation',          date: 'Jun 2025', autor: 'Carla Nunes',  desc: 'O GUIAR firmou colaboração para levar educação financeira a jovens da ONG.' },
  ];

  return (
    <>
      <section className="hero halftone" style={{ padding: '70px 0' }}>
        <div className="hb hb1" />
        <div className="ctn hero-c afu">
          <div className="hbdg">✦ Blog & Notícias</div>
          <h1 style={{ fontSize: 'clamp(24px,4vw,48px)' }}>Novidades do PET</h1>
          <p className="hlead">Acompanhe as últimas notícias e conquistas dos nossos projetos.</p>
        </div>
      </section>

      <Torn fill="#fff" />

      <section className="sec">
        <div className="ctn">
          <div className="bgrd">
            {posts.map((p, i) => (
              <div key={i} className="bc">
                <div className="bth" style={{ background: p.bg }}><p.Ico s={48} c={p.c} /></div>
                <div className="bb">
                  <div className="btag">{p.tag}</div>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                  <div className="bm"><span>Por {p.autor}</span><span>{p.date}</span></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
