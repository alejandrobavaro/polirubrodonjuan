// =========================================================
// AuthContext.jsx - CONTEXTO DE AUTENTICACIÓN
// Maneja login, registro, logout y protección de rutas
// =========================================================
import React, { createContext, useState, useContext, useEffect } from 'react';

// =========================================================
const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth debe usarse dentro de AuthProvider');
  }
  return context;
};

// =========================================================
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // =========================================================
  // Verificar si hay sesión al cargar
  // =========================================================
  useEffect(() => {
    const storedUser = localStorage.getItem('donjuan_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  // =========================================================
  // FUNCIÓN DE LOGIN (simulada - reemplazar con API real)
  // =========================================================
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      // SIMULACIÓN - REEMPLAZAR CON LLAMADA REAL A API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Usuarios de prueba
      if (email === 'admin@donjuan.com' && password === 'DonJuan2024') {
        const userData = {
          id: 1,
          nombre: 'Admin',
          email: 'admin@donjuan.com',
          rol: 'admin',
          avatar: '/img/05-img-galeria2/1a.jpg'
        };
        setUser(userData);
        localStorage.setItem('donjuan_user', JSON.stringify(userData));
        return { success: true };
      } else if (email === 'cajero@donjuan.com' && password === 'cajero2024') {
        const userData = {
          id: 2,
          nombre: 'Cajero',
          email: 'cajero@donjuan.com',
          rol: 'cajero',
          avatar: '/img/05-img-galeria2/2a.jpg'
        };
        setUser(userData);
        localStorage.setItem('donjuan_user', JSON.stringify(userData));
        return { success: true };
      } else {
        throw new Error('Credenciales inválidas');
      }
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // FUNCIÓN DE REGISTRO (simulada)
  // =========================================================
  const register = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      // SIMULACIÓN - REEMPLAZAR CON LLAMADA REAL A API
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser = {
        id: Date.now(),
        ...userData,
        rol: 'vendedor'
      };
      
      setUser(newUser);
      localStorage.setItem('donjuan_user', JSON.stringify(newUser));
      return { success: true };
    } catch (err) {
      setError(err.message);
      return { success: false, error: err.message };
    } finally {
      setLoading(false);
    }
  };

  // =========================================================
  // FUNCIÓN DE LOGOUT
  // =========================================================
  const logout = () => {
    setUser(null);
    localStorage.removeItem('donjuan_user');
  };

  // =========================================================
  // VERIFICAR PERMISOS POR ROL
  // =========================================================
  const hasPermission = (requiredRole) => {
    if (!user) return false;
    if (requiredRole === 'admin' && user.rol !== 'admin') return false;
    if (requiredRole === 'cajero' && !['admin', 'cajero'].includes(user.rol)) return false;
    return true;
  };

  // =========================================================
  const value = {
    user,
    loading,
    error,
    login,
    register,
    logout,
    hasPermission,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};