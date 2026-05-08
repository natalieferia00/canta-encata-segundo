import React, { useState } from 'react';
import { Star, Music, Mic2, Users, ArrowRight } from 'lucide-react';
import ArtistCard from '../components/ArtistCard'; // Asumiendo esta ruta
import './Elenco.css';

const Elenco = () => {
  const [categoria, setCategoria] = useState('Todos');

  // Datos de ejemplo para el elenco
  const artistas = [
    { id: 1, nombre: "Ensamble Vocal", instrumento: "Coro", cat: "Voces", img: "/elenco/vocal.jpg" },
    { id: 2, nombre: "Grupo de Cuerdas", instrumento: "Tiple y Bandola", cat: "Instrumental", img: "/elenco/cuerdas.jpg" },
    { id: 3, nombre: "Cuerpo de Danza", instrumento: "Danza Folclórica", cat: "Danza", img: "/elenco/danza.jpg" },
    // Añade más integrantes aquí
  ];

  const categorias = ['Todos', 'Voces', 'Instrumental', 'Danza'];

  const artistasFiltrados = categoria === 'Todos' 
    ? artistas 
    : artistas.filter(a => a.cat === categoria);

  return (
    <div className="elenco-wrapper">
      {/* HEADER EDITORIAL */}
      <header className="elenco-header">
        <div className="container">
          <span className="eyebrow-gold">TALENTO & PASIÓN</span>
          <h1 className="elenco-title">Elenco <br /> Artístico</h1>
          <p className="elenco-subtitle">
            Conoce a los embajadores de nuestra cultura. Jóvenes talentos que transforman la tradición en arte vivo.
          </p>
        </div>
      </header>

      {/* SECCIÓN DE FILTROS */}
      <nav className="elenco-filters">
        <div className="container filter-flex">
          {categorias.map(cat => (
            <button 
              key={cat}
              className={`filter-link ${categoria === cat ? 'active' : ''}`}
              onClick={() => setCategoria(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </nav>

      {/* GRID DE ARTISTAS */}
      <section className="elenco-grid-section">
        <div className="container artist-grid">
          {artistasFiltrados.map(artista => (
            <div key={artista.id} className="artist-entry">
              <div className="artist-image-box">
                <img src={artista.img} alt={artista.nombre} />
                <div className="artist-tag">{artista.instrumento}</div>
              </div>
              <div className="artist-meta">
                <h3>{artista.nombre}</h3>
                <span className="artist-category">{artista.cat}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECCIÓN DE CONTRATACIONES (CTA) */}
      <footer className="elenco-footer-cta">
        <div className="container cta-elenco-box">
          <h2>¿Quieres nuestro elenco en tu evento?</h2>
          <button className="btn-gold-premium">
            Solicitar Información <ArrowRight size={20} />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default Elenco;