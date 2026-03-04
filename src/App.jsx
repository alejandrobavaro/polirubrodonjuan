// =========================================================
// IMPORTS PRINCIPALES
// =========================================================
import React, { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation
} from 'react-router-dom';

// =========================================================
// IMPORTS DE ESTILOS
// =========================================================
import './assets/scss/_01-General/_App.scss';

// =========================================================
// COMPONENTES ESTRUCTURALES
// =========================================================
import Header from './componentes/Header';
import Footer from './componentes/Footer';
import WhatsappIcon from './componentes/WhatsappIcon';
import MainSliderFotos from './componentes/MainSliderFotos';

// =========================================================
// COMPONENTES DE POLIRUBRO DON JUAN
// =========================================================
import HomeDonJuan from './componentes/HomeDonJuan';
import OfertasDonJuan from './componentes/OfertasDonJuan';
import TiendaDonJuan from './componentes/TiendaDonJuan';
import AlmacenDonJuan from './componentes/AlmacenDonJuan';
import QuioscoDonJuan from './componentes/QuioscoDonJuan';
import LibreriaDonJuan from './componentes/LibreriaDonJuan';
import JugueteriaDonJuan from './componentes/JugueteriaDonJuan';
import ContactoDonJuan from './componentes/ContactoDonJuan';
import NosotrosDonJuan from './componentes/NosotrosDonJuan';
import PedidosDonJuan from './componentes/PedidosDonJuan';
import MayoristaDonJuan from './componentes/MayoristaDonJuan';

// =========================================================
// COMPONENTE PARA SCROLL AUTOMÁTICO
// =========================================================
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

// =========================================================
// COMPONENTE PRINCIPAL
// =========================================================
function App() {
  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      {/* SCROLL AUTOMÁTICO AL CAMBIAR DE RUTA */}
      <ScrollToTop />
      
      {/* PELOTAS DECORATIVAS GRANDES */}
      <div className="pelotas-decorativas">
        <div className="pelota pelota-1">⚽</div>
        <div className="pelota pelota-2">⚽</div>
        <div className="pelota pelota-3">⚽</div>
        <div className="pelota pelota-4">⚽</div>
        <div className="pelota pelota-5">⚽</div>
        <div className="pelota pelota-6">⚽</div>
        
        {/* Pelotas que caen */}
        <div className="pelota-cayendo pelota-cayendo-1">⚽</div>
        <div className="pelota-cayendo pelota-cayendo-2">⚽</div>
        <div className="pelota-cayendo pelota-cayendo-3">⚽</div>
        <div className="pelota-cayendo pelota-cayendo-4">⚽</div>
      </div>

      <div className="app-container">
        
        {/* HEADER */}
        <Header />

        {/* CONTENIDO PRINCIPAL */}
        <main className="main-content">
          <div className="content-wrapper">
            <Routes>
              
              {/* =========================================================
                  RUTAS PRINCIPALES - POLIRUBRO DON JUAN
                  ========================================================= */}
              
              {/* HOME */}
              <Route path="/" element={<HomeDonJuan />} />
              
              {/* CATEGORÍAS PRINCIPALES */}
              <Route path="/almacen" element={<AlmacenDonJuan />} />
              <Route path="/quiosco" element={<QuioscoDonJuan />} />
              <Route path="/libreria" element={<LibreriaDonJuan />} />
              <Route path="/jugueteria" element={<JugueteriaDonJuan />} />
              
              {/* SECCIONES GENERALES */}
              <Route path="/ofertas" element={<OfertasDonJuan />} />
              <Route path="/tienda" element={<TiendaDonJuan />} />
              <Route path="/contacto" element={<ContactoDonJuan />} />
              <Route path="/nosotros" element={<NosotrosDonJuan />} />
              <Route path="/pedidos" element={<PedidosDonJuan />} />
              <Route path="/mayorista" element={<MayoristaDonJuan />} />

              {/* RUTA POR DEFECTO - REDIRIGE A HOME */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </main>

        {/* SEPARADOR */}
        <hr className="border border-0 opacity-20" />
        
        {/* SLIDER DE FOTOS */}
        <MainSliderFotos />
        
        {/* FOOTER */}
        <Footer />
        
        {/* WHATSAPP ICON - ÚNICO EN TODA LA APP */}
        <WhatsappIcon />
      </div>
    </Router>
  );
}

export default App;