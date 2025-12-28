// Example: Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});
const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Update posisi titik kursor
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Update posisi lingkaran luar dengan sedikit animasi (delay)
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

const links = document.querySelectorAll('a, button');
links.forEach(link => {
    link.addEventListener('mouseenter', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(2)';
        cursorOutline.style.backgroundColor = 'rgba(0, 123, 255, 0.1)';
    });
    link.addEventListener('mouseleave', () => {
        cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

var typed = new Typed('.typing', {
  strings: ['Web Developer', 'Designer', 'Freelancer'],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});
