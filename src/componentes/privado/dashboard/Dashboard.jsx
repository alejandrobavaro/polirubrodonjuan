// =========================================================
// Dashboard.jsx - PANEL PRINCIPAL DE GESTIÓN
// Misma estética PLAYA & SOL
// =========================================================
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsSun, 
  BsTruck, 
  BsLightning,
  BsCart3,
  BsBoxSeam,
  BsPeople,
  BsGraphUp,
  BsCash,
  BsCalendar,
  BsClock,
  BsArrowUp,
  BsArrowDown
} from 'react-icons/bs';
import { GiSurfBoard, GiBeachBall, GiIceCreamCone } from 'react-icons/gi';
import { useAuth } from '../../../context/AuthContext';
import '../../../assets/scss/_03-Componentes/_Dashboard.scss';

// =========================================================
const Dashboard = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    ventasHoy: 124500,
    ventasAyer: 98700,
    ventasSemana: 845000,
    productosVendidos: 342,
    clientesAtendidos: 87,
    stockBajo: 5,
    ultimasVentas: []
  });

  const [loading, setLoading] = useState(true);

  // =========================================================
  useEffect(() => {
    // SIMULACIÓN DE CARGA DE DATOS
    const timer = setTimeout(() => {
      setStats({
        ventasHoy: 124500,
        ventasAyer: 98700,
        ventasSemana: 845000,
        productosVendidos: 342,
        clientesAtendidos: 87,
        stockBajo: 5,
        ultimasVentas: [
          { id: 1, hora: '10:30', cliente: 'Cliente 1', total: 3450, items: 3 },
          { id: 2, hora: '10:15', cliente: 'Cliente 2', total: 8200, items: 5 },
          { id: 3, hora: '09:50', cliente: 'Cliente 3', total: 2100, items: 2 },
          { id: 4, hora: '09:20', cliente: 'Cliente 4', total: 5600, items: 4 },
          { id: 5, hora: '08:45', cliente: 'Cliente 5', total: 1200, items: 1 },
        ]
      });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // =========================================================
  const calcularVariacion = (hoy, ayer) => {
    const variacion = ((hoy - ayer) / ayer) * 100;
    return {
      valor: variacion.toFixed(1),
      positivo: variacion > 0
    };
  };

  const variacionVentas = calcularVariacion(stats.ventasHoy, stats.ventasAyer);

  // =========================================================
  return (
    <div className="dashboard-playa">
      
      {/* HEADER DEL DASHBOARD */}
      <div className="dashboard-header">
        <div className="header-left">
          <GiSurfBoard className="header-icono" />
          <div>
            <h1>¡Bienvenido, {user?.nombre || 'Usuario'}!</h1>
            <p className="fecha-actual">
              <BsCalendar /> {new Date().toLocaleDateString('es-AR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
          </div>
        </div>
        <div className="header-right">
          <div className="badge-usuario">
            <img src={user?.avatar || '/img/05-img-galeria2/1a.jpg'} alt={user?.nombre} />
            <span>{user?.rol === 'admin' ? 'Administrador' : 'Cajero'}</span>
          </div>
        </div>
      </div>

      {/* TARJETAS DE RESUMEN */}
      <div className="stats-grid">
        <div className="stat-card animate-slideUp" style={{animationDelay: '0s'}}>
          <div className="stat-icono ventas">
            <BsCash />
          </div>
          <div className="stat-contenido">
            <span className="stat-label">Ventas hoy</span>
            <span className="stat-valor">${stats.ventasHoy.toLocaleString()}</span>
            <span className={`stat-variacion ${variacionVentas.positivo ? 'positivo' : 'negativo'}`}>
              {variacionVentas.positivo ? <BsArrowUp /> : <BsArrowDown />}
              {variacionVentas.valor}%
            </span>
          </div>
        </div>

        <div className="stat-card animate-slideUp" style={{animationDelay: '0.1s'}}>
          <div className="stat-icono productos">
            <BsBoxSeam />
          </div>
          <div className="stat-contenido">
            <span className="stat-label">Productos vendidos</span>
            <span className="stat-valor">{stats.productosVendidos}</span>
            <span className="stat-detalle">hoy</span>
          </div>
        </div>

        <div className="stat-card animate-slideUp" style={{animationDelay: '0.2s'}}>
          <div className="stat-icono clientes">
            <BsPeople />
          </div>
          <div className="stat-contenido">
            <span className="stat-label">Clientes atendidos</span>
            <span className="stat-valor">{stats.clientesAtendidos}</span>
            <span className="stat-detalle">hoy</span>
          </div>
        </div>

        <div className="stat-card animate-slideUp" style={{animationDelay: '0.3s'}}>
          <div className="stat-icono alerta">
            <BsLightning />
          </div>
          <div className="stat-contenido">
            <span className="stat-label">Stock bajo</span>
            <span className="stat-valor">{stats.stockBajo}</span>
            <span className="stat-detalle">productos</span>
          </div>
        </div>
      </div>

      {/* ACCESOS RÁPIDOS */}
      <div className="accesos-rapidos">
        <h2>ACCESOS <span className="destacado">RÁPIDOS</span></h2>
        <div className="accesos-grid">
          <Link to="/privado/caja" className="acceso-card">
            <BsCash className="acceso-icono" />
            <span>Abrir Caja</span>
          </Link>
          <Link to="/privado/productos" className="acceso-card">
            <BsBoxSeam className="acceso-icono" />
            <span>Productos</span>
          </Link>
          <Link to="/privado/ticketera" className="acceso-card">
            <GiBeachBall className="acceso-icono" />
            <span>Ticketera</span>
          </Link>
          <Link to="/privado/historial" className="acceso-card">
            <BsGraphUp className="acceso-icono" />
            <span>Historial</span>
          </Link>
        </div>
      </div>

      {/* ÚLTIMAS VENTAS Y ALERTAS */}
      <div className="dashboard-grid">
        <div className="ultimas-ventas">
          <h3>ÚLTIMAS VENTAS</h3>
          <div className="ventas-lista">
            {stats.ultimasVentas.map((venta, index) => (
              <div key={venta.id} className="venta-item animate-slideUp" style={{animationDelay: `${index * 0.05}s`}}>
                <div className="venta-hora">
                  <BsClock /> {venta.hora}
                </div>
                <div className="venta-info">
                  <span className="venta-cliente">{venta.cliente}</span>
                  <span className="venta-items">{venta.items} items</span>
                </div>
                <div className="venta-total">
                  ${venta.total.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="alertas-stock">
          <h3>ALERTAS DE STOCK</h3>
          <div className="alerta-item">
            <span className="alerta-producto">Arroz 1kg</span>
            <span className="alerta-cantidad">quedan 3</span>
          </div>
          <div className="alerta-item">
            <span className="alerta-producto">Aceite Girasol</span>
            <span className="alerta-cantidad">quedan 2</span>
          </div>
          <div className="alerta-item">
            <span className="alerta-producto">Alfajores</span>
            <span className="alerta-cantidad">quedan 5</span>
          </div>
          <div className="alerta-item">
            <span className="alerta-producto">Cuadernos</span>
            <span className="alerta-cantidad">quedan 4</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;