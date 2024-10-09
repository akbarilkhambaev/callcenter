const slides = document.querySelectorAll('.slide'); // Ваши слайды
const dots = document.querySelectorAll('.dot'); // Точки навигации
let currentSlide = 0;
let autoSlideInterval = null;

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

function nextSlide(change) {
  stopAutoSlide();
  changeSlide(currentSlide + change);
  resetAutoSlide();
}

document.getElementById('next').addEventListener('click', () => nextSlide(1));
document.getElementById('prev').addEventListener('click', () => nextSlide(-1));

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    stopAutoSlide();
    changeSlide(index);
    resetAutoSlide();
  });
});

// Остановка автоматической смены при наведении мыши
document.querySelector('.slides').addEventListener('mouseover', stopAutoSlide);

// Возобновление автоматической смены при убирании мыши
document.querySelector('.slides').addEventListener('mouseout', resetAutoSlide);

function changeSlide(index) {
  if (index >= slides.length) {
    index = 0;
  } else if (index < 0) {
    index = slides.length - 1;
  }

  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active'); // Убираем класс у текущей точки

  currentSlide = index;

  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active'); // Добавляем класс новой активной точке

  document.querySelector('.slides').style.transform = `translateX(-${
    currentSlide * 100
  }%)`;
}

// Перезапуск автоматической смены слайдов
function resetAutoSlide() {
  autoSlideInterval = setInterval(() => {
    changeSlide(currentSlide + 1);
  }, 5000);
}
