const daily = document.getElementById('daily');
const weekly = document.getElementById('weekly');
const monthly = document.getElementById('monthly');
const times = document.querySelectorAll('a');

    



    fetch("data.json")
    .then(response => response.json())
    .then(data => {
        displayWeekly(data);

        daily.addEventListener('click', (e) => {
            times.forEach((item) => {
                item.classList.remove('active');
            })
            e.target.classList.add('active')
            displayDaily(data);
        })

        weekly.addEventListener('click', (e) => {
            times.forEach((item) => {
                item.classList.remove('active');
            })
            e.target.classList.add('active')
            displayWeekly(data);
        })

        monthly.addEventListener('click', (e) => {
            times.forEach((item) => {
                item.classList.remove('active');
            })
            e.target.classList.add('active') 
            displayMonthly(data)
        })
 
    })

    


function displayDaily(data) {
    const cards = document.querySelector('.cards');
    let result = "";
    data.forEach((item) => {
        result += `
        <div class="card">
            <div class="card-img ${item.title.toLowerCase()}">
                <img src=${item.image} alt="">
            </div>
            <div class="card-info">
                <div class="card-title">
                    <h4>${item.title}</h4>
                    <i class="bi bi-three-dots"></i>
                </div>
                <div class="card-desc">
                    <h1>${item.timeframes.daily.current}</h1>
                    <p>Last Week - ${item.timeframes.daily.previous}</p>
                </div>
            </div>
        </div>
    `
        cards.innerHTML = result;
    })

}


function displayWeekly(data) {
    const cards = document.querySelector('.cards');
    let result = "";
    data.forEach((item) => {
        result += `
        <div class="card">
            <div class="card-img ${item.title.toLowerCase()}">
                <img src=${item.image} alt="">
            </div>
            <div class="card-info">
                <div class="card-title">
                    <h4>${item.title}</h4>
                    <i class="bi bi-three-dots"></i>
                </div>
                <div class="card-desc">
                    <h1>${item.timeframes.weekly.current}</h1>
                    <p>Last Week - ${item.timeframes.weekly.previous}</p>
                </div>
            </div>
        </div>
    `
        cards.innerHTML = result;
    })

}

function displayMonthly(data) {
    const cards = document.querySelector('.cards');
    let result = "";
    data.forEach((item) => {
        result += `
        <div class="card">
            <div class="card-img ${item.title.toLowerCase()}">
                <img src=${item.image} alt="">
            </div>
            <div class="card-info">
                <div class="card-title">
                    <h4>${item.title}</h4>
                    <i class="bi bi-three-dots"></i>
                </div>
                <div class="card-desc">
                    <h1>${item.timeframes.monthly.current}</h1>
                    <p>Last Week - ${item.timeframes.monthly.previous}</p>
                </div>
            </div>
        </div>
    `
        cards.innerHTML = result;
    })
}
