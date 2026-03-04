// =========================================================
// JugueteriaDonJuan.jsx - PÁGINA DE JUGUETERÍA
// NUEVA ESTÉTICA: PLAYA & SOL - VERSIÓN CLARA
// =========================================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsCart3, 
  BsSearch, 
  BsLightning, 
  BsStar, 
  BsStarFill, 
  BsDice6,
  BsSun,
  BsUmbrella
} from 'react-icons/bs';
import { GiBeachBall, GiIceCreamCone, GiSurfBoard, GiKite } from 'react-icons/gi';
import { useCarrito } from '../context/CarritoContext';
import '../assets/scss/_03-Componentes/_JugueteriaDonJuan.scss';

// =========================================================
const JugueteriaDonJuan = () => {
  // =========================================================
  const [busqueda, setBusqueda] = useState('');
  const { agregarAlCarrito } = useCarrito();
  
  // =========================================================
  // IMÁGENES DE GALERÍA 3
  // =========================================================
  const imagenesProductos = [
    '/img/06-img-galeria3/id1-c1.png',
    '/img/06-img-galeria3/id2-c2.png',
    '/img/06-img-galeria3/id3-c3.png',
    '/img/06-img-galeria3/id4-c4.png',
    '/img/06-img-galeria3/id5-c5.png',
    '/img/06-img-galeria3/id6-c6.png',
    '/img/06-img-galeria3/id7-c7.png',
    '/img/06-img-galeria3/id8-c8.png'
  ];

  // =========================================================
  // PRODUCTOS DE JUGUETERÍA
  // =========================================================
  const productos = [
    { 
      id: 1, 
      nombre: 'AUTO DE CARRERAS', 
      descripcion: 'Auto a escala, ideal para jugar en la arena', 
      precio: 2500, 
      imagen: imagenesProductos[0], 
      rating: 5,
      tag: '🏎️'
    },
    { 
      id: 2, 
      nombre: 'MUÑECA BEBÉ', 
      descripcion: 'Muñeca con accesorios para la playa', 
      precio: 4200, 
      imagen: imagenesProductos[1], 
      rating: 5,
      tag: '🧸'
    },
    { 
      id: 3, 
      nombre: 'PELOTA DE FÚTBOL', 
      descripcion: 'Pelota N°5, para jugar en la arena', 
      precio: 3500, 
      imagen: imagenesProductos[2], 
      rating: 5,
      tag: '⚽'
    },
    { 
      id: 4, 
      nombre: 'BALDE PLAYA', 
      descripcion: 'Balde con pala y rastrillo para la arena', 
      precio: 1800, 
      imagen: imagenesProductos[3], 
      rating: 4,
      tag: '🏖️'
    },
    { 
      id: 5, 
      nombre: 'ROMPECABEZAS', 
      descripcion: 'Puzzle 500 piezas de paisajes playeros', 
      precio: 2200, 
      imagen: imagenesProductos[4], 
      rating: 4,
      tag: '🧩'
    },
    { 
      id: 6, 
      nombre: 'MASA PARA MODELAR', 
      descripcion: 'Set x12 colores para hacer castillos', 
      precio: 950, 
      imagen: imagenesProductos[5], 
      rating: 5,
      tag: '🎨'
    },
    { 
      id: 7, 
      nombre: 'GLOBOS', 
      descripcion: 'Bolsa x50 globos para fiestas', 
      precio: 450, 
      imagen: imagenesProductos[6], 
      rating: 4,
      tag: '🎈'
    },
    { 
      id: 8, 
      nombre: 'PISTOLA DE AGUA', 
      descripcion: 'Juguete verano para mojarse', 
      precio: 650, 
      imagen: imagenesProductos[7], 
      rating: 4,
      tag: '💦'
    }
  ];

  const productosFiltrados = productos.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  // =========================================================
  // FUNCIÓN PARA AGREGAR AL CARRITO CON FEEDBACK
  // =========================================================
  const handleAgregar = (producto) => {
    agregarAlCarrito(producto);
    const btn = document.getElementById(`btn-${producto.id}`);
    if (btn) {
      btn.classList.add('agregado');
      setTimeout(() => {
        btn.classList.remove('agregado');
      }, 500);
    }
  };

  // =========================================================
  return (
    <div className="jugueteria-playa">
      
      {/* =========================================================
          HEADER DE CATEGORÍA CON ELEMENTOS PLAYEROS
          ========================================================= */}
      <section className="categoria-header">
        <div className="header-badge">
          <GiBeachBall className="badge-icono" />
          <span>PLAYA & SOL · JUGUETERÍA</span>
          <GiKite className="badge-icono" />
        </div>
        <h1 className="animate-slideUp">
          JUGUETERÍA <span className="destacado">DON JUAN</span>
        </h1>
        <p className="animate-slideUp" style={{animationDelay: '0.1s'}}>
          Diversión para grandes y chicos en la playa
        </p>
      </section>

      {/* =========================================================
          BUSCADOR PLAYERO
          ========================================================= */}
      <div className="buscador-playa animate-slideUp" style={{animationDelay: '0.2s'}}>
        <BsSearch className="search-icono" />
        <input 
          type="text" 
          placeholder="Buscá juguetes..." 
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
        />
        {busqueda && (
          <span className="resultados-count">
            {productosFiltrados.length} productos
          </span>
        )}
      </div>

      {/* =========================================================
          GRID DE PRODUCTOS
          ========================================================= */}
      <div className="productos-grid-playa">
        {productosFiltrados.length > 0 ? (
          productosFiltrados.map((producto, index) => (
            <div 
              key={producto.id} 
              className="producto-card-playa animate-slideUp"
              style={{animationDelay: `${index * 0.05}s`}}
            >
              <div className="card-imagen">
                <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
                <span className="card-tag">{producto.tag}</span>
              </div>
              <div className="card-contenido">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                
                <div className="card-rating">
                  {[...Array(5)].map((_, i) => (
                    i < producto.rating ? 
                      <BsStarFill key={i} className="estrella-llena" /> : 
                      <BsStar key={i} className="estrella-vacia" />
                  ))}
                </div>
                
                <div className="card-precio">
                  <span className="precio">${producto.precio.toLocaleString()}</span>
                </div>
                
                <button 
                  id={`btn-${producto.id}`}
                  className="btn-agregar"
                  onClick={() => handleAgregar(producto)}
                >
                  <BsCart3 /> AGREGAR
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="sin-resultados">
            <GiIceCreamCone className="sin-icono" />
            <p>No encontramos juguetes</p>
            <button 
              className="btn-limpiar"
              onClick={() => setBusqueda('')}
            >
              Ver todos los juguetes
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default JugueteriaDonJuan;