let button = document.querySelector('button');
let counterText = document.querySelector('.counter__number');

let counter = 0;

button.addEventListener('click', function() {
    counter = counter + 1;

    counterText.innerText = counter;
});



