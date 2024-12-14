import { initThemeToggle } from './js/theme.js';
import { renderProjects } from './js/projects.js';
import { initContactForm } from './js/contact.js';
import { initSmoothScroll } from './js/navigation.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
    initThemeToggle();
    renderProjects();
    initContactForm();
    initSmoothScroll();
});