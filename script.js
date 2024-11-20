const slides = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');   

const imageCounter = document.querySelector('.image-counter');   


let currentSlide = 0;

function showImage(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
  imageCounter.textContent = `Изображение ${index + 1} из ${slides.length}`;
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showImage(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showImage(currentSlide);
}

prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

showImage(currentSlide);