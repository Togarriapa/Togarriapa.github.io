document.addEventListener("DOMContentLoaded", function () {
  // Apply animations to elements
  const fadeInUpElements = document.querySelectorAll(".fadeInUp");
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.intersectionRatio > 0) {
              entry.target.classList.add("animated");
          }
      });
  });

  fadeInUpElements.forEach(el => {
      observer.observe(el);
  });

  // Toggle the collapse class on navbarNav element
  var navbarToggler = document.getElementById('navbar-toggler');
  navbarToggler.addEventListener('click', function () {
    var navbarCollapse = document.getElementById('navbarNav');
    navbarCollapse.classList.toggle('show');
  });
});