// =========================================================
// NosotrosDonJuan.jsx - PÁGINA SOBRE NOSOTROS DE POLIRUBRO DON JUAN
// MISMA LÍNEA QUE ALMACÉN, JUGUETERÍA, LIBRERÍA
// =========================================================
import React from 'react';
import { 
  BsStar, 
  BsStarFill, 
  BsTruck, 
  BsClock, 
  BsHeart, 
  BsPeople, 
  BsLightning,
  BsShop,
  BsBoxSeam,
  BsCupStraw,
  BsBook,
  BsDice6,
  BsSun,
  BsUmbrella,
  BsWater
} from 'react-icons/bs';
import { GiBeachBall, GiIceCreamCone, GiSurfBoard, GiKite, GiWaveSurfer } from 'react-icons/gi';
import '../assets/scss/_03-Componentes/_NosotrosDonJuan.scss';

// =========================================================
const NosotrosDonJuan = () => {
  
  // =========================================================
  // EQUIPO (usamos imágenes de galería 2 para coherencia)
  // =========================================================
  const equipo = [
    {
      nombre: 'Juan Pérez',
      cargo: 'Fundador',
      imagen: '/img/05-img-galeria2/1a.jpg',
    },
    {
      nombre: 'María González',
      cargo: 'Gerente',
      imagen: '/img/05-img-galeria2/2a.jpg',
    },
    {
      nombre: 'Carlos Rodríguez',
      cargo: 'Logística',
      imagen: '/img/05-img-galeria2/3a.jpg',
    }
  ];

  // =========================================================
  // VALORES (mismos que las otras páginas)
  // =========================================================
  const valores = [
    { icon: <BsSun />, titulo: 'Frescura', desc: 'Productos frescos como el mar' },
    { icon: <BsHeart />, titulo: 'Pasión', desc: 'Amamos lo que hacemos' },
    { icon: <BsPeople />, titulo: 'Familia', desc: 'Te tratamos como en casa' },
    { icon: <GiWaveSurfer />, titulo: 'Compromiso', desc: 'Siempre en la cresta de la ola' }
  ];

  // =========================================================
  // PROCESO
  // =========================================================
  const proceso = [
    { num: 1, titulo: 'Elegimos', desc: 'Lo mejor de la costa' },
    { num: 2, titulo: 'Preparamos', desc: 'Con cuidado playero' },
    { num: 3, titulo: 'Empacamos', desc: 'Como un regalo de verano' },
    { num: 4, titulo: 'Llevamos', desc: 'Hasta tu sombrilla' }
  ];

  // =========================================================
  return (
    <div className="nosotros-playa-uniforme">
      
      {/* =========================================================
          HEADER DE CATEGORÍA (IGUAL QUE EN ALMACÉN)
          ========================================================= */}
      <section className="categoria-header">
        <div className="header-badge">
          <GiSurfBoard className="badge-icono" />
          <span>PLAYA & SOL · NOSOTROS</span>
          <GiKite className="badge-icono" />
        </div>
        <h1 className="animate-slideUp">
          SOBRE <span className="destacado">DON JUAN</span>
        </h1>
        <p className="animate-slideUp" style={{animationDelay: '0.1s'}}>
          Tu almacén de confianza en la costa desde 1985
        </p>
      </section>

      {/* =========================================================
          GIF ANIMADO (MANTENEMOS LA MISMA URL)
          ========================================================= */}
      <section className="gif-section">
        <div className="gif-container">
          <img 
            src="/img/13-gif/gif3.gif" 
            alt="Don Juan animado" 
            className="gif-animado"
          />
        </div>
      </section>

      {/* =========================================================
          GALERÍA DE IMÁGENES (GALERÍA 2)
          ========================================================= */}
      <section className="galeria-mini">
        <div className="galeria-grid">
          <img src="/img/05-img-galeria2/4.jpeg" alt="Productos" loading="lazy" />
          <img src="/img/05-img-galeria2/5.jpeg" alt="Productos" loading="lazy" />
          <img src="/img/05-img-galeria2/6.jpeg" alt="Productos" loading="lazy" />
          <img src="/img/05-img-galeria2/7.jpeg" alt="Productos" loading="lazy" />
        </div>
      </section>

      {/* =========================================================
          NUESTRA HISTORIA
          ========================================================= */}
      <section className="historia-section">
        <div className="historia-container">
          <div className="historia-imagen">
            <img src="/img/05-img-galeria2/8.jpeg" alt="Nuestra historia" loading="lazy" />
          </div>
          
          <div className="historia-contenido">
            <h2>NUESTRA <span className="destacado">HISTORIA</span></h2>
            <p>
              Todo comenzó en 1985, cuando Don Juan abrió las puertas de su pequeño almacén 
              cerca de la playa en Mar del Plata. Con esfuerzo y dedicación, fue ganándose la confianza 
              de los veraneantes.
            </p>
            <p>
              <strong>Polirubro Don Juan · Playa & Sol</strong> nace para llevar esa misma confianza y calidad 
              a todos los balnearios, combinando la tradición del almacén con la frescura de la costa.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================
          FRASE DE IMPACTO (IGUAL QUE EN MAYORISTA)
          ========================================================= */}
      <section className="frase-impacto">
        <div className="frase-container">
          <GiBeachBall className="frase-icono" />
          <p className="frase-texto">
            "Más que un negocio, somos parte de tus vacaciones"
          </p>
          <GiBeachBall className="frase-icono" />
        </div>
      </section>

      {/* =========================================================
          VALORES (MISMA ESTÉTICA QUE EN ALMACÉN)
          ========================================================= */}
      <section className="valores-section">
        <h2>NUESTROS <span className="destacado">VALORES</span></h2>
        
        <div className="valores-grid">
          {valores.map((valor, index) => (
            <div key={index} className="valor-card animate-slideUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="valor-icono">{valor.icon}</div>
              <h3>{valor.titulo}</h3>
              <p>{valor.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          PROCESO (MISMA ESTÉTICA QUE EN ALMACÉN)
          ========================================================= */}
      <section className="proceso-section">
        <h2>NUESTRO PROCESO <span className="destacado">EN LA COSTA</span></h2>
        
        <div className="proceso-grid">
          {proceso.map((item, index) => (
            <div key={index} className="proceso-card animate-slideUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="proceso-numero">{item.num}</div>
              <div className="proceso-contenido">
                <h3>{item.titulo}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          EQUIPO CON IMÁGENES REALES (DE GALERÍA 2)
          ========================================================= */}
      <section className="equipo-section">
        <h2>NUESTRO <span className="destacado">EQUIPO</span></h2>
        
        <div className="equipo-grid">
          {equipo.map((miembro, index) => (
            <div key={index} className="equipo-card animate-slideUp" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="equipo-imagen">
                <img src={miembro.imagen} alt={miembro.nombre} loading="lazy" />
              </div>
              <h3>{miembro.nombre}</h3>
              <p className="equipo-cargo">{miembro.cargo}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          FRASE FINAL (MISMA ESTÉTICA QUE EN ALMACÉN)
          ========================================================= */}
      <section className="frase-final">
        <div className="frase-final-container">
          <BsWater className="frase-icono" />
          <p>
            "Comprometidos con tu verano, cerca tuyo siempre"
          </p>
          <span className="frase-autor">- Familia Don Juan · Playa & Sol</span>
        </div>
      </section>
    </div>
  );
};

export default NosotrosDonJuan;