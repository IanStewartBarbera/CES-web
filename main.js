// Función principal para cambiar secciones
function showSection(sectionName) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.classList.add('hidden');
    });

    // Mostrar sección seleccionada
    const targetSection = document.getElementById(sectionName + '-section');
    if (targetSection) {
        targetSection.classList.remove('hidden');
        
        // Si es una sección que no sea 'centre', cargar contenido dinámicamente
        if (sectionName !== 'centre' && sectionContent[sectionName]) {
            targetSection.innerHTML = sectionContent[sectionName];

            // Aplicar traducción al contenido recién insertado
            const savedLang = localStorage.getItem('selectedLang') || 'cat';
            translatePage(savedLang);
        }
        
        // Reiniciar animación
        targetSection.style.animation = 'none';
        targetSection.offsetHeight; // Trigger reflow
        targetSection.style.animation = 'fadeInUp 0.8s ease forwards';
    }

    // Actualizar navegación activa
    updateActiveNavigation(sectionName);
}

// Función para actualizar el estado activo de la navegación
function updateActiveNavigation(activeSectionName) {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    // Encontrar y activar el enlace correspondiente
    const activeLink = document.querySelector(`.nav-link[onclick*="${activeSectionName}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Función para manejar el formulario de contacto
function handleContactForm() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Obtener datos del formulario
            const formData = new FormData(form);
            const data = {
                nom: formData.get('nom'),
                email: formData.get('email'),
                telefon: formData.get('telefon'),
                missatge: formData.get('missatge')
            };
            
            // Validación básica
            if (!data.nom || !data.email || !data.missatge) {
                alert('Si us plau, omple tots els camps obligatoris.');
                return;
            }
            
            // Validación de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(data.email)) {
                alert('Si us plau, introdueix un email vàlid.');
                return;
            }
            
            // Simular envío del formulario
            showSuccessMessage();
            form.reset();
        });
    }
}

// Función para mostrar mensaje de éxito
function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.innerHTML = `
        <div style="background: #10b981; color: white; padding: 15px; border-radius: 10px; margin: 20px 0; text-align: center;">
            <strong>✅ Missatge enviat correctament!</strong><br>
            Ens posarem en contacte amb tu aviat.
        </div>
    `;
    
    const form = document.getElementById('contact-form');
    if (form) {
        form.parentNode.insertBefore(successDiv, form);
        
        // Eliminar mensaje después de 5 segundos
        setTimeout(() => {
            successDiv.remove();
        }, 5000);
    }
}

// Función para añadir efectos de scroll suave
function addSmoothScrolling() {
    // Detectar cuando las secciones entran en el viewport
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    // Observar todas las tarjetas de curso
    const courseCards = document.querySelectorAll('.course-card');
    courseCards.forEach(card => {
        observer.observe(card);
    });
}

// Función para añadir efectos hover dinámicos
function addHoverEffects() {
    // Efecto para las tarjetas de curso
    document.addEventListener('mouseover', function(e) {
        if (e.target.closest('.course-card')) {
            const card = e.target.closest('.course-card');
            card.style.transform = 'translateY(-10px) scale(1.02)';
        }
    });

    document.addEventListener('mouseout', function(e) {
        if (e.target.closest('.course-card')) {
            const card = e.target.closest('.course-card');
            card.style.transform = 'translateY(0) scale(1)';
        }
    });
}

// Función para manejar el menú responsive
function handleResponsiveMenu() {
    // Crear botón de menú móvil si no existe
    const nav = document.querySelector('nav .container');
    if (nav && window.innerWidth <= 768) {
        const existingButton = document.querySelector('.mobile-menu-button');
        if (!existingButton) {
            const menuButton = document.createElement('button');
            menuButton.className = 'mobile-menu-button';
            menuButton.innerHTML = '☰';
            menuButton.style.cssText = `
                display: none;
                background: linear-gradient(135deg, #4f46e5, #7c3aed);
                color: white;
                border: none;
                padding: 10px 15px;
                border-radius: 5px;
                font-size: 1.2rem;
                cursor: pointer;
                position: absolute;
                top: 10px;
                right: 20px;
            `;
            
            menuButton.addEventListener('click', toggleMobileMenu);
            nav.appendChild(menuButton);
        }
    }
}

// Función para alternar el menú móvil
function toggleMobileMenu() {
    const navMenu = document.querySelector('.nav-menu');
    const menuButton = document.querySelector('.mobile-menu-button');
    
    if (navMenu.style.display === 'none' || !navMenu.style.display) {
        navMenu.style.display = 'flex';
        menuButton.innerHTML = '✕';
    } else {
        navMenu.style.display = 'none';
        menuButton.innerHTML = '☰';
    }
}

// Función para inicializar la aplicación
function initializeApp() {
    // Configurar manejadores de eventos
    handleContactForm();
    addSmoothScrolling();
    addHoverEffects();
    
    // Manejar redimensionamiento de ventana
    window.addEventListener('resize', handleResponsiveMenu);
    handleResponsiveMenu();
    
    // Mostrar sección inicial
    showSection('centre');
    
    console.log('Centre d\'Estudis Sabadell - Aplicación inicializada correctamente');
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', initializeApp);