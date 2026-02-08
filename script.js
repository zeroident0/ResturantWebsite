// Crispy's Fried Chicken Website - GSAP Powered
document.addEventListener('DOMContentLoaded', function () {
    // Register GSAP Plugins
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    // 1. Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            gsap.to(window, {
                duration: 0.5, // Faster scroll
                scrollTo: { y: targetId, offsetY: 70 },
                ease: "power2.inOut"
            });
        });
    });

    // 2. Section Animations on scroll

    // Animate all section headings
    gsap.utils.toArray('h2').forEach(heading => {
        gsap.from(heading, {
            scrollTrigger: {
                trigger: heading,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            y: 20,
            opacity: 0,
            duration: 0.4,
            ease: "power2.out"
        });
    });

    // Menu Cards (Existing)
    gsap.utils.toArray('.menu-section .card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            y: 30,
            opacity: 0,
            duration: 0.4,
            delay: i % 3 * 0.05,
            ease: "power2.inOut"
        });
    });

    // Deal Cards
    gsap.utils.toArray('.deal-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            },
            scale: 0.95,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: "back.out(1.2)"
        });
    });

    // Location Cards
    gsap.utils.toArray('.location-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
            },
            x: i % 2 === 0 ? -30 : 30,
            opacity: 0,
            duration: 0.5,
            ease: "power2.out"
        });
    });

    // Contact Section
    gsap.from('.contact-info', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: "top 80%",
        },
        x: -30,
        opacity: 0,
        duration: 0.5
    });
    gsap.from('.contact-form', {
        scrollTrigger: {
            trigger: '.contact-section',
            start: "top 80%",
        },
        x: 30,
        opacity: 0,
        duration: 0.5
    });

    // About Section
    gsap.from('.about-section .col-md-6:first-child', {
        scrollTrigger: {
            trigger: '.about-section',
            start: "top 80%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6
    });
    gsap.from('.about-section img', {
        scrollTrigger: {
            trigger: '.about-section',
            start: "top 80%",
        },
        scale: 1.05,
        opacity: 0,
        duration: 0.6
    });


    // 3. Hover Zoom Animations
    // Menu Cards
    const menuCards = document.querySelectorAll('.menu-section .card');
    menuCards.forEach(card => {
        const img = card.querySelector('img');
        card.addEventListener('mouseenter', () => {
            gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power1.out" });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(img, { scale: 1.0, duration: 0.3, ease: "power1.out" });
        });
    });

    // Deal Cards
    const dealCards = document.querySelectorAll('.deal-card');
    dealCards.forEach(card => {
        const img = card.querySelector('img');
        card.addEventListener('mouseenter', () => {
            gsap.to(img, { scale: 1.1, duration: 0.3, ease: "power1.out" });
        });
        card.addEventListener('mouseleave', () => {
            gsap.to(img, { scale: 1.0, duration: 0.3, ease: "power1.out" });
        });
    });

    // About Section Image
    const aboutImg = document.querySelector('.about-section img');
    if (aboutImg) {
        aboutImg.addEventListener('mouseenter', () => {
            gsap.to(aboutImg, { scale: 1.05, rotation: 2, duration: 0.4 });
        });
        aboutImg.addEventListener('mouseleave', () => {
            gsap.to(aboutImg, { scale: 1.0, rotation: 0, duration: 0.4 });
        });
    }

    // Navbar Logo
    const logoImg = document.querySelector('.navbar-brand img');
    if (logoImg) {
        logoImg.addEventListener('mouseenter', () => {
            gsap.to(logoImg, { rotation: 360, duration: 0.8, ease: "power2.inOut" });
        });
        logoImg.addEventListener('mouseleave', () => {
            gsap.to(logoImg, { rotation: 0, duration: 0.8, ease: "power2.inOut" });
        });
    }

    // 4. Button animations
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            gsap.to(button, { scale: 1.04, duration: 0.15 });
        });
        button.addEventListener('mouseleave', () => {
            gsap.to(button, { scale: 1, duration: 0.15 });
        });
        button.addEventListener('mousedown', () => {
            gsap.to(button, { scale: 0.96, duration: 0.08 });
        });
        button.addEventListener('mouseup', () => {
            gsap.to(button, { scale: 1.04, duration: 0.08 });
        });
    });

    // 4. Navbar scroll effect
    ScrollTrigger.create({
        start: "top -50",
        onUpdate: (self) => {
            const navbar = document.querySelector('.navbar');
            if (self.direction === 1) { // Scrolling down
                gsap.to(navbar, {
                    backgroundColor: 'rgba(197, 17, 17, 0.95)',
                    backdropFilter: 'blur(10px)',
                    duration: 0.2
                });
            } else if (self.scroll() < 50) { // Near top
                gsap.to(navbar, {
                    backgroundColor: 'var(--kfc-red)',
                    backdropFilter: 'none',
                    duration: 0.2
                });
            }
        }
    });

    // 5. Hero Section Stagger
    gsap.from('.hero-section h1, .hero-section p, .hero-section .btn', {
        opacity: 0,
        y: 20,
        stagger: 0.1, // Faster stagger
        duration: 0.6, // Faster arrival
        ease: "power3.out",
        delay: 0.3
    });

    // 6. Image Reveal Animations
    gsap.utils.toArray('img:not(.navbar-brand img)').forEach(img => {
        gsap.from(img, {
            scrollTrigger: {
                trigger: img,
                start: "top 95%", // More forgiving start
                toggleActions: "play none none none"
            },
            filter: "blur(4px)", // Reduced blur
            opacity: 0,
            scale: 0.98,
            duration: 0.5, // Faster reveal
            ease: "power1.out"
        });
    });


    // Refresh ScrollTrigger after all content is loaded
    window.addEventListener('load', () => {
        ScrollTrigger.refresh();
    });

    // 7. Page Fade-in on Load
    gsap.from(document.body, {
        opacity: 0,
        duration: 0.4, // Faster fade-in
        ease: "power1.inOut"
    });
});



