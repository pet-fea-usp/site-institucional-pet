import React, { useState } from 'react';
import { Header } from './components/layout/Header.jsx';
import { Footer } from './components/layout/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { Sobre } from './pages/Sobre.jsx';
import { Blog } from './pages/Blog.jsx';
import { Feira } from './pages/Feira.jsx';
import { Pesquisa } from './pages/Pesquisa.jsx';
import { Micro } from './pages/Micro.jsx';
import { Guiar } from './pages/Guiar.jsx';
import { Marketing } from './pages/Marketing.jsx';
import { Rexin } from './pages/Rexin.jsx';
import { Finfra } from './pages/Finfra.jsx';
import { Rh } from './pages/Rh.jsx';

export default function App() {
  const [page, setPage] = useState('home');

  const go = (p) => {
    setPage(p);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const pages = {
    home:     () => <Home     go={go} />,
    sobre:    () => <Sobre    go={go} />,
    blog:     () => <Blog />,
    feira:    () => <Feira />,
    pesquisa: () => <Pesquisa />,
    micro:    () => <Micro />,
    guiar:    () => <Guiar />,
    marketing: () => <Marketing />,
    rexin:    () => <Rexin />,
    finfra:   () => <Finfra />,
    rh:       () => <Rh />,
  };

  return (
    <div>
      <Header page={page} go={go} />
      <main>{pages[page] ? pages[page]() : pages.home()}</main>
      <Footer page={page} go={go} />
    </div>
  );
}
