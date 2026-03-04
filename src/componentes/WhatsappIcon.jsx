// =========================================================
// WhatsappIcon.jsx - ÍCONO FLOTANTE DE WHATSAPP
// NUEVA ESTÉTICA: PLAYA & SOL - VERSIÓN UNIFORME
// =========================================================
import React, { useState, useEffect } from 'react'; 
import { BsWhatsapp, BsSun } from 'react-icons/bs';
import { GiBeachBall } from 'react-icons/gi';
import '../assets/scss/_03-Componentes/_WhatsappIcon.scss';

// =========================================================
function WhatsappIcon() {
  const [mostrarMensaje, setMostrarMensaje] = useState(false);
  const [animacion, setAnimacion] = useState('');

  // =========================================================
  // EFECTO PARA MOSTRAR MENSAJE DE BIENVENIDA
  // =========================================================
  useEffect(() => {
    const timer = setTimeout(() => {
      setMostrarMensaje(true);
      setAnimacion('entrada');
      
      // Ocultar después de 5 segundos
      setTimeout(() => {
        setAnimacion('salida');
        setTimeout(() => setMostrarMensaje(false), 500);
      }, 5000);
    }, 3000);
    
    return () => clearTimeout(timer);
  }, []);

  // =========================================================
  // FUNCIÓN PARA MANEJAR CLICK
  // =========================================================
  const handleClick = () => {
    window.open(
      "https://api.whatsapp.com/send?phone=+542235455451&text=¡Hola!%20Estaba%20en%20la%20web%20y%20quería%20consultarles%20sobre...%20🏖️",
      "_blank"
    );
  };

  // =========================================================
  return (
    <div className="whatsapp-flotante-playa">
      
      {/* MENSAJE FLOTANTE */}
      {mostrarMensaje && (
        <div className={`mensaje-flotante ${animacion}`}>
          <GiBeachBall className="mensaje-icono" />
          <div className="mensaje-texto">
            <strong>¡Hola!</strong> ¿Necesitás ayuda?
          </div>
          <button 
            className="mensaje-cerrar"
            onClick={() => setAnimacion('salida')}
          >
            ×
          </button>
        </div>
      )}

      {/* BOTÓN PRINCIPAL */}
      <button 
        className="whatsapp-boton"
        onClick={handleClick}
        aria-label="Contactar por WhatsApp"
      >
        <BsWhatsapp className="whatsapp-icono" />
        <BsSun className="whatsapp-sol" />
        <span className="whatsapp-texto">¡HABLEMOS!</span>
      </button>
    </div>
  );
}

export default WhatsappIcon;