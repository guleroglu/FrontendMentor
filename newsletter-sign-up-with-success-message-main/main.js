const input = document.querySelector("#email");
const form = document.querySelector('.card-form');
const error = document.querySelector('.error-text');
const cardSignUP = document.querySelector('.card-signup');
const cardSuccess = document.querySelector('.card-success');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = input.value.trim();

    if(!isEmail(inputValue)) {
        error.style.display = "block";
        input.classList.add('active');
    }else {
        error.style.display = "none";
        input.classList.remove('active');
        cardSignUP.style.display = "none";
        cardSuccess.style.display = "block";
    }
})


function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}