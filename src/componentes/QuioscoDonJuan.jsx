// =========================================================
// QuioscoDonJuan.jsx - PÁGINA DE QUIOSCO DE POLIRUBRO DON JUAN
// MISMA ESTÉTICA QUE ALMACÉN
// =========================================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsCart3, 
  BsSearch, 
  BsLightning, 
  BsStar, 
  BsStarFill, 
  BsCupStraw,
  BsSun,
  BsUmbrella
} from 'react-icons/bs';
import { GiSurfBoard, GiIceCreamCone } from 'react-icons/gi';
import { useCarrito } from '../context/CarritoContext';
import '../assets/scss/_03-Componentes/_QuioscoDonJuan.scss';

// =========================================================
const QuioscoDonJuan = () => {
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
  // PRODUCTOS DE QUIOSCO - IGUAL ESTRUCTURA QUE ALMACÉN
  // =========================================================
  const productos = [
    { 
      id: 1, 
      nombre: 'ALFAJORES TRIPLES', 
      descripcion: 'Alfajores de chocolate x6 unidades', 
      precio: 1500, 
      imagen: imagenesProductos[0], 
      rating: 5,
      tag: '🍫'
    },
    { 
      id: 2, 
      nombre: 'GOLOSINAS VARIADAS', 
      descripcion: 'Mix de caramelos 500gr', 
      precio: 1200, 
      imagen: imagenesProductos[1], 
      rating: 5,
      tag: '🍬'
    },
    { 
      id: 3, 
      nombre: 'CHUPETINES', 
      descripcion: 'Bolsa con 20 unidades', 
      precio: 800, 
      imagen: imagenesProductos[2], 
      rating: 4,
      tag: '🍭'
    },
    { 
      id: 4, 
      nombre: 'PAPAS FRITAS', 
      descripcion: 'Paquete grande 150gr', 
      precio: 650, 
      imagen: imagenesProductos[3], 
      rating: 5,
      tag: '🥨'
    },
    { 
      id: 5, 
      nombre: 'CHICLES', 
      descripcion: 'Tubos de chicles x10', 
      precio: 400, 
      imagen: imagenesProductos[4], 
      rating: 4,
      tag: '🍬'
    },
    { 
      id: 6, 
      nombre: 'BARRITAS DE CEREAL', 
      descripcion: 'Caja x6 unidades', 
      precio: 720, 
      imagen: imagenesProductos[5], 
      rating: 4,
      tag: '🍫'
    },
    { 
      id: 7, 
      nombre: 'GASEOSA 500ML', 
      descripcion: 'Gaseosa línea', 
      precio: 350, 
      imagen: imagenesProductos[6], 
      rating: 5,
      tag: '🥤'
    },
    { 
      id: 8, 
      nombre: 'AGUA MINERAL', 
      descripcion: 'Agua sin gas 500ml', 
      precio: 250, 
      imagen: imagenesProductos[7], 
      rating: 4,
      tag: '💧'
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
    <div className="quiosco-playa">
      
      {/* =========================================================
          HEADER DE CATEGORÍA CON BADGE PLAYERO (IGUAL QUE ALMACÉN)
          ========================================================= */}
      <section className="categoria-header">
        <div className="header-badge">
          <GiIceCreamCone className="badge-icono" />
          <span>PLAYA & SOL · QUIOSCO</span>
          <GiIceCreamCone className="badge-icono" />
        </div>
        <h1 className="animate-slideUp">
          QUIOSCO <span className="destacado">DON JUAN</span>
        </h1>
        <p className="animate-slideUp" style={{animationDelay: '0.1s'}}>
          Golosinas y snacks para todos los gustos
        </p>
      </section>

      {/* =========================================================
          BUSCADOR PLAYERO (IGUAL QUE ALMACÉN)
          ========================================================= */}
      <div className="buscador-playa animate-slideUp" style={{animationDelay: '0.2s'}}>
        <BsSearch className="search-icono" />
        <input 
          type="text" 
          placeholder="Buscá en quiosco..." 
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
          GRID DE PRODUCTOS (IGUAL QUE ALMACÉN)
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
            <p>No encontramos productos en quiosco</p>
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

export default QuioscoDonJuan;