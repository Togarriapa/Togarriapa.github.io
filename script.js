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
});

document.addEventListener('DOMContentLoaded', function() {
  var navButton = document.querySelector('.navbar-toggler');
  var navCollapse = document.querySelector('#navbarNav');

  navButton.addEventListener('click', function() {
      navCollapse.classList.toggle('collapse');
  });
});
