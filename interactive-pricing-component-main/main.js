const view = document.getElementById('pageView');
const cost = document.getElementById('cost');
const slider = document.getElementById('price-slider');
const toggle = document.getElementById('billing');
let isYearly = false;

let pageViews = ["10K", "50K", "100K", "500K", "1M"];
let perMonth = [8, 12, 16, 24, 36];

slider.addEventListener('input', () => {
    updateValue();
    view.innerHTML = pageViews[slider.value];

    let value = slider.value * 25;

    slider.style.background = `
    linear-gradient(to right,
        hsl(174, 77%, 80%) 0%,
        hsl(174, 77%, 80%) ${value}%,
        hsl(224, 65%, 95%) 0%,
        hsl(224, 65%, 95%) 100%

        );
    `

})

toggle.addEventListener('change', () => {
    if (isYearly === false) {
        isYearly = true;
    } else {
        isYearly = false;
    }
    updateValue();
})


function updateValue() {
    if (isYearly) {
        cost.innerHTML = perMonth[slider.value] * .75
    } else {
        cost.innerHTML = perMonth[slider.value]
    }
}