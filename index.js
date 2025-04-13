// Initialize AOS
AOS.init();

// Scroll to Top
const scrollTopBtn = document.getElementById('scrollTop');
window.onscroll = () => {
    scrollTopBtn.style.display = (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) ? 'block' : 'none';
};
scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Single Project Dropdown - Close others when opening one
document.querySelectorAll('.projects-container .btn').forEach(button => {
    button.addEventListener('click', () => {
        const targetId = button.getAttribute('data-bs-target');
        document.querySelectorAll('.project-collapse').forEach(collapse => {
            if (collapse.id !== targetId.slice(1)) {
                const bsCollapse = new bootstrap.Collapse(collapse, { toggle: false });
                bsCollapse.hide();
            }
        });
    });
});

// Smooth scroll & center on navbar link click
document.querySelectorAll('.navbar-nav a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            const sectionHeight = targetSection.offsetHeight;
            const windowHeight = window.innerHeight;
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const scrollPosition = targetSection.offsetTop - (windowHeight - sectionHeight) / 2 + navbarHeight / 2;
            const adjustedScroll = Math.max(scrollPosition, navbarHeight);
            window.scrollTo({ top: adjustedScroll, behavior: 'smooth' });
            const navbarCollapse = document.querySelector('.navbar-collapse');
            if (navbarCollapse.classList.contains('show')) {
                const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                bsCollapse.hide();
            }
        }
    });
});