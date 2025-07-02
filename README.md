<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Eduar Espitia | Creación de Contenido, Marketing Digital y Desarrollo Web</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

    <header>
        <nav>
            <a href="#" class="logo">Eduar Espitia</a>
            <ul class="nav-links">
                <li><a href="#about">Acerca de Mí</a></li>
                <li><a href="#services">Servicios</a></li>
                <li><a href="#portfolio">Portafolio</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </nav>

        <section id="hero">
            <div class="hero-text">
                <h1>Hola, soy Eduar Espitia </h1>
                <p>Especialista en Creación de Contenidos, Marketing Digital y Desarrollo Web</p>
                <a href="#portfolio" class="cta-button">Ver mis Proyectos</a>
            </div>
        </section>
    </header>

    <main>
        <section id="about" class="container">
            <h2>Acerca de Mí</h2>
            <div class="about-content">
                <img src="img/Foto Eduar.jpeg" alt="Tu Foto de Perfil" class="profile-pic">
                <p>¡Hola! Soy un apasionado de la tecnología y la comunicación. Mi curiosidad me ha llevado a especializarme en el dinámico cruce de caminos entre la creación de contenidos, el marketing digital y el desarrollo web. Disfruto construyendo experiencias digitales que no solo se ven bien, sino que también cumplen objetivos estratégicos y conectan con la audiencia. Me encanta aprender constantemente y aplicar nuevas tecnologías para ofrecer soluciones creativas y efectivas.</p>
            </div>
        </section>

        <section id="services" class="container">
            <h2>Mis Servicios</h2>
            <div class="services-grid">
                <div class="service-card">
                    <i class="fas fa-pen-nib"></i>
                    <h3>Creación de Contenidos</h3>
                    <p>Desarrollo de contenido atractivo y de valor para blogs, redes sociales y sitios web, optimizado para SEO y para tu audiencia objetivo.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-bullhorn"></i>
                    <h3>Marketing Digital</h3>
                    <p>Estrategias de marketing digital integrales, incluyendo SEO, SEM, marketing en redes sociales y email marketing para aumentar tu visibilidad y conversiones.</p>
                </div>
                <div class="service-card">
                    <i class="fas fa-code"></i>
                    <h3>Desarrollo Web</h3>
                    <p>Diseño y desarrollo de sitios web modernos, responsivos y optimizados para el rendimiento, desde landing pages hasta sitios corporativos completos.</p>
                </div>
            </div>
        </section>

        <section id="portfolio" class="container">
            <h2>Portafolio</h2>
            <div class="portfolio-filters">
                <button type="button" data-filter="all">Todos</button>
                <button type="button" data-filter=".content">Contenido</button>
                <button type="button" data-filter=".marketing">Marketing</button>
                <button type="button" data-filter=".web">Desarrollo Web</button>
            </div>
            <div class="portfolio-grid">
                <div class="portfolio-item mix content">
                    <img src="img/estrategia de contenidos 2.png" alt="Proyecto 1">
                    <div class="portfolio-info">
                        <h3>Estrategia de Contenidos para Blog</h3>
                        <p>Creación de Contenido</p>
                    </div>
                </div>
                <div class="portfolio-item mix marketing">
                    <img src="img/campaña de redes.png" alt="Proyecto 2">
                    <div class="portfolio-info">
                        <h3>Campaña de Redes Sociales</h3>
                        <p>Marketing Digital</p>
                    </div>
                </div>
                <div class="portfolio-item mix web">
                    <img src="img/paginas web.png" alt="Proyecto 3">
                    <div class="portfolio-info">
                        <h3>Sitio Web Corporativo</h3>
                        <p>Desarrollo Web</p>
                    </div>
                </div>
                <div class="portfolio-item mix marketing content">
                    <img src="img/email marketing.png" alt="Proyecto 4">
                    <div class="portfolio-info">
                        <h3>Campaña de Email Marketing y Contenido</h3>
                        <p>Marketing y Contenido</p>
                    </div>
                </div>
                 <div class="portfolio-item mix web">
                    <img src="img/desarrollo web.png" alt="Proyecto 5">
                    <div class="portfolio-info">
                        <h3>E-commerce con WordPress</h3>
                        <p>Desarrollo Web</p>
                    </div>
                </div>
                 <div class="portfolio-item mix content">
                    <img src="img/guion de video.png" alt="Proyecto 6">
                    <div class="portfolio-info">
                        <h3>Creación de Guión para Video</h3>
                        <p>Creación de Contenido</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="blog" class="container">
            <h2>Mi Blog</h2>
            <div class="blog-grid">
                <div class="blog-post">
                    <img src="img/tendencias de marketing.png" alt="Artículo de Blog 1">
                    <h3>Las 5 Tendencias de Marketing Digital para 2025</h3>
                    <p>Un análisis de las tendencias que marcarán el futuro del marketing digital.</p>
                    <a href="#" class="read-more">Leer Más</a>
                </div>
                <div class="blog-post">
                    <img src="img/google ame.png" alt="Artículo de Blog 2">
                    <h3>Cómo Escribir Contenido que Google Ame</h3>
                    <p>Una guía práctica para mejorar el SEO de tus artículos de blog.</p>
                    <a href="#" class="read-more">Leer Más</a>
                </div>
                <div class="blog-post">
                    <img src="img/react.png" alt="Artículo de Blog 3">
                    <h3>React vs. Vue: ¿Cuál elegir para tu próximo proyecto?</h3>
                    <p>Una comparativa técnica entre dos de los frameworks de JavaScript más populares.</p>
                    <a href="#" class="read-more">Leer Más</a>
                </div>
            </div>
        </section>

        <section id="contact" class="container">
            <h2>Contacto</h2>
            <p>¿Tienes un proyecto en mente? ¡Hablemos!</p>
            <form action="#" method="POST" class="contact-form">
    <label for="name" class="sr-only">Tu Nombre</label>
    <input type="text" id="name" name="name" placeholder="Tu Nombre" required>

    <label for="email" class="sr-only">Tu Email</label>
    <input type="email" id="email" name="email" placeholder="Tu Email" required>

    <label for="message" class="sr-only">Tu Mensaje</label>
    <textarea id="message" name="message" placeholder="Tu Mensaje" required></textarea>
    
    <button type="submit" class="cta-button">Enviar Mensaje</button>
