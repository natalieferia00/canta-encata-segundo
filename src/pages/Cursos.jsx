import React, { useState } from 'react';
import { BookOpen, Clock, CheckCircle, ArrowRight } from 'lucide-react';
import './Cursos.css';

const Cursos = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const cursos = [
    {
      id: 1,
      titulo: "Instrumentos de Cuerda",
      descripcion: "Formación técnica en Tiple, Bandola y Guitarra, pilares de nuestra identidad sonora.",
      duracion: "4 semestres",
      nivel: "Básico a Avanzado",
      tags: ["Tiple", "Bandola", "Guitarra"]
    },
    {
      id: 2,
      titulo: "Técnica Vocal y Coro",
      descripcion: "Desarrollo de la voz a través de los ritmos tradicionales colombianos y ensamble vocal.",
      duracion: "Indefinido",
      nivel: "Todas las edades",
      tags: ["Canto", "Respiración", "Ensamble"]
    },
    {
      id: 3,
      titulo: "Iniciación Musical",
      descripcion: "Espacio lúdico para que los más pequeños descubran su ritmo y talento musical.",
      duracion: "2 semestres",
      nivel: "Infantil (4-7 años)",
      tags: ["Ritmo", "Lúdica", "Exploración"]
    }
  ];

  const faqs = [
    {
      pregunta: "¿Necesito tener instrumento propio para iniciar?",
      respuesta: "Para las primeras clases de nivelación no es obligatorio, pero para tu progreso técnico en casa recomendamos tener uno. En la sede Estadio te asesoramos en la compra del ideal."
    },
    {
      pregunta: "¿Cuáles son los horarios de clase?",
      respuesta: "Contamos con jornadas flexibles de lunes a viernes (tarde/noche) y sábados mañana. Los horarios específicos se asignan tras la audición de nivelación."
    },
    {
      pregunta: "¿Recibo certificación al terminar?",
      respuesta: "Sí, emitimos certificados de asistencia y aprobación por cada nivel completado, respaldados por la trayectoria de la Fundación Colombia Canta y Encanta."
    }
  ];

  return (
    <div className="cursos-page">
      <header className="cursos-hero">
        <div className="container">
          <span className="eyebrow-gold">ACADEMIA</span>
          <h1 className="cursos-title">Formación con <br /> Sello de Excelencia</h1>
          <p className="cursos-subtitle">
            Programas integrales diseñados para preservar nuestras raíces y potenciar el talento de las nuevas generaciones.
          </p>
        </div>
      </header>

      <section className="container courses-grid">
        {cursos.map(curso => (
          <div key={curso.id} className="course-card">
            <div className="course-content">
              <div className="course-tags">
                {curso.tags.map(tag => <span key={tag} className="tag-pill">{tag}</span>)}
              </div>
              <h3>{curso.titulo}</h3>
              <p>{curso.descripcion}</p>
              
              <div className="course-details">
                <span><Clock size={16} /> {curso.nivel}</span>
              </div>
            </div>
            <button className="btn-enroll">Ver programa completo <ArrowRight size={18} /></button>
          </div>
        ))}
      </section>

      <section className="enrollment-steps">
        <div className="container">
          <div className="steps-header">
            <span className="eyebrow-dark">INICIA TU CAMINO</span>
            <h2 className="steps-title">Proceso de <br /> Inscripción</h2>
          </div>

          <div className="steps-timeline">
            <div className="step-row">
              <div className="step-number-box">
                <span className="huge-num">01</span>
              </div>
              <div className="step-content-box">
                <h4>Formulario de Registro</h4>
                <p>Cuéntanos sobre tus intereses y experiencia previa. Queremos conocer qué instrumento o programa hace vibrar tu corazón.</p>
                <div className="step-decoration"></div>
              </div>
            </div>

            <div className="step-row reverse">
              <div className="step-number-box">
                <span className="huge-num">02</span>
              </div>
              <div className="step-content-box">
                <h4>Audición de Bienvenida</h4>
                <p>No es un examen, es un encuentro con nuestros maestros para ubicarte en el nivel ideal y potenciar tus habilidades naturales.</p>
                <div className="step-decoration"></div>
              </div>
            </div>

            <div className="step-row">
              <div className="step-number-box">
                <span className="huge-num">03</span>
              </div>
              <div className="step-content-box">
                <h4>Matrícula y Bienvenida</h4>
                <p>Formaliza tu ingreso a la gran familia de Colombia Canta y prepárate para subir al escenario en nuestra sede Sector Estadio.</p>
                <div className="step-decoration"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE PREGUNTAS FRECUENTES */}
      <section className="faq-section">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-info">
              <span className="eyebrow-dark">SOPORTE</span>
              <h2 className="faq-main-title">Preguntas <br /> Frecuentes</h2>
              <p className="faq-text">Si tienes más dudas, nuestro equipo académico está listo para ayudarte en la sede Estadio.</p>
            </div>
            
            <div className="faq-accordion">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`faq-item ${openFaq === index ? 'active' : ''}`}
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <div className="faq-question">
                    <h4>{faq.pregunta}</h4>
                    <span className="faq-icon">{openFaq === index ? '−' : '+'}</span>
                  </div>
                  <div className="faq-answer">
                    <p>{faq.respuesta}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Cursos;