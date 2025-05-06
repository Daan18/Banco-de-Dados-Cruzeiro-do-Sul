document.addEventListener("DOMContentLoaded", function() {
    const container = document.querySelector('.carrossel-container');
    const slides = document.querySelectorAll('.slide');
    let idx = 0;
    const totalSlides = slides.length;

    function moveCarrossel() {
        container.style.transform = `translateX(${-idx * 1300}px)`;
    }

    function nextSlide() {
        idx = (idx + 1) % totalSlides;
        moveCarrossel();
    }

    setInterval(nextSlide, 3000); // Alterna os slides a cada 3 segundos
});
