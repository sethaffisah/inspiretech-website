// ==================== Mobile Menu Toggle ====================
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==================== Smooth Scrolling ====================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== CTA Button Animation ====================
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('click', () => {
        const servicesSection = document.getElementById('services');
        servicesSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

// ==================== Scroll Animation ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe service and product cards
document.querySelectorAll('.service-card, .product-card, .feature-card').forEach(card => {
    card.style.opacity = '0';
    observer.observe(card);
});

// ==================== Active Navigation Link ====================
window.addEventListener('scroll', () => {
    let current = '';
    
    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==================== Navbar Background on Scroll ====================
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(26, 26, 26, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--primary-color)';
    }
});

// ==================== Console Message ====================
console.log('%c🎨 Welcome to InspireTech Consult', 'color: #d4af37; font-size: 20px; font-weight: bold;');
console.log('%cPremium Graphic Design & Computer Accessories', 'color: #d4af37; font-size: 14px;');

document.querySelectorAll('.order-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
        var product = encodeURIComponent(this.getAttribute('data-product'));
        var url = `https://wa.me/233596182403?text=Hi%20InspireTech%2C%20I%20want%20to%20order%20the%20${product}.`;
        window.open(url, '_blank');
    });
});
