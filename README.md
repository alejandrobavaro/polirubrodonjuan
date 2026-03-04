# 🏖️🌞 Polirubro Don Juan - PLAYA & SOL + SISTEMA DE GESTIÓN

**Tienda online + Sistema de gestión para almacén, quiosco, librería y juguetería**  
Una aplicación web completa con estética veraniega, colores frescos, tipografía moderna y un potente sistema de administración comercial.

![Polirubro Don Juan - Estilo Playa y Sol](https://via.placeholder.com/1200x400/6DD5FA/1E4B6E?text=🌞+POLIRUBRO+DON+JUAN+-+PLAYA+Y+SOL+🌊)

## 📋 Tabla de Contenidos
- [Descripción](#-descripción)
- [Características](#-características)
- [Estructura del Proyecto](#-estructura-del-proyecto)
- [Instalación](#-instalación)
- [Uso](#-uso)
- [Componentes Públicos](#-componentes-públicos)
- [Carrito de Compras](#-carrito-de-compras)
- [Rutas Públicas](#-rutas-públicas)
- [🎨 Estilos y Diseño - NUEVA ESTÉTICA](#-estilos-y-diseño---nueva-estética)
- [🏪 SECCIÓN PRIVADA - GESTIÓN COMERCIAL](#-sección-privada---gestión-comercial)
  - [Características del sistema interno](#características-del-sistema-interno)
  - [Estructura del sistema privado](#estructura-del-sistema-privado)
  - [Tecnologías a incorporar](#tecnologías-a-incorporar)
  - [Plan de desarrollo - Sprints](#plan-de-desarrollo---sprints)
  - [Rutas privadas](#rutas-privadas)
- [Contribuir](#-contribuir)
- [Licencia](#-licencia)

---

## 📝 Descripción

**Polirubro Don Juan** comenzó como una aplicación e-commerce desarrollada en React con una **estética fresca y veraniega** inspirada en Mar del Plata, el sol y la playa. Ahora evoluciona hacia un **sistema de gestión integral** que combina la tienda online con un potente backend para la administración del comercio.

### Lo que ya tenemos funcionando:
- 🏪 **E-commerce completo** con categorías: Almacén, Quiosco, Librería, Juguetería
- 🛒 **Carrito de compras global** con persistencia en localStorage
- 📱 **Diseño mobile-first** totalmente responsive
- 🎨 **Estética PLAYA & SOL** con paleta de colores fresca
- 🧭 **Header de 3 columnas** con navegación intuitiva
- 🗺️ **Múltiples sucursales** con mapa interactivo
- 💬 **Pedidos por WhatsApp** con resumen automático
- 🔥 **Página de ofertas** con contador regresivo
- 📦 **Sección mayorista** para compras al por mayor
- ⚡ **Scroll automático** al cambiar de página

### Lo que estamos construyendo (nueva etapa):
- 🔐 **Sistema de autenticación** para administradores y cajeros
- 📊 **Dashboard de gestión** con métricas en tiempo real
- 🏷️ **Gestión completa de productos** con códigos de barra
- 💰 **Caja registradora** con múltiples métodos de pago
- 🧾 **Ticketera** con impresión térmica
- 📑 **Facturación electrónica** (AFIP/ARCA)
- 📈 **Reportes y estadísticas** de ventas

---

## ✨ Características (Completadas)

### E-commerce
- ✅ **Carrito de compras global** con persistencia en localStorage
- ✅ **Catálogo de productos** por categorías
- ✅ **Buscador en tiempo real** en cada categoría
- ✅ **Filtros por categoría** en tienda general
- ✅ **Vista grid/lista** para productos (grid compacto)
- ✅ **Página de ofertas** con contador regresivo
- ✅ **Sección mayorista** para compras al por mayor
- ✅ **Múltiples sucursales** con mapa interactivo
- ✅ **Pedidos por WhatsApp** con resumen automático
- ✅ **Diseño mobile-first** totalmente responsive
- ✅ **Persistencia del carrito** entre sesiones
- ✅ **Header de 3 columnas** con estructura grid
- ✅ **Topbar con frase rotativa** estilo veraniego
- ✅ **Sol dorado animado** como elemento distintivo
- ✅ **Scroll automático** al navegar entre páginas

### Estilos y UX
- ✅ **Estética PLAYA & SOL** con paleta: Arena, Coral, Turquesa, Azul profundo, Dorado
- ✅ **Tipografías modernas**: Clash Display (títulos), Satoshi (textos)
- ✅ **Animaciones suaves** (float, pulse, slideUp, bounce)
- ✅ **Diseño compacto** aprovechando al máximo el espacio
- ✅ **Componentes reutilizables** con Sass modular
- ✅ **Favicon personalizado** y metadatos SEO

---

## 📁 Estructura del Proyecto (Actualizada)

```
polirubro-don-juan/
├── public/
│   └── img/
│       ├── 02-logos/
│       ├── 03-img-banners/
│       ├── 04-img-galeria1/
│       ├── 05-img-galeria2/
│       ├── 06-img-galeria3/
│       └── 13-gif/
├── src/
│   ├── assets/
│   │   └── scss/
│   │       ├── _01-General/
│   │       │   └── _App.scss
│   │       └── _03-Componentes/
│   │           ├── _AlmacenDonJuan.scss
│   │           ├── _ContactoDonJuan.scss
│   │           ├── _ContadorDonJuan.scss
│   │           ├── _Footer.scss
│   │           ├── _Header.scss
│   │           ├── _HomeDonJuan.scss
│   │           ├── _JugueteriaDonJuan.scss
│   │           ├── _LibreriaDonJuan.scss
│   │           ├── _MainSliderFotos.scss
│   │           ├── _MayoristaDonJuan.scss
│   │           ├── _NosotrosDonJuan.scss
│   │           ├── _OfertasDonJuan.scss
│   │           ├── _PedidosDonJuan.scss
│   │           ├── _QuioscoDonJuan.scss
│   │           ├── _SucursalesDonJuan.scss
│   │           ├── _TiendaDonJuan.scss
│   │           ├── _UbicacionDonJuan.scss
│   │           └── _WhatsappIcon.scss
│   ├── componentes/
│   │   ├── AlmacenDonJuan.jsx
│   │   ├── ContactoDonJuan.jsx
│   │   ├── ContadorDonJuan.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── HomeDonJuan.jsx
│   │   ├── JugueteriaDonJuan.jsx
│   │   ├── LibreriaDonJuan.jsx
│   │   ├── MainSliderFotos.jsx
│   │   ├── MayoristaDonJuan.jsx
│   │   ├── NosotrosDonJuan.jsx
│   │   ├── OfertasDonJuan.jsx
│   │   ├── PedidosDonJuan.jsx
│   │   ├── QuioscoDonJuan.jsx
│   │   ├── SucursalesDonJuan.jsx
│   │   ├── TiendaDonJuan.jsx
│   │   ├── UbicacionDonJuan.jsx
│   │   └── WhatsappIcon.jsx
│   ├── context/
│   │   └── CarritoContext.jsx
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── README.md
```

---

## 🚀 Instalación

### Requisitos previos
- Node.js (v14 o superior)
- npm o yarn

### Pasos de instalación

1. **Clonar el repositorio**
```bash
git clone https://github.com/tuusuario/polirubro-don-juan.git
cd polirubro-don-juan
```

2. **Instalar dependencias**
```bash
npm install
# o
yarn install
```

3. **Instalar dependencias adicionales**
```bash
npm install react-router-dom react-bootstrap bootstrap react-icons slick-carousel react-slick framer-motion sass
```

4. **Iniciar el servidor de desarrollo**
```bash
npm run dev
# o
yarn dev
```

5. **Abrir el navegador**
```
http://localhost:5173
```

---

## 💻 Uso (Parte Pública)

### Navegación principal
- **Inicio**: Landing page con productos destacados y categorías
- **Ofertas**: Promociones activas con contador regresivo
- **Almacén**: Productos de almacén con buscador
- **Quiosco**: Golosinas, snacks y helados
- **Librería**: Útiles escolares
- **Juguetería**: Juguetes y juegos de playa
- **Nosotros**: Información de la empresa
- **Sucursales**: Ubicaciones y mapa
- **Mayorista**: Paquetes para revendedores
- **Contacto**: Formulario y datos de contacto

### Carrito de compras
1. Agregar productos desde cualquier categoría
2. Ver el badge del carrito actualizado
3. Ir a "PEDIDO" para revisar
4. Modificar cantidades o eliminar items
5. Completar dirección y método de pago
6. Enviar pedido por WhatsApp

---

## 🧩 Componentes Públicos

### Principales

| Componente | Descripción |
|------------|-------------|
| `Header` | Barra de navegación con estructura de 3 columnas, logo con sol, menú centrado y carrito |
| `Footer` | Pie de página con información y enlaces |
| `HomeDonJuan` | Página de inicio con slider, categorías y productos |
| `TiendaDonJuan` | Tienda general con filtros y vista grid/lista |
| `PedidosDonJuan` | Carrito de compras con resumen y checkout (versión marketing) |
| `OfertasDonJuan` | Promociones con contador regresivo |
| `MayoristaDonJuan` | Paquetes para compras mayoristas |
| `SucursalesDonJuan` | Listado de sucursales con mapa |
| `ContactoDonJuan` | Formulario de contacto e información |
| `NosotrosDonJuan` | Historia, valores y equipo |

### Categorías
- `AlmacenDonJuan`
- `QuioscoDonJuan`
- `LibreriaDonJuan`
- `JugueteriaDonJuan`

---

## 🛒 Carrito de Compras

El carrito utiliza **React Context** para manejar el estado global:

### Contexto (`CarritoContext.jsx`)

```javascript
const {
  items,                    // Array de productos
  agregarAlCarrito,         // Función para agregar
  eliminarDelCarrito,       // Función para eliminar
  actualizarCantidad,       // Función para actualizar cantidad
  vaciarCarrito,            // Función para vaciar
  subtotal,                 // Subtotal calculado
  cantidadTotal             // Cantidad total de items
} = useCarrito();
```

### Características
- Persistencia en **localStorage**
- Badge dinámico en el header
- Cálculo automático de totales
- Envío gratis +$5000
- Códigos de descuento
- Barra de progreso para envío gratis
- Sugerencias de productos (cross-selling)

---

## 🗺 Rutas Públicas

| Ruta | Componente |
|------|------------|
| `/` | HomeDonJuan |
| `/ofertas` | OfertasDonJuan |
| `/tienda` | TiendaDonJuan |
| `/almacen` | AlmacenDonJuan |
| `/quiosco` | QuioscoDonJuan |
| `/libreria` | LibreriaDonJuan |
| `/jugueteria` | JugueteriaDonJuan |
| `/contacto` | ContactoDonJuan |
| `/nosotros` | NosotrosDonJuan |
| `/pedidos` | PedidosDonJuan |
| `/mayorista` | MayoristaDonJuan |
| `/sucursales` | SucursalesDonJuan |
| `/ubicacion` | UbicacionDonJuan |

---

## 🎨 Estilos y Diseño - NUEVA ESTÉTICA

### Concepto: **PLAYA & SOL 🌞🏖️**
Inspirado en Mar del Plata, el verano, los helados y el sol. Una estética fresca, moderna y alegre que combina la onda del almacén de barrio con colores vibrantes.

### Paleta de colores
| Color | Código | Descripción |
|-------|--------|-------------|
| Arena | `#F4E6D4` | Fondos claros, base cálida |
| Coral | `#FF6F61` | Acentos, botones, precios |
| Turquesa | `#48C9B0` | Bordes, detalles, hover |
| Azul profundo | `#1E4B6E` | Textos principales |
| Dorado sol | `#FFD700` | Sol decorativo, acentos especiales |
| Gris claro | `#F4F7F9` | Fondos de secciones |

### Tipografías
| Uso | Fuente | Característica |
|-----|--------|----------------|
| **Títulos principales** | `Clash Display` | Moderna, geométrica, audaz |
| **Textos y botones** | `Satoshi` | Limpia, legible, contemporánea |
| **Acentos** | `Clash Display` (medium) | Versátil |

### Estructura del Header
- **3 columnas en grid** para alineación perfecta
- **Logo izquierda** con sol animado
- **Menú centro** (solo desktop) con bordes sutiles
- **Carrito derecha** con diseño minimalista
- **Topbar 3 columnas** con frase rotativa

### Estrategia responsive
- **Mobile First**: Diseño base para móviles
- **Breakpoints**: 768px (tablet), 992px (desktop)
- **Diseño compacto**: Máxima información en pantalla
- **Grid de productos**: 2 columnas en móvil, hasta 6 en desktop

### Botones y elementos
- **Estilo sutil**: Bordes en lugar de fondos sólidos
- **Hover con transparencias**: Efectos suaves
- **Opacidades controladas**: Para no recargar la vista
- **Animaciones suaves**: Sol giratorio, soles flotantes

---

## 🏪 SECCIÓN PRIVADA - GESTIÓN COMERCIAL

### Características del sistema interno (En desarrollo)

| Módulo | Estado | Descripción |
|--------|--------|-------------|
| **Autenticación** | ⏳ Próximamente | Login seguro con roles (admin, cajero, vendedor) |
| **Dashboard** | ⏳ Próximamente | Panel con métricas y alertas |
| **Productos** | ⏳ Próximamente | CRUD completo con códigos de barra |
| **Caja** | ⏳ Próximamente | Punto de venta con múltiples pagos |
| **Ticketera** | ⏳ Próximamente | Impresión de tickets térmicos |
| **Facturación** | ⏳ Próximamente | Facturación electrónica AFIP/ARCA |
| **Reportes** | ⏳ Próximamente | Estadísticas y exportación |

### Estructura del sistema privado (Nueva)

```
src/
├── componentes/
│   ├── publico/          # Componentes públicos actuales
│   └── privado/          # NUEVOS componentes privados
│       ├── auth/          # Login, registro, recuperación
│       ├── dashboard/     # Panel principal
│       ├── caja/          # Punto de venta
│       ├── productos/     # Gestión de productos
│       ├── ticketera/     # Emisión de tickets
│       ├── facturacion/   # Factura electrónica
│       └── reportes/      # Estadísticas
├── context/
│   ├── CarritoContext.jsx
│   └── AuthContext.jsx    # NUEVO - Contexto de autenticación
├── pages/
│   ├── public/            # Páginas públicas actuales
│   └── private/           # NUEVAS páginas privadas
│       ├── Dashboard.jsx
│       ├── Caja.jsx
│       ├── Ticketera.jsx
│       ├── Facturacion.jsx
│       └── Productos.jsx
├── services/
│   ├── api.js             # Configuración de axios
│   ├── auth.js            # Servicios de autenticación
│   ├── productos.js       # CRUD de productos
│   ├── ventas.js          # Gestión de ventas
│   └── tickets.js         # Gestión de ticketera
└── utils/
    ├── scanner.js         # Lector de código de barras
    └── printer.js         # Impresión de tickets
```

### Tecnologías a incorporar

| Tecnología | Uso |
|------------|-----|
| **Node.js + Express** | Backend API REST |
| **MongoDB / PostgreSQL** | Base de datos |
| **JWT** | Autenticación |
| **Zustand / Redux Toolkit** | Estado global avanzado |
| **React Query** | Gestión de datos asíncronos |
| **React Hook Form** | Formularios complejos |
| **Zod / Yup** | Validaciones |
| **Chart.js / Recharts** | Gráficos |
| **React To Print / React Thermal Printer** | Impresión de tickets |
| **QuaggaJS / ZXing** | Lector de códigos de barra |
| **PDFKit / jsPDF** | Generación de PDFs |
| **XLSX** | Exportación a Excel |
| **Socket.io** | Notificaciones en tiempo real |

### Plan de desarrollo - Sprints

| Sprint | Duración | Entregable |
|--------|----------|------------|
| **Sprint 1** | 2 semanas | Estructura + Autenticación + Dashboard |
| **Sprint 2** | 3 semanas | Gestión de productos + Códigos de barra |
| **Sprint 3** | 3 semanas | Caja registradora + Pagos |
| **Sprint 4** | 2 semanas | Ticketera + Facturación electrónica |
| **Sprint 5** | 2 semanas | Reportes + Exportación + Ajustes finales |
| **Total** | **12 semanas** | Sistema completo |

### Rutas privadas (Próximamente)

| Ruta | Componente | Acceso |
|------|------------|--------|
| `/privado` | Dashboard | Admin/Cajero |
| `/privado/caja` | CajaPrincipal | Cajero |
| `/privado/productos` | ProductosLista | Admin |
| `/privado/productos/nuevo` | ProductoForm | Admin |
| `/privado/productos/:id` | ProductoDetalle | Admin |
| `/privado/ticketera` | Ticketera | Cajero |
| `/privado/facturacion` | Facturacion | Admin |
| `/privado/historial` | HistorialVentas | Admin |
| `/privado/reportes` | Reportes | Admin |
| `/privado/configuracion` | Configuracion | Admin |

---

## 🤝 Contribuir

1. Fork el proyecto
2. Crear una rama (`git checkout -b feature/NuevaCaracteristica`)
3. Commit cambios (`git commit -m 'Agrega nueva característica'`)
4. Push a la rama (`git push origin feature/NuevaCaracteristica`)
5. Abrir un Pull Request

### Convenciones de código
- Usar `import` en lugar de `require`
- Nombres de componentes en PascalCase
- SCSS modular por componente
- Comentarios separadores con `=====`
- Mantener diseño compacto y responsive

---

## 📄 Licencia

Este proyecto está bajo la licencia **MIT**. Ver el archivo `LICENSE` para más detalles.

---

## 👨‍💻 Autor

**Tu Nombre** - [GitHub](https://github.com/tuusuario)

---

## 🙏 Agradecimientos

- A todos los clientes de Don Juan
- Al equipo de desarrollo
- A la comunidad de React
- A Mar del Plata por la inspiración 🌊

---

## 📞 Contacto

- **Email**: info@donjuan.com
- **WhatsApp**: +54 223 555-1234
- **Instagram**: @polirubro.donjuan
- **Facebook**: /polirubro.donjuan

---

**¡Gracias por visitar Polirubro Don Juan - Playita y Sol!** 🏖️🌞🛒

**¡Próximamente: Sistema de gestión integral para tu comercio!** 🏪💻
```

---

## ✅ RESUMEN DE LO QUE YA ESTÁ TERMINADO

| Sección | Estado |
|---------|--------|
| **E-commerce completo** | ✅ Listo |
| **Header de 3 columnas** | ✅ Listo |
| **Footer con slider de banners** | ✅ Listo |
| **Home con slider automático** | ✅ Listo |
| **Todas las categorías** | ✅ Listo |
| **Carrito de compras** | ✅ Listo |
| **Página de ofertas** | ✅ Listo |
| **Mayorista** | ✅ Listo |
| **Contacto + Sucursales** | ✅ Listo |
| **Nosotros** | ✅ Listo |
| **WhatsApp flotante** | ✅ Listo |
| **Estética PLAYA & SOL** | ✅ Listo |
| **Scroll automático** | ✅ Listo |

---

## 🚀 LO QUE VIENE (NUEVA ETAPA)

| Módulo | Estado |
|--------|--------|
| **Autenticación** | ⏳ Próximamente |
| **Dashboard** | ⏳ Próximamente |
| **Gestión de productos** | ⏳ Próximamente |
| **Códigos de barra** | ⏳ Próximamente |
| **Caja registradora** | ⏳ Próximamente |
| **Ticketera** | ⏳ Próximamente |
| **Facturación electrónica** | ⏳ Próximamente |
| **Reportes** | ⏳ Próximamente |
#   p o l i r u b r o d o n j u a n  
 