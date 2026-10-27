# Universo a Escala ✦

Una página **Link in Bio** inmersiva y responsive para Mateo Ríos, divulgador independiente de astronomía. El proyecto concentra sus publicaciones, astrofotografías y recursos educativos en un único punto de acceso pensado para personas curiosas por el universo.

> “Entender el universo empieza por aprender a mirar el cielo.”

## Vista general

**Universo a Escala** transforma una página de enlaces convencional en una experiencia editorial breve: presenta al creador, dirige a sus canales principales, destaca contenido educativo y facilita el acceso a recursos para empezar a observar el cielo.

La identidad visual se inspira en el cielo nocturno mediante una paleta de azul espacial, cian, violeta y blanco frío. La interfaz prioriza la lectura y la navegación desde móvil, sin prescindir de una experiencia cuidada en tabletas y escritorio.

## Características

- Perfil y presentación de Mateo Ríos y su proyecto de divulgación.
- Enlaces principales a YouTube, Instagram, X y AstroBin con iconografía reconocible.
- Tarjeta de video destacado para nuevos visitantes.
- Galería compacta de astrofotografía con vista ampliada.
- Módulo informativo de próximo evento astronómico.
- Recursos seleccionados para principiantes.
- Canal de contacto para entrevistas y colaboraciones.
- Fondo y microanimaciones sutiles inspiradas en el espacio, compatibles con `prefers-reduced-motion`.
- Diseño responsive, navegación por teclado y estados de foco visibles.

## Tecnologías

El sitio se construye sin dependencias ni backend:

- HTML5 semántico
- CSS3
- JavaScript vanilla
- SVG para los iconos de redes sociales

## Estructura del proyecto

```text
.
├── assets/
│   ├── icons/svg/        # Iconos de las plataformas sociales
│   └── video/            # Recurso audiovisual de fondo
├── docs/
│   └── customer.md       # Brief y requisitos del cliente ficticio
├── index.html            # Estructura y contenido de la página
├── style.css             # Diseño responsive, animaciones y accesibilidad visual
└── script.js             # Interacciones de interfaz
```

## Ejecutar localmente

No se requiere instalación. Clona el repositorio y abre `index.html` en el navegador.

```bash
git clone <URL_DEL_REPOSITORIO>
cd astronomy-popularizer
```

Para una previsualización con recarga automática se puede usar cualquier servidor estático, por ejemplo la extensión Live Server de VS Code.

## Despliegue

El proyecto está preparado para alojarse como sitio estático en GitHub Pages, Netlify o Vercel. No requiere variables de entorno, compilación ni configuración de servidor.

1. Publica el repositorio en la plataforma elegida.
2. Configura la raíz del proyecto como directorio de publicación.
3. Usa `index.html` como punto de entrada.

## Accesibilidad y calidad

- Marcado HTML con una jerarquía de contenido clara.
- Textos alternativos descriptivos para imágenes relevantes.
- Controles operables con teclado y foco perceptible.
- Contraste y tipografía legible sobre fondos oscuros.
- Respeto por la preferencia de reducción de movimiento.
- Metadatos básicos para título y previsualización al compartir.

## Alcance

Los perfiles, el correo y la actividad de Mateo Ríos son ficticios y se utilizan con fines demostrativos. AstroBin es una plataforma real; su inclusión ilustra el tipo de canal especializado que el proyecto puede centralizar.

## Créditos

Brief del proyecto: [docs/customer.md](docs/customer.md).  
Iconos sociales: recursos SVG incluidos en `assets/icons/svg`.
