# 👗 Ecommerce - Tienda de Ropa en linea.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

Plataforma especializada en todo tipo de moda, con un diseño responsivo y con experiencia de usuario optimizada.

## 🎯 Objetivo
Crear una experiencia de compra online intuitiva y atractiva para productos de moda, resolviendo los problemas comunes de usabilidad en sitios similares.

## 🚨 Problemática Actual
- Interfaces complejas y poco intuitivas
- Navegación confusa en sitios de moda
- Falta de claridad en la presentación de productos
- Experiencia móvil no optimizada

## ✨ Características Principales

### 🏠 Página de Inicio
- Bienvenida personalizada con foto de perfil
- Barra de búsqueda inteligente
- Categorías destacadas
- Tarjetas de productos interactivas
- Menú móvil optimizado

### 📦 Página de Detalle de Producto
- Galería de imágenes ampliable
- Selectores de talla y color
- Sistema de valoraciones
- Modal de información extendida
- Calculador de cantidad y precio

### 🛒 Página de Carrito
- Resumen detallado de compra
- Gestión de cantidades en tiempo real
- Múltiples opciones de pago
- Calculadora de costos (envíos, descuentos)
- Confirmación de compra con modal

## 🛠️ Tecnologías Utilizadas
| Tecnología | Uso |
|------------|-----|
| ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) | Diseño de interfaces |
| ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) | Control de versiones |
| ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white) | Despliegue continuo |

**Recursos Obligatorios:**
- [Componente de búsqueda](https://www.facebook.com/story.php?story_fbid=122161474094048970)
- [Modal "Ver más"](https://codepen.io/ckozalla/pen/LYLaVZW)
- [Menú hamburguesa](https://codepen.io/sanketbodke/pen/LYyzzYb)

## 🚀 Instalación Local
```bash
# Clonar repositorio
git clone https://github.com/LFDIAZDEV2209/eCommerce-Clothes-WEB.git

# Abrir en navegador (no se requieren dependencias)
open index.html

#Estructura del proyecto
ecommerce-ropa/
├── css/
│   ├── variables.css    # Sistema de diseño
│   ├── styles.css       # Estilos globales
│   ├── detail.css       # Estilos detalle
│   └── checkout.css     # Estilos checkout
├── js/
│   ├── main.js          # Lógica principal
│   ├── detail.js        # Interacción producto
│   └── checkout.js      # Lógica carrito
├── storage/
│   ├── font/            # Iconos SVG
│   └── img/             # Assets visuales
├── views/
│   ├── detail.html      # Vista detalle
│   └── checkout.html    # Vista carrito
├── index.html           # Página principal
└── README.md            # Documentación