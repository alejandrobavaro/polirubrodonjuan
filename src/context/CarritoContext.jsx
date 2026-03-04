// =========================================================
// CarritoContext.jsx - CONTEXTO GLOBAL DEL CARRITO
// =========================================================
import React, { createContext, useState, useContext, useEffect } from 'react';

// Crear el contexto
const CarritoContext = createContext();

// =========================================================
// Hook personalizado para usar el carrito
// =========================================================
export const useCarrito = () => {
  const context = useContext(CarritoContext);
  if (!context) {
    throw new Error('useCarrito debe usarse dentro de CarritoProvider');
  }
  return context;
};

// =========================================================
// Proveedor del carrito
// =========================================================
export const CarritoProvider = ({ children }) => {
  // Cargar carrito del localStorage al iniciar
  const [items, setItems] = useState(() => {
    try {
      const savedCart = localStorage.getItem('carritoDonJuan');
      return savedCart ? JSON.parse(savedCart) : [];
    } catch (error) {
      console.error('Error al cargar carrito:', error);
      return [];
    }
  });

  // Guardar en localStorage cada vez que cambie
  useEffect(() => {
    try {
      localStorage.setItem('carritoDonJuan', JSON.stringify(items));
    } catch (error) {
      console.error('Error al guardar carrito:', error);
    }
  }, [items]);

  // =========================================================
  // Funciones del carrito
  // =========================================================
  
  // Agregar producto
  const agregarAlCarrito = (producto, cantidad = 1) => {
    if (!producto || !producto.id) {
      console.error('Producto inválido:', producto);
      return;
    }

    setItems(prevItems => {
      const existe = prevItems.find(item => item.id === producto.id);
      
      if (existe) {
        // Si ya existe, actualizar cantidad
        return prevItems.map(item =>
          item.id === producto.id
            ? { ...item, cantidad: item.cantidad + cantidad }
            : item
        );
      } else {
        // Si no existe, agregar nuevo
        return [...prevItems, { 
          ...producto, 
          cantidad,
          // Asegurar que tenga los campos necesarios
          nombre: producto.nombre || producto.titulo || 'Producto',
          precio: producto.precio || producto.precioOferta || 0,
          imagen: producto.imagen || ''
        }];
      }
    });

    // Feedback visual opcional
    // Podríamos agregar una notificación aquí
  };

  // Eliminar producto
  const eliminarDelCarrito = (id) => {
    setItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  // Actualizar cantidad
  const actualizarCantidad = (id, nuevaCantidad) => {
    if (nuevaCantidad < 1) {
      eliminarDelCarrito(id);
      return;
    }
    
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, cantidad: nuevaCantidad } : item
      )
    );
  };

  // Vaciar carrito
  const vaciarCarrito = () => {
    if (window.confirm('¿Estás seguro de vaciar el carrito?')) {
      setItems([]);
    }
  };

  // Calcular totales
  const subtotal = items.reduce((acc, item) => {
    const precio = item.precio || 0;
    const cantidad = item.cantidad || 0;
    return acc + (precio * cantidad);
  }, 0);
  
  const cantidadTotal = items.reduce((acc, item) => acc + (item.cantidad || 0), 0);

  // =========================================================
  return (
    <CarritoContext.Provider value={{
      items,
      agregarAlCarrito,
      eliminarDelCarrito,
      actualizarCantidad,
      vaciarCarrito,
      subtotal,
      cantidadTotal
    }}>
      {children}
    </CarritoContext.Provider>
  );
};