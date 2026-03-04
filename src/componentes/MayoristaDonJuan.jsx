// =========================================================
// MayoristaDonJuan.jsx - VENTAS MAYORISTAS DE POLIRUBRO DON JUAN
// NUEVA ESTÉTICA: PLAYA & SOL - VERSIÓN CLARA
// =========================================================
import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaGift, 
  FaHeart, 
  FaBirthdayCake,
  FaStar,
  FaCheck,
  FaWhatsapp,
  FaShoppingCart,
  FaTruck,
  FaCalendarAlt,
  FaBoxOpen,
  FaStore,
  FaSun,
  FaUmbrella
} from 'react-icons/fa';
import { GiBeachBall, GiIceCreamCone, GiSurfBoard, GiKite } from 'react-icons/gi';
import { BsLightning, BsBoxSeam, BsShop, BsWater } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import "../assets/scss/_03-Componentes/_MayoristaDonJuan.scss";

// =========================================================
function MayoristaDonJuan() {
  // =========================================================
  const [paqueteSeleccionado, setPaqueteSeleccionado] = useState(null);

  // =========================================================
  // IMÁGENES DE GALERÍA 3
  // =========================================================
  const imagenesPaquetes = [
    '/img/06-img-galeria3/id1-c1.png',
    '/img/06-img-galeria3/id2-c2.png',
    '/img/06-img-galeria3/id3-c3.png',
    '/img/06-img-galeria3/id4-c4.png',
    '/img/06-img-galeria3/id5-c5.png',
    '/img/06-img-galeria3/id6-c6.png',
    '/img/06-img-galeria3/id7-c7.png',
    '/img/06-img-galeria3/id8-c8.png',
    '/img/06-img-galeria3/id9-c9.png',
    '/img/06-img-galeria3/id10-c10.png'
  ];

  // =========================================================
  // PAQUETES MAYORISTAS - VERSIÓN PLAYERA
  // =========================================================
  const paquetes = [
    {
      id: 1,
      nombre: "PAQUETE ALMACÉN",
      descripcion: "Surtido de productos de almacén para tu negocio",
      precio: 15000,
      imagen: imagenesPaquetes[0],
      icono: <BsBoxSeam />,
      color: "coral",
      incluye: ["Arroz 10kg", "Aceite 5L", "Azúcar 5kg", "Harina 5kg", "Fideos 10kg"]
    },
    {
      id: 2,
      nombre: "PAQUETE QUIOSCO",
      descripcion: "Golosinas y snacks para abastecer tu kiosco",
      precio: 12000,
      imagen: imagenesPaquetes[1],
      icono: <GiIceCreamCone />,
      color: "dorado",
      incluye: ["Caramelos 2kg", "Chicles 1kg", "Alfajores 24u", "Chupetines 50u", "Papas fritas 20u"]
    },
    {
      id: 3,
      nombre: "PAQUETE LIBRERÍA",
      descripcion: "Útiles escolares para librerías y papelerías",
      precio: 18000,
      imagen: imagenesPaquetes[2],
      icono: <FaStar />,
      color: "coral",
      incluye: ["Cuadernos 20u", "Lapiceras 50u", "Lápices 50u", "Carpetas 10u", "Resmas 5u"]
    },
    {
      id: 4,
      nombre: "PAQUETE JUGUETERÍA",
      descripcion: "Juguetes variados para revender",
      precio: 25000,
      imagen: imagenesPaquetes[3],
      icono: <GiBeachBall />,
      color: "dorado",
      incluye: ["Autitos 12u", "Muñecas 6u", "Pelotas 10u", "Juegos de mesa 4u", "Globos 100u"]
    },
    {
      id: 5,
      nombre: "COMBO NEGOCIO",
      descripcion: "Mix de productos para comercios pequeños",
      precio: 22000,
      imagen: imagenesPaquetes[4],
      icono: <BsShop />,
      color: "coral",
      incluye: ["Almacén + Quiosco", "Productos surtidos", "Precio especial", "Entrega prioritaria"]
    },
    {
      id: 6,
      nombre: "PAQUETE FIESTAS",
      descripcion: "Ideal para salones de eventos y fiestas",
      precio: 28000,
      imagen: imagenesPaquetes[5],
      icono: <FaBirthdayCake />,
      color: "dorado",
      incluye: ["Golosinas por mayor", "Cotillón básico", "Snacks 30 paq", "Bebidas 12u"]
    },
    {
      id: 7,
      nombre: "COMBO EMPRENDEDOR",
      descripcion: "Para quienes están empezando su negocio",
      precio: 9500,
      imagen: imagenesPaquetes[6],
      icono: <FaHeart />,
      color: "coral",
      incluye: ["Selección básica", "Productos esenciales", "Precio de lanzamiento", "Asesoramiento"]
    }
  ];

  // =========================================================
  // FRASES PLAYERAS
  // =========================================================
  const frases = [
    "¡Venta por mayor para tu negocio en la playa!",
    "Abastecé tu comercio al mejor precio del verano",
    "Precios especiales para revendedores playeros",
    "Todo lo que necesitás para tu kiosco en la costa"
  ];

  const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

  // =========================================================
  return (
    <motion.div 
      className="mayorista-playa"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      
      {/* =========================================================
          HERO SECTION PLAYERO
          ========================================================= */}
      <section className="mayorista-hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          
          <div className="hero-badge-top">
            <GiSurfBoard className="badge-icono" />
            <span>MAYORISTA</span>
            <GiKite className="badge-icono" />
          </div>
          
          <h1 className="hero-titulo">
            <span className="linea1">VENTAS</span>{' '}
            <span className="linea2 animate-pulse">MAYORISTAS</span>
          </h1>
          <p className="hero-subtitulo">
            {fraseAleatoria}
          </p>
          <div className="hero-badge">
            <FaSun className="sol-icono" />
            <span>PRECIOS ESPECIALES</span>
            <FaSun className="sol-icono" />
          </div>
        </div>
      </section>

      {/* =========================================================
          FRASE DE IMPACTO
          ========================================================= */}
      <section className="frase-impacto">
        <div className="frase-container">
          <GiSurfBoard className="frase-icono" />
          <p className="frase-texto">
            "El mejor precio para tu negocio en la costa"
          </p>
          <GiSurfBoard className="frase-icono" />
        </div>
      </section>

      {/* =========================================================
          PAQUETES MAYORISTAS - GRID DE CARDS
          ========================================================= */}
      <section className="paquetes-grid-section">
        <h2>ELEGÍ TU <span className="destacado">PAQUETE MAYORISTA</span></h2>
        
        <div className="paquetes-grid">
          {paquetes.map((paquete) => (
            <motion.div 
              key={paquete.id}
              className={`paquete-card ${paquete.color}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: paquete.id * 0.1 }}
              whileHover={{ y: -8 }}
              onClick={() => setPaqueteSeleccionado(paqueteSeleccionado === paquete.id ? null : paquete.id)}
            >
              <div className="card-imagen">
                <img src={paquete.imagen} alt={paquete.nombre} loading="lazy" />
                <div className="card-icono">
                  {paquete.icono}
                </div>
              </div>
              
              <div className="card-contenido">
                <h3>{paquete.nombre}</h3>
                <p className="card-descripcion">{paquete.descripcion}</p>
                
                <div className="card-precio">
                  <span className="precio">${paquete.precio.toLocaleString()}</span>
                </div>
                
                {paqueteSeleccionado === paquete.id && (
                  <motion.div 
                    className="card-incluye"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                  >
                    <h4>INCLUYE:</h4>
                    <ul>
                      {paquete.incluye.map((item, index) => (
                        <li key={index}>
                          <FaCheck className="check-icono" /> {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
                
                <div className="card-acciones">
                  <button className="btn-consultar">
                    <FaWhatsapp /> CONSULTAR
                  </button>
                  <button className="btn-ver">
                    {paqueteSeleccionado === paquete.id ? 'VER MENOS' : 'VER DETALLE'}
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PROMO ESPECIAL MAYORISTA
          ========================================================= */}
      <section className="promo-especial">
        <div className="promo-contenido">
          <span className="promo-tag animate-float">🚚 PROMO MAYORISTA</span>
          <h2 className="animate-slideUp">ENVÍO GRATIS</h2>
          <p className="promo-texto animate-slideUp" style={{animationDelay: '0.1s'}}>
            EN COMPRAS <span className="promo-destacado animate-pulse">+$20.000</span>
          </p>
          <p className="promo-detalle">Válido para toda la costa</p>
          <Link to="/contacto" className="btn-promo">
            CONSULTAR AHORA
          </Link>
        </div>
      </section>

      {/* =========================================================
          CÓMO COMPRAR AL POR MAYOR
          ========================================================= */}
      <section className="como-comprar">
        <h2>¿CÓMO <span className="destacado">COMPRAR AL POR MAYOR?</span></h2>
        
        <div className="pasos-grid">
          <div className="paso-card animate-slideUp" style={{animationDelay: '0s'}}>
            <div className="paso-numero">1</div>
            <GiBeachBall className="paso-icono" />
            <h4>ELEGÍ EL PAQUETE</h4>
            <p>Seleccioná el combo que necesites</p>
          </div>
          
          <div className="paso-card animate-slideUp" style={{animationDelay: '0.1s'}}>
            <div className="paso-numero">2</div>
            <FaWhatsapp className="paso-icono" />
            <h4>CONSULTÁ</h4>
            <p>Te asesoramos sobre disponibilidad</p>
          </div>
          
          <div className="paso-card animate-slideUp" style={{animationDelay: '0.2s'}}>
            <div className="paso-numero">3</div>
            <FaCheck className="paso-icono" />
            <h4>CONFIRMÁ</h4>
            <p>Recibí el presupuesto y aceptalo</p>
          </div>
          
          <div className="paso-card animate-slideUp" style={{animationDelay: '0.3s'}}>
            <div className="paso-numero">4</div>
            <FaTruck className="paso-icono" />
            <h4>RECIBÍ</h4>
            <p>Te llevamos el pedido a tu negocio</p>
          </div>
        </div>
      </section>

      {/* =========================================================
          CTA WHATSAPP MAYORISTA
          ========================================================= */}
      <section className="whatsapp-contacto">
        <div className="contacto-contenido">
          <BsWater className="contacto-icono" />
          <h3>¿QUERÉS UN <span className="destacado">PAQUETE PERSONALIZADO?</span></h3>
          <p>Contactanos y armamos el combo ideal para tu negocio</p>
          <a 
            href="https://wa.me/542235551234?text=Hola!%20Quiero%20información%20sobre%20compras%20mayoristas"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            <FaWhatsapp /> HABLAR CON ASESOR
          </a>
        </div>
      </section>
    </motion.div>
  );
}

export default MayoristaDonJuan;