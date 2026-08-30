import React from 'react';
import { Logo } from './Logo.jsx';
import { IcoIG, IcoLI, IcoTT, IcoYT, IcoFB } from '../icons.jsx';

export const Footer = ({ page, go }) => {
  const bgColors = {
    marketing: '#b84c65',
    guiar: '#009e97',
    feira: '#024f70',
    pesquisa: '#bc1823',
    micro: '#49326b',
    rexin: '#f57f1f',
    finfra: '#24915d',
    rh: '#f7bc1e'
  };

  const bgColor = bgColors[page] || 'var(--p)';

  const socials = [
    { label: 'Instagram', handle: '@petfeausp', url: 'https://instagram.com/petfeausp', Icon: IcoIG },
    { label: 'LinkedIn', handle: 'PET FEA USP', url: 'https://br.linkedin.com/company/petfeausp', Icon: IcoLI },
    { label: 'TikTok', handle: '@petfeausp', url: 'https://www.tiktok.com/@petfeausp', Icon: IcoTT },
    { label: 'YouTube', handle: '@PETFEAUSP', url: 'https://www.youtube.com/@PETFEAUSP', Icon: IcoYT },
    { label: 'Facebook', handle: 'petfeausp', url: 'https://facebook.com/petfeausp', Icon: IcoFB },
  ];

  return (
  <footer className="ftr" style={{ background: bgColor }}>
    <div className="ctn">
      <div className="fg">
        {/* Coluna 1: Logo, Descrição e Redes Sociais */}
        <div>
          <Logo ht={34} white />
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.6)', lineHeight: 1.6, margin: '10px 0 14px', maxWidth: 250 }}>
            Programa de Educação Tutorial da FEA-USP — pesquisa, ensino e extensão desde 1994.
          </p>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="soc"
                title={s.label}
                aria-label={s.label}
              >
                <s.Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Coluna 2: Projetos */}
        <div>
          <div className="fh5">Projetos</div>
          {[['pesquisa', 'Pesquisa'], ['micro', 'Micro'], ['guiar', 'Guiar'], ['feira', 'Feira de Intercâmbio']].map(([id, lb]) => (
            <span key={id} className="fli" onClick={() => go(id)}>{lb}</span>
          ))}
        </div>

        {/* Coluna 3: Coordenadorias */}
        <div>
          <div className="fh5">Coordenadorias</div>
          {[['marketing', 'Marketing'], ['rexin', 'REXin'], ['finfra', 'Finfra'], ['rh', 'RH']].map(([id, lb]) => (
            <span key={id} className="fli" onClick={() => go(id)}>{lb}</span>
          ))}
        </div>

        {/* Coluna 4: Contatos & Endereço */}
        <div>
          <div className="fh5">Contatos</div>
          <a
            href="mailto:feausppet@gmail.com"
            className="fli"
            style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 12 }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, opacity: 0.85 }}><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            <span>feausppet@gmail.com</span>
          </a>

          <div className="fh5" style={{ marginTop: 10 }}>Endereço</div>
          <p style={{ fontSize: 13, color: 'rgba(255,255,255,.65)', lineHeight: 1.5, margin: 0 }}>
            Av. Prof. Luciano Gualberto, 908<br />Butantã, São Paulo/SP<br />05508-010
          </p>
        </div>
      </div>

      <div className="fbot">
        <p>© 2025 PET FEA USP — Todos os direitos reservados</p>
        <span>Política de Privacidade</span>
      </div>
    </div>
  </footer>
  );
};
