const form = document.querySelector('.main-card-form');
const input = document.querySelectorAll('.input');
const errorImage = document.querySelectorAll('.error-img');
const errorText = document.querySelectorAll('.error-text');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    errorText.forEach((error) => {
        input.forEach((input) => {
            if(!input.value && input.dataset.id === error.dataset.id) {
                error.classList.add('error');
                if(!isEmail(input.value)) {
                    error.classList.add('error');
                }
            }
            
        })
    })
})


function isEmail(input) {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input)
}