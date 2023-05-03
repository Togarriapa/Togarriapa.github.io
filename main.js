// Main JavaScript

// Add smooth scrolling to anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add scrollspy to update navbar links
  document.addEventListener('DOMContentLoaded', () => {
    const scrollSpy = new bootstrap.ScrollSpy(document.body, {
      target: '#navbarNav'
    });
  });
  