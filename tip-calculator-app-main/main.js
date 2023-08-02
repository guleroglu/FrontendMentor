const buttons = document.querySelectorAll('.tip-buttons button');
const custom = document.getElementById('custom');
const billInput = document.getElementById('bill');
const tipAmount = document.getElementById('tipAmount');
const total = document.getElementById('total');
const numberPeople = document.getElementById('people');
const resetButton = document.getElementById('reset-button');
const error = document.querySelector('.error');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {

    if(Number(numberPeople.value) === 0) {
        error.classList.add('active');
        total.innerHTML = "$0.00";
        tipAmount.innerHTML = "$0.00";
    }else {
        const targetButton = e.target.textContent.replace(/%/g, "");
        let tipAmountResult = (((billInput.value * targetButton) / numberPeople.value ) / 100).toFixed(2);
        tipAmount.innerHTML = `$${tipAmountResult}`;
    
        let totalResult = Number(billInput.value) / 2 + Number(tipAmountResult);
        total.innerHTML = totalResult.toFixed(2);
    }
    
    })
})

custom.addEventListener('blur', (e) => {
    if(Number(numberPeople.value) === 0) {
        error.classList.add('active');
        total.innerHTML = "$0.00";
        tipAmount.innerHTML = "$0.00";
    }else {
        customValue = e.target.value;
        tipAmountResult = (((billInput.value * customValue) / numberPeople.value ) / 100).toFixed(2);
        tipAmount.innerHTML = `$${tipAmountResult}`;
    
        totalResult = Number(billInput.value) / 2 + Number(tipAmountResult);
        total.innerHTML = `$${totalResult.toFixed(2)}`;
    }
    
})



resetCalculate()
function resetCalculate() {
    resetButton.addEventListener('click', () => {
        tipAmount.innerHTML = "$0.00"
        total.innerHTML = "$0.00"
        billInput.value = "";
        numberPeople.value = "1";
    }) 
}

