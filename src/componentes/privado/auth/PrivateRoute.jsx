// =========================================================
// PrivateRoute.jsx - PROTECCIÓN DE RUTAS PRIVADAS
// =========================================================
import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

// =========================================================
const PrivateRoute = ({ children, requiredRole = null }) => {
  const { isAuthenticated, hasPermission, loading } = useAuth();

  if (loading) {
    return (
      <div className="loading-screen">
        <div className="loading-spinner"></div>
        <p>Cargando...</p>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (requiredRole && !hasPermission(requiredRole)) {
    return <Navigate to="/privado" replace />;
  }

  return children;
};

export default PrivateRoute;