</form>
            <div class="social-links">
    <a href="https://www.instagram.com/soyeduarespitia/" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"></i></a>
    <a href="https://www.facebook.com/profile.php?id=61577264605153" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook"></i></a>
    </div>
        </section>
    </main>

    <footer>
        <p>© 2025 Eduar Espitia. Todos los derechos reservados.</p>
    </footer>

    <script src="https://unpkg.com/scrollreveal"></script>
    <script src="https://cdn.jsdelivr.net/npm/mixitup@3/dist/mixitup.min.js"></script>
    <script src="script.js"></script>
</body>
</html>
:root {
    --primary-color: #05F0B1;
    --secondary-color: #1a1a1a;
    --background-color: #ffffff;
    --text-color: #333333;
    --light-gray: #f8f8f8;
    --dark-text: #0a0a0a;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Roboto', sans-serif;
    color: var(--text-color);
    background-color: var(--background-color);
    line-height: 1.6;
}

html {
    scroll-behavior: smooth;
}

.container {
    max-width: 1100px;
    margin: auto;
    padding: 4rem 2rem;
    overflow: hidden;
}

h1, h2, h3 {
    font-family: 'Montserrat', sans-serif;
    font-weight: 700;
}

h2 {
    text-align: center;
    margin-bottom: 2rem;
    font-size: 2.5rem;
    color: var(--dark-text);
}

header {
    background: var(--secondary-color);
    color: #fff;
    min-height: 100vh;
    position: relative;
}

nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    background: rgba(44, 62, 80, 0.9);
    transition: background 0.3s ease;
}

nav .logo {
    color: #fff;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: 700;
}

.nav-links {
    display: flex;
    list-style: none;
}

.nav-links li {
    padding: 0 1rem;
}

.nav-links a {
    color: #fff;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.nav-links a:hover {
    color: var(--primary-color);
}

.burger {
    display: none;
    cursor: pointer;
}

