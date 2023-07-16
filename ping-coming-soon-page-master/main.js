const form = document.querySelector('.main-form');
const input = document.querySelector('.input');
const error = document.querySelector('.error-text');


form.addEventListener('submit', (e) => {
    e.preventDefault();

    const inputValue = input.value.trim();
    if(!isEmail(inputValue)) {
        error.style.display = "block";
    }else {
        error.style.display = "none";
    }
})

function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}