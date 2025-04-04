# Ecommerce - Tienda de Ropa en linea.

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)


Plataforma especializada en todo tipo de moda, con un diseño responsivo y con experiencia de usuario optimizada.

## + Objetivo
Tratar de replicar una compra online responsiva, atractiva y dinamica para productos de moda

## + Problemática Actual
- Interfaces confusas y poco entendibles
- Forma de navegar confusa
- No hay tantas cosas en la presentación de productos
- Experiencia móvil no tan bien optimizadaa

## + Características Principales

### - Página de Inicio
- Bienvenida personalizada con foto de perfil
- Barra de búsqueda inteligente
- Categorías mas destacadas
- Tarjetas de productos interactivas
- Menú móvil optimizado
- Valoracion de los productos
- Precio de los productos
- Nombre de los productos

### - Página de Detalle de Producto
- Selectores de talla y color
- Sistema de valoraciones
- Modal de información extendida que nos permite identificar más acerca del producto
- Calculador de cantidad y precio
- Poder observar cuanto se puede añadir

### - Página de Carrito
- Resumen detallado de compra
- Gestión de cantidades en tiempo real
- Múltiples opciones de pago
- Botón de compra con efecto de animación
- Información de envío y pago
- Modo de VISA
- Información de devolución y cambio
- Calculadora de costos (envíos, descuentos)
- Confirmación de compra con modal

## + Tecnologías Utilizadas
| Tecnología | Uso |
|------------|-----|
| ![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=git&logoColor=white) | Control de versiones |
| ![Figma](https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white) | Para el Diseño de interfaces |
| ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white) | Despliegue continuo |

**Recursos Obligatorios:**
- ![Componente de búsqueda](https://www.facebook.com/story.php?story_fbid=122161474094048970&id=61551469102959&mibextid=WC7FNe&rdid=ARxpghKfxeRvWZ3p)
- ![Modal "Ver más" usado](https://codepen.io/ckozalla/pen/LYLaVZW)
- ![Menú hamburguesa Movil](https://codepen.io/sanketbodke/pen/LYyzzYb)

## + Instalación Local
```bash
# Clonar repositorio
git clone https://github.com/Brxyden2007/AppEcommerceRopa.git

# Abrir en navegador (no se requieren dependencias)
open index.html

#Estructura del proyecto
APPECOMMERCEAPP
├── .vscode
│   └── settings.json # Aqui fue la carpeta en la que se uso el Go Live
├── css
│   ├── checkout.css # Aqui se encuentra el CSS del carrito(checkout)
│   ├── detail.css # Aqui se encuentra el CSS del producto (detalles acerca de ello)
│   ├── style.css # Aqui se encuentra el CSS de la página principal (todo el estilo de acorde a lo visual)
│   └── variables.css # Aqui se encuentra el CSS de las variables de color (aqui se uso el import para establecer esta en todos los CSS)
├── js
│   └── components # Carpeta de los componentes que contendra el JavaScript
│       ├── checkout.js # Aqui se encuentra el JavaScript del carrito(checkout / Se uso para hacer el Payment Complete a la hora de pagar )
│       ├── detail.js # Aqui se encuentra el JavaScript del producto (detalles acerca de ello / Aqui se uso lo que es la parte del Open Dialog)
│       ├── main.js # Aqui se encuentra el JavaScript de la página principal (En la cual se establecio para la Barra de Busquedas )
│       ├── modal.js # No usado
│       └── saveitem.js # Esta se uso para poder establecer el boton de "Guardar" (Corazon en Details) que permitiria guardar el producto (Solo se guardaría si se da click ahi, aunque no hay algun lugar donde guardarlo, solo esta para dar a entender de forma visual que se "guardo")
├── storage_img # Aqui estan todas las imagenes necesarias para poder hacer la pagina
|   ├── Account.svg
│   ├── all.svg
│   ├── arrow-down.png
│   ├── back.svg
│   ├── cart-detail.svg
│   ├── Cart.svg
│   ├── dress.svg
│   ├── Favourite.svg
│   ├── Home.svg
│   ├── iconPage.webp
│   ├── iphone-home.svg
│   ├── iphone.svg
│   ├── like-2.svg
│   ├── Main-icon.svg
│   ├── menu1.svg
│   ├── pants.svg
│   ├── Profile.svg
│   ├── star.svg
│   ├── t-shirt.svg
│   ├── Product1.png
│   ├── Product2.png
│   ├── Product3.png
│   └── Product4.png
├── views # Aqui se encuentran las vistas de la pagina (Details para detalles del producto y Checkout para dar la compra del producto) En las cuales ese establecio todo lo que esta acorde al nombre (CSS y JS)
│   ├── checkout.html # Aqui se encuentra la vista del carrito(checkout)
│   ├── detail.html # Aqui se encuentra la vista del producto (detalles acerca de ello)
├── index.html  # Aqui se encuentra la vista principal de la pagina y de todo, he aquí donde se ejecuta el codigo ya que contiene absolutamente todo.
└── README.md # Aqui se encuentra la documentación del proyecto, tanto sus formas de uso como su desarrollo y estructura.