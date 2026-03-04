// =========================================================
// UbicacionDonJuan.jsx - UBICACIÓN DE POLIRUBRO DON JUAN
// NUEVA ESTÉTICA: PLAYA & SOL - VERSIÓN UNIFORME
// =========================================================
import React from "react";
import "../assets/scss/_03-Componentes/_UbicacionDonJuan.scss";
import { FaWhatsapp, FaShare, FaMapMarkerAlt, FaTruck, FaStore, FaClock } from "react-icons/fa";
import { GiBeachBall, GiIceCreamCone, GiSurfBoard } from "react-icons/gi";
import { BsLightning, BsShop, BsSun, BsUmbrella, BsWater } from "react-icons/bs";

// =========================================================
function UbicacionDonJuan() {

  // =========================================================
  // FUNCIÓN PARA COMPARTIR UBICACIÓN
  // =========================================================
  const shareLocation = () => {
    const mapsUrl = 'https://maps.app.goo.gl/ejemplo';
    
    if (navigator.share) {
      navigator.share({
        title: 'Polirubro Don Juan - Sucursal',
        text: 'Av. Principal 1234, Mar del Plata',
        url: mapsUrl
      });
    } else {
      window.open(mapsUrl, '_blank');
    }
  };

  // =========================================================
  return (
    <div className="ubicacion-playa">
      
      {/* =========================================================
          HEADER DE CATEGORÍA (IGUAL QUE EN ALMACÉN)
          ========================================================= */}
      <section className="categoria-header">
        <div className="header-badge">
          <GiSurfBoard className="badge-icono" />
          <span>PLAYA & SOL · UBICACIÓN</span>
          <GiSurfBoard className="badge-icono" />
        </div>
        <h1 className="animate-slideUp">
          VISITANOS <span className="destacado">EN NUESTRO LOCAL</span>
        </h1>
        <p className="animate-slideUp" style={{animationDelay: '0.1s'}}>
          Vení a conocer nuestra sucursal y encontrá todo lo que necesitás
        </p>
      </section>

      {/* =========================================================
          DECORACIÓN PLAYERA
          ========================================================= */}
      <div className="ubicacion-decoration">
        <span className="deco-line"></span>
        <GiBeachBall className="deco-icono animate-bounce" />
        <span className="deco-line"></span>
      </div>

      {/* =========================================================
          TARJETA DE UBICACIÓN PRINCIPAL
          ========================================================= */}
      <section className="ubicacion-card-playa">
        
        <div className="direccion-principal">
          <FaMapMarkerAlt className="location-icono" />
          <h2>NUESTRA <span className="destacado">SUCURSAL</span></h2>
          <p className="direccion">Av. Principal 1234</p>
          <p className="ciudad">Mar del Plata</p>
        </div>

        {/* =========================================================
            BOTONES DE ACCIÓN
            ========================================================= */}
        <div className="acciones-container">
          <button 
            className="btn-accion whatsapp"
            onClick={() => window.open('https://wa.me/542235551234', '_blank')}
          >
            <FaWhatsapp /> CONTACTO
          </button>
          
          <button 
            className="btn-accion maps"
            onClick={shareLocation}
          >
            <FaMapMarkerAlt /> CÓMO LLEGAR
          </button>
          
          <button 
            className="btn-accion compartir"
            onClick={shareLocation}
          >
            <FaShare /> COMPARTIR
          </button>
        </div>
      </section>

      {/* =========================================================
          MAPA
          ========================================================= */}
      <section className="mapa-section-playa">
        <div className="mapa-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3144.0!2d-57.5!3d-38.0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDAwJzAwLjAiUyA1N8KwMzAnMDAuMCJX!5e0!3m2!1ses!2sar!4v1234567890"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Ubicación Don Juan"
          ></iframe>
        </div>
      </section>

      {/* =========================================================
          HORARIOS DE ATENCIÓN
          ========================================================= */}
      <section className="horarios-section-playa">
        <h3>HORARIOS DE <span className="destacado">ATENCIÓN</span></h3>
        
        <div className="horarios-grid-playa">
          <div className="horario-item">
            <span className="dia">Lunes a Viernes:</span>
            <span className="hora">9:00 - 20:00</span>
          </div>
          <div className="horario-item">
            <span className="dia">Sábados:</span>
            <span className="hora">9:00 - 14:00</span>
          </div>
          <div className="horario-item">
            <span className="dia">Domingos:</span>
            <span className="hora">Cerrado</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          INFORMACIÓN DE DELIVERY
          ========================================================= */}
      <section className="delivery-info-playa">
        <FaTruck className="delivery-icono" />
        <h3>¿PREFERÍS PEDIR A DOMICILIO?</h3>
        <p>Hacé tu pedido online y te lo llevamos</p>
        <a href="/tienda" className="btn-delivery">
          <BsLightning /> PEDIR AHORA
        </a>
      </section>

      {/* =========================================================
          BANNER DE PROMO - ARENA CON DORADO
          ========================================================= */}
      <section className="promo-banner-playa">
        <BsSun className="banner-icono" />
        <p>PRESENTANDO ESTE MAPA TENÉS <span className="promo-destacado">10% DE DESCUENTO</span> EN TU PRIMERA COMPRA</p>
        <BsSun className="banner-icono" />
      </section>
    </div>
  );
}

export default UbicacionDonJuan;