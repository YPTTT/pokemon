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

window.addEventListener('scroll', function() {
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

document.addEventListener("DOMContentLoaded", function(){
var initialProducts = 50000;
var remainingProducts = 2000; 
var remainingPercentage = (remainingProducts / initialProducts) * 100;

document.getElementById('remainingSell').style.width = remainingPercentage + '%';
document.getElementById('remainingCard').style.width = remainingPercentage + '%';

if (remainingPercentage >= 50)
{
  document.getElementById('remainingSell').style.backgroundColor= "green";
} else if (remainingPercentage >= 30)
{
  document.getElementById('remainingSell').style.backgroundColor= "yellow";
} else if (remainingPercentage >= 10)
{
  document.getElementById('remainingSell').style.backgroundColor= "orange";
} else
{
  document.getElementById('remainingSell').style.backgroundColor= "red";
}
});