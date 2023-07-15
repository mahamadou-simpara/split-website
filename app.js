const left = document.querySelector('.left-image');
const right = document.querySelector('.right-image');

console.log('Hello !');
left.addEventListener("mouseenter", function() {
    // Code to execute when the element is hovered

   
    right.classList.remove('expand');
    left.classList.remove('restrict');

    left.classList.add('expand');
    right.classList.add('restrict');
  });

  right.addEventListener("mouseenter", function() {
    // Code to execute when the element is hovered
    left.classList.remove('expand');
    right.classList.remove('restrict');

    right.classList.add('expand');
    left.classList.add('restrict');
  });