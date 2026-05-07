import React from 'react';
import './Eventos.css';
import { Send, MapPin, ArrowLeft } from 'lucide-react';

const Eventos = ({ navigateTo }) => {
  return (
    <div className="eventos-view-wrapper">
      
      {/* HEADER HERO NEGRO PROFUNDO */}
      <section className="event-header-dark">
        <div className="container header-content-wrapper">
          <div className="header-info">
            <button className="back-btn" onClick={() => navigateTo('home')}>
              <ArrowLeft size={18} /> Volver al inicio
            </button>
            <span className="badge-gold">PROGRAMACIÓN 2026</span>
            <h1 className="hero-title">EVENTOS</h1>
            <p className="hero-subtitle">Próximas presentaciones de Colombia Canta y Encanta</p>
          </div>
          
          <div className="header-image-container">
            <img 
              src="/imagen-eventos.png" 
              alt="Niños en trajes tradicionales de Colombia Canta y Encanta" 
              className="static-header-image"
            />
          </div>
        </div>
      </section>

      {/* SECCIÓN DE CARDS BLANCAS MINIMALISTAS */}
      <section className="events-main-section">
        <div className="container">
          <div className="filter-pills">
            <button className="pill active">Todos</button>
            <button className="pill">Giras</button>
            <button className="pill">Conciertos</button>
          </div>

          <div className="events-grid-minimal">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="card-minimal">
                <div className="card-image">
                  <img src="/disney-event.jpg" alt="Evento" />
                  <span className="date-tag">MAY 15</span>
                </div>
                <div className="card-content">
                  <div className="gold-line"></div>
                  <h4>Bambucos en Disney spring</h4>
                  <p>Colombia canta y encanta lleva los ritmos tradicionales a los mejores escenarios del mundo.</p>
                  <div className="card-loc">
                    <MapPin size={14} /> Orlando, USA
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORMULARIO NEGRO PREMIUM */}
      <section className="contact-black-section">
        <div className="container">
          <div className="contact-card-dark">
            <div className="contact-header">
              <h2>¡Contáctanos para más información!</h2>
              <p>Escríbenos y nuestro equipo se pondrá en contacto contigo para resolver todas tus dudas.</p>
            </div>
            
            <form className="form-premium-dark" onSubmit={(e) => e.preventDefault()}>
              <div className="form-row">
                <div className="input-box">
                  <input type="text" required placeholder=" " />
                  <span>Nombre Completo</span>
                </div>
                <div className="input-box">
                  <input type="email" required placeholder=" " />
                  <span>Correo Electrónico</span>
                </div>
              </div>
              
              <div className="input-box">
                <textarea required placeholder=" " rows="4"></textarea>
                <span>Mensaje</span>
              </div>

              <div className="form-footer-action">
                <button type="submit" className="btn-submit-pink">
                  ENVIAR MENSAJE <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Eventos;