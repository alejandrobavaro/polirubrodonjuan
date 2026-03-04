// =========================================================
// TiendaDonJuan.jsx - TIENDA DE POLIRUBRO DON JUAN
// NUEVA ESTÉTICA: PLAYA & SOL - VERSIÓN UNIFORME
// =========================================================
import React, { useState } from 'react';
import { 
  BsCart3, 
  BsSearch, 
  BsFilter, 
  BsGrid, 
  BsList, 
  BsLightning, 
  BsStar, 
  BsStarFill,
  BsCupStraw,
  BsBook,
  BsDice6,
  BsBoxSeam,
  BsSun,
  BsUmbrella,
  BsWater
} from 'react-icons/bs';
import { GiBeachBall, GiIceCreamCone, GiSurfBoard } from 'react-icons/gi';
import { useCarrito } from '../context/CarritoContext';
import '../assets/scss/_03-Componentes/_TiendaDonJuan.scss';

// =========================================================
const TiendaDonJuan = () => {
  // =========================================================
  const [vista, setVista] = useState('grid');
  const [categoriaActiva, setCategoriaActiva] = useState('todos');
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
  // CATEGORÍAS DEL POLIRUBRO - VERSIÓN PLAYERA
  // =========================================================
  const categorias = [
    { id: 'todos', nombre: 'Todos', icono: <GiSurfBoard /> },
    { id: 'almacen', nombre: 'Almacén', icono: <BsBoxSeam /> },
    { id: 'quiosco', nombre: 'Quiosco', icono: <GiIceCreamCone /> },
    { id: 'libreria', nombre: 'Librería', icono: <BsBook /> },
    { id: 'jugueteria', nombre: 'Juguetería', icono: <GiBeachBall /> },
    { id: 'ofertas', nombre: 'Ofertas', icono: <BsLightning /> }
  ];

  // =========================================================
  // PRODUCTOS - VERSIÓN PLAYERA
  // =========================================================
  const productos = [
    {
      id: 1,
      nombre: 'ARROZ 1KG',
      descripcion: 'Arroz largo fino, ideal para la playa',
      precio: 850,
      precioPorMayor: 780,
      imagen: imagenesProductos[0],
      categoria: 'almacen',
      stock: true,
      rating: 5,
      destacado: false,
      tag: '🌾'
    },
    {
      id: 2,
      nombre: 'HELADOS VARIADOS',
      descripcion: 'Palitos y cucuruchos x6 unidades',
      precio: 1200,
      precioPorMayor: 1000,
      imagen: imagenesProductos[1],
      categoria: 'quiosco',
      stock: true,
      rating: 5,
      destacado: true,
      tag: '🍦'
    },
    {
      id: 3,
      nombre: 'CUADERNO RAYADO',
      descripcion: 'Cuaderno tapa dura, 96 hojas',
      precio: 950,
      precioPorMayor: 850,
      imagen: imagenesProductos[2],
      categoria: 'libreria',
      stock: true,
      rating: 4,
      destacado: false,
      tag: '📓'
    },
    {
      id: 4,
      nombre: 'PELOTA DE PLAYA',
      descripcion: 'Pelota inflable para la arena',
      precio: 2500,
      precioPorMayor: 2200,
      imagen: imagenesProductos[3],
      categoria: 'jugueteria',
      stock: true,
      rating: 5,
      destacado: false,
      tag: '🏐'
    },
    {
      id: 5,
      nombre: 'FIDEOS TALLARÍN',
      descripcion: 'Fideos tallarín, paquete 500gr',
      precio: 480,
      precioPorMayor: 420,
      imagen: imagenesProductos[4],
      categoria: 'almacen',
      stock: true,
      rating: 4,
      destacado: false,
      tag: '🍝'
    },
    {
      id: 6,
      nombre: 'CHUPETINES',
      descripcion: 'Bolsa con 20 chupetines de fruta',
      precio: 800,
      precioPorMayor: 700,
      imagen: imagenesProductos[5],
      categoria: 'quiosco',
      stock: true,
      rating: 5,
      destacado: true,
      tag: '🍭'
    },
    {
      id: 7,
      nombre: 'LAPICERAS COLORES',
      descripcion: 'Set de 12 lapiceras de colores',
      precio: 1800,
      precioPorMayor: 1600,
      imagen: imagenesProductos[6],
      categoria: 'libreria',
      stock: true,
      rating: 5,
      destacado: false,
      tag: '🖍️'
    },
    {
      id: 8,
      nombre: 'PELOTA DE FÚTBOL',
      descripcion: 'Pelota de fútbol número 5',
      precio: 3500,
      precioPorMayor: 3200,
      imagen: imagenesProductos[7],
      categoria: 'jugueteria',
      stock: true,
      rating: 5,
      destacado: true,
      tag: '⚽'
    },
    {
      id: 9,
      nombre: 'ACEITE GIRASOL',
      descripcion: 'Aceite de girasol, botella 1.5L',
      precio: 1100,
      precioPorMayor: 980,
      imagen: imagenesProductos[0],
      categoria: 'almacen',
      stock: true,
      rating: 5,
      destacado: false,
      tag: '🫒'
    },
    {
      id: 10,
      nombre: 'ALFAJORES TRIPLES',
      descripcion: 'Alfajores triples de chocolate, 6 unidades',
      precio: 1500,
      precioPorMayor: 1300,
      imagen: imagenesProductos[1],
      categoria: 'quiosco',
      stock: true,
      rating: 5,
      destacado: true,
      tag: '🍫'
    },
    {
      id: 11,
      nombre: 'CARTUCHERA',
      descripcion: 'Cartuchera con cierre para la playa',
      precio: 2200,
      precioPorMayor: 1900,
      imagen: imagenesProductos[2],
      categoria: 'libreria',
      stock: true,
      rating: 4,
      destacado: false,
      tag: '🧰'
    },
    {
      id: 12,
      nombre: 'BALDE PLAYA',
      descripcion: 'Balde con pala y rastrillo',
      precio: 4200,
      precioPorMayor: 3800,
      imagen: imagenesProductos[3],
      categoria: 'jugueteria',
      stock: true,
      rating: 5,
      destacado: true,
      tag: '🏖️'
    }
  ];

  // =========================================================
  // FILTRAR PRODUCTOS
  // =========================================================
  const productosFiltrados = productos.filter(producto => {
    const coincideCategoria = categoriaActiva === 'todos' || producto.categoria === categoriaActiva;
    const coincideBusqueda = producto.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
                            producto.descripcion.toLowerCase().includes(busqueda.toLowerCase());
    return coincideCategoria && coincideBusqueda;
  });

  // =========================================================
  // FUNCIÓN PARA AGREGAR AL CARRITO CON FEEDBACK
  // =========================================================
  const handleAgregar = (producto) => {
    agregarAlCarrito(producto);
    // Feedback visual (opcional)
  };

  // =========================================================
  return (
    <div className="tienda-playa">
      
      {/* =========================================================
          HEADER DE LA TIENDA (IGUAL QUE ALMACÉN)
          ========================================================= */}
      <section className="categoria-header">
        <div className="header-badge">
          <GiSurfBoard className="badge-icono" />
          <span>PLAYA & SOL · TIENDA</span>
          <GiSurfBoard className="badge-icono" />
        </div>
        <h1 className="animate-slideUp">
          NUESTRA <span className="destacado">TIENDA</span>
        </h1>
        <p className="animate-slideUp" style={{animationDelay: '0.1s'}}>
          Encontrá todo lo que necesitás en un solo lugar
        </p>
      </section>

      {/* =========================================================
          BARRA DE BÚSQUEDA Y FILTROS
          ========================================================= */}
      <section className="tienda-barra-playa">
        <div className="busqueda-container">
          <BsSearch className="search-icono" />
          <input 
            type="text" 
            placeholder="Buscar productos..." 
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
          />
          {busqueda && (
            <span className="resultados-count">
              {productosFiltrados.length} productos
            </span>
          )}
        </div>
        
        <div className="tienda-acciones">
          <button className="filtro-btn">
            <BsFilter /> FILTRAR
          </button>
          <div className="vista-toggles">
            <button 
              className={`vista-btn ${vista === 'grid' ? 'active' : ''}`}
              onClick={() => setVista('grid')}
            >
              <BsGrid />
            </button>
            <button 
              className={`vista-btn ${vista === 'list' ? 'active' : ''}`}
              onClick={() => setVista('list')}
            >
              <BsList />
            </button>
          </div>
        </div>
      </section>

      {/* =========================================================
          CATEGORÍAS CON ICONOS (IGUAL QUE EN ALMACÉN)
          ========================================================= */}
      <section className="categorias-playa">
        {categorias.map(cat => (
          <button
            key={cat.id}
            className={`categoria-btn ${categoriaActiva === cat.id ? 'active' : ''}`}
            onClick={() => setCategoriaActiva(cat.id)}
          >
            <span className="categoria-icono">{cat.icono}</span>
            <span className="categoria-nombre">{cat.nombre}</span>
          </button>
        ))}
      </section>

      {/* =========================================================
          GRID/LISTA DE PRODUCTOS
          ========================================================= */}
      <section className={`productos-section-playa ${vista}`}>
        {productosFiltrados.map((producto, index) => (
          <div 
            key={producto.id} 
            className="producto-card-playa animate-slideUp"
            style={{animationDelay: `${index * 0.05}s`}}
          >
            {producto.destacado && (
              <div className="card-badge">
                <BsLightning /> DESTACADO
              </div>
            )}
            
            <div className="card-imagen">
              <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
              <span className="card-tag">{producto.tag}</span>
              {!producto.stock && <div className="sin-stock">SIN STOCK</div>}
            </div>
            
            <div className="card-contenido">
              <span className="card-categoria">{producto.categoria}</span>
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
              
              <div className="precios-mayorista">
                <span className="mayorista-label">Mayorista (10+):</span>
                <span className="mayorista-valor">${producto.precioPorMayor.toLocaleString()}</span>
              </div>
              
              <div className="cantidad-selector">
                <button className="cantidad-btn">−</button>
                <span className="cantidad-valor">1</span>
                <button className="cantidad-btn">+</button>
              </div>
              
              <button 
                className="btn-agregar"
                onClick={() => handleAgregar(producto)}
              >
                <BsCart3 /> AGREGAR
              </button>
            </div>
          </div>
        ))}
      </section>

      {/* =========================================================
          SIN RESULTADOS
          ========================================================= */}
      {productosFiltrados.length === 0 && (
        <div className="sin-resultados-playa">
          <GiBeachBall className="sin-icono" />
          <p>No encontramos productos que coincidan con tu búsqueda</p>
          <button 
            className="btn-limpiar"
            onClick={() => {setBusqueda(''); setCategoriaActiva('todos');}}
          >
            VER TODOS LOS PRODUCTOS
          </button>
        </div>
      )}

      {/* =========================================================
          CTA DE ENVÍOS (IGUAL QUE EN ALMACÉN)
          ========================================================= */}
      <section className="cta-envios-playa">
        <div className="cta-contenido">
          <BsUmbrella className="cta-icono" />
          <h3>ENVÍOS A LA PLAYA</h3>
          <p>Comprando <span className="destacado">$5000</span> o más, el envío es <strong>GRATIS</strong></p>
        </div>
      </section>
    </div>
  );
};

export default TiendaDonJuan;