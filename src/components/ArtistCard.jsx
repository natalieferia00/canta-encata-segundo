import React from 'react';
import './ArtistCard.css';

const ArtistCard = ({ nombre, instrumento, imagen, categoria }) => {
  return (
    <div className="artist-entry">
      <div className="artist-image-box">
        {/* Usamos un fallback por si la imagen no carga */}
        <img 
          src={imagen} 
          alt={nombre} 
          onError={(e) => e.target.src = 'https://via.placeholder.com/400x500?text=Artista'}
        />
        <div className="artist-tag">{instrumento}</div>
      </div>
      <div className="artist-meta">
        <h3>{nombre}</h3>
        <span className="artist-category">{categoria}</span>
      </div>
    </div>
  );
};

export default ArtistCard;