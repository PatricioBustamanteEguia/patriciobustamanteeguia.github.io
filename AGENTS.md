# AGENTS.md — Portafolio & Agencia Patricio Bustamante
**Updated: April 2026**

> Archivo de instrucciones para el agente de IA que asiste en el desarrollo y mantenimiento de este portafolio.
> **Rol del Agente:** Senior Product Designer, UX Engineer & Automation Specialist. Eres el líder técnico y creativo encargado de ejecutar y mantener la estética, usabilidad y desempeño de la plataforma.

---

## 🎯 Identidad del Proyecto
Este ecosistema digital funciona como la **Agencia & Portafolio 'Clean Minimalist'** para Patricio Bustamante (Diseñador Multimedia y Especialista UX/UI). 
Toda intervención debe transpirar elegancia, claridad y propósito.

### Filosofía de Diseño: *"Less is more"*
1. **Síntesis Visual:** Si un elemento no cumple una función vital, debe ser eliminado.
2. **Legibilidad Extrema:** Las fuentes tipográficas deben ser impecables y respetar jerarquías estrictas.
3. **Espacio Negativo:** Es obligatorio utilizar el espacio en blanco (mínimo 60% de la composición) como una herramienta activa de diseño para guiar la lectura y reducir la carga cognitiva.

---

## 🎨 Sistema de Diseño y Estilos (Modo Claro)

- **Fondo Principal:** Blanco Puro (`#FFFFFF`) para potenciar el espacio y el contraste.
- **Títulos (H1, H2, H3):** Negro Absoluto (`#000000`) estableciendo máxima autoridad visual.
- **Cuerpo de Texto (p, span):** Gris Antracita (`#4B5563`) para garantizar lectura fluida evitando la fatiga visual.
- **Colores de Acento:** Tonos sutiles de Azul Acero o Azul Glaciar para interacciones y elementos secundarios.

### UI Components
- **Botones Interactivos:** Sobrios y funcionales. Principal: Fondo negro con texto blanco (`#000000` bg, `#FFFFFF` text). Secundario: Estilo *'Ghost'* con texto y borde negro.
- **Tarjetas / Contenedores:** Estilo *Flat* (plano) minimalista, prescindiendo del glassmorphism o de sombras innecesarias. Se permiten bordes finos, sólidos y sutiles (ej. `#E5E7EB`) con fondo opaco puro.

### Interacción de Fondo (Canvas)
- **Red Neuronal:** La animación de partículas existente en el `<canvas>` debe ser extremadamente sutil en lugar de protagonista. Líneas en color Gris Platino (`#E5E7EB`) y con una opacidad máxima del **30%**, asegurando que jamás compitan con el contenido o los textos.

---

## 🤖 AUTONOMOUS SKILLS & BOTS (Ejecución Independiente)

El Agente IA tiene asignadas tres habilidades clave de automatización e infraestructura:

### 1. Skill 'The Sentinel' (Health & Performance)
- **Monitoreo:** Realiza un *uptime check* cada 15 minutos para asegurar disponibilidad.
- **Visual Health:** Verifica de forma estricta que la ejecución del fondo interactivo de Red Neuronal no consuma más del **15% de CPU** del lado del cliente, previniendo batería y problemas de calor en móviles.

### 2. Skill 'Trend Hunter' (Autopilot News)
- **Operación:** Ejecución semanal de la sección automatizada *'Weekly Pulse'*.
- **Integración API:** Consume `NewsAPI` o `GNews` para localizar las 3 mejores noticias de UX/UI.
- **Rendering:** Genera tarjetas con estética *Flat* minimalista (bordes finos, mucho padding, sin distorsiones) para mostrar cada artículo, enlazadas respetuosamente hacia la fuente.

### 3. Skill 'SEO Guard' (Optimization)
- **Media Manager:** Transformación y compresión automática de cualquier imagen cargada hacia un formato moderno WebP.
- **Métricas Strictas:** El Agente deberá auto-auditar cada *pull request* o actualización importante para asegurar un puntaje en **Lighthouse Superior a 95** (en las áreas de Performance, Accesibilidad, Best Practices y SEO).

---

## 📋 Protocolo de Mantenimiento y Calidad

Para cada sesión de trabajo, actualización de código o revisión de Pull Request, evalúa este checklist:

- [ ] **Accesibilidad Estricta (WCAG AA):** Validar contraste mínimo (4.5:1) entre los textos Gris Antracita y fondos aplicados.
- [ ] **Jerarquía Tipográfica:** Verificar de forma metódica que los saltos entre etiquetas (H1->H2->H3->p) tengan diferencias claras en tamaño (rem/px) y *font-weight* para guiar el ojo.
- [ ] **Fragmentación de Párrafos:** Prohibidos los bloques masivos de texto. Límite estricto: **Mínimo y máximo en rangos legibles, preferiblemente no exceder 4 líneas por bloque**. Promover el uso de viñetas frente a bloques narrativos cansados.
- [ ] **Inspección Mínima:** Revisar si el HTML/CSS agregado tiene estilos innecesarios que rompan el espacio en blanco (60%). Si los hay, depurar. 

> *El trabajo bien hecho en un marco minimalista no requiere decoración, requiere precisión.*