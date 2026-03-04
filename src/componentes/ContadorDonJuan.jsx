// =========================================================
// ContadorDonJuan.jsx - CONTADOR DE OFERTAS
// CON IMÁGENES DE LA GALERÍA 3 Y ANIMACIONES MODERNAS
// =========================================================
import React, { useState, useEffect } from 'react';
import { BsSun, BsLightning, BsFire, BsStarFill } from 'react-icons/bs';
import { GiWaveSurfer, GiBeachBall, GiIceCreamCone, GiSurfBoard } from 'react-icons/gi';
import '../assets/scss/_03-Componentes/_ContadorDonJuan.scss';

// =========================================================
const ContadorDonJuan = () => {
  // =========================================================
  // Estado para cambiar la imagen de fondo
  // =========================================================
  const [fondoIndex, setFondoIndex] = useState(0);
  
  // =========================================================
  // Imágenes de fondo de la galería 3 (rotativas)
  // =========================================================
  const imagenesFondo = [
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
  // Efecto para cambiar la imagen cada 6 segundos
  // =========================================================
  useEffect(() => {
    const interval = setInterval(() => {
      setFondoIndex((prev) => (prev + 1) % imagenesFondo.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // =========================================================
  // Fecha objetivo: 31 de diciembre del año actual
  // =========================================================
  const calculateTimeLeft = () => {
    const now = new Date();
    const currentYear = now.getFullYear();
    const targetDate = new Date(`December 31, ${currentYear} 23:59:59`);
    
    const difference = targetDate - now;
    
    let timeLeft = {};
    
    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60)
      };
    }
    
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  // =========================================================
  // Formatear números con 2 dígitos
  // =========================================================
  const formatNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  };

  // =========================================================
  const timerComponents = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval]) {
      return;
    }
    timerComponents.push(
      <div className="contador-item" key={interval}>
        <span className="contador-numero">{formatNumber(timeLeft[interval])}</span>
        <span className="contador-label">
          {interval === 'dias' && 'DÍAS'}
          {interval === 'horas' && 'HORAS'}
          {interval === 'minutos' && 'MIN'}
          {interval === 'segundos' && 'SEG'}
        </span>
      </div>
    );
  });

  // =========================================================
  return (
    <div className="contador-moderno">
      
      {/* Imagen de fondo rotativa (galería 3) */}
      <div className="contador-fondo">
        {imagenesFondo.map((img, index) => (
          <div
            key={index}
            className={`fondo-slide ${index === fondoIndex ? 'active' : ''}`}
            style={{backgroundImage: `url(${img})`}}
          ></div>
        ))}
        <div className="fondo-overlay"></div>
      </div>
      
      {/* Partículas flotantes */}
      <div className="particulas">
        <BsSun className="particula sol" />
        <GiSurfBoard className="particula surf" />
        <GiBeachBall className="particula pelota" />
        <GiIceCreamCone className="particula helado" />
        <BsStarFill className="particula estrella" />
        <BsFire className="particula fuego" />
      </div>
      
      <div className="contador-contenido">
        
        {/* Badge flotante */}
        <div className="contador-badge animate-float">
          <BsLightning className="badge-icono" />
          <span>OFERTAS EXPRESS</span>
          <BsFire className="badge-icono" />
        </div>
        
        {/* Título con efecto */}
        <h3 className="contador-titulo">
          <span className="linea1">🔥 TIEMPO</span>
          <span className="linea2 animate-pulse">LIMITADO</span>
        </h3>
        
        {/* Contador */}
        <div className="contador-grid">
          {timerComponents.length ? timerComponents : 
            <div className="contador-expirado">
              <span className="expirado-texto">¡PROMOCIONES FINALIZADAS!</span>
              <button className="expirado-btn">VER NUEVAS OFERTAS</button>
            </div>
          }
        </div>
        
        {/* Texto promocional */}
        <div className="contador-promo">
          <span className="promo-texto">APROVECHÁ ANTES DE QUE SE ACABEN</span>
          <div className="promo-stock">
            <div className="stock-barras">
              <span className="stock-barra"></span>
              <span className="stock-barra"></span>
              <span className="stock-barra"></span>
            </div>
            <span className="stock-texto">¡Últimas unidades!</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContadorDonJuan;