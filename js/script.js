var containerheader = document.querySelector('.container-header');
var body = document.querySelector('body');
var cntMenu = document.querySelector('.content-menu');
var forSlide = document.querySelector('.for-sld');

function updateLayout() {
    var bodyWidth = document.body.clientWidth; // Обновляем ширину

    if (bodyWidth < 768) {
        containerheader.classList.remove('container');
        containerheader.classList.add('container-fluid');
        cntMenu.classList.remove('container');
        cntMenu.classList.add('container-fluid');
    } else {
        containerheader.classList.remove('container-fluid');
        containerheader.classList.add('container');
        cntMenu.classList.add('container');
        cntMenu.classList.remove('container-fluid');
    }

    if(bodyWidth < 1199){
        forSlide.classList.remove('container');
        forSlide.classList.add('container-fluid');
    }
    else {
        forSlide.classList.add('container');
        forSlide.classList.remove('container-fluid');
    }

    console.log(bodyWidth);
}

updateLayout();

window.addEventListener('resize', updateLayout);

const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let autoSlideInterval;

// Автоматическая смена слайдов каждые 5 секунд
autoSlideInterval = setInterval(() => {
    changeSlide(currentSlide + 1);
}, 3000);

document.getElementById('next').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Останавливаем автоматическую смену при ручной навигации
    changeSlide(currentSlide + 1);
    resetAutoSlide(); // Перезапускаем автоматическую смену слайдов
});

document.getElementById('prev').addEventListener('click', () => {
    clearInterval(autoSlideInterval);
    changeSlide(currentSlide - 1);
    resetAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        clearInterval(autoSlideInterval);
        changeSlide(index);
        resetAutoSlide();
    });
});

// Остановка автоматической смены при наведении мыши
document.querySelector('.slides').addEventListener('mouseover', () => {
    clearInterval(autoSlideInterval);
});

// Возобновление автоматической смены при убирании мыши
document.querySelector('.slides').addEventListener('mouseout', () => {
    resetAutoSlide();
});

function changeSlide(index) {
    if (index >= slides.length) {
        index = 0;
    } else if (index < 0) {
        index = slides.length - 1;
    }
    
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    
    currentSlide = index;
    
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
    
    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Перезапуск автоматической смены слайдов
function resetAutoSlide() {
    autoSlideInterval = setInterval(() => {
        changeSlide(currentSlide + 1);
    }, 5000);
}


var toggler = document.querySelector('.toggler');
var navBar = document.querySelector('.nav-bar');

toggler.addEventListener('click', function(){
        toggler.classList.toggle('change');
        navBar.classList.toggle('hide-show');
});


var form = document.querySelector('form');
var input = document.querySelectorAll('input');

form.addEventListener('submit', function(e){
    for(var i = 0; i < input.length; i++){
        if(input[i].value == ''){
            input[i].classList.add('error');
            e.preventDefault();
        }
    }
})

for(var i = 0; i < input.length; i++){
    input[i].addEventListener('input', function (){
        this.classList.remove('error');

    })
}

