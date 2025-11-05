// Three.js Hero Background
const heroBg = document.getElementById('hero-bg');
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });

renderer.setSize(window.innerWidth, window.innerHeight);
heroBg.appendChild(renderer.domElement);

const geometry = new THREE.BufferGeometry();
const vertices = [];
for (let i = 0; i < 1000; i++) {
    vertices.push(
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000,
        Math.random() * 2000 - 1000
    );
}
geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));

const material = new THREE.PointsMaterial({ color: 0x00FFFF, size: 2 });
const points = new THREE.Points(geometry, material);
scene.add(points);

camera.position.z = 500;

function animate() {
    requestAnimationFrame(animate);
    points.rotation.x += 0.001;
    points.rotation.y += 0.001;
    renderer.render(scene, camera);
}
animate();

window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Typing effect for name
const nameText = "Moumita Mukherjee";
const typingElement = document.getElementById('typing-name');
let index = 0;

function typeWriter() {
    if (index < nameText.length) {
        typingElement.innerHTML += nameText.charAt(index);
        index++;
        setTimeout(typeWriter, 150);
    }
}

// Hero animations
gsap.from('.hero-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    onComplete: typeWriter
});

gsap.from('.profile-photo', {
    scale: 0,
    duration: 1,
    delay: 1
});

// About section
gsap.from('#about .bio', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 1
});

gsap.from('#about .timeline-item', {
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2
});

// Skills section
gsap.from('.skill-category', {
    scrollTrigger: {
        trigger: '#skills',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    stagger: 0.2
});

// Projects section
gsap.from('.project-card', {
    scrollTrigger: {
        trigger: '#projects',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    rotationY: 180,
    duration: 1,
    stagger: 0.2
});

// Certificates section
gsap.from('.certificate-item', {
    scrollTrigger: {
        trigger: '#certificates',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    rotationY: 180,
    duration: 1,
    stagger: 0.2
});

// Achievements section
gsap.from('.achievement-card', {
    scrollTrigger: {
        trigger: '#achievements',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    rotationY: 180,
    duration: 1,
    stagger: 0.2
});

// Contact section
gsap.from('.contact-form', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 1
});

gsap.from('.social-links', {
    scrollTrigger: {
        trigger: '#contact',
        start: 'top 80%'
    },
    opacity: 0,
    y: 30,
    duration: 1,
    delay: 0.2
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// VanillaTilt for project cards
VanillaTilt.init(document.querySelectorAll('.project-card'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5
});

// VanillaTilt for certificate cards
VanillaTilt.init(document.querySelectorAll('.certificate-item'), {
    max: 25,
    speed: 400,
    glare: true,
    'max-glare': 0.5
});

// Cursor trail effect
const cursor = document.createElement('div');
cursor.classList.add('cursor-trail');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.1
    });
});

// Add cursor trail styles dynamically
const style = document.createElement('style');
style.textContent = `
    .cursor-trail {
        position: fixed;
        width: 20px;
        height: 20px;
        background: radial-gradient(circle, rgba(0, 255, 255, 0.5) 0%, transparent 70%);
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        mix-blend-mode: screen;
    }
`;
document.head.appendChild(style);
