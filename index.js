const counterNumber = document.querySelector('[data-find="counterNumber"]');
const onePoolButton = document.getElementById('onePoolButton');
const twoPoolButton = document.getElementById('twoPoolButton');
const resetButton = document.getElementById('resetButton');


// 1-й вариант
/* const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterNumber.innerText = counter;



onePoolButton.addEventListener('click', function() {
    counter = counter + parseInt(onePoolButton.dataset.pools);

    counterNumber.innerText = counter;
});

twoPoolButton.addEventListener('click', function() {
    counter = counter + parseInt(twoPoolButton.dataset.pools);

    counterNumber.innerText = counter;
});

resetButton.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;

    counterNumber.innerText = counter;

}); */

// 2-й вариант с функцией

/* const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterNumber.textContent = counter;

//вызов функции для первой кнопки
setupButton(onePoolButton, counterNumber);

//вызов функции для второй кнопки
setupButton(twoPoolButton, counterNumber);

// сброс счетчика
resetButton.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;

    counterNumber.textContent = counter;

});


function setupButton(poolButton, valueElement) {
    poolButton.addEventListener('click', function() {
    counter += parseInt(poolButton.dataset.pools);

    valueElement.textContent = counter;
});
} */

// 3-й вариант - обработка коллекции кнопок через forEach и вызов для каждой из них функции

const COUNTER_INITIAL_VALUE = 0;

let counter = COUNTER_INITIAL_VALUE;
counterNumber.textContent = counter;

//получение всех кнопок у которых есть атрибут data-pools

poolButtons = document.querySelectorAll('[data-pools]');

//выбор каждой кнопки и вызов для них функции setupButton - onePoolButton и twoPoolButton здесь больше не нужны
//Если добавить третью кнопку - javaScript автоматически найдёт её. 
// не придётся отдельно получать её через getElementById() и вызывать для неё setupButton()

poolButtons.forEach(function(button) {
    setupButton(button, counterNumber);
    
});


// сброс счетчика
resetButton.addEventListener('click', function() {
    counter = COUNTER_INITIAL_VALUE;

    counterNumber.textContent = counter;

});


function setupButton(poolButton, valueElement) {
    poolButton.addEventListener('click', function() {
    counter += parseInt(poolButton.dataset.pools);

    valueElement.textContent = counter;
});
}



