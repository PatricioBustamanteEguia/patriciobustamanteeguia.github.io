# 🌌 Portafolio — Patricio Bustamante Eguía

> Diseñador Multimedia & Especialista UX/UI · Una sola página · HTML + CSS + JS Vanilla

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/es/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/es/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/es/docs/Web/JavaScript)
[![Responsive](https://img.shields.io/badge/Responsive-✔-66fcf1?style=flat-square)](#)

---

## ✨ Características

| Feature | Descripción |
|---|---|
| 🧠 **Red Neuronal Interactiva** | Sistema de partículas en canvas que reacciona al movimiento del ratón |
| 🎨 **Estética "Cosmos Frío"** | Negros profundos, azules cian y grises sutiles |
| 🪟 **Glassmorphism** | Secciones con efecto de vidrio esmerilado |
| 📱 **Responsive Design** | Optimizado para móvil, tablet y desktop |
| ⚡ **Sin dependencias** | Cero frameworks, cero npm, cero build tools |

---

## 📂 Estructura del Proyecto

```
Portafolio_Patricio/
├── index.html          # Página principal (single-page)
├── style.css           # Estilos con BEM y variables CSS
├── AGENTS.md           # Instrucciones para el agente de IA
├── assets/             # Logos SVG de proyectos
│   ├── dressup.svg
│   ├── coyotebags.svg
│   ├── srcompost.svg
│   └── techfuture.svg
└── documentos/         # PDFs de CV y casos de estudio
    ├── CV Patricio Bustamante Eguía ES.pdf
    ├── Caso de estudio DressUp.pdf
    ├── CoyoteBags.pdf
    └── Sr_Compost.pdf
```

---

## 🚀 Cómo ver el portafolio

No necesita instalación ni servidor. Solo:

1. Ve a la carpeta `Portafolio_Patricio` en tu Escritorio
2. Haz doble clic en `index.html`
3. ¡Listo! Se abre directamente en tu navegador

> **Recomendado:** Chrome, Edge o Firefox en su versión más reciente.

---

## 🎨 Personalización rápida

### Cambiar textos
Edita directamente el archivo `index.html`. Los textos están organizados por sección:
- **Hero:** busca `<header class="hero"`
- **Sobre Mí:** busca `<section class="about-me"`
- **Proyectos:** busca `<section class="projects"`
- **Contacto:** busca `<section class="contact-section"`

### Cambiar colores
Abre `style.css` y edita las variables en la sección `:root` (línea 1):

```css
:root {
    --accent-cyan: #66fcf1;   /* Color principal de acento */
    --accent-blue: #45a29e;   /* Color secundario */
    --bg-color: #020617;      /* Fondo oscuro */
}
```

### Agregar un proyecto
1. Añade un bloque `<div class="project-card">` dentro de `.projects__grid` en `index.html`
2. Sube el PDF del caso de estudio a la carpeta `documentos/`
3. Consulta `AGENTS.md` para el flujo completo

---

## 🛠️ Tecnologías Utilizadas

- **HTML5** — Estructura semántica
- **CSS3** — Variables, Grid, Flexbox, `backdrop-filter`, transiciones
- **JavaScript Vanilla** — Canvas API para partículas, modal de imágenes
- **Google Fonts** — Inter + Outfit
- **Metodología BEM** — Para nombres de clases CSS

---

## 📋 Roadmap

- [x] Red neuronal interactiva con canvas
- [x] Diseño responsive (móvil / tablet / desktop)
- [x] Glassmorphism en secciones clave
- [x] Modal de imágenes para proyectos
- [ ] Formulario de contacto funcional (EmailJS)
- [ ] Sección de habilidades / herramientas
- [ ] Menú hamburguesa para móvil
- [ ] Animaciones de scroll (Intersection Observer)
- [ ] 4to proyecto (TechFuture)

---

## 📄 Licencia

Proyecto personal de Patricio Bustamante Eguía. Todos los derechos reservados © 2026.
