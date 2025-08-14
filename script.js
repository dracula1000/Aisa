document.addEventListener('DOMContentLoaded', function() {
    // Highlight active nav link on scroll
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    function updateActiveNav() {
        let index = sections.length;
        
        while(--index && window.scrollY + 100 < sections[index].offsetTop) {}
        
        navLinks.forEach(link => link.classList.remove('active'));
        navLinks[index]?.classList.add('active');
    }
    
    updateActiveNav();
    window.addEventListener('scroll', updateActiveNav);
    
    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll('#mobileMenu .nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            const offcanvas = bootstrap.Offcanvas.getInstance(document.getElementById('mobileMenu'));
            offcanvas.hide();
        });
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60,
                    behavior: 'smooth'
                });
            }
        });
    });
});

