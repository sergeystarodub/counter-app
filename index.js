let buttonSetup = document.querySelector('.js-btn-setup');
let buttonReset = document.querySelector('.js-btn-reset');

let counterText = document.querySelector('.counter__number');

let counter = 0;

buttonSetup.addEventListener('click', function() {
    counter = counter + 1;

    counterText.innerText = counter;
});

buttonReset.addEventListener('click', function() {
    counter = 0;

    counterText.innerText = counter;

});



