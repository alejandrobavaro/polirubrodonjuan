// =========================================================
// LibreriaDonJuan.jsx - PÁGINA DE LIBRERÍA
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
  BsBook,
  BsSun,
  BsUmbrella
} from 'react-icons/bs';
import { GiNotebook, GiPencil, GiSchoolBag } from 'react-icons/gi';
import { useCarrito } from '../context/CarritoContext';
import '../assets/scss/_03-Componentes/_LibreriaDonJuan.scss';

// =========================================================
const LibreriaDonJuan = () => {
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
  // PRODUCTOS DE LIBRERÍA
  // =========================================================
  const productos = [
    { 
      id: 1, 
      nombre: 'CUADERNO RAYADO', 
      descripcion: 'Cuaderno tapa dura x96h, ideal para apuntes de verano', 
      precio: 950, 
      imagen: imagenesProductos[0], 
      rating: 5,
      tag: '📓'
    },
    { 
      id: 2, 
      nombre: 'LAPICERAS COLORES', 
      descripcion: 'Set x12 colores para dibujar paisajes playeros', 
      precio: 1800, 
      imagen: imagenesProductos[1], 
      rating: 5,
      tag: '🖍️'
    },
    { 
      id: 3, 
      nombre: 'CARPETAS', 
      descripcion: 'Carpeta plastificada para la playa', 
      precio: 350, 
      imagen: imagenesProductos[2], 
      rating: 4,
      tag: '📁'
    },
    { 
      id: 4, 
      nombre: 'RESMA DE HOJAS', 
      descripcion: 'Resma A4 500 hojas para imprimir', 
      precio: 2200, 
      imagen: imagenesProductos[3], 
      rating: 5,
      tag: '📄'
    },
    { 
      id: 5, 
      nombre: 'LÁPICES NEGROS', 
      descripcion: 'Caja x12 lápices para dibujar', 
      precio: 600, 
      imagen: imagenesProductos[4], 
      rating: 4,
      tag: '✏️'
    },
    { 
      id: 6, 
      nombre: 'MOCHILA ESCOLAR', 
      descripcion: 'Mochila básica para la playa', 
      precio: 4500, 
      imagen: imagenesProductos[5], 
      rating: 5,
      tag: '🎒'
    },
    { 
      id: 7, 
      nombre: 'CARTUCHERA', 
      descripcion: 'Cartuchera con cierre para llevar a la arena', 
      precio: 1200, 
      imagen: imagenesProductos[6], 
      rating: 4,
      tag: '🧰'
    },
    { 
      id: 8, 
      nombre: 'REGLAS', 
      descripcion: 'Regla 20cm para dibujar', 
      precio: 150, 
      imagen: imagenesProductos[7], 
      rating: 4,
      tag: '📏'
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
    <div className="libreria-playa">
      
      {/* =========================================================
          HEADER DE CATEGORÍA CON ELEMENTOS PLAYEROS
          ========================================================= */}
      <section className="categoria-header">
        <div className="header-badge">
          <GiNotebook className="badge-icono" />
          <span>PLAYA & SOL · LIBRERÍA</span>
          <GiPencil className="badge-icono" />
        </div>
        <h1 className="animate-slideUp">
          LIBRERÍA <span className="destacado">DON JUAN</span>
        </h1>
        <p className="animate-slideUp" style={{animationDelay: '0.1s'}}>
          Todo para la escuela, oficina y tus apuntes playeros
        </p>
      </section>

      {/* =========================================================
          BUSCADOR PLAYERO
          ========================================================= */}
      <div className="buscador-playa animate-slideUp" style={{animationDelay: '0.2s'}}>
        <BsSearch className="search-icono" />
        <input 
          type="text" 
          placeholder="Buscá útiles escolares..." 
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
            <GiSchoolBag className="sin-icono" />
            <p>No encontramos productos en librería</p>
            <button 
              className="btn-limpiar"
              onClick={() => setBusqueda('')}
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LibreriaDonJuan;