document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav.links a');
    const sections = document.querySelectorAll('section');

    // 1. Smooth Scroll with Offset for Header
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            window.scrollTo({
                top: targetSection.offsetTop - 100,
                behavior: 'smooth'
            });
        });
    });

    // 2. Scroll Spy (Highlight active link)
    window.addEventListener('scroll', () => {
        let current = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').includes(current)) {
                link.classList.add('active');
            }
        });
    });
});
