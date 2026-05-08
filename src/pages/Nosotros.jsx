import React from 'react';
import {
  ArrowRight,
  MapPin,
  Mail,
  Users,
  GraduationCap,
  Camera,
  Globe,
  MessageCircle
} from 'lucide-react';
import './Nosotros.css';

const Nosotros = ({ navigateTo }) => {
  const imagenesGaleria = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    url: `/galeria/foto${i + 1}.jpg`,
    alt: `Fundación Colombia Canta - Momento ${i + 1}`
  }));

  return (
    <div className="nosotros-wrapper">

      {/* HERO TIPOGRÁFICO MINIMALISTA */}
      <section className="nosotros-hero-minimal">
        <div className="container">
          <div className="hero-typography-box">
            <span className="eyebrow-gold">HISTORIA & LEGADO</span>
            <h1 className="hero-main-title">
              Un proyecto cultural <br /> que nació en Medellín
            </h1>
            <div className="hero-bottom-row">
              <p className="hero-description">
                Nuestra sede en el <strong>Sector Estadio</strong> es el corazón donde preservamos el alma de Colombia. Formamos talento con excelencia académica y amor profundo por nuestras raíces.
              </p>
              <div className="hero-cta-wrapper">
                <button className="btn-minimal-gold" onClick={() => navigateTo('home')}>
                  Contáctanos <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GALERÍA INFINITA (Sin cambios en lógica, solo visual) */}
      <section className="gallery-infinit-section">
        <div className="container">
          <h3 className="section-label-minimal">Nuestra Vida en Imágenes</h3>
          <h2 className="section-title-editorial">Momentos que nos definen</h2>
        </div>
        <div className="infinite-scroller">
          <div className="scroller-track">
            {[...imagenesGaleria, ...imagenesGaleria].map((img, index) => (
              <div className="scroller-item" key={index}>
                <img src={img.url} alt={img.alt} className="scroller-img-intact" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INFO LIMPIA Y MAESTROS */}
      <section className="nosotros-info-clean">
        <div className="container details-split-grid">
          <div className="philosophy-side">
            <h3 className="section-label-minimal">Quiénes Somos</h3>
            <p className="high-impact-text">
              Colombia Canta y Encanta es una institución líder dedicada a la formación musical de excelencia.
            </p>
            <div className="maestros-stack">
              <h3 className="section-label-minimal" style={{ marginBottom: '20px' }}>Maestros</h3>
              {[
                { name: "Leonardo Tamayo", role: "Director Musical" },
                { name: "Luciana Obregón", role: "Voz y Piano" },
                { name: "Trío Tritono", role: "Conjunto Instrumental" }
              ].map((m, i) => (
                <div className="maestro-item" key={i}>
                  <div className="maestro-dot"></div>
                  <div className="maestro-data"><strong>{m.name}</strong> <span>{m.role}</span></div>
                </div>
              ))}
            </div>
          </div>
          <div className="features-side-minimal">
            <div className="feature-block-item">
              <Users size={32} strokeWidth={1.2} />
              <h4>+200 Alumnos</h4>
              <p>Impulsamos el talento joven con una metodología técnica y humana.</p>
            </div>
            <div className="feature-block-item">
              <GraduationCap size={32} strokeWidth={1.2} />
              <h4>Escuela de Tradición</h4>
              <p>Programas de Tiple, Bandola y Canto en nuestra sede Estadio.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <footer className="nosotros-final-cta">
        <div className="container">
          <div className="cta-black-box">
            <div className="cta-text-side">
              <h2>La música colombiana <br /> que mueve al mundo</h2>
            </div>
            <div className="cta-contact-side">
              <div className="contact-row"><MapPin size={18} /> Medellín, Colombia</div>
              <div className="contact-row"><Mail size={18} /> info@colombiacanta.com</div>
              <div className="social-row-minimal">
                <Camera size={22} />
                <Globe size={22} />
                <MessageCircle size={22} />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Nosotros;