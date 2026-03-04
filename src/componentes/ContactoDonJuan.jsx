// =========================================================
// ContactoDonJuan.jsx - PÁGINA DE CONTACTO DE POLIRUBRO DON JUAN
// VERSIÓN MEJORADA - SIN BOTONES FLOTANTES
// =========================================================
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  BsWhatsapp, 
  BsTelephone, 
  BsEnvelope, 
  BsGeoAlt, 
  BsClock, 
  BsInstagram, 
  BsFacebook, 
  BsTruck, 
  BsLightning,
  BsSend,
  BsStar,
  BsStarFill,
  BsShop,
  BsBoxSeam,
  BsSun,
  BsUmbrella,
  BsWater,
  BsPinMap,
  BsShare
} from 'react-icons/bs';
import { 
  FaShare, 
  FaMapMarkerAlt, 
  FaStore, 
  FaPhone, 
  FaEnvelope,
  FaWhatsapp
} from 'react-icons/fa';
import { GiBeachBall, GiIceCreamCone, GiSurfBoard, GiCorn } from 'react-icons/gi';
import '../assets/scss/_03-Componentes/_ContactoDonJuan.scss';

// =========================================================
// IMPORTAMOS EL COMPONENTE UBICACION
// =========================================================
import UbicacionDonJuan from './UbicacionDonJuan';

