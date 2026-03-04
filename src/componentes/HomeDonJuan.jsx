// =========================================================
// HomeDonJuan.jsx - LANDING PAGE DE POLIRUBRO DON JUAN
// CON NUEVAS IMÁGENES DE LA GALERÍA 3
// =========================================================
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsWhatsapp, 
  BsTruck, 
  BsStarFill, 
  BsLightning, 
  BsFire,
  BsCupStraw,
  BsBook,
  BsDice6,
  BsBoxSeam,
  BsSun,
  BsUmbrella,
  BsWater,
  BsArrowRight
} from 'react-icons/bs';
import { GiBeachBall, GiIceCreamCone, GiSurfBoard } from 'react-icons/gi';
import ContadorDonJuan from './ContadorDonJuan';
import { useCarrito } from '../context/CarritoContext';
import '../assets/scss/_03-Componentes/_HomeDonJuan.scss';

// =========================================================
const HomeDonJuan = () => {
  // =========================================================
  // ESTADO PARA EL SLIDER DEL HERO
  // =========================================================
  const [heroImageIndex, setHeroImageIndex] = useState(0);
  const [animacionHero, setAnimacionHero] = useState('entrada');
  const { agregarAlCarrito } = useCarrito();
  
  // =========================================================
  // IMÁGENES PARA EL HERO (ROTATIVAS) - USANDO LAS NUEVAS
  // =========================================================
  const heroImages = [
    '/img/06-img-galeria3/id1-c1.png',
    '/img/06-img-galeria3/id2-c2.png',
    '/img/06-img-galeria3/id3-c3.png',
    '/img/06-img-galeria3/id4-c4.png',
    '/img/06-img-galeria3/id5-c5.png',
    '/img/06-img-galeria3/id6-c6.png',
    '/img/06-img-galeria3/id7-c7.png',
    '/img/06-img-galeria3/id8-c8.png',
    '/img/06-img-galeria3/id9-c9.png',
    '/img/06-img-galeria3/id10-c10.png',
    '/img/06-img-galeria3/id11-c11.png',
    '/img/06-img-galeria3/id12-c12.png',
    '/img/06-img-galeria3/id13-c13.png',
    '/img/06-img-galeria3/id14-c14.png',
    '/img/06-img-galeria3/id15-c15.png',
    '/img/06-img-galeria3/id16-c16.png',
    '/img/06-img-galeria3/id17-c17.png',
    '/img/06-img-galeria3/id18-c18.png',
    '/img/06-img-galeria3/id19-c19.png',
    '/img/06-img-galeria3/id20-c20.png'
  ];

  // =========================================================
  // EFECTO PARA CAMBIAR LA IMAGEN DEL HERO CADA 5 SEGUNDOS
  // =========================================================
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimacionHero('salida');
      
      setTimeout(() => {
        setHeroImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
        setAnimacionHero('entrada');
      }, 500);
      
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  // =========================================================
  // PRODUCTOS DESTACADOS - CON IMÁGENES DE LA NUEVA GALERÍA
  // =========================================================
  const productosDestacados = [
    {
      id: 1,
      nombre: 'GOLOSINAS VARIADAS',
      descripcion: 'Chocolates, caramelos y chicles, todo en un combo',
      precio: 1500,
      imagen: '/img/06-img-galeria3/id1-c1.png',
      rating: 5,
      tag: '🔥 MÁS PEDIDO',
      categoria: 'quiosco'
    },
    {
      id: 2,
      nombre: 'KIT ESCOLAR',
      descripcion: 'Cuadernos, lapiceras y cartuchera. Todo para la escuela',
      precio: 4500,
      imagen: '/img/06-img-galeria3/id2-c2.png',
      rating: 5,
      tag: '⭐ PREMIUM',
      categoria: 'libreria'
    },
    {
      id: 3,
      nombre: 'ALMACÉN SÚPER',
      descripcion: 'Arroz, fideos, aceite y más. Combo familiar',
      precio: 8500,
      imagen: '/img/06-img-galeria3/id3-c3.png',
      rating: 5,
      tag: '🥇 AHORRO',
      categoria: 'almacen'
    },
    {
      id: 4,
      nombre: 'JUGUETE SORPRESA',
      descripcion: 'Caja misteriosa con juguete + golosina',
      precio: 2800,
      imagen: '/img/06-img-galeria3/id4-c4.png',
      rating: 5,
      tag: '🎉 SORPRESA',
      categoria: 'jugueteria'
    }
  ];

  // =========================================================
  // NUEVAS IMÁGENES PARA GALERÍA (TAMBIÉN DE LA GALERÍA 3)
  // =========================================================
  const nuevasImagenes = [
    '/img/06-img-galeria3/id5-c5.png',
    '/img/06-img-galeria3/id6-c6.png',
    '/img/06-img-galeria3/id7-c7.png',
    '/img/06-img-galeria3/id8-c8.png',
    '/img/06-img-galeria3/id9-c9.png',
    '/img/06-img-galeria3/id10-c10.png'
  ];

  // =========================================================
  // CATEGORÍAS DEL POLIRUBRO - CON IMÁGENES DE FONDO
  // =========================================================
  const categorias = [
    { 
      icon: <GiSurfBoard />, 
      nombre: 'Almacén', 
      imagen: '/img/06-img-galeria3/id11-c11.png',
      link: '/almacen'
    },
    { 
      icon: <GiIceCreamCone />, 
      nombre: 'Quiosco', 
      imagen: '/img/06-img-galeria3/id12-c12.png',
      link: '/quiosco'
    },
    { 
      icon: <BsBook />, 
      nombre: 'Librería', 
      imagen: '/img/06-img-galeria3/id13-c13.png',
      link: '/libreria'
    },
    { 
      icon: <GiBeachBall />, 
      nombre: 'Juguetería', 
      imagen: '/img/06-img-galeria3/id14-c14.png',
      link: '/jugueteria'
    }
  ];

  // =========================================================
  // TESTIMONIOS (MANTENEMOS AVATARES ANTERIORES)
  // =========================================================
  const testimonios = [
    {
      nombre: 'María G.',
      comentario: '"Siempre compro en Don Juan, tienen de todo y a buen precio"',
      avatar: '/img/05-img-galeria2/1a.jpg',
      rating: 5
    },
    {
      nombre: 'Carlos R.',
      comentario: '"El mejor almacén de barrio. Los envíos súper rápidos"',
      avatar: '/img/05-img-galeria2/2a.jpg',
      rating: 5
    },
    {
      nombre: 'Ana P.',
      comentario: '"Los chicos aman la juguetería. Siempre hay novedades"',
      avatar: '/img/05-img-galeria2/3a.jpg',
      rating: 5
    }
  ];

  // =========================================================
  // VENTAJAS DE DON JUAN
  // =========================================================
  const ventajas = [
    { icon: <BsTruck />, titulo: 'Envíos Rápidos', desc: 'Te llevamos la compra en el día', delay: '0s' },
    { icon: <BsSun />, titulo: 'Mejor Precio', desc: 'Comparados con supermercados', delay: '0.1s' },
    { icon: <BsUmbrella />, titulo: 'Todo en un lugar', desc: 'Almacén, quiosco, librería y juguetería', delay: '0.2s' },
    { icon: <BsWater />, titulo: 'Promociones únicas', desc: 'Descuentos exclusivos por transferencia', delay: '0.3s' }
  ];

  // =========================================================
  return (
    <div className="home-playa">
      
      {/* =========================================================
          HERO SECTION - CON SLIDER AUTOMÁTICO (NUEVAS IMÁGENES)
          ========================================================= */}
      <section className="hero-playa">
        {/* Imagen de fondo con slider */}
        <div className="hero-slider">
          {heroImages.map((img, index) => (
            <div
              key={index}
              className={`hero-slide ${index === heroImageIndex ? 'active' : ''} ${index === heroImageIndex ? animacionHero : ''}`}
              style={{backgroundImage: `url(${img})`}}
            ></div>
          ))}
        </div>
        
        {/* Overlay */}
        <div className="hero-background-overlay"></div>
        
        {/* Patrón de olas animado */}
        <div className="hero-pattern"></div>
        
        {/* Indicadores del slider */}
        <div className="hero-indicadores">
          {heroImages.map((_, index) => (
            <button
              key={index}
              className={`indicador ${index === heroImageIndex ? 'activo' : ''}`}
              onClick={() => setHeroImageIndex(index)}
              aria-label={`Ir a imagen ${index + 1}`}
            ></button>
          ))}
        </div>
        
        <div className="hero-content animate-fadeIn">
          
          {/* Badge con sol animado */}
          <div className="hero-badge animate-slideDown">
            <BsSun className="badge-icono sol animate-rotate" />
            <span>PLAYA & SOL · DESDE 1985</span>
            <BsSun className="badge-icono sol animate-rotate" />
          </div>
          
          <h1 className="hero-titulo animate-slideUp">
            <span className="linea1">¡DON JUAN</span>
            <span className="linea2 animate-pulse">TIENE TODO!</span>
          </h1>
          
          <p className="hero-subtitulo animate-slideUp" style={{animationDelay: '0.1s'}}>
            Almacén · Quiosco · Librería · Juguetería
          </p>
          
          <div className="hero-estadisticas animate-slideUp" style={{animationDelay: '0.2s'}}>
            <div className="stat-item">
              <span className="stat-numero">+30mil</span>
              <span className="stat-etiqueta">PRODUCTOS</span>
            </div>
            <div className="stat-divisor"></div>
            <div className="stat-item">
              <span className="stat-numero">+5mil</span>
              <span className="stat-etiqueta">CLIENTES</span>
            </div>
          </div>
          
          <div className="hero-acciones animate-slideUp" style={{animationDelay: '0.3s'}}>
            <Link to="/tienda" className="btn-hero-primario">
              COMPRAR AHORA
              <BsLightning className="btn-icono animate-pulse" />
            </Link>
            <Link to="/ofertas" className="btn-hero-secundario">
              VER OFERTAS
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CONTADOR DE OFERTAS CON ANIMACIÓN
          ========================================================= */}
      <div className="animate-slideUp">
        <ContadorDonJuan />
      </div>

      {/* =========================================================
          CATEGORÍAS RÁPIDAS CON ANIMACIONES (NUEVAS IMÁGENES)
          ========================================================= */}
      <section className="categorias-playa">
        <h2 className="animate-fadeIn">EXPLORÁ <span className="destacado">NUESTRAS CATEGORÍAS</span></h2>
        
        <div className="categorias-grid">
          {categorias.map((cat, index) => (
            <div 
              key={index} 
              className="categoria-card animate-slideUp"
              style={{
                animationDelay: `${index * 0.1}s`,
                backgroundImage: `url(${cat.imagen})`
              }}
            >
              <div className="categoria-overlay"></div>
              <div className="categoria-contenido">
                <div className="categoria-icono animate-bounce">{cat.icon}</div>
                <h3>{cat.nombre}</h3>
                <Link to={cat.link} className="categoria-enlace">
                  VER <BsArrowRight className="enlace-icono" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          NUEVA GALERÍA DE IMÁGENES (NUEVAS IMÁGENES)
          ========================================================= */}
      <section className="galeria-playa">
        <h2 className="animate-fadeIn">PRODUCTOS <span className="destacado">DESTACADOS</span></h2>
        <div className="galeria-grid">
          {nuevasImagenes.map((img, index) => (
            <div key={index} className="galeria-item animate-scale" style={{animationDelay: `${index * 0.1}s`}}>
              <img src={img} alt={`Producto ${index + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PRODUCTOS DESTACADOS CON ANIMACIONES
          ========================================================= */}
      <section className="destacados-playa">
        <div className="section-header animate-fadeIn">
          <h2>LOS MÁS <span className="destacado">VENDIDOS</span></h2>
          <p>Lo que más eligen nuestros clientes</p>
        </div>

        <div className="productos-grid">
          {productosDestacados.map((producto, index) => (
            <div key={producto.id} className="producto-card animate-slideUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="card-badge animate-pulse">{producto.tag}</div>
              <div className="card-badge-categoria">{producto.categoria}</div>
              <div className="card-imagen">
                <img src={producto.imagen} alt={producto.nombre} loading="lazy" />
              </div>
              <div className="card-contenido">
                <h3>{producto.nombre}</h3>
                <p>{producto.descripcion}</p>
                
                <div className="card-rating">
                  {[...Array(5)].map((_, i) => (
                    <BsStarFill key={i} className="estrella-llena" />
                  ))}
                </div>
                
                <div className="card-precio">
                  <span className="precio">${producto.precio.toLocaleString()}</span>
                </div>
                
                <div className="card-acciones">
                  <button 
                    className="btn-agregar"
                    onClick={() => agregarAlCarrito(producto)}
                  >
                    <BsLightning /> AGREGAR
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="ver-todos">
          <Link to="/tienda" className="btn-ver-todos animate-pulse">
            VER TODOS LOS PRODUCTOS →
          </Link>
        </div>
      </section>

      {/* =========================================================
          PROMO ESPECIAL CON ANIMACIÓN
          ========================================================= */}
      <section className="promo-playa">
        <div className="promo-contenido animate-scale">
          <span className="promo-tag animate-pulse">🔥 OFERTÓN 🔥</span>
          <h2 className="animate-slideUp">LLEVÁ 3 PRODUCTOS</h2>
          <p className="promo-texto animate-slideUp" style={{animationDelay: '0.1s'}}>
            Y EL 4TO VA <span className="promo-destacado animate-pulse">GRATIS</span>
          </p>
          <div className="promo-condiciones">
            <span>Válido solo por hoy</span>
            <span className="punto">·</span>
            <span>En productos seleccionados</span>
          </div>
          <Link to="/ofertas" className="btn-promo animate-pulse">
            APROVECHAR OFERTA
          </Link>
        </div>
      </section>

      {/* =========================================================
          POR QUÉ ELEGIR DON JUAN CON ANIMACIONES
          ========================================================= */}
      <section className="porque-playa">
        <h2 className="animate-fadeIn">¿POR QUÉ <span className="destacado">DON JUAN?</span></h2>
        
        <div className="ventajas-grid">
          {ventajas.map((ventaja, index) => (
            <div key={index} className="ventaja-card animate-slideUp" style={{animationDelay: ventaja.delay}}>
              <div className="ventaja-icono animate-bounce">{ventaja.icon}</div>
              <h3>{ventaja.titulo}</h3>
              <p>{ventaja.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          TESTIMONIOS CON AVATARES ANIMADOS
          ========================================================= */}
      <section className="testimonios-playa">
        <h2 className="animate-fadeIn">LO QUE DICEN <span className="destacado">NUESTROS CLIENTES</span></h2>
        
        <div className="testimonios-grid">
          {testimonios.map((testimonio, index) => (
            <div key={index} className="testimonio-card animate-slideUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="testimonio-header">
                <img src={testimonio.avatar} alt={testimonio.nombre} className="testimonio-avatar animate-scale" loading="lazy" />
                <div className="testimonio-info">
                  <div className="testimonio-estrellas">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <BsStarFill key={i} />
                    ))}
                  </div>
                  <p className="testimonio-nombre">{testimonio.nombre}</p>
                </div>
              </div>
              <p className="testimonio-texto">{testimonio.comentario}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CTA WHATSAPP CON ANIMACIÓN
          ========================================================= */}
      <section className="cta-whatsapp-playa">
        <div className="cta-contenido animate-scale">
          <BsWhatsapp className="cta-icono animate-pulse" />
          <h3 className="animate-slideUp">¿COMPRAS POR MAYOR?</h3>
          <p className="animate-slideUp" style={{animationDelay: '0.1s'}}>
            Restaurantes, kioscos, librerías. ¡Precios especiales!
          </p>
          <a 
            href="https://wa.me/584141234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-cta-whatsapp animate-pulse"
          >
            <BsWhatsapp /> CONTACTAR AHORA
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomeDonJuan;