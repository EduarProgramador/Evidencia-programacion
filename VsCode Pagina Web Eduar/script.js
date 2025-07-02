document.addEventListener('DOMContentLoaded', function() {

    
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const closeNav = () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
        navLinks.forEach(link => {
            link.style.animation = '';
        });
    }

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
            }
        });
        
        burger.classList.toggle('toggle');
    });

    nav.addEventListener('click', (e) => {
        if (e.target.tagName === 'A') { 
            closeNav();
        }
    });

    const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true
    });

    sr.reveal('#hero .hero-text h1', {});
    sr.reveal('#hero .hero-text p', { delay: 200 });
    sr.reveal('#hero .cta-button', { delay: 400 });
    sr.reveal('.container h2', {});
    sr.reveal('#about .profile-pic', { origin: 'left' });
    sr.reveal('#about p', { origin: 'right' });
    sr.reveal('.service-card', { interval: 200 });
    sr.reveal('.portfolio-filters', {});
    sr.reveal('.portfolio-item', { interval: 200 });
    sr.reveal('.blog-post', { interval: 200 });
    sr.reveal('.contact-form', {});
    sr.reveal('.social-links', { delay: 200 });

    if (document.querySelector('.portfolio-grid')) {
        var mixer = mixitup('.portfolio-grid');
    }

});