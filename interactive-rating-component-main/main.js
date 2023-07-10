const submitBtnDOM = document.querySelector("#submit-btn");
const ratingCardDOM = document.querySelector('.rating-card');
const thanksCardDOM = document.querySelector('.thanks-card');
const ratingDOM = document.querySelector('#rating');
const ratingBtnsDOM = document.querySelectorAll('.rating-item-button');


ratingBtnsDOM.forEach((button) => {
    button.addEventListener('click', () => {
        ratingBtnsDOM.forEach((item) => {
            item.classList.remove("active");
        })
        button.classList.add("active");
    });

    
});

submitBtnDOM.addEventListener('click', () => {
    thanksCardDOM.classList.remove('hidden');
    ratingCardDOM.classList.add('hidden');

    ratingBtnsDOM.forEach((element) => {
       if(element.classList.contains('active')) {
            ratingDOM.innerHTML = element.innerHTML;
       }
    })
})

