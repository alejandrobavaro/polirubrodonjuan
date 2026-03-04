// =========================================================
// MainSliderFotos.jsx - SLIDER DE PROMOCIONES DON JUAN
// NUEVA ESTÉTICA: PLAYA & SOL - VERSIÓN CLARA
// =========================================================
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../assets/scss/_03-Componentes/_MainSliderFotos.scss";
import { 
  BsLightning, 
  BsFire, 
  BsStar, 
  BsStarFill, 
  BsBoxSeam, 
  BsCupStraw, 
  BsBook, 
  BsDice6,
  BsSun,
  BsUmbrella,
  BsWater
} from "react-icons/bs";
import { GiBeachBall, GiIceCreamCone, GiSurfBoard, GiKite } from "react-icons/gi";

const MainSliderFotos = () => {
  // Configuración mejorada del slider
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
    dotsClass: "slick-dots playa-dots"
  };

  // =========================================================
  // IMÁGENES DEL SLIDER (GALERÍA 3)
  // =========================================================
  const imagenesSlider = [
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

  // Banners promocionales de Polirubro Don Juan - Versión playera
  const banners = [
    {
      id: 1,
      imagen: imagenesSlider[0],
      titulo: "ALMACÉN DON JUAN",
      promo: "10% OFF TRANSFERENCIA",
      descripcion: "En todas las compras para la playa",
      color: "coral",
      icono: <BsBoxSeam />
    },
    {
      id: 2,
      imagen: imagenesSlider[1],
      titulo: "HELADOS Y GOLOSINAS",
      promo: "2x1 EN HELADOS",
      descripcion: "Llevá 2 helados al precio de 1",
      color: "dorado",
      icono: <GiIceCreamCone />
    },
    {
      id: 3,
      imagen: imagenesSlider[2],
      titulo: "VUELTA AL COLE",
      promo: "KIT ESCOLAR $4500",
      descripcion: "Cuadernos, lapiceras y más",
      color: "coral",
      icono: <BsBook />
    },
    {
      id: 4,
      imagen: imagenesSlider[3],
      titulo: "JUGUETES DE PLAYA",
      promo: "20% OFF EN JUGUETES",
      descripcion: "Pelotas, baldes y palitas",
      color: "dorado",
      icono: <GiBeachBall />
    },
    {
      id: 5,
      imagen: imagenesSlider[4],
      titulo: "ENVÍOS GRATIS",
      promo: "+$5000",
      descripcion: "A toda la costa sin cargo",
      color: "coral",
      icono: <BsLightning />
    },
    {
      id: 6,
      imagen: imagenesSlider[5],
      titulo: "COMBOS PLAYEROS",
      promo: "AHORRÁ HASTA $2000",
      descripcion: "Todo para tu día en la playa",
      color: "dorado",
      icono: <GiSurfBoard />
    },
    {
      id: 7,
      imagen: imagenesSlider[6],
      titulo: "OFERTAS DEL VERANO",
      promo: "Hasta 30% OFF",
      descripcion: "En productos seleccionados",
      color: "coral",
      icono: <BsSun />
    },
    {
      id: 8,
      imagen: imagenesSlider[7],
      titulo: "QUIOSCO DON JUAN",
      promo: "GOLOSINAS VARIADAS",
      descripcion: "Todo para la merienda",
      color: "dorado",
      icono: <BsCupStraw />
    },
    {
      id: 9,
      imagen: imagenesSlider[8],
      titulo: "LIBROS Y REVISTAS",
      promo: "LECTURA PARA LA PLAYA",
      descripcion: "Para leer bajo la sombrilla",
      color: "coral",
      icono: <BsBook />
    },
    {
      id: 10,
      imagen: imagenesSlider[9],
      titulo: "DEPORTES ACUÁTICOS",
      promo: "EQUIPATE PARA EL MAR",
      descripcion: "Todo para divertirte en el agua",
      color: "dorado",
      icono: <BsWater />
    }
  ];

  return (
    <div className="playa-slider-container">
      
      {/* =========================================================
          DECORACIÓN SUPERIOR PLAYERA
          ========================================================= */}
      <div className="slider-decoration">
        <span className="deco-line"></span>
        <div className="deco-logo">
          <BsSun className="deco-sol" />
          <span className="deco-logo-text">PLAYA & SOL</span>
          <GiKite className="deco-kite" />
        </div>
        <span className="deco-line"></span>
      </div>

      {/* =========================================================
          SLIDER PRINCIPAL
          ========================================================= */}
      <div className="playa-slider-content">
        <Slider {...sliderSettings}>
          {banners.map((banner) => (
            <div key={banner.id} className="playa-slide">
              <div className={`slide-overlay ${banner.color}`}></div>
              <img
                src={banner.imagen}
                alt={banner.titulo}
                className="slide-image"
                loading="lazy"
              />
              
              {/* =========================================================
                  CONTENIDO SOBRE LA IMAGEN
                  ========================================================= */}
              <div className="slide-content">
                <div className="slide-badge">
                  <span className="badge-icon">{banner.icono}</span>
                  <span className="badge-text">PROMO PLAYERA</span>
                </div>
                
                <h3 className="slide-title">{banner.titulo}</h3>
                <p className="slide-promo">{banner.promo}</p>
                <p className="slide-descripcion">{banner.descripcion}</p>
                
                <div className="slide-rating">
                  <BsSun className="solcito" />
                  <BsSun className="solcito" />
                  <BsSun className="solcito" />
                  <BsSun className="solcito" />
                  <BsSun className="solcito" />
                </div>
                
                <button className="slide-btn">
                  <GiBeachBall className="btn-icono" />
                  <span>APROVECHAR</span>
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* =========================================================
          FOOTER INFERIOR
          ========================================================= */}
      <div className="slider-footer">
        <p>Polirubro Don Juan · Playa & Sol · Todo para tu verano</p>
      </div>
    </div>
  );
};

export default MainSliderFotos;