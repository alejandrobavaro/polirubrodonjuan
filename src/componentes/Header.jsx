// =========================================================
// Header.jsx - VERSIÓN 3 COLUMNAS + BOTONES SUTILES
// Logo izquierda | Menú centro | Carrito derecha
// =========================================================
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  BsHouseDoor,
  BsTag,
  BsTelephone,
  BsCart3,
  BsBoxSeam,
  BsBook,
  BsCupStraw,
  BsGeoAlt,
  BsPeople,
  BsTrophy,
  BsBalloon,
  BsSun,
  BsUmbrella,
  BsWater,
  BsCloudSun,
  BsStarFill,
  BsShop // ✅ Icono para Tienda
} from "react-icons/bs";
import { GiBeachBall, GiIceCreamCone, GiSurfBoard, GiPalmTree, GiSunglasses } from "react-icons/gi";
import { Navbar, Nav, Container } from "react-bootstrap";
import { useCarrito } from "../context/CarritoContext";
import "../assets/scss/_03-Componentes/_Header.scss";

// =========================================================
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { cantidadTotal } = useCarrito();

  // =========================================================
  // DETECTAR SCROLL
  // =========================================================
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // =========================================================
  // ENLACES DE NAVEGACIÓN - AGREGAMOS TIENDA
  // =========================================================
  const navLinks = [
    { path: "/", label: "INICIO", icon: <BsHouseDoor /> },
    { path: "/tienda", label: "TIENDA", icon: <BsShop /> }, // ✅ NUEVO
    { path: "/almacen", label: "ALMACÉN", icon: <BsBoxSeam /> },
    { path: "/quiosco", label: "QUIOSCO", icon: <GiIceCreamCone /> },
    { path: "/libreria", label: "LIBRERÍA", icon: <BsBook /> },
    { path: "/jugueteria", label: "JUGUETERÍA", icon: <GiBeachBall /> },
    { path: "/ofertas", label: "OFERTAS", icon: <BsTag /> }
  ];

  // =========================================================
  // HANDLERS
  // =========================================================
  const handleToggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const handleLinkClick = () => setIsMobileMenuOpen(false);

  // =========================================================
  // FRASES
  // =========================================================
  const frases = [
    "☀️ SOL, PLAYA Y DON JUAN",
    "🌊 FRESCURA EN CADA COMPRA",
    "🏖️ EL VERANO NO TERMINA",
    "🧉 MATE Y HELADO",
    "⚡ OFERTAS QUE QUEMAN"
  ];

  const [fraseActual, setFraseActual] = useState(frases[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setFraseActual(frases[Math.floor(Math.random() * frases.length)]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className={`header-tres-columnas ${scrolled ? 'header-scrolled' : ''}`}>
      
      {/* =========================================================
          TOPBAR - 3 COLUMNAS
          ========================================================= */}
      <div className="topbar-tres">
        <div className="topbar-container">
          
          {/* IZQUIERDA: FRASE */}
          <div className="topbar-izquierda">
            <div className="topbar-frase">
              <BsSun className="frase-icono" />
              <span className="frase-texto">{fraseActual}</span>
            </div>
          </div>
          
          {/* CENTRO: (vacío o algo decorativo) */}
          <div className="topbar-centro">
            <span className="topbar-decoracion">⛱️</span>
          </div>
          
          {/* DERECHA: ACCIONES */}
          <div className="topbar-derecha">
            <Link to="/mayorista" className="accion-link mayorista">
              <BsStarFill /> MAYORISTA
            </Link>
            <Link to="/contacto" className="accion-link contacto">
              <BsTelephone /> CONTACTO
            </Link>
            <a href="https://wa.me/542235551234" className="accion-link whatsapp" target="_blank" rel="noopener">
              <i className="bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      </div>

      {/* =========================================================
          NAVBAR PRINCIPAL - 3 COLUMNAS
          ========================================================= */}
      <Navbar expand="lg" className="navbar-tres" expanded={isMobileMenuOpen}>
        <Container fluid className="navbar-container">
          
          {/* =========================================================
              COLUMNA IZQUIERDA: LOGO
              ========================================================= */}
          <Navbar.Brand as={Link} to="/" className="logo-tres">
            <div className="logo-sol">
              <BsSun className="sol-icono" />
            </div>
            <div className="logo-texto">
              <span className="logo-don">DON</span>
              <span className="logo-juan">JUAN</span>
            </div>
          </Navbar.Brand>

          {/* =========================================================
              COLUMNA CENTRO: MENÚ (solo desktop)
              ========================================================= */}
          <Navbar.Collapse id="menu-tres" className="justify-content-center">
            <Nav className="menu-centro">
              {navLinks.map((link) => (
                <Nav.Link
                  key={link.path}
                  as={Link}
                  to={link.path}
                  onClick={handleLinkClick}
                  className={`nav-item-centro ${
                    location.pathname === link.path ? 'active' : ''
                  }`}
                >
                  <span className="nav-icono">{link.icon}</span>
                  <span className="nav-label">{link.label}</span>
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>

          {/* =========================================================
              COLUMNA DERECHA: CARRITO + HAMBURGUESA
              ========================================================= */}
          <div className="header-derecha">
            
            {/* CARRITO SUTIL */}
            <Link to="/pedidos" className="carrito-sutil">
              <div className="carrito-wrapper">
                <BsCart3 className="carrito-icono" />
                <BsSun className="carrito-sol" />
                {cantidadTotal > 0 && (
                  <span className="carrito-badge">{cantidadTotal}</span>
                )}
              </div>
              <span className="carrito-texto">PEDIDO</span>
            </Link>
            
            {/* HAMBURGUESA (solo móvil) */}
            <Navbar.Toggle
              aria-controls="menu-tres"
              className="menu-toggle d-lg-none"
              onClick={handleToggleMobileMenu}
            >
              <GiSunglasses className="toggle-icono" />
            </Navbar.Toggle>
          </div>
        </Container>
      </Navbar>
      
      {/* MENÚ MÓVIL (se despliega abajo) */}
      <Navbar.Collapse id="menu-tres" className="d-lg-none">
        <Nav className="menu-movil">
          {navLinks.map((link) => (
            <Nav.Link
              key={link.path}
              as={Link}
              to={link.path}
              onClick={handleLinkClick}
              className={`nav-item-movil ${
                location.pathname === link.path ? 'active' : ''
              }`}
            >
              <span className="nav-icono">{link.icon}</span>
              <span className="nav-label">{link.label}</span>
            </Nav.Link>
          ))}
        </Nav>
      </Navbar.Collapse>
    </header>
  );
};

export default Header;