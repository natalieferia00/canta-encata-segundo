import React from 'react';
import './Eventos.css';
import { Send, MapPin, ArrowLeft } from 'lucide-react';

const Eventos = ({ navigateTo }) => {
  // 1. Definimos los datos de los eventos para que sean dinámicos
  const listaEventos = [
    {
      id: 1,
      title: "Bambucos en Disney Spring",
      location: "Orlando, USA",
      date: "MAY 15",
      image: "/disney-event.jpg",
      description: "Colombia canta y encanta lleva los ritmos tradicionales a los mejores escenarios del mundo con una muestra artística sin precedentes."
    },
    {
      id: 2,
      title: "Gira USA 2026: Herencia",
      location: "Miami, Florida",
      date: "JUN 20",
      image: "/gira-usa.jpg", // Asegúrate de tener estas imágenes o usa una por defecto
      description: "Un recorrido por el folclor andino y caribeño en el corazón de la comunidad latina en Estados Unidos."
    },
    {
      id: 3,
      title: "Festival de Tradiciones",
      location: "Medellín, Colombia",
      date: "AGO 05",
      image: "/festival.jpg",
      description: "Nuestro evento anual en casa, donde todos nuestros semilleros muestran el talento que florece en la fundación."
    },
    {
      id: 4,
      title: "Concierto de Gala",
      location: "Bogotá, Teatro Colón",
      date: "SEP 12",
      image: "/gala.jpg",
      description: "Una puesta en escena magistral con nuestro elenco principal y músicos invitados de gran trayectoria."
    }
  ];

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
              alt="Niños en trajes tradicionales" 
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
            {listaEventos.map((evento) => (
              /* 2. Al hacer clic, enviamos 'detalle' y el objeto del evento */
              <div 
                key={evento.id} 
                className="card-minimal" 
                onClick={() => navigateTo('detalle', evento)}
                style={{ cursor: 'pointer' }}
              >
                <div className="card-image">
                  <img src={evento.image} alt={evento.title} />
                  <span className="date-tag">{evento.date}</span>
                </div>
                <div className="card-content">
                  <div className="gold-line"></div>
                  <h4>{evento.title}</h4>
                  <p>{evento.description}</p>
                  <div className="card-loc">
                    <MapPin size={14} /> {evento.location}
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
              <p>Escríbenos y nuestro equipo se pondrá en contacto contigo.</p>
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