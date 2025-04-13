 // AOS Initialization
 AOS.init();

 // Dark Mode Toggle
 // const themeToggle = document.getElementById('themeToggle');
 // themeToggle.addEventListener('click', () => {
 //     document.body.dataset.theme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
 //     themeToggle.classList.toggle('fa-moon');
 //     themeToggle.classList.toggle('fa-sun');
 // });

 // Scroll to Top
 const scrollTopBtn = document.getElementById('scrollTop');
 window.onscroll = () => {
     if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
         scrollTopBtn.style.display = 'block';
     } else {
         scrollTopBtn.style.display = 'none';
     }
 };
 scrollTopBtn.addEventListener('click', () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
 });

 // Single Project Dropdown
 document.querySelectorAll('.projects-container .btn').forEach(button => {
     button.addEventListener('click', () => {
         const targetId = button.getAttribute('data-bs-target');
         const allCollapses = document.querySelectorAll('.project-collapse');
         
         allCollapses.forEach(collapse => {
             if (collapse.id !== targetId.slice(1)) {
                 const bsCollapse = new bootstrap.Collapse(collapse, { toggle: false });
                 bsCollapse.hide();
             }
         });
     });
 });

 // Center Section on Navbar Click
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

             // Ensure scroll position isn’t negative (for mobile with short sections)
             const adjustedScrollPosition = Math.max(scrollPosition, navbarHeight);

             window.scrollTo({
                 top: adjustedScrollPosition,
                 behavior: 'smooth'
             });

             // Close navbar on mobile after click
             const navbarCollapse = document.querySelector('.navbar-collapse');
             if (navbarCollapse.classList.contains('show')) {
                 const bsCollapse = new bootstrap.Collapse(navbarCollapse, { toggle: false });
                 bsCollapse.hide();
             }
         }
     });
 });
