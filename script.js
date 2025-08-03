// Mobile Menu Toggle
        const menuBtn = document.querySelector('.mobile-menu-btn');
        const navLinks = document.querySelector('.nav-links');

        menuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuBtn.innerHTML = navLinks.classList.contains('active') ? 
                '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                menuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Sticky header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('.header');
            header.classList.toggle('sticky', window.scrollY > 50);
        });

                // FAQ Accordion Functionality
        document.querySelectorAll('.faq-question').forEach(question => {
            question.addEventListener('click', () => {
                const answer = question.nextElementSibling;
                const isOpen = question.classList.contains('active');
                
                // Close all other FAQs
                document.querySelectorAll('.faq-question').forEach(q => {
                    if (q !== question) {
                        q.classList.remove('active');
                        q.nextElementSibling.style.maxHeight = null;
                    }
                });
                
                // Toggle current FAQ
                question.classList.toggle('active');
                
                if (!isOpen) {
                    answer.style.maxHeight = answer.scrollHeight + 'px';
                } else {
                    answer.style.maxHeight = null;
                }
            });
        });
        // Video Playback Functionality
        document.addEventListener('DOMContentLoaded', function() {
            const videoItems = document.querySelectorAll('.portfolio-video');
            const videoPlayBtns = document.querySelectorAll('.video-play-btn');
            
            videoPlayBtns.forEach((btn, index) => {
                btn.addEventListener('click', function(e) {
                    e.stopPropagation();
                    const portfolioItem = this.closest('.portfolio-item');
                    const video = portfolioItem.querySelector('video');
                    
                    // Pause all other videos
                    document.querySelectorAll('.portfolio-video').forEach(v => {
                        if (v !== video) {
                            v.pause();
                            v.closest('.portfolio-item').classList.remove('video-playing');
                        }
                    });
                    
                    if (video.paused) {
                        video.play();
                        portfolioItem.classList.add('video-playing');
                    } else {
                        video.pause();
                        portfolioItem.classList.remove('video-playing');
                    }
                });
            });
            
            // Pause video when clicking outside
            document.addEventListener('click', function(e) {
                if (!e.target.closest('.portfolio-media')) {
                    document.querySelectorAll('.portfolio-video').forEach(video => {
                        video.pause();
                        video.closest('.portfolio-item').classList.remove('video-playing');
                    });
                }
            });
            
            // Pause video when scrolling away
            window.addEventListener('scroll', function() {
                document.querySelectorAll('.portfolio-video').forEach(video => {
                    const rect = video.getBoundingClientRect();
                    if (rect.bottom < 0 || rect.top > window.innerHeight) {
                        video.pause();
                        video.closest('.portfolio-item').classList.remove('video-playing');
                    }
                });
            });
        });