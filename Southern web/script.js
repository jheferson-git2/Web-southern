// Slider automático y manual
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(n) {
    slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === n);
        dots[i].classList.toggle('active', i === n);
    });
    currentSlide = n;
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
}

function startSlider() {
    slideInterval = setInterval(nextSlide, 4500);
}

function stopSlider() {
    clearInterval(slideInterval);
}

if (slides.length && dots.length) {
    dots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showSlide(i);
            stopSlider();
            startSlider();
        });
    });
    showSlide(0);
    startSlider();
}

// Transición entre páginas
function pageTransition() {
    const trans = document.querySelector('.page-transition');
    if (trans) {
        setTimeout(() => trans.classList.add('visible'), 50);
    }
}
window.addEventListener('DOMContentLoaded', pageTransition);

// Navegación al home desde el logo
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.logo');
    if (logo) {
        logo.addEventListener('click', () => {
            if (window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '') return;
            document.body.classList.remove('page-transition', 'visible');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 350);
        });
    }
});

// Navegación interna con transición
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.submenu li a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            document.body.classList.remove('page-transition', 'visible');
            setTimeout(() => {
                window.location.href = href;
            }, 350);
        });
    });
});


document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.submenu li a').forEach(link => {
        link.addEventListener('click', function(e) {
            // Solo intercepta click izquierdo SIN modificadores
            if (e.button === 0 && !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                e.preventDefault();
                const href = this.getAttribute('href');
                document.body.classList.remove('page-transition', 'visible');
                setTimeout(() => {
                    window.location.href = href;
                }, 350);
            }
            // Si el usuario usa Ctrl/clic central, deja que el navegador abra en nueva pestaña
        });
    });
});