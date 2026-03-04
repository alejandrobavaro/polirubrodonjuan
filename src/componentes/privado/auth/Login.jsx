// =========================================================
// Login.jsx - PÁGINA DE INICIO DE SESIÓN
// Estilo PLAYA & SOL - Misma estética que la página pública
// =========================================================
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { BsSun, BsShieldLock, BsEnvelope, BsKey } from 'react-icons/bs';
import { GiSurfBoard } from 'react-icons/gi';
import { useAuth } from '../../../context/AuthContext';
import '../../../assets/scss/_03-Componentes/_Login.scss';

// =========================================================
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();

  // =========================================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate('/privado');
    }
  };

  // =========================================================
  return (
    <div className="login-playa">
      
      {/* DECORACIÓN DE FONDO */}
      <div className="login-fondo">
        <div className="fondo-ola"></div>
        <div className="fondo-sol"></div>
      </div>

      <div className="login-container">
        
        {/* LOGO Y TÍTULO */}
        <div className="login-header">
          <div className="logo-sol">
            <BsSun className="sol-icono animate-rotate" />
          </div>
          <h1>DON JUAN</h1>
          <p className="subtitulo">PLAYA & SOL · GESTIÓN</p>
        </div>

        {/* FORMULARIO */}
        <div className="login-card">
          <div className="card-header">
            <GiSurfBoard className="header-icono" />
            <h2>INICIAR SESIÓN</h2>
          </div>

          {error && (
            <div className="error-mensaje">
              <BsShieldLock /> {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>
                <BsEnvelope className="input-icono" />
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@donjuan.com"
                required
                disabled={loading}
              />
            </div>

            <div className="form-group">
              <label>
                <BsKey className="input-icono" />
                Contraseña
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                disabled={loading}
              />
            </div>

            <div className="form-options">
              <label className="remember-checkbox">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <span>Recordarme</span>
              </label>
              <Link to="/recuperar-password" className="forgot-link">
                ¿Olvidaste tu contraseña?
              </Link>
            </div>

            <button 
              type="submit" 
              className="btn-login"
              disabled={loading}
            >
              {loading ? (
                <>INGRESANDO...</>
              ) : (
                <>INGRESAR AL SISTEMA</>
              )}
            </button>
          </form>

          <div className="login-footer">
            <p>Usuarios de prueba:</p>
            <div className="test-users">
              <span>admin@donjuan.com / DonJuan2024</span>
              <span>cajero@donjuan.com / cajero2024</span>
            </div>
          </div>
        </div>

        {/* ENLACE A TIENDA */}
        <Link to="/" className="back-to-store">
          ← Volver a la tienda
        </Link>
      </div>
    </div>
  );
};

export default Login;