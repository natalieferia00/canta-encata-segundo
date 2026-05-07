import React, { useState, useEffect, useRef } from 'react';
import { Music, BookOpen, Headphones, ShoppingBag, Menu, X, ArrowRight, ChevronDown } from 'lucide-react';
import './App.css';

// IMPORTANTE: Asegúrate de crear el archivo Eventos.jsx en la misma carpeta
import Eventos from './pages/Eventos'; 

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState(null); 
  const [currentView, setCurrentView] = useState('home'); // Estado para cambiar de página
  const videoRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveSubmenu(null); 
  };

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

      {/* NAVBAR UNIFICADA */}
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

            <li className={`has-submenu ${activeSubmenu === 'eventos' ? 'open' : ''}`}>
              <div className="menu-trigger" onClick={() => handleSubmenuClick('eventos')}>
                <span>Eventos</span>
                <ChevronDown size={16} className="chevron" />
              </div>
              <ul className="submenu">
                <li onClick={() => navigateTo('eventos')}>Ver todos los eventos</li>
                <li onClick={() => navigateTo('eventos')}>Gira USA 2026</li>
              </ul>
            </li>

            <li onClick={() => navigateTo('home')}>Tienda</li>
            <li onClick={() => navigateTo('home')}>Inscripciones</li>
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
                <p>En Medellín, transformamos vidas a través de la música tradicional. Únete a una comunidad que celebra nuestra identidad.</p>
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
                <div className="exp-card-modern" onClick={() => navigateTo('eventos')} style={{cursor: 'pointer'}}>
                  <div className="exp-icon-circle pink-bg-light"><Music className="pink-icon" /></div>
                  <h4>Eventos y conciertos</h4>
                  <p>Vibra con el porro y la cumbia en escena.</p>
                  <div className="exp-link pink-text">Ver más <ArrowRight size={16} /></div>
                </div>
                <div className="exp-card-modern">
                  <div className="exp-icon-circle purple-bg-light"><BookOpen className="purple-icon" /></div>
                  <h4>Nuestros cursos</h4>
                  <p>Encuentra tu voz con maestros expertos.</p>
                  <div className="exp-link purple-text">Ver más <ArrowRight size={16} /></div>
                </div>
              </div>
            </div>
          </section>

          {/* ... Aquí siguen tus secciones de Galería, Noticias y Misión (las que ya tenías) ... */}
          
          <section className="news-dark-section">
            <div className="container">
              <h3 className="section-subtitle white-text">Últimas <span className="pill-pink">noticias</span></h3>
              <div className="news-grid-minimal">
                <div className="news-item-minimal">
                   <h4 className="news-title-link" onClick={() => navigateTo('eventos')}>Festival de Tradiciones 2026</h4>
                </div>
              </div>
            </div>
          </section>
        </>
      ) : (
        /* AQUÍ SE CARGA TU NUEVA PÁGINA */
        <Eventos navigateTo={navigateTo} />
      )}

      {/* FOOTER SIEMPRE VISIBLE */}
      <footer className="footer-black">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo.png" alt="Logo" className="footer-logo" />
            <p>Promovemos la identidad cultural colombiana.</p>
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