.burger div {
    width: 25px;
    height: 3px;
    background-color: white;
    margin: 5px;
    transition: all 0.3s ease;
}

#hero {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100vh;
}

.hero-text h1 {
    font-size: 3.5rem;
    margin-bottom: 1rem;
}

.hero-text p {
    font-size: 1.5rem;
    margin-bottom: 2rem;
}

.cta-button {
    background: var(--primary-color);
    color: #fff;
    padding: 0.8rem 1.5rem;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 700;
    transition: background 0.3s ease;
}

.cta-button:hover {
    background: #2980b9;
}

#about {
    background: #fff;
}

.about-content {
    display: flex;
    align-items: center;
    gap: 2rem;
}

.profile-pic {
    border-radius: 50%;
    max-width: 250px;
    border: 5px solid var(--primary-color);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.service-card {
    background: #fff;
    padding: 2rem;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-10px);
}

.service-card i {
    font-size: 3rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
}

.service-card h3 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    color: var(--secondary-color);
}

#portfolio {
    background: var(--light-gray);
}

.portfolio-filters {
    text-align: center;
    margin-bottom: 2rem;
}

.portfolio-filters button {
    background: none;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    padding: 0.5rem 1rem;
    margin: 0 0.5rem;
    cursor: pointer;
    border-radius: 5px;
    transition: all 0.3s ease;
}

.portfolio-filters button:hover,
.portfolio-filters button.mixitup-control-active {
    background: var(--primary-color);
    color: var(--secondary-color); 
}

.portfolio-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 1rem;
}

.portfolio-item {
    position: relative;
    overflow: hidden;
    border-radius: 10px;
}

.portfolio-item img {
    width: 100%;
    height: 100%;
    display: block;
    transition: transform 0.4s ease;
    object-fit: cover;
}

.portfolio-item:hover img {
    transform: scale(1.1);
}

.portfolio-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(44, 62, 80, 0.8);
    color: #fff;
    padding: 1.5rem;
    transform: translateY(100%);
    transition: transform 0.4s ease;
}

.portfolio-item:hover .portfolio-info {
    transform: translateY(0);
}

.portfolio-info h3 {
    font-size: 1.2rem;
}

#blog {
    background: #fff;
}
.blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}

.blog-post {
    background: var(--light-gray);
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
}

.blog-post img {
    width: 100%;
}

.blog-post h3 {
    padding: 1rem 1.5rem 0;
}

.blog-post p {
    padding: 0 1.5rem 1rem;
}

.read-more {
    display: inline-block;
    padding: 0.5rem 1.5rem;
    margin: 0 1.5rem 1.5rem;
    background: var(--primary-color);
    color: #fff;
    text-decoration: none;
    border-radius: 5px;
}

.contact-form {
    max-width: 600px;
    margin: 2rem auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ccc;
    border-radius: 5px;
}

#contact p {
    text-align: center;
}

.social-links {
    text-align: center;
    margin-top: 2rem;
}

.social-links a {
    color: var(--secondary-color);
    font-size: 2rem;
    margin: 0 1rem;
    transition: color 0.3s ease;
}

.social-links a:hover {
    color: var(--primary-color);
}


footer {
    background: var(--secondary-color);
    color: #fff;
    text-align: center;
    padding: 1.5rem;
}

@media (max-width: 768px) {
    .nav-links {
        position: absolute;
        right: 0px;
        height: 80vh;
        top: 8vh;
        background: var(--secondary-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50%;
        transform: translateX(100%);
        transition: transform 0.5s ease-in;
    }
    .nav-links li {
        opacity: 0;
    }
    .burger {
        display: block;
    }
    .nav-active {
        transform: translateX(0%);
    }

    @keyframes navLinkFade {
        from {
            opacity: 0;
            transform: translateX(50px);
        }
        to {
            opacity: 1;
            transform: translateX(0px);
        }
    }
    
    .toggle .line1 {
        transform: rotate(-45deg) translate(-5px, 6px);
    }
    .toggle .line2 {
        opacity: 0;
    }
    .toggle .line3 {
        transform: rotate(45deg) translate(-5px, -6px);
    }
    
    .about-content {
        flex-direction: column;
        text-align: center;
    }
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
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
