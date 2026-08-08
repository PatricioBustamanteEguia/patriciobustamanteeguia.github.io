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

// Inicialización de EmailJS
(function () {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
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
        formFeedback.textContent = 'Por favor, completa todos los campos.';
        formFeedback.className = 'contact-form__feedback contact-form__feedback--error';
        return;
    }

    submitBtn.textContent = 'Enviando...';
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
            formFeedback.textContent = '¡Mensaje enviado! Te responderé a la brevedad.';
            formFeedback.className   = 'contact-form__feedback contact-form__feedback--success';
            contactForm.reset();
        })
        .catch((err) => {
            console.error('EmailJS error:', err);
            formFeedback.textContent = 'Ocurrió un error al enviar. Intenta de nuevo o escríbeme directo a pbustamanteeguia.ux@gmail.com';
            formFeedback.className   = 'contact-form__feedback contact-form__feedback--error';
        })
        .finally(() => {
            submitBtn.textContent = 'Enviar Propuesta';
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

// ===== SISTEMA DE PARTÍCULAS (Red Neuronal) =====
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
let particles = [];
let mouse = { x: null, y: null, radius: 150 };

window.addEventListener('resize', init);
window.addEventListener('mousemove', (e) => { mouse.x = e.clientX; mouse.y = e.clientY; });
window.addEventListener('mouseleave', () => { mouse.x = null; mouse.y = null; });

class Particle {
    constructor() { this.reset(); }
    reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.dx = (Math.random() - 0.5) * 0.5;
        this.dy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 4; /* Radio entre 4px y 6px */
    }
    update() {
        if (this.x > canvas.width || this.x < 0) this.dx *= -1;
        if (this.y > canvas.height || this.y < 0) this.dy *= -1;
        this.x += this.dx;
        this.y += this.dy;

        if (mouse.x !== null) {
            let dist = Math.hypot(this.x - mouse.x, this.y - mouse.y);
            if (dist < mouse.radius) {
                if (mouse.x < this.x && this.x < canvas.width - 10) this.x += 2;
                if (mouse.x > this.x && this.x > 10) this.x -= 2;
                if (mouse.y < this.y && this.y < canvas.height - 10) this.y += 2;
                if (mouse.y > this.y && this.y > 10) this.y -= 2;
            }
        }
        this.draw();
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(176, 196, 222, 0.2)'; /* Núcleo sutil con baja opacidad */
        ctx.fill();
    }
}

function init() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    particles = [];
    // Sentinel Skill: Densidad aumentada un 20% para mayor impacto visual
    const count = window.innerWidth < 768
        ? Math.floor((canvas.width * canvas.height) / 25000)
        : Math.floor((canvas.width * canvas.height) / 16000); 
    for (let i = 0; i < count; i++) particles.push(new Particle());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => p.update());
    connect();
    requestAnimationFrame(animate);
}

function connect() {
    for (let a = 0; a < particles.length; a++) {
        for (let b = a + 1; b < particles.length; b++) {
            let dist = Math.hypot(particles[a].x - particles[b].x, particles[a].y - particles[b].y);
            if (dist < 280) { /* Umbral aumentado a 280px */
                const opacity = 1 - (dist / 280);
                const lineWidth = 0.8 + (1 - dist / 280) * 0.4; /* Grosor variable entre 0.8px y 1.2px */
                
                ctx.strokeStyle = `rgba(176, 196, 222, ${opacity * 0.5})`; /* Opacidad dependiente de la distancia */
                ctx.lineWidth = lineWidth;
                ctx.beginPath();
                ctx.moveTo(particles[a].x, particles[a].y);
                ctx.lineTo(particles[b].x, particles[b].y);
                ctx.stroke();
            }
        }
    }
}

init();
animate();

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
            urlToImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&w=400&q=80"
        },
        {
            title: "Carga Cognitiva: El enemigo silencioso de la Usabilidad",
            source: { name: "HCI Labs" },
            url: "https://lawsofux.com/hicks-law/",
            description: "Estrategias basadas en la psicología para simplificar la toma de decisiones y mejorar la retención del usuario.",
            urlToImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
        },
        {
            title: "Psicología del Usuario: El puente entre mente y tecnología",
            source: { name: "Behavioral UX" },
            url: "https://www.nngroup.com/articles/",
            description: "Análisis de cómo el trasfondo en ciencias del comportamiento transforma radicalmente la arquitectura de información.",
            urlToImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=400&q=80"
        }
    ];

    if (newsGrid) {
        newsGrid.innerHTML = '';
        curatedNews.forEach((news, idx) => {
            const delay = idx * 0.1;
            const imgSrc = news.urlToImage;
            const cardHtml = `
            <div class="news-card reveal reveal--visible" style="transition-delay: ${delay}s">
                <div class="news-card__image-wrapper">
                    <img src="${imgSrc}" alt="${news.title}" class="news-card__image" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
                    <div class="news-card__placeholder" style="display:none;">📰 Sin Imagen</div>
                </div>
                <div class="news-card__content">
                    <span class="news-card__source">${news.source.name}</span>
                    <h3 class="news-card__title">${news.title}</h3>
                    <p class="news-card__summary">${news.description}</p>
                    <a href="${news.url}" target="_blank" class="news-card__btn">Leer Artículo ↗</a>
                </div>
            </div>`;
            newsGrid.innerHTML += cardHtml;
        });
    }
}

// Inicialización de Skills
window.addEventListener('load', fetchWeeklyPulse);

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
