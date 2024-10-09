var form = document.querySelector('form');
var input = document.querySelectorAll('input');

form.addEventListener('submit', function (e) {
  for (var i = 0; i < input.length; i++) {
    if (input[i].value == '') {
      input[i].classList.add('error');
      e.preventDefault();
    }
  }
});

for (var i = 0; i < input.length; i++) {
  input[i].addEventListener('input', function () {
    this.classList.remove('error');
  });
}
