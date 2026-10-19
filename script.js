// ===== INTERNACIONALIZACIÓN (i18n: ES / EN) =====
const translations = {
    es: {
        // Nav
        "nav.home": "Inicio",
        "nav.about": "Sobre Mí",
        "nav.experience": "Experiencia",
        "nav.skills": "Habilidades",
        "nav.projects": "Casos de Estudio",
        "nav.certifications": "Certificaciones",
        "nav.contact": "Contacto",
        "nav.lang_btn_aria": "Cambiar idioma a inglés",
        "nav.lang_btn_title": "Switch to English",

        // Hero
        "hero.badge": "Disponible para nuevos proyectos / Consultoría",
        "hero.badge_aria": "Estado: Disponible para nuevos proyectos o consultoría",
        "hero.role": "AI Product Designer & UX/UI Specialist",
        "hero.desc": "Diseño productos digitales interactivos e interfaces inteligentes, conectando metodologías centradas en las personas con capacidades de IA generativa para dar vida a nuevas ideas.",
        "hero.cta_projects": "Ver Casos de Estudio ↓",
        "hero.cta_cv": "Ver CV en PDF ↗",
        "hero.cta_cv_aria": "Ver CV en PDF (abre en nueva pestaña)",

        // Sobre Mí
        "about.badge": "Perfil Profesional",
        "about.title": "Sobre Mí",
        "about.desc": "Diseñador UX/UI enfocado en conceptualizar y construir productos tecnológicos desde la idea hasta el prototipo funcional. Con base en psicología y diseño multimedia, integro investigación de usuarios, arquitectura de información y herramientas de IA generativa para resolver problemas reales mediante interfaces claras, humanas e intuitivas.",

        // Experiencia
        "exp.badge": "Trayectoria Profesional",
        "exp.title": "Experiencia",
        "exp.subtitle": "Diseño de producto e interfaces en organizaciones que construyen desde cero.",
        "exp.present": "2024 — Presente",
        "exp.r1_role": "AI Product Designer",
        "exp.r1_b1": "Diseño de producto y arquitectura de interacción para plataforma de automatización de diseño.",
        "exp.r1_b2": "Conceptualización de flujos con agentes secuenciales y componentes de supervisión <em>Human-in-the-Loop</em> (HITL).",
        "exp.r1_b3": "Prototipado interactivo de alta fidelidad para validación funcional.",
        "exp.r2_role": "Product UX Architect",
        "exp.r2_b1": "Diseño integral de experiencia Mobile-First y arquitectura de flujos de onboarding y match.",
        "exp.r2_b2": "Integración de normativas de tenencia responsable (Ley 21.020) en el journey del usuario.",
        "exp.r2_b3": "Exploración e integración de modelos de asistencia de IA mediante Google AI Studio.",
        "exp.r3_role": "Diseñador UX/UI & Product Specialist",
        "exp.r3_b1": "Liderazgo de diseño en múltiples proyectos de software y plataformas web bajo metodología Scrum.",
        "exp.r3_b2": "Creación y mantenimiento de sistemas de diseño en Figma para acelerar el handoff a ingeniería.",
        "exp.r3_b3": "Discovery de usuarios, wireframing y prototipado interactivo de flujos complejos.",

        // Habilidades
        "skills.badge": "Capacidades Clave",
        "skills.title": "Áreas de Expertise",
        "skills.subtitle": "Metodologías, herramientas y estándares para crear productos digitales centrados en las personas.",
        "skills.c1_title": "UX/UI Design & Product Creation",
        "skills.c1_b1": "Diseño Centrado en el Usuario (UCD) & Design Thinking",
        "skills.c1_b2": "Sistemas de diseño escalables y componentes reutilizables en Figma (Auto Layout)",
        "skills.c1_b3": "Arquitectura de información, wireframes y flujos de usuario complejos",
        "skills.c2_title": "Ecosistema Google AI & Prototipado",
        "skills.c2_b1": "Orquestación de modelos con Google AI Studio, Gemini y Gemini Notebook",
        "skills.c2_b2": "Experimentación y prototipado rápido con Stitch y Antigravity",
        "skills.c2_b3": "Diseño de flujos interactivos Human-in-the-Loop (HITL)",
        "skills.c3_title": "Accesibilidad, Normativas & Hand-off",
        "skills.c3_b1": "Accesibilidad digital (WCAG 2.1 AA) y diseño inclusivo",
        "skills.c3_b2": "Mapeo de reglas de negocio, validaciones regulatorias y casos de borde",
        "skills.c3_b3": "Comprensión técnica (HTML/CSS) para comunicación fluida con desarrollo",

        // Casos de Estudio
        "projects.badge": "Portafolio Seleccionado",
        "projects.title": "Casos de Estudio",
        "projects.subtitle": "Soluciones de diseño aplicadas a retos de negocio reales y validación con usuarios.",
        "projects.view_btn": "Ver Caso PDF ↗",
        "projects.p1_tag": "Investigación UX",
        "projects.p1_title": "Tech Future",
        "projects.p1_desc": "Caso de estudio sobre ecosistemas digitales e innovación estratégica impulsada por IA.",
        "projects.p2_desc": "E-commerce de moda sostenible enfocado en optimizar el journey del comprador y reducir fricción.",
        "projects.p3_desc": "Optimización del checkout y rediseño visual para incrementar tasa de conversión en marca urbana.",
        "projects.p4_desc": "Plataforma interactiva para la trazabilidad y gestión comunitaria de residuos orgánicos.",
        "projects.p4_badge_sustain": "Sostenibilidad",

        // Certificaciones
        "certs.badge": "Acreditaciones & Estándares",
        "certs.title": "Certificaciones y Diplomas",
        "certs.subtitle": "Validación académica continua en Diseño de Producto, Gestión Ágil e Inteligencia Artificial.",
        "certs.verified": "Verificado",
        "certs.accredited": "Acreditada",
        "certs.btn_diploma": "Ver Diploma",
        "certs.btn_credential": "Ver Credencial",
        "certs.btn_certificate": "Ver Certificado",
        "certs.c1_title": "Diplomado UX/UI Designer",
        "certs.c1_tooltip": "Especialización de 400+ hrs en User Research, Arquitectura de Información, Prototipado Avanzado y Handoff técnico.",
        "certs.c2_title": "Diseñador UX/UI Certificado",
        "certs.c2_tooltip": "Insignia oficial validada por SENCE en diseño ágil, evaluación heurística y testeos de usabilidad empíricos.",
        "certs.c3_title": "Diplomado Diseño y Gestión Ágil",
        "certs.c3_tooltip": "Dominio de Scrum, Kanban, gestión de prioridades de producto y articulación estratégica con equipos de ingeniería.",
        "certs.c4_title": "Especialización en Design Thinking",
        "certs.c4_tooltip": "Técnicas de descubrimiento de problemas, síntesis de hallazgos, ideación y validación rápida con stakeholders.",
        "certs.c5_title": "Diseño Web Semántico HTML5 + CSS",
        "certs.c5_tooltip": "Estándares de accesibilidad WCAG AA/AAA, diseño responsive, CSS Grid, Flexbox y optimización de carga web.",
        "certs.c6_title": "Fundamentos de IA Generativa",
        "certs.c6_tooltip": "Estrategias de co-creación con LLMs, diseño de interfaces generativas y consideraciones éticas en UX para IA.",

        // Credly
        "credly.title": "Credenciales Verificadas",
        "credly.subtitle": "Insignias digitales oficiales con verificación criptográfica en tiempo real a través de Credly",
        "credly.link": "Ver todas las credenciales en Credly ↗",

        // Weekly Pulse
        "pulse.badge": "Actualidad & Tendencias",
        "pulse.title": "Weekly Pulse",
        "pulse.subtitle": "Selección automatizada semanal con las innovaciones más relevantes en diseño de interacción e IA.",
        "pulse.btn": "Leer Artículo ↗",
        "pulse.a1_title": "Psicología Cognitiva y UX: El poder de los Modelos Mentales",
        "pulse.a1_desc": "Cómo entender la estructura del pensamiento humano nos permite diseñar interfaces que se sienten naturales e intuitivas.",
        "pulse.a2_title": "Carga Cognitiva: El enemigo silencioso de la Usabilidad",
        "pulse.a2_desc": "Estrategias basadas en la psicología para simplificar la toma de decisiones y mejorar la retención del usuario.",
        "pulse.a3_title": "Psicología del Usuario: El puente entre mente y tecnología",
        "pulse.a3_desc": "Análisis de cómo el trasfondo en ciencias del comportamiento transforma radicalmente la arquitectura de información.",

        // Contacto
        "contact.badge": "Hablemos de tu Proyecto",
        "contact.title": "Iniciar Conversación",
        "contact.desc": "¿Buscas potenciar la experiencia de usuario de tu producto o requieres consultoría estratégica? Cuéntame sobre tus objetivos.",
        "contact.name_label": "Nombre completo",
        "contact.name_ph": "Ej. Camila Morales",
        "contact.email_label": "Correo corporativo / personal",
        "contact.email_ph": "camila@empresa.com",
        "contact.msg_label": "Detalles del proyecto o desafío",
        "contact.msg_ph": "Describe brevemente el producto, metas de negocio o fecha estimada...",
        "contact.btn": "Enviar Mensaje",
        "contact.btn_sending": "Enviando...",
        "contact.msg_success": "¡Mensaje enviado! Te responderé a la brevedad.",
        "contact.msg_error": "Por favor, completa todos los campos.",
        "contact.msg_api_error": "Ocurrió un error al enviar. Intenta de nuevo o escríbeme directo a pbustamanteeguia.ux@gmail.com",

        // Footer
        "footer.text": "© 2026 Patricio Bustamante Eguía — AI Product Designer & UX/UI Specialist."
    },
    en: {
        // Nav
        "nav.home": "Home",
        "nav.about": "About Me",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.projects": "Case Studies",
        "nav.certifications": "Certifications",
        "nav.contact": "Contact",
        "nav.lang_btn_aria": "Switch language to Spanish",
        "nav.lang_btn_title": "Cambiar a español",

        // Hero
        "hero.badge": "Available for new projects / Consulting",
        "hero.badge_aria": "Status: Available for new projects or consulting",
        "hero.role": "AI Product Designer & UX/UI Specialist",
        "hero.desc": "I design interactive digital products and intelligent interfaces, connecting human-centered methodologies with generative AI capabilities to bring new ideas to life.",
        "hero.cta_projects": "View Case Studies ↓",
        "hero.cta_cv": "View Resume (PDF) ↗",
        "hero.cta_cv_aria": "View Resume in PDF (opens in new tab)",

        // About Me
        "about.badge": "Professional Profile",
        "about.title": "About Me",
        "about.desc": "UX/UI Designer focused on conceptualizing and building tech products from concept to functional prototype. With a background in psychology and multimedia design, I integrate user research, information architecture, and generative AI tools to solve real-world problems through clear, human, and intuitive interfaces.",

        // Experience
        "exp.badge": "Career History",
        "exp.title": "Experience",
        "exp.subtitle": "Product and interface design in organizations building from the ground up.",
        "exp.present": "2024 — Present",
        "exp.r1_role": "AI Product Designer",
        "exp.r1_b1": "Product design and interaction architecture for design automation platform.",
        "exp.r1_b2": "Flow conceptualization with sequential agents and <em>Human-in-the-Loop</em> (HITL) oversight components.",
        "exp.r1_b3": "High-fidelity interactive prototyping for functional validation.",
        "exp.r2_role": "Product UX Architect",
        "exp.r2_b1": "Comprehensive Mobile-First experience design and onboarding & matching flow architecture.",
        "exp.r2_b2": "Integration of responsible pet ownership regulations (Law 21.020) into the user journey.",
        "exp.r2_b3": "Exploration and integration of AI assistance models via Google AI Studio.",
        "exp.r3_role": "UX/UI Designer & Product Specialist",
        "exp.r3_b1": "Design leadership across multiple software projects and web platforms under Scrum methodology.",
        "exp.r3_b2": "Creation and maintenance of design systems in Figma to accelerate engineering handoff.",
        "exp.r3_b3": "User discovery, wireframing, and interactive prototyping of complex user flows.",

        // Skills
        "skills.badge": "Core Competencies",
        "skills.title": "Areas of Expertise",
        "skills.subtitle": "Methodologies, tools, and standards to build human-centered digital products.",
        "skills.c1_title": "UX/UI Design & Product Creation",
        "skills.c1_b1": "User-Centered Design (UCD) & Design Thinking",
        "skills.c1_b2": "Scalable design systems and reusable components in Figma (Auto Layout)",
        "skills.c1_b3": "Information architecture, wireframing, and complex user flows",
        "skills.c2_title": "Google AI Ecosystem & Prototyping",
        "skills.c2_b1": "Model orchestration with Google AI Studio, Gemini, and Gemini Notebook",
        "skills.c2_b2": "Rapid experimentation and prototyping with Stitch and Antigravity",
        "skills.c2_b3": "Human-in-the-Loop (HITL) interactive flow design",
        "skills.c3_title": "Accessibility, Standards & Hand-off",
        "skills.c3_b1": "Digital accessibility (WCAG 2.1 AA) and inclusive design",
        "skills.c3_b2": "Business rules mapping, regulatory validations, and edge cases",
        "skills.c3_b3": "Technical understanding (HTML/CSS) for seamless developer hand-off",

        // Case Studies
        "projects.badge": "Selected Portfolio",
        "projects.title": "Case Studies",
        "projects.subtitle": "Design solutions applied to real business challenges and validated with users.",
        "projects.view_btn": "View Case PDF ↗",
        "projects.p1_tag": "UX Research",
        "projects.p1_title": "Tech Future",
        "projects.p1_desc": "Case study on digital ecosystems and strategic innovation driven by AI.",
        "projects.p2_desc": "Sustainable fashion e-commerce focused on optimizing the buyer journey and reducing friction.",
        "projects.p3_desc": "Checkout optimization and visual redesign to increase conversion rates for an urban brand.",
        "projects.p4_desc": "Interactive platform for traceability and community management of organic waste.",
        "projects.p4_badge_sustain": "Sustainability",

        // Certifications
        "certs.badge": "Accreditations & Standards",
        "certs.title": "Certifications & Diplomas",
        "certs.subtitle": "Continuous academic validation in Product Design, Agile Management, and Artificial Intelligence.",
        "certs.verified": "Verified",
        "certs.accredited": "Accredited",
        "certs.btn_diploma": "View Diploma",
        "certs.btn_credential": "View Credential",
        "certs.btn_certificate": "View Certificate",
        "certs.c1_title": "UX/UI Designer Postgraduate Diploma",
        "certs.c1_tooltip": "400+ hr specialization in User Research, Information Architecture, Advanced Prototyping, and technical Handoff.",
        "certs.c2_title": "Certified UX/UI Designer",
        "certs.c2_tooltip": "Official badge validated by SENCE in agile design, heuristic evaluation, and empirical usability testing.",
        "certs.c3_title": "Agile Design & Management Diploma",
        "certs.c3_tooltip": "Mastery of Scrum, Kanban, product priority management, and strategic alignment with engineering teams.",
        "certs.c4_title": "Design Thinking Specialization",
        "certs.c4_tooltip": "Problem discovery techniques, findings synthesis, ideation, and rapid validation with stakeholders.",
        "certs.c5_title": "Semantic Web Design HTML5 + CSS",
        "certs.c5_tooltip": "WCAG AA/AAA accessibility standards, responsive design, CSS Grid, Flexbox, and web performance optimization.",
        "certs.c6_title": "Generative AI Fundamentals",
        "certs.c6_tooltip": "Co-creation strategies with LLMs, generative interface design, and ethical UX considerations for AI.",

        // Credly
        "credly.title": "Verified Credentials",
        "credly.subtitle": "Official digital badges with real-time cryptographic verification through Credly",
        "credly.link": "View all credentials on Credly ↗",

        // Weekly Pulse
        "pulse.badge": "News & Trends",
        "pulse.title": "Weekly Pulse",
        "pulse.subtitle": "Curated weekly selection featuring the most relevant innovations in interaction design and AI.",
        "pulse.btn": "Read Article ↗",
        "pulse.a1_title": "Cognitive Psychology & UX: The Power of Mental Models",
        "pulse.a1_desc": "How understanding human thought structures enables designing interfaces that feel natural and intuitive.",
        "pulse.a2_title": "Cognitive Load: The Silent Enemy of Usability",
        "pulse.a2_desc": "Psychology-based strategies to simplify decision making and improve user retention.",
        "pulse.a3_title": "User Psychology: The Bridge Between Mind and Technology",
        "pulse.a3_desc": "Analysis of how behavioral science backgrounds fundamentally transform information architecture.",

        // Contact
        "contact.badge": "Let's Talk About Your Project",
        "contact.title": "Start a Conversation",
        "contact.desc": "Looking to elevate your product's user experience or need strategic consulting? Tell me about your goals.",
        "contact.name_label": "Full Name",
        "contact.name_ph": "e.g. Alex Morgan",
        "contact.email_label": "Work / Personal Email",
        "contact.email_ph": "alex@company.com",
        "contact.msg_label": "Project or challenge details",
        "contact.msg_ph": "Briefly describe the product, business goals, or estimated timeline...",
        "contact.btn": "Send Message",
        "contact.btn_sending": "Sending...",
        "contact.msg_success": "Message sent! I'll get back to you shortly.",
        "contact.msg_error": "Please complete all fields.",
        "contact.msg_api_error": "An error occurred while sending. Please try again or email me directly at pbustamanteeguia.ux@gmail.com",

        // Footer
        "footer.text": "© 2026 Patricio Bustamante Eguía — AI Product Designer & UX/UI Specialist."
    }
};

let currentLang = 'es';
try {
    const saved = localStorage.getItem('portfolio_lang');
    if (saved === 'en' || saved === 'es') currentLang = saved;
} catch (e) {}

function setLanguage(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    try {
        localStorage.setItem('portfolio_lang', lang);
    } catch (e) {}

    document.documentElement.lang = lang;

    const toggleBtn = document.getElementById('langToggle');
    const toggleText = document.getElementById('langToggleText');
    if (toggleBtn && toggleText) {
        const nextLang = lang === 'es' ? 'en' : 'es';
        toggleText.textContent = nextLang.toUpperCase();
        toggleBtn.setAttribute('aria-label', translations[lang]['nav.lang_btn_aria']);
        toggleBtn.setAttribute('title', translations[lang]['nav.lang_btn_title']);
    }

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (translations[lang] && translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    document.querySelectorAll('[data-i18n-aria]').forEach(el => {
        const key = el.getAttribute('data-i18n-aria');
        if (translations[lang] && translations[lang][key]) {
            el.setAttribute('aria-label', translations[lang][key]);
        }
    });
}

// Inicialización de evento para el botón de traducción
const langToggle = document.getElementById('langToggle');
if (langToggle) {
    langToggle.addEventListener('click', () => {
        const targetLang = currentLang === 'es' ? 'en' : 'es';
        setLanguage(targetLang);
    });
}

// Aplicar idioma guardado al cargar
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => setLanguage(currentLang));
} else {
    setLanguage(currentLang);
}

// ===== MENÚ HAMBURGUESA =====
const hamburgerBtn = document.getElementById('hamburgerBtn');
const navList = document.getElementById('navList');

hamburgerBtn.addEventListener('click', () => {
    const isOpen = navList.classList.toggle('header-nav__list--open');
    hamburgerBtn.classList.toggle('header-nav__hamburger--open', isOpen);
    hamburgerBtn.setAttribute('aria-expanded', isOpen.toString());
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('.header-nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('header-nav__list--open');
        hamburgerBtn.classList.remove('header-nav__hamburger--open');
        hamburgerBtn.setAttribute('aria-expanded', 'false');
    });
});

// ===== SCROLL: nav con fondo al hacer scroll =====
const nav = document.getElementById('header-nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('header-nav--scrolled', window.scrollY > 50);
});

// ===== MODAL DE IMAGEN =====
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImg');
const modalCaption = document.getElementById('modalCaption');
const modalClose = document.getElementById('modalClose');

function openModal(src, caption) {
    modal.style.display = 'flex';
    modalImg.src = src;
    modalImg.alt = caption || '';
    if (caption) modalCaption.textContent = caption;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
}

modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
modalClose.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });

// ===== FORMULARIO DE CONTACTO (EmailJS) =====
// ─────────────────────────────────────────────────────────────────
//  CONFIGURACIÓN: Reemplaza los valores entre comillas con los tuyos
//  obtenidos en https://www.emailjs.com
// ─────────────────────────────────────────────────────────────────
const EMAILJS_PUBLIC_KEY  = 'J1_wfPu9sLCyfnMvw';
const EMAILJS_SERVICE_ID  = 'service_08tvtaj';
const EMAILJS_TEMPLATE_ID = 'template_uz7bef9';

// Inicialización de EmailJS (a prueba de ad-blockers)
(function () {
    if (typeof emailjs !== 'undefined') {
        emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
})();

const contactForm = document.getElementById('contactForm');
const submitBtn   = document.getElementById('submitBtn');
const formFeedback = document.getElementById('formFeedback');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name    = document.getElementById('name').value.trim();
    const email   = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!name || !email || !message) {
        formFeedback.textContent = translations[currentLang]['contact.msg_error'];
        formFeedback.className = 'contact-form__feedback contact-form__feedback--error';
        return;
    }

    submitBtn.textContent = translations[currentLang]['contact.btn_sending'];
    submitBtn.disabled    = true;
    formFeedback.textContent = '';
    formFeedback.className   = 'contact-form__feedback';

    const templateParams = {
        name:      name,
        email:     email,
        message:   message,
        reply_to:  email
    };

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateParams)
        .then(() => {
            formFeedback.textContent = translations[currentLang]['contact.msg_success'];
            formFeedback.className   = 'contact-form__feedback contact-form__feedback--success';
            contactForm.reset();
        })
        .catch((err) => {
            console.error('EmailJS error:', err);
            formFeedback.textContent = translations[currentLang]['contact.msg_api_error'];
            formFeedback.className   = 'contact-form__feedback contact-form__feedback--error';
        })
        .finally(() => {
            submitBtn.textContent = translations[currentLang]['contact.btn'];
            submitBtn.disabled    = false;
        });
});

// ===== ANIMACIONES DE SCROLL (Intersection Observer) =====
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('reveal--visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

revealElements.forEach(el => revealObserver.observe(el));


// ===== TREND HUNTER SKILL (Curated News Radar) =====
const newsGrid = document.getElementById('newsGrid');

function fetchWeeklyPulse() {
    // Hemos pasado a un sistema de Curaduría Editorial para garantizar contenido de alta gama y evitar errores de consola
    const curatedNews = [
        {
            title: "Psicología Cognitiva y UX: El poder de los Modelos Mentales",
            source: { name: "UX Psychology Weekly" },
            url: "https://uxdesign.cc/",
            description: "Cómo entender la estructura del pensamiento humano nos permite diseñar interfaces que se sienten naturales e intuitivas.",
            urlToImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=600&h=360&q=80"
        },
        {
            title: "Carga Cognitiva: El enemigo silencioso de la Usabilidad",
            source: { name: "HCI Labs" },
            url: "https://lawsofux.com/hicks-law/",
            description: "Estrategias basadas en la psicología para simplificar la toma de decisiones y mejorar la retención del usuario.",
            urlToImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&h=360&q=80"
        },
        {
            title: "Psicología del Usuario: El puente entre mente y tecnología",
            source: { name: "Behavioral UX" },
            url: "https://www.nngroup.com/articles/",
            description: "Análisis de cómo el trasfondo en ciencias del comportamiento transforma radicalmente la arquitectura de información.",
            urlToImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=600&h=360&q=80"
        }
    ];

    if (newsGrid && newsGrid.children.length === 0) {
        curatedNews.forEach((news, idx) => {
            const delay = idx * 0.1;
            const imgSrc = news.urlToImage;
            const cardHtml = `
            <article class="news-card reveal reveal--visible" style="transition-delay: ${delay}s">
                <div class="news-card__image-wrapper">
                    <img src="${imgSrc}" alt="${news.title}" class="news-card__image" loading="lazy" width="600" height="360" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="news-card__placeholder" style="display:none;">📰 Sin Imagen</div>
                </div>
                <div class="news-card__content">
                    <span class="news-card__source">${news.source.name}</span>
                    <h3 class="news-card__title">${news.title}</h3>
                    <p class="news-card__summary">${news.description}</p>
                    <a href="${news.url}" target="_blank" rel="noopener noreferrer" class="news-card__btn">Leer Artículo ↗</a>
                </div>
            </article>`;
            newsGrid.innerHTML += cardHtml;
        });
    }
}

// Inicialización de Skills
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchWeeklyPulse);
} else {
    fetchWeeklyPulse();
}

// ===== SEGURIDAD Y PROTECCIÓN DE CONTENIDO =====

// 1. Trampa de Debugger (Pausa la ejecución si se abren las DevTools)
// Solo se activa si detecta un cambio en la velocidad de ejecución o manualmente al inspeccionar
(function() {
    const trap = function() {
        setInterval(function() {
            debugger;
        }, 100);
    };
    // Esta función se activará en cascada si alguien intenta depurar
    const block = function() {
        const start = new Date();
        debugger;
        const end = new Date();
        if (end - start > 100) {
            // Intento de depuración detectado
            document.body.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100vh;flex-direction:column;font-family:sans-serif;"><h1>Acceso Denegado</h1><p>Las herramientas de desarrollo no están permitidas en este sitio.</p><button onclick="location.reload()">Reintentar</button></div>';
        }
    };
    // Activamos un detector ligero
    setInterval(block, 2000);
})();

// 2. Deshabilitar clic derecho
document.addEventListener('contextmenu', event => event.preventDefault());

// 3. Deshabilitar copiar (Ctrl+C / Menú Edición)
document.addEventListener('copy', (e) => {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault();
    }
});

// 4. Bloquear atajos de teclado críticos (Windows & Mac)
document.addEventListener('keydown', (e) => {
    // Teclas comunes: F12, Ctrl+U, Ctrl+Shift+I/J/C, Ctrl+S
    // Meta es la tecla Command en Mac
    const isControlOrMeta = e.ctrlKey || e.metaKey;
    const isShift = e.shiftKey;
    const isAlt = e.altKey;

    // F12
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }

    // Ctrl+U o Cmd+Opt+U (Ver código fuente)
    if (isControlOrMeta && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+Shift+I o Cmd+Opt+I (Inspeccionar)
    if (isControlOrMeta && (isShift || isAlt) && (e.key === 'i' || e.key === 'I' || e.key === 'j' || e.key === 'J' || e.key === 'c' || e.key === 'C' || [73, 74, 67].includes(e.keyCode))) {
        e.preventDefault();
        return false;
    }

    // Ctrl+S o Cmd+S (Guardar página)
    if (isControlOrMeta && (e.key === 's' || e.key === 'S' || e.keyCode === 83)) {
        e.preventDefault();
        return false;
    }

    // Ctrl+C o Cmd+C (Copiar) - Solo fuera de inputs
    if (isControlOrMeta && (e.key === 'c' || e.key === 'C' || e.keyCode === 67)) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
            return false;
        }
    }
});
