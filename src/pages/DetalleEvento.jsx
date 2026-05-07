import React from 'react';
import { Calendar, MapPin, Clock, ArrowLeft, CheckCircle, Globe, MessageCircle, Mail, Map } from 'lucide-react';
import './DetalleEvento.css';

const DetalleEvento = ({ evento, navigateTo }) => {
  return (
    <div className="detail-page-wrapper">
      {/* HERO SECTION DINÁMICO */}
      <section className="event-hero-premium">
        <div className="hero-visual-overlay"></div>
        <div className="container hero-inner">
          <button className="btn-back-nav" onClick={() => navigateTo('eventos')}>
            <ArrowLeft size={18} /> Volver a la Programación
          </button>
          
          <div className="hero-text-box">
            <div className="tag-gira">GIRA USA 2026</div>
            <h1 className="main-event-title">Bambucos en Disney Springs</h1>
            <div className="quick-meta">
              <span><Calendar size={18} /> Sábado 18 de abril, 2026</span>
              <span><MapPin size={18} /> Orlando, Florida</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENIDO DISTRIBUIDO PROFESIONALMENTE */}
      <section className="event-details-content">
        <div className="container details-grid">
          
          {/* COLUMNA IZQUIERDA: INFORMACIÓN */}
          <div className="details-main-info">
            <div className="info-block-item">
              <h3>Sobre el evento</h3>
              <p>
                Colombia Canta y Encanta lleva los ritmos del bambuco, la música andina y el folclor 
                colombiano al corazón de <strong>Disney Springs en Orlando, Florida</strong>. 
                Una presentación única que celebra la riqueza cultural de Colombia ante un público internacional, 
                con el elenco completo de artistas y músicos de la organización.
              </p>
            </div>

            <div className="program-highlights">
              <h3>Programa Artístico</h3>
              <div className="highlights-grid">
                <div className="h-item"><span className="dot pink"></span> Bambuco</div>
                <div className="h-item"><span className="dot gold"></span> Música andina</div>
                <div className="h-item"><span className="dot blue"></span> Folclor colombiano</div>
                <div className="h-item"><span className="dot green"></span> Danza tradicional</div>
              </div>
            </div>

            <div className="location-box-card">
              <div className="loc-text">
                <h3>El lugar</h3>
                <p><strong>Disney Springs</strong></p>
                <p className="address">1486 Buena Vista Dr, Orlando, FL 32830</p>
                <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="map-link">
                  <Map size={16} /> Ver en el mapa
                </a>
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA: TICKETING Y CONTACTO */}
          <aside className="details-sidebar">
            <div className="booking-card-premium">
              <div className="card-price-info">
                <span className="price-label">Entrada</span>
                <span className="price-value">Libre / Free</span>
              </div>

              <div className="event-schedule-card">
                <div className="s-row">
                  <Clock size={18} /> <span>1:00 PM (Hora Local)</span>
                </div>
                <div className="s-row">
                  <MapPin size={18} /> <span>Disney Springs Stage</span>
                </div>
              </div>

              <ul className="trust-list">
                <li><CheckCircle size={16} className="green" /> Ver detalles confirmados</li>
                <li><CheckCircle size={16} className="green" /> Pago seguro (Servicios adicionales)</li>
                <li><CheckCircle size={16} className="green" /> Entradas digitales</li>
                <li><CheckCircle size={16} className="green" /> Soporte en español</li>
              </ul>

              <div className="support-section">
                <p>¿Tienes preguntas?</p>
                <div className="support-buttons">
                  <button className="btn-support wa"><MessageCircle size={18} /> WhatsApp</button>
                  <button className="btn-support mail"><Mail size={18} /> Email</button>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* SECCIÓN DE TESTIMONIOS E IMPACTO (AHORA DENTRO DEL RETURN) */}
      <section className="social-proof-section">
        <div className="container">
          <div className="section-divider"></div>
          
          <div className="proof-grid">
            {/* Testimonios */}
            <div className="testimonials-col">
              <h3 className="tiny-title">Lo que dicen nuestros asistentes</h3>
              
              <div className="testimonial-card">
                <p className="quote">"Una experiencia única. La energía del elenco es impresionante."</p>
                <span className="author">Carlos M. · <strong>Miami</strong></span>
              </div>

              <div className="testimonial-card">
                <p className="quote">"Ver la música colombiana en un escenario así fue emocionante."</p>
                <span className="author">Andrea P. · <strong>Orlando</strong></span>
              </div>
            </div>

            {/* Estadísticas de Impacto */}
            <div className="stats-col">
              <div className="stat-item">
                <span className="stat-number">+10</span>
                <span className="stat-label">años de historia</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">+200</span>
                <span className="stat-label">estudiantes formados</span>
              </div>
              <div className="stat-item">
                <div className="rating-stars">★★★★★</div>
                <span className="stat-label">Calificación de la audiencia</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetalleEvento;