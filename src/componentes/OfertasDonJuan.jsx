// =========================================================
// OfertasDonJuan.jsx - PÁGINA DE OFERTAS DE POLIRUBRO DON JUAN
// NUEVA ESTÉTICA: PLAYA & SOL - VERSIÓN UNIFORME
// =========================================================
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsClock, 
  BsFire, 
  BsGift, 
  BsCart3, 
  BsLightning, 
  BsStar, 
  BsWhatsapp,
  BsCupStraw,
  BsBook,
  BsDice6,
  BsBoxSeam,
  BsSun,
  BsUmbrella,
  BsWater
} from 'react-icons/bs';
import { GiBeachBall, GiIceCreamCone, GiSurfBoard, GiKite } from 'react-icons/gi';
import { useCarrito } from '../context/CarritoContext';
import '../assets/scss/_03-Componentes/_OfertasDonJuan.scss';

// =========================================================
const OfertasDonJuan = () => {
  // =========================================================
  // CONTADOR REGRESIVO
  // =========================================================
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 12,
    minutes: 30,
    seconds: 45
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const { agregarAlCarrito } = useCarrito();

  // =========================================================
  // IMÁGENES DE GALERÍA 3
  // =========================================================
  const imagenesOfertas = [
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
  // OFERTAS ACTIVAS - VERSIÓN PLAYERA
  // =========================================================
  const ofertas = [
    {
      id: 1,
      titulo: "COMBO PLAYA",
      descripcion: "Helados, bebidas y snacks para la arena",
      precioRegular: 10500,
      precioOferta: 8900,
      imagen: imagenesOfertas[0],
      ahorro: 1600,
      destacado: true,
      tag: "🔥 MÁS VENDIDO",
      icono: <BsSun />,
      categoria: "almacen"
    },
    {
      id: 2,
      titulo: "KIT PLAYA",
      descripcion: "Sombrilla, reposera y bolso",
      precioRegular: 18500,
      precioOferta: 14900,
      imagen: imagenesOfertas[1],
      ahorro: 3600,
      destacado: false,
      tag: "🏖️ VERANO",
      icono: <BsUmbrella />,
      categoria: "jugueteria"
    },
    {
      id: 3,
      titulo: "2x1 HELADOS",
      descripcion: "Llevá 2 helados al precio de 1",
      precioRegular: 3000,
      precioOferta: 1500,
      imagen: imagenesOfertas[2],
      ahorro: 1500,
      destacado: true,
      tag: "⚡ OFERTA RELÁMPAGO",
      icono: <GiIceCreamCone />,
      categoria: "quiosco"
    },
    {
      id: 4,
      titulo: "PELOTAS VARIADAS",
      descripcion: "Pelotas de fútbol, vóley y playa",
      precioRegular: 5800,
      precioOferta: 4200,
      imagen: imagenesOfertas[3],
      ahorro: 1600,
      destacado: false,
      tag: "🎲 SORPRESA",
      icono: <GiBeachBall />,
      categoria: "jugueteria"
    },
    {
      id: 5,
      titulo: "COMBO DESPENSA",
      descripcion: "Leche, galletitas, pan, dulce de leche",
      precioRegular: 12500,
      precioOferta: 9900,
      imagen: imagenesOfertas[4],
      ahorro: 2600,
      destacado: false,
      tag: "🏠 DESPENSA",
      icono: <BsBoxSeam />,
      categoria: "almacen"
    },
    {
      id: 6,
      titulo: "PACK LIBRERÍA",
      descripcion: "Cuadernos, lapiceras y lápices",
      precioRegular: 9500,
      precioOferta: 7800,
      imagen: imagenesOfertas[5],
      ahorro: 1700,
      destacado: false,
      tag: "✏️ ÚTILES",
      icono: <BsBook />,
      categoria: "libreria"
    },
    {
      id: 7,
      titulo: "SUPER COMBO",
      descripcion: "Almacén, quiosco y juguetería",
      precioRegular: 22000,
      precioOferta: 17900,
      imagen: imagenesOfertas[6],
      ahorro: 4100,
      destacado: true,
      tag: "🔥 MEGA OFERTA",
      icono: <GiSurfBoard />,
      categoria: "combinado"
    }
  ];

  const [filtro, setFiltro] = useState('todos');

  const filtrarOfertas = () => {
    if (filtro === 'todos') return ofertas;
    if (filtro === 'destacados') return ofertas.filter(o => o.destacado);
    if (filtro === 'almacen') return ofertas.filter(o => o.categoria === 'almacen');
    if (filtro === 'quiosco') return ofertas.filter(o => o.categoria === 'quiosco');
    if (filtro === 'libreria') return ofertas.filter(o => o.categoria === 'libreria');
    if (filtro === 'jugueteria') return ofertas.filter(o => o.categoria === 'jugueteria');
    return ofertas;
  };

  // =========================================================
  return (
    <div className="ofertas-playa">
      
      {/* =========================================================
          HEADER DE CATEGORÍA (IGUAL QUE EN ALMACÉN)
          ========================================================= */}
      <section className="categoria-header">
        <div className="header-badge">
          <BsSun className="badge-icono" />
          <span>PLAYA & SOL · OFERTAS</span>
          <BsFire className="badge-icono" />
        </div>
        <h1 className="animate-slideUp">
          OFERTAS <span className="destacado">IMPERDIBLES</span>
        </h1>
        <p className="animate-slideUp" style={{animationDelay: '0.1s'}}>
          ¡Aprovechá antes de que se acaben!
        </p>
      </section>

      {/* =========================================================
          CONTADOR DE OFERTAS (ESTILO PLAYERO)
          ========================================================= */}
      <section className="countdown-playa">
        <div className="countdown-contenido">
          <div className="countdown-label">
            <BsClock className="label-icono" /> OFERTAS POR TIEMPO LIMITADO
          </div>
          <div className="countdown">
            <div className="countdown-item">
              <span className="countdown-numero">{timeLeft.days}</span>
              <span className="countdown-etiqueta">DÍAS</span>
            </div>
            <div className="countdown-separador">:</div>
            <div className="countdown-item">
              <span className="countdown-numero">{timeLeft.hours}</span>
              <span className="countdown-etiqueta">HORAS</span>
            </div>
            <div className="countdown-separador">:</div>
            <div className="countdown-item">
              <span className="countdown-numero">{timeLeft.minutes}</span>
              <span className="countdown-etiqueta">MIN</span>
            </div>
            <div className="countdown-separador">:</div>
            <div className="countdown-item">
              <span className="countdown-numero">{timeLeft.seconds}</span>
              <span className="countdown-etiqueta">SEG</span>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          FILTROS (IGUAL QUE EN ALMACÉN)
          ========================================================= */}
      <section className="filtros-playa">
        <div className="filtros-container">
          <button 
            className={`filtro-btn ${filtro === 'todos' ? 'active' : ''}`}
            onClick={() => setFiltro('todos')}
          >
            TODAS
          </button>
          <button 
            className={`filtro-btn ${filtro === 'destacados' ? 'active' : ''}`}
            onClick={() => setFiltro('destacados')}
          >
            <BsLightning /> DESTACADAS
          </button>
          <button 
            className={`filtro-btn ${filtro === 'almacen' ? 'active' : ''}`}
            onClick={() => setFiltro('almacen')}
          >
            <BsBoxSeam /> ALMACÉN
          </button>
          <button 
            className={`filtro-btn ${filtro === 'quiosco' ? 'active' : ''}`}
            onClick={() => setFiltro('quiosco')}
          >
            <GiIceCreamCone /> QUIOSCO
          </button>
          <button 
            className={`filtro-btn ${filtro === 'libreria' ? 'active' : ''}`}
            onClick={() => setFiltro('libreria')}
          >
            <BsBook /> LIBRERÍA
          </button>
          <button 
            className={`filtro-btn ${filtro === 'jugueteria' ? 'active' : ''}`}
            onClick={() => setFiltro('jugueteria')}
          >
            <GiBeachBall /> JUGUETERÍA
          </button>
        </div>
      </section>

      {/* =========================================================
          GRID DE OFERTAS (IGUAL QUE EN ALMACÉN)
          ========================================================= */}
      <section className="ofertas-grid-section">
        <div className="ofertas-grid">
          {filtrarOfertas().map((oferta, index) => (
            <div 
              key={oferta.id} 
              className={`oferta-card-playa ${oferta.destacado ? 'destacada' : ''} animate-slideUp`}
              style={{animationDelay: `${index * 0.05}s`}}
            >
              {oferta.destacado && (
                <div className="oferta-flash">
                  <BsLightning />
                </div>
              )}
              
              <div className="oferta-imagen">
                <img src={oferta.imagen} alt={oferta.titulo} loading="lazy" />
                <div className="oferta-tag">{oferta.tag}</div>
              </div>
              
              <div className="oferta-contenido">
                <div className="oferta-icono">{oferta.icono}</div>
                <h3>{oferta.titulo}</h3>
                <p>{oferta.descripcion}</p>
                
                <div className="oferta-ahorro">
                  <span className="ahorro-texto">AHORRÁS</span>
                  <span className="ahorro-valor">${oferta.ahorro.toLocaleString()}</span>
                </div>
                
                <div className="oferta-precios">
                  <span className="precio-regular">${oferta.precioRegular.toLocaleString()}</span>
                  <span className="precio-oferta">${oferta.precioOferta.toLocaleString()}</span>
                </div>
                
                <div className="oferta-acciones">
                  <button 
                    className="btn-comprar"
                    onClick={() => agregarAlCarrito({
                      id: oferta.id,
                      nombre: oferta.titulo,
                      precio: oferta.precioOferta,
                      imagen: oferta.imagen,
                      descripcion: oferta.descripcion
                    })}
                  >
                    <BsCart3 /> COMPRAR
                  </button>
                  <button className="btn-detalles">VER</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          OFERTA ESPECIAL DESTACADA (ARENA CON DORADO)
          ========================================================= */}
      <section className="oferta-especial-playa">
        <div className="especial-contenido">
          <span className="especial-tag animate-pulse">🔥 MEGA OFERTÓN 🔥</span>
          <h2 className="animate-slideUp">COMPRANDO 3 PRODUCTOS</h2>
          <p className="especial-texto animate-slideUp" style={{animationDelay: '0.1s'}}>
            LLEVATE <span className="especial-destacado animate-pulse">1 PRODUCTO EXTRA GRATIS</span>
          </p>
          <p className="especial-detalle">+ Envío gratis en compras +$5000</p>
          <div className="especial-actions">
            <Link to="/pedidos" className="btn-especial">
              APROVECHAR AHORA
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================
          CÓMO APROVECHAR (IGUAL QUE EN MAYORISTA)
          ========================================================= */}
      <section className="como-aprovechar">
        <h2>¿CÓMO <span className="destacado">APROVECHAR</span> LAS OFERTAS?</h2>
        
        <div className="pasos-grid">
          <div className="paso-card animate-slideUp" style={{animationDelay: '0s'}}>
            <div className="paso-numero">1</div>
            <h4>ELEGÍ TU OFERTA</h4>
            <p>Seleccioná la promo que más te guste</p>
          </div>
          
          <div className="paso-card animate-slideUp" style={{animationDelay: '0.1s'}}>
            <div className="paso-numero">2</div>
            <h4>HACÉ TU PEDIDO</h4>
            <p>Completá tus datos en 2 minutos</p>
          </div>
          
          <div className="paso-card animate-slideUp" style={{animationDelay: '0.2s'}}>
            <div className="paso-numero">3</div>
            <h4>RECIBÍ EN CASA</h4>
            <p>Te llevamos el pedido en el día</p>
          </div>
          
          <div className="paso-card animate-slideUp" style={{animationDelay: '0.3s'}}>
            <div className="paso-numero">4</div>
            <h4>¡DISFRUTÁ!</h4>
            <p>Ahorraste y tenés todo en casa</p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA WHATSAPP MAYORISTAS
          ========================================================= */}
      <section className="whatsapp-playa">
        <div className="whatsapp-contenido">
          <div className="whatsapp-estrellas">
            <BsStar />
            <BsStar />
            <BsStar />
          </div>
          <h3>¿SOS COMERCIANTE O DISTRIBUIDOR?</h3>
          <p>Tenemos precios especiales y entregas programadas</p>
          <a 
            href="https://wa.me/584141234567" 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-whatsapp-playa"
          >
            <BsWhatsapp /> CONTACTAR A VENTAS MAYORISTAS
          </a>
        </div>
      </section>
    </div>
  );
};

export default OfertasDonJuan;