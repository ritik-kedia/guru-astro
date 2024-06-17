// Fade-in animation trigger on load
window.addEventListener('load', function() {
    var fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach(function(element) {
        var position = element.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        if (position < windowHeight - 100) {
            element.classList.add('active');
        }
    });
});

// Slide-in animation trigger on scroll
window.addEventListener('scroll', function() {
    var slideInElements = document.querySelectorAll('.slide-in');
    slideInElements.forEach(function(element, index) {
        setTimeout(function() {
            element.classList.add('active');
        }, index * 1200);
    });
});

// Rotate animation trigger on button click
function rotateButton(e) {
    e.preventDefault();
    var button = document.querySelector('.rotate-button');
    button.classList.add('rotated');
    setTimeout(function() {
        button.classList.remove('rotated');
    }, 500);
}

// toggle menu
const navToggle = document.querySelector('.nav-toggle');
const body = document.body;

navToggle.addEventListener('click', () => {
    body.classList.toggle('nav-open');
});
