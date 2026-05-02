import React, { useState, useEffect, useRef } from 'react';
import { Music, BookOpen, Headphones, ShoppingBag, Menu, X } from 'lucide-react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const videoRef = useRef(null); 

  // EFECTO 1: Forzar reproducción del video
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("El navegador bloqueó el autoplay:", error);
      });
    }
  }, []);

  // EFECTO 2: Cerrar menú al redimensionar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <div className="page-wrapper">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="container navbar-container">
          <img src="/logo.png" alt="Colombia Canta" className="nav-logo" />

          <div className="mobile-menu-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X size={32} color="white" /> : <Menu size={32} color="white" />}
          </div>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li onClick={() => setIsMenuOpen(false)}>Home</li>
            <li onClick={() => setIsMenuOpen(false)}>Nosotros</li>
            <li onClick={() => setIsMenuOpen(false)}>Formación</li>
            <li onClick={() => setIsMenuOpen(false)}>Experiencia</li>
            <li onClick={() => setIsMenuOpen(false)}>Festivales</li>
            <li onClick={() => setIsMenuOpen(false)}>Tienda</li>
          </ul>
        </div>
      </nav>

      {/* --- HERO CON VIDEO --- */}
      <header className="hero-section">
        <div className="container hero-container">
          <div className="hero-content">
            <h1>Donde el talento colombiano florece</h1>
            <p>En Medellín, transformamos vidas a través de la música tradicional. Únete a una comunidad que celebra nuestra identidad, ritmo y alegría.</p>
            <div className="hero-buttons">
              <button className="btn-primary">Contáctanos</button>
              <button className="btn-secondary">Inscríbete aquí</button>
            </div>
          </div>
          <div className="hero-image-wrapper">
            {/* Video de los niños reemplazando la imagen estática */}
            <video
              ref={videoRef}
              src="/ninos.mp4"
              className="hero-main-img"
              autoPlay
              loop
              muted
              playsInline
            >
              Tu navegador no soporta videos.
            </video>
          </div>
        </div>
      </header>

      {/* --- EXPERIENCIA --- */}
      <section className="white-section">
        <div className="container text-center">
          <h3 className="section-subtitle">Vive la <span className="pill-black">experiencia</span></h3>
          <div className="experience-grid">
            <div className="exp-card pink-bg">
              <Music size={40} />
              <h4>Eventos y conciertos</h4>
            </div>
            <div className="exp-card purple-bg">
              <BookOpen size={40} />
              <h4>Nuestros cursos</h4>
            </div>
            <div className="exp-card blue-bg">
              <Headphones size={40} />
              <h4>Escúchanos</h4>
            </div>
            <div className="exp-card orange-bg">
              <ShoppingBag size={40} />
              <h4>Tienda</h4>
            </div>
          </div>
        </div>
      </section>

      {/* --- COLABORADORES --- */}
      <section className="collab-section">
        <div className="container text-center">
          <h2 className="title-black">Nuestros colaboradores</h2>
          <p className="collab-desc">El impacto de nuestra labor es posible gracias a una red sólida de organizaciones comprometidas con la cultura.</p>
          <div className="collab-logos">
            <img src="/comfama.png" alt="Comfama" />
            <img src="/comfama.png" alt="Socio" />
            <img src="/comfama.png" alt="Socio" />
          </div>
        </div>
      </section>

      {/* --- MISIÓN / VISIÓN --- */}
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
          <div className="text-center" style={{ marginTop: '60px' }}>
            <button className="btn-black-rounded">Conoce más sobre nosotros</button>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="footer-black">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="/logo.png" alt="Logo" className="footer-logo" />
            <p>Promovemos la identidad cultural colombiana a través de la formación artística.</p>
          </div>
          <div className="footer-contact-group">
            <div className="footer-col">
              <strong>Ubicación</strong>
              <p>Medellín, Colombia</p>
              <p>Sede Principal El Poblado</p>
            </div>
            <div className="footer-col">
              <strong>Contacto</strong>
              <p>info@colombiacanta.com</p>
              <p>+57 (604) 123 4567</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;