const buttonDOM = document.querySelector('.form-button');
const emailInput = document.querySelector('#email');
const errorText = document.querySelector('.error-text');


buttonDOM.addEventListener('click', (e) => {
    e.preventDefault();

    const inputValue = emailInput.value.trim();
    
    if(!isEmail(inputValue)) {
        errorText.style.display = "block"
        emailInput.classList.add('active');
    }else {
        errorText.style.display = "none"
        emailInput.classList.remove('active');
    }
})

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}