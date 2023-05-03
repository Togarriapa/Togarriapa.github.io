// Smooth scrolling
$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();
  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
}, 500);
});

// Toggle dark mode
$(document).ready(function () {
$('#toggle-switch').change(function () {
if ($(this).prop('checked')) {
$('body').addClass('light');
$('.navbar').addClass('bg-light');
$('.navbar-brand').removeClass('text-light').addClass('text-dark');
$('.nav-link').removeClass('text-light').addClass('text-dark');
$('.card').removeClass('border-light').addClass('border-secondary');
$('.card-header').removeClass('bg-dark').addClass('bg-secondary');
$('.card-footer').removeClass('bg-dark').addClass('bg-secondary');
$('.timeline-panel').removeClass('bg-dark').addClass('bg-secondary');
$('.timeline-heading').removeClass('text-light').addClass('text-dark');
$('.timeline-body').removeClass('text-light').addClass('text-dark');
$('.btn-primary').removeClass('btn-primary').addClass('btn-outline-primary');
$('.btn-secondary').removeClass('btn-secondary').addClass('btn-outline-secondary');
$('.btn-outline-primary').removeClass('text-light').addClass('text-dark');
$('.btn-outline-primary:hover').removeClass('bg-primary').addClass('bg-light');
} else {
$('body').removeClass('light');
$('.navbar').removeClass('bg-light');
$('.navbar-brand').removeClass('text-dark').addClass('text-light');
$('.nav-link').removeClass('text-dark').addClass('text-light');
$('.card').removeClass('border-secondary').addClass('border-light');
$('.card-header').removeClass('bg-secondary').addClass('bg-dark');
$('.card-footer').removeClass('bg-secondary').addClass('bg-dark');
$('.timeline-panel').removeClass('bg-secondary').addClass('bg-dark');
$('.timeline-heading').removeClass('text-dark').addClass('text-light');
$('.timeline-body').removeClass('text-dark').addClass('text-light');
$('.btn-outline-primary').removeClass('btn-outline-primary').addClass('btn-primary');
$('.btn-outline-secondary').removeClass('btn-outline-secondary').addClass('btn-secondary');
$('.btn-primary').removeClass('text-dark').addClass('text-light');
$('.btn-primary:hover').removeClass('bg-light').addClass('bg-primary');
}
});
});