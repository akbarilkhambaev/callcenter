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

document.getElementById('next').addEventListener('click', () => {
    changeSlide(currentSlide + 1);
});

document.getElementById('prev').addEventListener('click', () => {
    changeSlide(currentSlide - 1);
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        changeSlide(index);
    });
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

var toggler = document.querySelector('.toggler');
var navBar = document.querySelector('.nav-bar');

addEventListener('click', function(){
    toggler.classList.toggle('change');
    
});

addEventListener('click', function(){
    navBar.classList.toggle('hide-show');
});

