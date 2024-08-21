// JavaScript for Scroll to Top Button
document.addEventListener("DOMContentLoaded", function() {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    
    // Show or hide the button based on scroll position
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) { // Show button if scrolled more than 300px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    // Smooth scroll to top
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');

    searchButton.addEventListener('click', function() {
        const query = searchInput.value.trim();
        if (query) {
            // Redirect to search results page with the query as a parameter
            window.location.href = `search.html?query=${encodeURIComponent(query)}`;
        }
    });

    // Category and Price filter functionality (dummy implementation)
    const filterCategory = document.querySelector('.category-filter');
    const filterPrice = document.querySelector('.price-filter');

    filterCategory.addEventListener('change', function() {
        // Implement category filter logic here
        console.log('Category filter changed');
    });

    filterPrice.addEventListener('input', function() {
        // Implement price filter logic here
        console.log('Price filter changed');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', (event) => {
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;

        if (!name || !email) {
            alert('Please fill out all fields.');
            event.preventDefault(); // Prevent form submission
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }

    setInterval(nextSlide, 3000); // Change slide every 3 seconds
    showSlide(currentSlide);
});


