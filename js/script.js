var images = document.querySelectorAll('.sliding');
document.querySelector('.next').onclick = next;
document.querySelector('.prev').onclick = prev;
var counter = 0;
function next(){
    images[counter].classList.remove('active');
    li[counter].classList.remove('active-li');
    counter++;
    if(counter == images.length){
        counter = 0;
    }
    images[counter].classList.add('active');
    li[counter].classList.add('active-li');

}

function prev(){
    images[counter].classList.remove('active');
    li[counter].classList.remove('active-li');
    counter--;
    if(counter < 0){
        counter = --images.length;
    }
    images[counter].classList.add('active');
    li[counter].classList.add('active-li');

}

var timer;
function auto(){
    timer = setInterval(next, 5000);
}
auto();

var li = document.querySelectorAll('.indicators li');

for(var i = 0; i<li.length; i++){
    li[i].onclick = function () {
        for(var j = 0; j < li.length; j++){
            li[j].classList.remove('active-li');
            images[j].classList.remove('active');    
        }
        var current = this.getAttribute('data-slider');
        images[current].classList.add('active');
        this.classList.add('active-li');
        counter = current;   
    }
}

var slider = document.querySelector('.slider');
slider.onmouseover = function(){
    clearInterval(timer);
}
slider.onmouseout = function(){
    auto();
}
