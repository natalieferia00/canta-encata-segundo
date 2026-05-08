import React from 'react';
import './NewsCard.css';

const NewsCard = ({ data }) => {
  return (
    <article className="news-card-item">
      <div className="news-thumb">
        <img src={data.imagen} alt={data.titulo} />
        <div className="news-badge">{data.categoria}</div>
      </div>
      <div className="news-body">
        <span className="news-date">{data.fecha}</span>
        <h2>{data.titulo}</h2>
        <p>{data.resumen}</p>
        <button className="read-more-btn">Leer crónica completa</button>
      </div>
    </article>
  );
};

export default NewsCard;