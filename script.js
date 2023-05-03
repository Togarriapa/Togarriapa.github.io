
document.addEventListener('DOMContentLoaded', function () {
  const funButton = document.querySelector('.btn-fun');

  if (funButton) {
    funButton.addEventListener('click', function (event) {
      event.preventDefault();
      smoothScroll('#contacts');
    });
  }

// Add animation to navbar links when clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    link.classList.add('animate__animated', 'animate__swing');
    setTimeout(() => {
      link.classList.remove('animate__animated', 'animate__swing');
    }, 1000);
  });
});

// Add animation to hero section text
const heroTitle = document.querySelector('.display-4');
heroTitle.addEventListener('mouseenter', () => {
  heroTitle.classList.add('animate__animated', 'animate__heartBeat');
});
heroTitle.addEventListener('animationend', () => {
  heroTitle.classList.remove('animate__animated', 'animate__heartBeat');
});

// Add animation to education and experience sections
const sectionTitles = document.querySelectorAll('#education h3, #experience h3');
sectionTitles.forEach(title => {
  title.addEventListener('mouseenter', () => {
    title.classList.add('animate__animated', 'animate__wobble');
  });
  title.addEventListener('animationend', () => {
    title.classList.remove('animate__animated', 'animate__wobble');
  });
});

// Add animation to skills section icons
const skillIcons = document.querySelectorAll('.col-md-4 i');
skillIcons.forEach(icon => {
  icon.addEventListener('mouseenter', () => {
    icon.classList.add('animate__animated', 'animate__jello');
  });
  icon.addEventListener('animationend', () => {
    icon.classList.remove('animate__animated', 'animate__jello');
  });
});

});
