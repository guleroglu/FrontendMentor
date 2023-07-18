const dayInput = document.getElementById('day');
const monthInput = document.getElementById('month');
const yearInput = document.getElementById('year');

const allInputs = document.querySelectorAll('.input');


const yearResult = document.getElementById('YY');
const monthResult = document.getElementById('MM');
const dayResult = document.getElementById('DD');

const button = document.querySelector('.button');


button.addEventListener('click', handleSubmit);

function handleSubmit() {
    const today = new Date();
    const currentYear = today.getFullYear();
    const currentMonth = today.getMonth() + 1;
    const currentDay = today.getDate();

    let ageYear = currentYear - yearInput.value;
    let ageMonth = currentMonth - monthInput.value;
    let ageDay = currentDay - dayInput.value;

    if (ageMonth < 0 || (ageMonth === 0 && ageDay < 0)) {
        ageYear--;
        ageMonth += 12;
        
    }

    if (ageDay < 0) {
        const daysInPreviousMonth = new Date(
            currentYear,
            currentMonth - 1,
            0
        ).getDate();
        ageDay += daysInPreviousMonth;
        ageMonth--;
    }
    yearResult.innerHTML = ageYear;
    monthResult.innerHTML = ageMonth;
    dayResult.innerHTML = ageDay;


    allInputs.forEach((input) => {
        if (input.value === "") {
            input.classList.add('error');
        }
    })

}