// =========================================================
const ContactoDonJuan = () => {
  // =========================================================
  const location = useLocation();
  const formRef = useRef(null);
  
  // =========================================================
  // ESTADO DEL FORMULARIO
  // =========================================================
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipo: 'particular',
    mensaje: ''
  });

  const [formStatus, setFormStatus] = useState({
    enviando: false,
    enviado: false,
    error: null
  });

  // =========================================================
  // ESTADO PARA SUCURSAL SELECCIONADA
  // =========================================================
  const [sucursalSeleccionada, setSucursalSeleccionada] = useState(1);

  // =========================================================
  // DATOS DE SUCURSALES CON COORDENADAS PARA MAPA
  // =========================================================
  const sucursales = [
    {
      id: 1,
      nombre: "CASA CENTRAL",
      direccion: "Av. Principal 1234",
      ciudad: "Mar del Plata",
      telefono: "(0223) 155-123456",
      horario: "Lun a Vie 9-20hs / Sáb 9-14hs",
      whatsapp: "542235551234",
      destacado: true,
      email: "central@donjuan.com",
      coordenadas: { lat: -38.0, lng: -57.5 },
      icono: <FaStore />
    },
    {
      id: 2,
      nombre: "SUCURSAL NORTE",
      direccion: "Calle San Martín 567",
      ciudad: "Mar del Plata",
      telefono: "(0223) 155-123457",
      horario: "Lun a Vie 9-20hs / Sáb 9-14hs",
      whatsapp: "542235551235",
      destacado: false,
      email: "norte@donjuan.com",
      coordenadas: { lat: -37.9, lng: -57.5 },
      icono: <FaMapMarkerAlt />
    },
    {
      id: 3,
      nombre: "SUCURSAL CENTRO",
      direccion: "Av. Luro 890",
      ciudad: "Mar del Plata",
      telefono: "(0223) 155-123458",
      horario: "Lun a Vie 9-20hs / Sáb 9-14hs",
      whatsapp: "542235551236",
      destacado: false,
      email: "centro@donjuan.com",
      coordenadas: { lat: -38.1, lng: -57.5 },
      icono: <FaMapMarkerAlt />
    }
  ];

  // =========================================================
  // FUNCIÓN PARA COMPARTIR UBICACIÓN
  // =========================================================
  const shareLocation = (sucursal) => {
    const mapsUrl = `https://maps.google.com/?q=${sucursal.direccion},${sucursal.ciudad}`;
    
    if (navigator.share) {
      navigator.share({
        title: `Polirubro Don Juan - ${sucursal.nombre}`,
        text: `${sucursal.direccion}, ${sucursal.ciudad}`,
        url: mapsUrl
      });
    } else {
      window.open(mapsUrl, '_blank');
    }
  };

  // =========================================================
  // EFECTO PARA SCROLL AL FORMULARIO
  // =========================================================
  useEffect(() => {
    if (location.pathname === '/contacto' && location.state?.scrollToForm) {
      const timer = setTimeout(() => {
        if (formRef.current) {
          formRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start' 
          });
        }
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [location.pathname, location.state]);

  // =========================================================
  // MANEJADORES DEL FORMULARIO
  // =========================================================
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ enviando: true, enviado: false, error: null });

    setTimeout(() => {
      setFormStatus({ enviando: false, enviado: true, error: null });
      setFormData({
        nombre: '',
        email: '',
        telefono: '',
        tipo: 'particular',
        mensaje: ''
      });
      
      setTimeout(() => {
        setFormStatus(prev => ({ ...prev, enviado: false }));
      }, 5000);
    }, 1500);
  };

  // =========================================================
  // FUNCIONES PARA COMPARTIR
  // =========================================================
  const generateWhatsAppMessage = () => {
    return `🌊 *POLIRUBRO DON JUAN - PLAYA & SOL* 🏖️

Hola! Quiero contactarme con ustedes:

${sucursales.map(s => `📍 *${s.nombre}:* ${s.direccion}, ${s.ciudad}`).join('\n')}

📞 *Teléfono:* (0223) 155-123456
📱 *WhatsApp:* +54 223 555-1234

⏰ *Horarios:* Lun a Vie 9-20hs / Sáb 9-14hs

🌐 *Web:* https://polirubrodonjuan.com

¡Los esperamos en la playa! 🌞`;
  };

  const shareOnWhatsApp = () => {
    const message = generateWhatsAppMessage();
    const url = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const shareWithNativeAPI = async () => {
    const message = generateWhatsAppMessage();
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Polirubro Don Juan - Playa & Sol',
          text: message,
          url: 'https://polirubrodonjuan.com/contacto'
        });
      } catch (error) {
        console.log('Error al compartir:', error);
        navigator.clipboard.writeText(message);
        alert('¡Información copiada al portapapeles!');
      }
    } else {
      navigator.clipboard.writeText(message);
      alert('¡Información copiada al portapapeles!');
    }
  };

  // =========================================================
  return (
    <div className="contacto-playa">
      
      {/* =========================================================
          HERO SECTION - MÁS CLARO (SIN CELESTE)
          ========================================================= */}
      <section className="contacto-hero-claro">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          
          <div className="hero-badge animate-slideDown">
            <BsSun className="badge-icono sol" />
            <span>PLAYA & SOL · CONTACTO</span>
            <BsSun className="badge-icono sol" />
          </div>
          
          <h1 className="hero-titulo">
            <span className="linea1">¡CHARLEMOS,</span>{' '}
            <span className="linea2 animate-pulse">ESTAMOS CERCA!</span>
          </h1>
          <p className="hero-subtitulo">
            ¿Consultas? ¿Pedidos especiales? ¿Querés ser mayorista?
          </p>
        </div>
      </section>

      {/* =========================================================
          DECORACIÓN PLAYERA
          ========================================================= */}
      <div className="contacto-decoration">
        <span className="deco-line"></span>
        <GiBeachBall className="deco-icono animate-bounce" />
        <span className="deco-line"></span>
      </div>

      {/* =========================================================
          INFO CARDS
          ========================================================= */}
      <section className="info-cards">
        <div className="cards-grid">
          
          <div className="info-card animate-slideUp" style={{animationDelay: '0s'}}>
            <div className="card-icono whatsapp">
              <BsWhatsapp />
            </div>
            <h3>WHATSAPP</h3>
            <p>Respuesta inmediata</p>
            <a href="https://wa.me/542235551234" target="_blank" rel="noopener noreferrer" className="card-enlace">
              +54 223 555-1234
            </a>
          </div>

          <div className="info-card animate-slideUp" style={{animationDelay: '0.1s'}}>
            <div className="card-icono telefono">
              <BsTelephone />
            </div>
            <h3>TELÉFONO</h3>
            <p>Atención al cliente</p>
            <a href="tel:+54223155123456" className="card-enlace">
              (0223) 155-123456
            </a>
          </div>

          <div className="info-card animate-slideUp" style={{animationDelay: '0.2s'}}>
            <div className="card-icono email">
              <BsEnvelope />
            </div>
            <h3>EMAIL</h3>
            <p>Envíanos un mensaje</p>
            <a href="mailto:info@donjuan.com" className="card-enlace">
              info@donjuan.com
            </a>
          </div>

          <div className="info-card animate-slideUp" style={{animationDelay: '0.3s'}}>
            <div className="card-icono ubicacion">
              <BsGeoAlt />
            </div>
            <h3>UBICACIÓN</h3>
            <p>Mar del Plata - Argentina</p>
            <span className="card-texto">{sucursales.length} SUCURSALES</span>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECCIÓN PRINCIPAL: FORMULARIO + HORARIOS
          ========================================================= */}
      <section className="contacto-grid">
        
        {/* COLUMNA IZQUIERDA - FORMULARIO */}
        <div className="formulario-col" ref={formRef}>
          <div className="form-header">
            <GiSurfBoard className="form-icono animate-float" />
            <h2>ENVIANOS UN <span className="destacado">MENSAJE</span></h2>
          </div>
          <p className="form-subtitulo">Te responderemos en menos de 24 horas</p>

          <form onSubmit={handleSubmit} className="contacto-form">
            <div className="form-grid">
              <div className="form-group">
                <label>Nombre completo *</label>
                <input
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej: Juan Pérez"
                />
              </div>

              <div className="form-group">
                <label>Correo electrónico *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="ejemplo@correo.com"
                />
              </div>

              <div className="form-group">
                <label>Teléfono *</label>
                <input
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                  required
                  placeholder="223 555-1234"
                />
              </div>

              <div className="form-group">
                <label>Tipo de cliente</label>
                <select name="tipo" value={formData.tipo} onChange={handleChange}>
                  <option value="particular">Particular</option>
                  <option value="comercio">Comercio / Kiosco</option>
                  <option value="empresa">Empresa / Evento</option>
                  <option value="distribuidor">Distribuidor</option>
                </select>
              </div>
            </div>

            <div className="form-group full-width">
              <label>Mensaje *</label>
              <textarea
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                required
                rows="4"
                placeholder="¿En qué podemos ayudarte?"
              ></textarea>
            </div>

            <div className="form-checkbox">
              <input type="checkbox" id="terminos" required />
              <label htmlFor="terminos">
                Acepto los términos y condiciones
              </label>
            </div>

            <button 
              type="submit" 
              className="btn-enviar"
              disabled={formStatus.enviando}
            >
              {formStatus.enviando ? (
                'ENVIANDO...'
              ) : formStatus.enviado ? (
                <>✓ MENSAJE ENVIADO</>
              ) : (
                <>ENVIAR MENSAJE <BsSend className="btn-icono" /></>
              )}
            </button>

            {formStatus.error && (
              <p className="error-mensaje">{formStatus.error}</p>
            )}
          </form>
        </div>

        {/* COLUMNA DERECHA - HORARIOS Y REDES */}
        <div className="info-col">
          
          <div className="horarios-card animate-slideUp" style={{animationDelay: '0.1s'}}>
            <div className="horarios-icono">
              <BsClock />
            </div>
            <h3>HORARIOS</h3>
            
            <div className="horarios-lista">
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

            <div className="redes-sociales">
              <h4>SÍGUENOS</h4>
              <div className="redes-iconos">
                <a href="#" className="red-social">
                  <BsInstagram />
                </a>
                <a href="#" className="red-social">
                  <BsFacebook />
                </a>
                <a href="#" className="red-social">
                  <BsWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECCIÓN DE SUCURSALES CON MAPA INTERACTIVO
          ========================================================= */}
      <section className="sucursales-contacto">
        <div className="sucursales-header">
          <GiCorn className="header-icono" />
          <h2>NUESTRAS <span className="destacado">SUCURSALES</span></h2>
          <GiCorn className="header-icono" />
        </div>
        
        {/* SELECTOR DE SUCURSALES */}
        <div className="sucursales-selector">
          {sucursales.map((sucursal) => (
            <button
              key={sucursal.id}
              className={`selector-btn ${sucursalSeleccionada === sucursal.id ? 'active' : ''}`}
              onClick={() => setSucursalSeleccionada(sucursal.id)}
            >
              {sucursal.icono}
              <span>{sucursal.nombre}</span>
            </button>
          ))}
        </div>
        
        <div className="sucursales-grid">
          {sucursales.map((sucursal, index) => (
            <div 
              key={sucursal.id} 
              className={`sucursal-card-contacto ${sucursal.destacado ? 'destacada' : ''} animate-slideUp`}
              style={{animationDelay: `${index * 0.1}s`}}
            >
              {sucursal.destacado && (
                <div className="card-badge">
                  <BsLightning /> PRINCIPAL
                </div>
              )}
              
              <div className="card-header">
                {sucursal.icono}
                <h3>{sucursal.nombre}</h3>
              </div>
              
              <div className="card-body">
                <div className="info-item">
                  <FaMapMarkerAlt className="info-icono" />
                  <span>{sucursal.direccion}, {sucursal.ciudad}</span>
                </div>
                
                <div className="info-item">
                  <BsClock className="info-icono" />
                  <span>{sucursal.horario}</span>
                </div>
                
                <div className="info-item">
                  <FaPhone className="info-icono" />
                  <a href={`tel:${sucursal.telefono}`}>{sucursal.telefono}</a>
                </div>

                <div className="info-item">
                  <FaEnvelope className="info-icono" />
                  <a href={`mailto:${sucursal.email}`}>{sucursal.email}</a>
                </div>
              </div>
              
              <div className="card-actions">
                <a 
                  href={`https://wa.me/${sucursal.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn-whatsapp-sucursal"
                >
                  <FaWhatsapp /> CONTACTAR
                </a>
                <button 
                  className="btn-mapa-sucursal"
                  onClick={() => shareLocation(sucursal)}
                >
                  <FaMapMarkerAlt /> CÓMO LLEGAR
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          BOTONES DE COMPARTIR (AHORA FIJOS EN LA PÁGINA)
          ========================================================= */}
      <section className="compartir-fijo">
        <h3>COMPARTÍ <span className="destacado">DON JUAN</span></h3>
        <div className="compartir-botones">
          <button 
            className="btn-compartir whatsapp"
            onClick={shareOnWhatsApp}
          >
            <BsWhatsapp /> Compartir por WhatsApp
          </button>
          
          <button 
            className="btn-compartir share"
            onClick={shareWithNativeAPI}
          >
            <BsShare /> Compartir
          </button>
        </div>
      </section>

      {/* =========================================================
          COMPONENTE DE UBICACIÓN IMPORTADO
          ========================================================= */}
      <UbicacionDonJuan />

      {/* =========================================================
          CTA MAYORISTAS
          ========================================================= */}
      <section className="mayoristas-cta">
        <BsTruck className="cta-icono animate-float" />
        <h3>¿SOS COMERCIANTE O DISTRIBUIDOR?</h3>
        <p>Precios especiales y entregas programadas para tu negocio</p>
        <a href="https://wa.me/542235551234" className="btn-mayoristas">
          <BsWhatsapp /> CONTACTAR A VENTAS
        </a>
        
        <div className="cta-estrellas">
          <BsSun className="estrella" />
          <BsSun className="estrella" />
          <BsSun className="estrella" />
        </div>
      </section>
    </div>
  );
};

export default ContactoDonJuan;