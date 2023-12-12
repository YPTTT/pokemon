let rotated = {};

function rotateButton(buttonId) {
  const button = document.getElementById(buttonId);
  button.classList.add('rotate')
  if (!rotated[buttonId]) {
    button.style.transform = 'rotate(-180deg)';
  } else {
    button.style.transform = 'rotate(0deg)';
  }

  rotated[buttonId] = !rotated[buttonId];
};

window.addEventListener('scroll', function () {
  var menu = document.getElementById('menu');
  var footer = document.getElementById('footer');

  var footerOffset = footer.offsetTop;
  var scrollPosition = window.scrollY + window.innerHeight;

  if (scrollPosition > footerOffset) {
    menu.style.display = 'none';
  } else {
    menu.style.display = 'flex';
  }
});

document.addEventListener("DOMContentLoaded", function () {
  var initialProducts = 50000;
  var remainingProducts = 20000;
  var remainingPercentage = (remainingProducts / initialProducts) * 100;

  var elements = document.getElementsByClassName('remaining_self');
  console.log(elements);
  // document.getElementById('remainingCard').style.width = remainingPercentage + '%';

  for (i = 0; i < elements.length; i++) {
    elements[i].style.width = remainingPercentage + '%';
    if (remainingPercentage >= 50) {
      elements[i].style.backgroundColor = "green";
    } else if (remainingPercentage >= 30) {
      elements[i].style.backgroundColor = "yellow";
    } else if (remainingPercentage >= 10) {
      elements[i].style.backgroundColor = "orange";
    } else {
      elements[i].style.backgroundColor = "red";
    }
  }
});