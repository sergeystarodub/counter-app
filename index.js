const counterNumber = document.querySelector('[data-find="counterNumber"]');
const onePoolButtonSetup = document.getElementById('onePoolButtonSetup');
const twoPoolButtonSetup = document.getElementById('twoPoolButtonSetup');
const resetButton = document.getElementById('resetButton');

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterNumber.innerText = counter;

// 1-й вариант

/* onePoolButtonSetup.addEventListener('click', function() {
    counter = counter + parseInt(onePoolButtonSetup.dataset.pools);

    counterNumber.innerText = counter;
});

twoPoolButtonSetup.addEventListener('click', function() {
    counter = counter + parseInt(twoPoolButtonSetup.dataset.pools);

    counterNumber.innerText = counter;
});

resetButton.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;

    counterNumber.innerText = counter;

}); */

// 2-й вариант с функцией

//вызов функции для первой кнопки
setupButton(onePoolButtonSetup, counterNumber);

//вызов функции для второй кнопки
setupButton(twoPoolButtonSetup, counterNumber);

resetButton.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;

    counterNumber.innerText = counter;

});


function setupButton(poolButtonSetup, valueElement) {
    poolButtonSetup.addEventListener('click', function() {
    counter = counter + parseInt(poolButtonSetup.dataset.pools);

    valueElement.innerText = counter;
});
};



