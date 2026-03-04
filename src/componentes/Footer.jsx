// =========================================================
// Footer.jsx - PIE DE PÁGINA DE POLIRUBRO DON JUAN
// VERSIÓN CLARA CON SLIDER DE BANNERS
// =========================================================
import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_Footer.scss";
import { 
  BsInstagram, 
  BsWhatsapp, 
  BsTelephone, 
  BsEnvelope, 
  BsGeoAlt,
  BsTruck,
  BsFacebook,
  BsSun
} from "react-icons/bs";

// =========================================================
function Footer() {
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const añoActual = new Date().getFullYear();

  // =========================================================
  // CONFIGURACIÓN DEL SLIDER DE BANNERS
  // =========================================================
  const bannerSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  // Array de banners (del 1 al 18)
  const banners = Array.from({ length: 18 }, (_, i) => i + 1);

  // =========================================================
  return (
    <footer className="footer-claro">
      
      {/* =========================================================
          SLIDER DE BANNERS - MODERNO Y DINÁMICO
          ========================================================= */}
      <div className="banner-slider-container">
        <Slider {...bannerSettings}>
          {banners.map((num) => (
            <div key={num} className="banner-item">
              <img 
                src={`/img/03-img-banners/banner${num}.png`} 
                alt={`Banner ${num}`}
                className="banner-imagen"
                loading="lazy"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* =========================================================
          CONTENIDO PRINCIPAL - 3 COLUMNAS (MÁS CLARO)
          ========================================================= */}
      <div className="footer-grid">
        
        {/* COLUMNA 1 - LOGO Y DESCRIPCIÓN */}
        <div className="footer-col">
          <div className="footer-logo">
            <div className="logo-sol">
              <BsSun className="sol-icono" />
            </div>
            <div className="logo-texto">
              <span className="logo-don">DON</span>
              <span className="logo-juan">JUAN</span>
            </div>
          </div>
          <p className="footer-desc">
            Tu almacén de confianza desde 1985. Productos de calidad para toda la familia.
            Almacén, quiosco, librería y juguetería en un solo lugar.
          </p>
        </div>

        {/* COLUMNA 2 - ENLACES RÁPIDOS */}
        <div className="footer-col">
          <h3>ENLACES</h3>
          <ul className="footer-links">
          
            <li><Link to="/tienda" onClick={scrollToTop}>Tienda</Link></li>
            <li><Link to="/ofertas" onClick={scrollToTop}>Ofertas</Link></li>
            <li><Link to="/nosotros" onClick={scrollToTop}>Nosotros</Link></li>
            <li><Link to="/contacto" onClick={scrollToTop}>Contacto</Link></li>
            <li><Link to="/mayorista" onClick={scrollToTop}>Mayorista</Link></li>
          </ul>
        </div>

        {/* COLUMNA 3 - CONTACTO */}
        <div className="footer-col">
          <h3>CONTACTO</h3>
          
          <div className="contact-item">
            <BsWhatsapp className="contact-icono" />
            <a href="https://wa.me/542235551234" target="_blank" rel="noopener noreferrer">
              +54 223 555-1234
            </a>
          </div>

          <div className="contact-item">
            <BsTelephone className="contact-icono" />
            <a href="tel:+54223155123456">(0223) 155-123456</a>
          </div>

          <div className="contact-item">
            <BsEnvelope className="contact-icono" />
            <a href="mailto:info@donjuan.com">info@donjuan.com</a>
          </div>

          <div className="contact-item">
            <BsGeoAlt className="contact-icono" />
            <span>Av. Principal 1234, Mar del Plata</span>
          </div>
        </div>
      </div>

      {/* =========================================================
          BANNER DE ENVÍOS - SUTIL
          ========================================================= */}
      <div className="envio-banner">
        <BsTruck className="envio-icono" />
        <span>ENVÍOS GRATIS +$5000 · ENTREGAS EN EL DÍA</span>
        <BsTruck className="envio-icono" />
      </div>

      {/* =========================================================
          BOTTOM - REDES Y COPYRIGHT
          ========================================================= */}
      <div className="footer-bottom">
        
        <div className="redes-sociales">
          <a 
            href="https://instagram.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="red-social"
            aria-label="Instagram"
          >
            <BsInstagram />
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="red-social"
            aria-label="Facebook"
          >
            <BsFacebook />
          </a>
          <a 
            href="https://wa.me/542235551234" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="red-social"
            aria-label="WhatsApp"
          >
            <BsWhatsapp />
          </a>
        </div>

        <div className="copyright">
          <span>© {añoActual} Polirubro Don Juan</span>
          <span className="separador">|</span>
          <span>TODOS LOS DERECHOS RESERVADOS</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;