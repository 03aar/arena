/**
 * ARENA LANDING PAGE
 * Subtle animations and interactions
 * Apple-like smooth, calm motion
 */

document.addEventListener('DOMContentLoaded', () => {
    // Initialize all interactions
    initScrollAnimations();
    initGradientShift();
    initSmoothScroll();
    initCTAInteractions();
});

/**
 * Scroll-triggered fade-in animations for sections
 * Elements glide in softly as they enter viewport
 */
function initScrollAnimations() {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
}

/**
 * Gentle gradient shift on scroll
 * Creates a subtle atmospheric effect in hero section
 */
function initGradientShift() {
    const hero = document.querySelector('.hero');
    let ticking = false;

    function updateGradient(scrollPos) {
        const maxScroll = 500;
        const scrollPercent = Math.min(scrollPos / maxScroll, 1);

        // Subtle color shift
        const newOpacity = 1 - (scrollPercent * 0.15);
        hero.style.opacity = newOpacity;

        ticking = false;
    }

    window.addEventListener('scroll', () => {
        const scrollPos = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                updateGradient(scrollPos);
            });
            ticking = true;
        }
    });
}

/**
 * Smooth scroll to sections
 * Calm, controlled scrolling behavior
 */
function initSmoothScroll() {
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
}

/**
 * CTA Button interactions
 * Handles clicks with subtle feedback
 */
function initCTAInteractions() {
    const ctaButtons = document.querySelectorAll('.cta-primary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Add ripple effect
            createRipple(e, button);

            // Placeholder action - replace with actual early access form
            setTimeout(() => {
                showEarlyAccessModal();
            }, 300);
        });
    });
}

/**
 * Creates a subtle ripple effect on button click
 */
function createRipple(event, button) {
    const ripple = document.createElement('span');
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s ease-out';
    ripple.style.pointerEvents = 'none';

    button.style.position = 'relative';
    button.style.overflow = 'hidden';
    button.appendChild(ripple);

    setTimeout(() => ripple.remove(), 600);
}

/**
 * Show early access modal (placeholder)
 * Replace this with actual form/integration
 */
function showEarlyAccessModal() {
    // Placeholder alert - replace with actual modal/form
    alert('Early Access Coming Soon!\n\nWe\'re preparing something special. Stay tuned.');

    // TODO: Implement actual early access form
    // Could integrate with services like:
    // - Typeform
    // - Google Forms
    // - Custom backend
}

/**
 * Add CSS for ripple animation dynamically
 */
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

/**
 * Parallax effect for floating sphere
 */
function initParallax() {
    const sphere = document.querySelector('.floating-sphere');

    window.addEventListener('mousemove', (e) => {
        const mouseX = e.clientX / window.innerWidth - 0.5;
        const mouseY = e.clientY / window.innerHeight - 0.5;

        sphere.style.transform = `translate(-50%, -50%) translate(${mouseX * 30}px, ${mouseY * 30}px)`;
        sphere.style.transition = 'transform 0.3s ease';
    });
}

// Initialize parallax on desktop only
if (window.innerWidth > 768) {
    initParallax();
}

/**
 * Preload optimization
 * Ensure smooth experience from the start
 */
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});
