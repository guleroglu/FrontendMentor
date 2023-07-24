const nameInput = document.getElementById('name');
const numberInput = document.getElementById('number');
const dateMonthInput = document.getElementById('dateMonth');
const dateYearInput = document.getElementById('dateYear');
const passwordInput = document.getElementById('password');

let nameCardArray = [];
let numberCardArray = [];
let dateMonthArray = [];
let dateYearArray = [];
let passwordArray = [];

nameInput.addEventListener('keyup', (e) => {

    const cardName = document.querySelector('.front-card-name');

    if(e.key === "Backspace") {
        nameCardArray.pop();
    }else if ( e.key.length === 1) {
        nameCardArray.push(e.key.toUpperCase());
    }

    cardName.innerHTML = nameCardArray.join('');
    
})

numberInput.addEventListener('keyup', (e) => {

    const cardNumber = document.querySelector('.front-card-number');

    if(!isNaN(e.key)) {
        numberCardArray.push(e.key);
    }else if (e.key === "Backspace") {
        numberCardArray.pop();
    }
    
    cardNumber.innerHTML = numberCardArray.join('');
    
})

dateMonthInput.addEventListener('keyup', (e) => {
    const cardMonth = document.querySelector('.front-card-month');

    if(!isNaN(e.key)) {
        dateMonthArray.push(e.key);
    }else if (e.key === "Backspace") {
        dateMonthArray.pop();
    }

    cardMonth.innerHTML = dateMonthArray.join('');
})

dateYearInput.addEventListener('keyup', (e) => {
    const cardYear = document.querySelector('.front-card-year');

    if(!isNaN(e.key)) {
        dateYearArray.push(e.key);
    }else if (e.key === "Backspace") {
        dateYearArray.pop();
    }

    cardYear.innerHTML = dateYearArray.join('');
})

passwordInput.addEventListener('keyup', (e) => {
    const paswword = document.querySelector('.back-card-number');

    if(!isNaN(e.key)) {
        passwordArray.push(e.key);
    }else if (e.key === "Backspace") {
        passwordArray.pop();
    }

    paswword.innerHTML = passwordArray.join('');
})