import React, { useState } from 'react';
import { ShoppingBag, Search, Filter, ArrowRight } from 'lucide-react';
import './Tienda.css';

const Tienda = () => {
  const [categoria, setCategoria] = useState('Todos');

  const productos = [
    {
      id: 1,
      nombre: "Buzo Yuugen - Edición Limitada",
      precio: 145000,
      categoria: "Ropa",
      imagen: "/tienda/buzo-negro.jpg",
      tag: "BEST SELLER"
    },
    {
      id: 2,
      nombre: "Tiple Profesional - Sede Estadio",
      precio: 850000,
      categoria: "Instrumentos",
      imagen: "/tienda/tiple.jpg",
      tag: "ARTESANAL"
    },
    {
      id: 3,
      nombre: "CD Colombia Canta Vol. 20",
      precio: 45000,
      categoria: "Música",
      imagen: "/tienda/cd.jpg",
      tag: "NUEVO"
    }
  ];

  const categorias = ["Todos", "Ropa", "Instrumentos", "Música"];

  return (
    <div className="tienda-page">
      {/* HERO TIENDA (Minimal Black) */}
      <header className="tienda-hero">
        <div className="container">
          <span className="eyebrow-gold">BOUTIQUE CULTURAL</span>
          <h1 className="tienda-title">Lleva la tradición <br /> contigo</h1>
        </div>
      </header>

      {/* FILTROS Y BUSCADOR */}
      <section className="tienda-controls container">
        <div className="categories-pills">
          {categorias.map(cat => (
            <button 
              key={cat} 
              className={`pill ${categoria === cat ? 'active' : ''}`}
              onClick={() => setCategoria(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="search-box">
          <Search size={20} />
          <input type="text" placeholder="Buscar productos..." />
        </div>
      </section>

      {/* GRID DE PRODUCTOS */}
      <section className="products-section container">
        <div className="products-grid">
          {productos
            .filter(p => categoria === 'Todos' || p.categoria === categoria)
            .map(producto => (
              <div className="product-card" key={producto.id}>
                <div className="product-image-wrapper">
                  <div className="product-tag">{producto.tag}</div>
                  <div className="image-placeholder">IMG</div> {/* Cambiar por <img src={producto.imagen} /> */}
                  <button className="btn-add-cart">
                    Añadir al carrito <ShoppingBag size={18} />
                  </button>
                </div>
                <div className="product-info">
                  <div className="info-main">
                    <h3>{producto.nombre}</h3>
                    <span className="price">${producto.precio.toLocaleString()}</span>
                  </div>
                  <p className="product-cat">{producto.categoria}</p>
                </div>
              </div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default Tienda;