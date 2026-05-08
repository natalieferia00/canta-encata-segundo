import React from 'react';
import { Newspaper, Radio, Tv, ArrowRight } from 'lucide-react';
import NewsCard from '../components/NewsCard';
import './Noticias.css';

const Noticias = () => {
  const noticias = [
    { id: 1, fecha: "08 MAY, 2026", categoria: "EVENTOS", titulo: "Gira Internacional 2026", resumen: "Nuestros artistas en escenarios del mundo llevando el folclor colombiano.", imagen: "/noticias/gira.jpg" },
    { id: 2, fecha: "05 MAY, 2026", categoria: "ACADEMIA", titulo: "Nuevos Talleres de Canto", resumen: "Iniciamos inscripciones para el coro juvenil de la fundación.", imagen: "/noticias/coro.jpg" }
  ];

  return (
    <div className="noticias-page-container">
      {/* SECCIÓN NEGRA: HERO & PRENSA */}
      <section className="news-dark-zone">
        <header className="noticias-header container">
          <span className="eyebrow-gold">ACTUALIDAD</span>
          <h1 className="noticias-main-title">Noticias & <br /> Crónicas</h1>
        </header>

        <div className="container press-mini-grid">
          <div className="press-item"><Tv size={20} /> <span>Teleantioquia</span></div>
          <div className="press-item"><Radio size={20} /> <span>Radio Nacional</span></div>
          <div className="press-item"><Newspaper size={20} /> <span>El Colombiano</span></div>
        </div>
      </section>

      {/* SECCIÓN BLANCA: FEED DE NOTICIAS */}
      <section className="news-white-zone">
        <div className="container">
          <div className="news-feed-header">
            <h2 className="zone-title">Últimos Artículos</h2>
            <div className="category-pills">
              <span className="pill active">Todos</span>
              <span className="pill">Eventos</span>
              <span className="pill">Academia</span>
            </div>
          </div>

          <div className="news-grid-editorial">
            {noticias.map(n => <NewsCard key={n.id} data={n} isLightMode={true} />)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Noticias;