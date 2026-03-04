// =========================================================
// PedidosDonJuan.jsx - CARRITO DE COMPRAS DE POLIRUBRO DON JUAN
// VERSIÓN MARKETING - MÁS FUERZA EN CONVERSIÓN
// =========================================================
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  BsTrash, 
  BsPlus, 
  BsDash, 
  BsTruck, 
  BsCreditCard, 
  BsCash, 
  BsWhatsapp, 
  BsLightning,
  BsBoxSeam,
  BsSun,
  BsUmbrella,
  BsWater,
  BsShieldCheck,
  BsClock,
  BsGift,
  BsStarFill
} from 'react-icons/bs';
import { GiBeachBall, GiIceCreamCone, GiSurfBoard, GiWaveSurfer } from 'react-icons/gi';
import { useCarrito } from '../context/CarritoContext';
import '../assets/scss/_03-Componentes/_PedidosDonJuan.scss';

// =========================================================
const PedidosDonJuan = () => {
  // =========================================================
  const { 
    items, 
    actualizarCantidad, 
    eliminarDelCarrito, 
    subtotal,
    vaciarCarrito
  } = useCarrito();

  const [metodoPago, setMetodoPago] = useState('transferencia');
  const [direccion, setDireccion] = useState('');
  const [observaciones, setObservaciones] = useState('');
  const [codigoPromo, setCodigoPromo] = useState('');
  const [promoAplicada, setPromoAplicada] = useState(false);

  // =========================================================
  const envio = subtotal >= 5000 ? 0 : 800;
  const descuento = promoAplicada ? subtotal * 0.1 : 0;
  const descuentoTransferencia = metodoPago === 'transferencia' ? subtotal * 0.05 : 0;
  const descuentoTotal = descuento + descuentoTransferencia;
  const total = subtotal + envio - descuentoTotal;

  const aplicarPromo = () => {
    if (codigoPromo.toLowerCase() === 'playa10') {
      setPromoAplicada(true);
      alert('🎉 ¡Código aplicado! 10% de descuento');
    } else {
      alert('❌ Código inválido. Probá "PLAYA10"');
    }
  };

  const enviarPedidoWhatsApp = () => {
    const mensaje = `🌊 *NUEVO PEDIDO - DON JUAN PLAYA & SOL* 🏖️%0A%0A${items.map(item => 
      `• ${item.cantidad} x ${item.nombre}: $${(item.precio * item.cantidad).toLocaleString()}`
    ).join('%0A')}%0A%0A➖➖➖➖➖➖➖%0A📦 *Subtotal:* $${subtotal.toLocaleString()}%0A🚚 *Envío:* $${envio.toLocaleString()}%0A💰 *Descuento código:* $${descuento.toLocaleString()}%0A💸 *Descuento transferencia:* $${descuentoTransferencia.toLocaleString()}%0A🔥 *TOTAL:* $${total.toLocaleString()}%0A➖➖➖➖➖➖➖%0A📍 *Dirección:* ${direccion || 'Por confirmar'}%0A💳 *Pago:* ${metodoPago === 'transferencia' ? 'Transferencia' : metodoPago === 'efectivo' ? 'Efectivo' : 'Tarjeta'}%0A📝 *Observaciones:* ${observaciones || 'Ninguna'}`;
    
    window.open(`https://wa.me/542235551234?text=${mensaje}`, '_blank');
  };

  // =========================================================
  // Ofertas relámpago (productos sugeridos)
  // =========================================================
  const sugerencias = [
    { id: 's1', nombre: 'Helado 1/2kg', precio: 1200, imagen: '/img/06-img-galeria3/id1-c1.png' },
    { id: 's2', nombre: 'Pelota playa', precio: 1800, imagen: '/img/06-img-galeria3/id2-c2.png' },
    { id: 's3', nombre: 'Gaseosa 2L', precio: 950, imagen: '/img/06-img-galeria3/id3-c3.png' },
  ];

  // =========================================================
  return (
    <div className="pedidos-playa-marketing">
      
      {/* =========================================================
          HEADER CON URGENCIA (COUNTDOWN + OFERTA)
          ========================================================= */}
      <section className="header-urgencia">
        <div className="header-overlay"></div>
        <div className="header-content">
          
          <div className="header-badge">
            <BsLightning className="badge-icono" />
            <span>¡ULTIMAS UNIDADES!</span>
            <BsLightning className="badge-icono" />
          </div>
          
          <h1 className="header-titulo">
            <span className="linea1">COMPLETÁ TU</span>
            <span className="linea2 animate-pulse">PEDIDO AHORA</span>
          </h1>
          
          <div className="header-offer">
            <BsClock className="offer-icono" />
            <span>15 min para asegurar tu compra</span>
          </div>
        </div>
      </section>

      <div className="pedidos-container">
        
        {/* =========================================================
            COLUMNA PRINCIPAL - LISTA DE PRODUCTOS
            ========================================================= */}
        <div className="columna-principal">
          
          {/* PROGRESO DE COMPRA */}
          <div className="progreso-compra">
            <div className="progreso-item activo">
              <span className="progreso-numero">1</span>
              <span className="progreso-texto">Carrito</span>
            </div>
            <div className="progreso-linea"></div>
            <div className="progreso-item">
              <span className="progreso-numero">2</span>
              <span className="progreso-texto">Datos</span>
            </div>
            <div className="progreso-linea"></div>
            <div className="progreso-item">
              <span className="progreso-numero">3</span>
              <span className="progreso-texto">Pago</span>
            </div>
          </div>

          {/* LISTA DE PRODUCTOS */}
          <div className="productos-lista">
            <div className="lista-header">
              <GiSurfBoard className="lista-icono" />
              <h2>TUS <span className="destacado">PRODUCTOS</span></h2>
            </div>
            
            {items.length === 0 ? (
              <div className="carrito-vacio">
                <GiWaveSurfer className="vacio-icono" />
                <p>Tu carrito está vacío</p>
                <p className="vacio-sub">¡Aprovechá nuestras ofertas playeras!</p>
                <Link to="/ofertas" className="btn-ofertas">
                  <BsLightning /> VER OFERTAS
                </Link>
              </div>
            ) : (
              <>
                {items.map((item, index) => (
                  <div key={item.id} className="item-carrito animate-slideUp" style={{animationDelay: `${index * 0.1}s`}}>
                    <div className="item-imagen">
                      <img src={item.imagen} alt={item.nombre} loading="lazy" />
                    </div>
                    
                    <div className="item-detalles">
                      {item.categoria && <span className="item-categoria">{item.categoria}</span>}
                      <h3>{item.nombre}</h3>
                      <div className="item-precio-unitario">${item.precio.toLocaleString()} c/u</div>
                      
                      <div className="item-acciones">
                        <div className="cantidad-control">
                          <button 
                            className="cantidad-btn"
                            onClick={() => actualizarCantidad(item.id, item.cantidad - 1)}
                          >
                            <BsDash />
                          </button>
                          <span className="cantidad-valor">{item.cantidad}</span>
                          <button 
                            className="cantidad-btn"
                            onClick={() => actualizarCantidad(item.id, item.cantidad + 1)}
                          >
                            <BsPlus />
                          </button>
                        </div>
                        
                        <div className="item-subtotal">
                          <span className="subtotal-label">Subtotal:</span>
                          <span className="subtotal-valor">${(item.precio * item.cantidad).toLocaleString()}</span>
                        </div>
                        
                        <button 
                          className="btn-eliminar"
                          onClick={() => eliminarDelCarrito(item.id)}
                          aria-label="Eliminar producto"
                        >
                          <BsTrash />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="acciones-lista">
                  <Link to="/tienda" className="btn-seguir">
                    + SEGUIR COMPRANDO
                  </Link>
                  <button 
                    className="btn-vaciar"
                    onClick={vaciarCarrito}
                  >
                    VACIAR CARRITO
                  </button>
                </div>
              </>
            )}
          </div>

          {/* PRODUCTOS SUGERIDOS (CROSS-SELLING) */}
          {items.length > 0 && (
            <div className="sugerencias">
              <div className="sugerencias-header">
                <BsGift className="sugerencias-icono" />
                <h3>COMPLETÁ TU PEDIDO</h3>
              </div>
              <div className="sugerencias-grid">
                {sugerencias.map(sug => (
                  <div key={sug.id} className="sugerencia-card">
                    <img src={sug.imagen} alt={sug.nombre} />
                    <div className="sugerencia-info">
                      <h4>{sug.nombre}</h4>
                      <span className="sugerencia-precio">${sug.precio.toLocaleString()}</span>
                    </div>
                    <button className="sugerencia-btn">+</button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* =========================================================
            COLUMNA DERECHA - RESUMEN CONVINCENTE
            ========================================================= */}
        <div className="columna-resumen">
          
          {/* SELLOS DE CONFIANZA */}
          <div className="sellos-confianza">
            <div className="sello">
              <BsShieldCheck className="sello-icono" />
              <span>Compra segura</span>
            </div>
            <div className="sello">
              <BsTruck className="sello-icono" />
              <span>Envío rápido</span>
            </div>
            <div className="sello">
              <BsStarFill className="sello-icono" />
              <span>+500 clientes</span>
            </div>
          </div>

          {/* OFERTA ESPECIAL DEL DÍA */}
          <div className="oferta-dia">
            <GiWaveSurfer className="oferta-icono" />
            <div className="oferta-texto">
              <h4>🌊 OLA DE DESCUENTOS</h4>
              <p>10% OFF pagando con transferencia</p>
            </div>
          </div>

          {/* RESUMEN DEL PEDIDO */}
          <div className="resumen-pedido">
            <h3>RESUMEN <span className="destacado">DEL PEDIDO</span></h3>
            
            <div className="resumen-detalles">
              <div className="resumen-item">
                <span>Productos ({items.reduce((acc, item) => acc + item.cantidad, 0)}):</span>
                <span>${subtotal.toLocaleString()}</span>
              </div>
              <div className="resumen-item">
                <span>Envío:</span>
                <span className={envio === 0 ? 'envio-gratis' : ''}>
                  {envio === 0 ? 'GRATIS' : `$${envio.toLocaleString()}`}
                </span>
              </div>
              {descuento > 0 && (
                <div className="resumen-item descuento">
                  <span>Descuento código:</span>
                  <span>-${descuento.toLocaleString()}</span>
                </div>
              )}
              {descuentoTransferencia > 0 && (
                <div className="resumen-item descuento transferencia">
                  <span>Descuento transferencia:</span>
                  <span>-${descuentoTransferencia.toLocaleString()}</span>
                </div>
              )}
              
              {/* BARRA DE PROGRESO PARA ENVÍO GRATIS */}
              {subtotal < 5000 && (
                <div className="progreso-envio">
                  <p className="progreso-texto">
                    <BsTruck /> ¡Faltan ${(5000 - subtotal).toLocaleString()} para envío gratis!
                  </p>
                  <div className="progreso-barra">
                    <div className="progreso-llenado" style={{width: `${(subtotal / 5000) * 100}%`}}></div>
                  </div>
                </div>
              )}
              
              <div className="resumen-item total">
                <span>TOTAL:</span>
                <span className="total-valor">${total.toLocaleString()}</span>
              </div>
            </div>

            {/* CÓDIGO PROMOCIONAL */}
            <div className="codigo-promo">
              <input 
                type="text" 
                placeholder="¿Tenés un código?" 
                value={codigoPromo}
                onChange={(e) => setCodigoPromo(e.target.value)}
                disabled={promoAplicada}
              />
              <button 
                onClick={aplicarPromo}
                disabled={promoAplicada}
              >
                {promoAplicada ? 'APLICADO ✓' : 'APLICAR'}
              </button>
            </div>

            {/* MÉTODO DE PAGO */}
            <div className="metodo-pago">
              <h4>MÉTODO DE PAGO</h4>
              
              <label className={`pago-option ${metodoPago === 'transferencia' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="pago" 
                  value="transferencia"
                  checked={metodoPago === 'transferencia'}
                  onChange={(e) => setMetodoPago(e.target.value)}
                />
                <span className="option-content">
                  <BsCreditCard className="option-icono" />
                  <span>
                    Transferencia bancaria
                    <span className="option-badge">5% OFF</span>
                  </span>
                </span>
              </label>
              
              <label className={`pago-option ${metodoPago === 'efectivo' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="pago" 
                  value="efectivo"
                  checked={metodoPago === 'efectivo'}
                  onChange={(e) => setMetodoPago(e.target.value)}
                />
                <span className="option-content">
                  <BsCash className="option-icono" />
                  Efectivo (pago al recibir)
                </span>
              </label>
              
              <label className={`pago-option ${metodoPago === 'tarjeta' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="pago" 
                  value="tarjeta"
                  checked={metodoPago === 'tarjeta'}
                  onChange={(e) => setMetodoPago(e.target.value)}
                />
                <span className="option-content">
                  <BsCreditCard className="option-icono" />
                  Tarjeta de crédito/débito
                </span>
              </label>
            </div>

            {/* DIRECCIÓN */}
            <div className="direccion-entrega">
              <h4>DIRECCIÓN DE ENTREGA</h4>
              <textarea 
                placeholder="Ej: Av. Principal 1234, Mar del Plata"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                rows="2"
              ></textarea>
            </div>

            {/* BOTÓN DE CONVERSIÓN */}
            <button 
              className="btn-confirmar"
              onClick={enviarPedidoWhatsApp}
              disabled={items.length === 0}
            >
              <BsWhatsapp /> CONFIRMAR PEDIDO AHORA
            </button>

            {/* GARANTÍAS */}
            <div className="garantias">
              <p>🔒 Datos protegidos · Envío asegurado</p>
              <div className="metodos-pago-icons">
                <BsCreditCard />
                <BsCash />
                <BsWhatsapp />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* =========================================================
          BANNER INFERIOR DE CONFIANZA
          ========================================================= */}
      <div className="footer-confianza">
        <div className="confianza-item">
          <BsShieldCheck />
          <span>Compra protegida</span>
        </div>
        <div className="confianza-item">
          <BsTruck />
          <span>Entrega garantizada</span>
        </div>
        <div className="confianza-item">
          <BsClock />
          <span>Atención 24/7</span>
        </div>
        <div className="confianza-item">
          <BsStarFill />
          <span>+1000 reseñas</span>
        </div>
      </div>
    </div>
  );
};

export default PedidosDonJuan;