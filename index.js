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
}

// function onClick(event) {
//     let details = event.target.parentElement;
//     details.style['overflow'] = 'hidden';

//     if (details.open) {
//         event.preventDefault();
//         setTimeout(function () {
//             details.open = false;
//             details.style['overflow'] = 'visible';
//         }, 500);
//         details.style['max-height'] = '48px';
//     } else {
//         details.style['max-height'] = '100vh';
//     }
// }

// window.onload = function () {
//     for (summary of document.getElementsByTagName('summary')) {
//         summary.addEventListener('click', onClick);
//     }
// }
