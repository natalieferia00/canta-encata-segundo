import React, { useState, useEffect, useRef } from 'react';
import { Music, BookOpen, Headphones, ShoppingBag, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import './App.css';

// IMPORTANTE: Asegúrate de tener Eventos.jsx en la carpeta /pages o la ruta correspondiente
import Eventos from './pages/Eventos'; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); 
  const [currentView, setCurrentView] = useState('home'); // Estado para navegar entre vistas
  const videoRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null); 
  };

  // Función para cambiar de vista y cerrar el menú
  const navigateTo = (view) => {
    setCurrentView(view);
    setIsMenuOpen(false);
    setActiveSubmenu(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmenuClick = (name) => {
    if (window.innerWidth <= 1024) {
      setActiveSubmenu(activeSubmenu === name ? null : name);
    }
  };

  useEffect(() => {
    if (currentView === 'home' && videoRef.current) {
      videoRef.current.play().catch(error => console.error("Autoplay bloqueado:", error));
    }
  }, [currentView]);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsMenuOpen(false);
        setActiveSubmenu(null);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className={`page-wrapper ${isMenuOpen ? 'no-scroll' : ''}`}>
      <div className={`menu-overlay ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}></div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="container navbar-container">
          <img 
            src="/logo.png" 
            alt="Colombia Canta" 
            className="nav-logo" 
            onClick={() => navigateTo('home')} 
            style={{cursor: 'pointer'}}
          />
          
          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={32} color="white" /> : <Menu size={32} color="white" />}
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li className={`has-submenu ${activeSubmenu === 'nosotros' ? 'open' : ''}`}>
              <div className="menu-trigger" onClick={() => handleSubmenuClick('nosotros')}>
                <span>Nosotros</span>
                <ChevronDown size={16} className="chevron" />
              </div>
              <ul className="submenu">
                <li onClick={() => navigateTo('home')}>Quiénes somos</li>
                <li onClick={() => navigateTo('home')}>Noticias</li>
                <li onClick={() => navigateTo('home')}>Contacto</li>
              </ul>
            </li>

            {/* EVENTOS REDIRIGE A LA VISTA DE EVENTOS */}
            <li className={`has-submenu ${activeSubmenu === 'eventos' ? 'open' : ''}`}>
              <div className="menu-trigger" onClick={() => handleSubmenuClick('eventos')}>
                <span>Eventos</span>
                <ChevronDown size={16} className="chevron" />
              </div>
              <ul className="submenu">
                <li onClick={() => navigateTo('eventos')}>Bambucos en Disney</li>
                <li onClick={() => navigateTo('eventos')}>Gira USA 2026</li>
                <li className="view-all" onClick={() => navigateTo('eventos')}>Ver todos →</li>
              </ul>
            </li>

            <li onClick={() => navigateTo('home')}>Tienda</li>
            
            <li className={`has-submenu ${activeSubmenu === 'inscripciones' ? 'open' : ''}`}>
              <div className="menu-trigger" onClick={() => handleSubmenuClick('inscripciones')}>
                <span>Inscripciones</span>
                <ChevronDown size={16} className="chevron" />
              </div>
              <ul className="submenu">
                <li onClick={() => navigateTo('home')}>Nuestros cursos</li>
                <li onClick={() => navigateTo('home')}>Cómo inscribirse</li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>

      {/* RENDERIZADO CONDICIONAL */}
      {currentView === 'home' ? (
        <>
          <header className="hero-section">
            <div className="container hero-container">
              <div className="hero-content">
                <span className="hero-badge-outline">Fundación</span>
                <h1>Donde el talento colombiano florece</h1>
                <p>En Medellín, transformamos vidas a través de la música tradicional. Únete a una comunidad que celebra nuestra identidad, ritmo y alegría.</p>
                <div className="hero-buttons">
                  <button className="btn-primary">Contáctanos</button>
                  <button className="btn-secondary" onClick={() => navigateTo('eventos')}>Ver Eventos</button>
                </div>
              </div>
              <div className="hero-image-wrapper">
                <video ref={videoRef} src="/ninos.mp4" className="hero-main-img" autoPlay loop muted playsInline />
              </div>
            </div>
          </header>

          <section className="white-section">
            <div className="container text-center">
              <h3 className="section-subtitle">Vive la <span className="pill-black">experiencia</span></h3>
              <div className="experience-grid-modern">
                {[
                  { title: "Eventos y conciertos", icon: <Music />, color: "pink", p: "Vibra con el porro y la cumbia en escena.", target: 'eventos' },
                  { title: "Nuestros cursos", icon: <BookOpen />, color: "purple", p: "Encuentra tu voz con maestros expertos.", target: 'home' },
                  { title: "Escúchanos", icon: <Headphones />, color: "blue", p: "Escucha nuestras producciones originales.", target: 'home' },
                  { title: "Tienda Cultural", icon: <ShoppingBag />, color: "orange", p: "Apoya el talento local y lleva la tradición.", target: 'home' }
                ].map((item, index) => (
                  <div className="exp-card-modern" key={index} onClick={() => navigateTo(item.target)} style={{cursor: 'pointer'}}>
                    <div className={`exp-icon-circle ${item.color}-bg-light`}>
                      {React.cloneElement(item.icon, { className: `${item.color}-icon`, size: 24 })}
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.p}</p>
                    <div className={`exp-link ${item.color}-text`}>Ver más <ArrowRight size={16} /></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* GALERÍA */}
          <section className="modern-gallery">
            <div className="gallery-container">
              <div className="gallery-info">
                <h3 className="section-subtitle">Nuestra <span className="pill-black">comunidad</span></h3>
                <p className="gallery-text">Momentos que definen nuestra esencia y tradición en Medellín.</p>
              </div>
              <div className="gallery-slider">
                <div className="slider-track">
                  {[1, 2, 3, 4, 5].map((id) => (
                    <div className="gallery-item" key={id}>
                      <div className="item-overlay"><span className="item-tag">CULTURA 2026</span></div>
                      <div className="image-placeholder"><span>IMG_{id}</span></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* NOTICIAS */}
          <section className="news-dark-section">
            <div className="container">
              <div className="news-header">
                <h3 className="section-subtitle white-text">Últimas <span className="pill-pink">noticias</span></h3>
                <button className="btn-view-more" onClick={() => navigateTo('eventos')}>Ver todas <ArrowRight size={18} /></button>
              </div>
              <div className="news-grid-minimal">
                {[
                  { date: "02 MAY", title: "Festival de Tradiciones 2026: Medellín se viste de gala", tag: "EVENTOS" },
                  { date: "28 ABR", title: "Nuevos cursos de cuerdas frotadas abren inscripciones", tag: "ACADEMIA" }
                ].map((news, index) => (
                  <div className="news-item-minimal" key={index} onClick={() => navigateTo('eventos')} style={{cursor: 'pointer'}}>
                    <div className="news-meta">
                      <span className="news-date">{news.date}</span>
                      <span className="news-category">{news.tag}</span>
                    </div>
                    <h4 className="news-title-link">{news.title}</h4>
                    <div className="news-hover-line"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* MISIÓN / VISIÓN */}
          <section className="white-section">
            <div className="container">
              <div className="mission-grid">
                {[
                  { title: "Misión", color: "orange", icon: <Music />, text: "Formar integralmente a través del arte y la cultura colombiana." },
                  { title: "Visión", color: "blue", icon: <BookOpen />, text: "Ser el referente en la preservación de las tradiciones sonoras." },
                  { title: "Impacto", color: "pink", icon: <Headphones />, text: "Transformar entornos mediante la música y el empoderamiento." }
                ].map((item, index) => (
                  <div className="mission-card" key={index}>
                    <div className={`m-card-icon ${item.color}-bg`}>{item.icon}</div>
                    <div className="m-card-content">
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* MARQUEE DE ALIADOS */}
          <section className="collab-marquee-section">
            <div className="marquee-black-bar">
              <div className="marquee-content">
                {[...Array(2)].map((_, i) => (
                  <div className="marquee-group" key={i}>
                    <img src="/comfama.png" alt="Comfama" />
                    <img src="/sena.png" alt="Sena" />
                    <img src="/colombia.png" alt="Marca Colombia" />
                    <img src="/comfama.png" alt="Socio" />
                    <img src="/sena.png" alt="Sena" />
                    <img src="/colombia.png" alt="Marca Colombia" />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </>
      ) : (
        <Eventos navigateTo={navigateTo} />
      )}

      {/* FOOTER */}
      <footer className="footer-black">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo.png" alt="Logo" className="footer-logo" />
            <p>Promovemos la identidad cultural colombiana a través de la formación artística.</p>
          </div>
          <div className="footer-contact-group">
            <div className="footer-col"><strong>Ubicación</strong><p>Medellín, Colombia</p></div>
            <div className="footer-col"><strong>Contacto</strong><p>info@colombiacanta.com</p></div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;