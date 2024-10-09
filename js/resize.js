function updateLayout() {
  var bodyWidth = document.body.clientWidth; // Обновляем ширину

  if (bodyWidth < 768) {
    containerheader.classList.remove('container');
    containerheader.classList.add('container-fluid');
    cntMenu.classList.remove('container');
    cntMenu.classList.add('container-fluid');
    productSection.classList.remove('container');
    productSection.classList.add('container-fluid');
  } else {
    containerheader.classList.remove('container-fluid');
    containerheader.classList.add('container');
    cntMenu.classList.add('container');
    cntMenu.classList.remove('container-fluid');
  }

  if (bodyWidth < 1199) {
    forSlide.classList.remove('container');
    forSlide.classList.add('container-fluid');
  } else {
    forSlide.classList.add('container');
    forSlide.classList.remove('container-fluid');
  }
}
