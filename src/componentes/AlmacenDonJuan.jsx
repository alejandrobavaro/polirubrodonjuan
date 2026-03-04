// =========================================================
// AlmacenDonJuan.jsx - PÁGINA DE ALMACÉN DE POLIRUBRO DON JUAN
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
  BsBoxSeam,
  BsSun,
  BsUmbrella
} from 'react-icons/bs';
import { GiSurfBoard, GiIceCreamCone } from 'react-icons/gi';
import { useCarrito } from '../context/CarritoContext';
import '../assets/scss/_03-Componentes/_AlmacenDonJuan.scss';

// =========================================================
const AlmacenDonJuan = () => {
  // =========================================================
  const [busqueda, setBusqueda] = useState('');
  const { agregarAlCarrito } = useCarrito();
  
  // =========================================================
  // IMÁGENES DE 04-img-galeria1 Y 06-img-galeria3
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
  // PRODUCTOS DE ALMACÉN
  // =========================================================
  const productos = [
    { 
      id: 1, 
      nombre: 'ARROZ 1KG', 
      descripcion: 'Arroz largo fino, ideal para la playa', 
      precio: 850, 
      imagen: imagenesProductos[0], 
      rating: 5,
      tag: '🌾'
    },
    { 
      id: 2, 
      nombre: 'FIDEOS TALLARÍN', 
      descripcion: 'Fideos 500gr, para tus pastas', 
      precio: 480, 
      imagen: imagenesProductos[1], 
      rating: 4,
      tag: '🍝'
    },
    { 
      id: 3, 
      nombre: 'ACEITE GIRASOL', 
      descripcion: 'Aceite 1.5L, para freír', 
      precio: 1100, 
      imagen: imagenesProductos[2], 
      rating: 5,
      tag: '🫒'
    },
    { 
      id: 4, 
      nombre: 'AZÚCAR 1KG', 
      descripcion: 'Azúcar refinada para el mate', 
      precio: 650, 
      imagen: imagenesProductos[3], 
      rating: 4,
      tag: '🧉'
    },
    { 
      id: 5, 
      nombre: 'HARINA 0000', 
      descripcion: 'Harina 1kg, para tus recetas', 
      precio: 520, 
      imagen: imagenesProductos[4], 
      rating: 5,
      tag: '🥖'
    },
    { 
      id: 6, 
      nombre: 'YERBA MATE', 
      descripcion: 'Yerba 1kg, para la playa', 
      precio: 1200, 
      imagen: imagenesProductos[5], 
      rating: 5,
      tag: '🧉'
    },
    { 
      id: 7, 
      nombre: 'LECHE LARGA VIDA', 
      descripcion: 'Leche 1L, fresca', 
      precio: 380, 
      imagen: imagenesProductos[6], 
      rating: 4,
      tag: '🥛'
    },
    { 
      id: 8, 
      nombre: 'GALLETITAS DULCES', 
      descripcion: 'Paquete 250gr, para la merienda', 
      precio: 420, 
      imagen: imagenesProductos[7], 
      rating: 5,
      tag: '🍪'
    }
  ];

  const productosFiltrados = productos.filter(p => 
    p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
    p.descripcion.toLowerCase().includes(busqueda.toLowerCase())
  );

  // =========================================================
  // FUNCIÓN PARA AGREGAR AL CARRITO
  // =========================================================
  const handleAgregar = (producto) => {
    agregarAlCarrito(producto);
    // Pequeña animación de feedback (opcional)
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
    <div className="almacen-playa">
      
      {/* =========================================================
          HEADER DE CATEGORÍA CON SOL
          ========================================================= */}
      <section className="categoria-header">
        <div className="header-badge">
          <GiSurfBoard className="badge-icono" />
          <span>PLAYA & SOL · ALMACÉN</span>
          <GiSurfBoard className="badge-icono" />
        </div>
        <h1 className="animate-slideUp">
          ALMACÉN <span className="destacado">DON JUAN</span>
        </h1>
        <p className="animate-slideUp" style={{animationDelay: '0.1s'}}>
          Productos de almacén para tu hogar y la playa
        </p>
      </section>

      {/* =========================================================
          BUSCADOR CON ESTILO PLAYERO
          ========================================================= */}
      <div className="buscador-playa animate-slideUp" style={{animationDelay: '0.2s'}}>
        <BsSearch className="search-icono" />
        <input 
          type="text" 
          placeholder="Buscá en almacén..." 
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
            <p>No encontramos productos en almacén</p>
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

export default AlmacenDonJuan;