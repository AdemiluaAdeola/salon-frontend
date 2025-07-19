document.addEventListener('DOMContentLoaded', function() {
    // Service Category Filtering
    const tabBtns = document.querySelectorAll('.tab-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remove active class from all buttons
            tabBtns.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const category = this.dataset.category;
            
            // Filter services
            serviceCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
    
    // Initialize Isotope for filtering (if you want more advanced filtering)
    // You would need to include Isotope library for this to work
    /*
    const iso = new Isotope('.services-grid', {
        itemSelector: '.service-card',
        layoutMode: 'fitRows'
    });
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            tabBtns.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            const filterValue = this.dataset.category;
            if (filterValue === 'all') {
                iso.arrange({ filter: '*' });
            } else {
                iso.arrange({ filter: `[data-category="${filterValue}"]` });
            }
        });
    });
    */
    
    // Scroll reveal animations
    const sr = ScrollReveal({
        origin: 'bottom',
        distance: '30px',
        duration: 1000,
        reset: true
    });
    
    sr.reveal('.service-card, .benefit-card', {
        interval: 200
    });
});