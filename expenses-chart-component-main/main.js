const bottomCharts = document.querySelector('.bottom-charts')


fetch("data.json")
.then((response) => response.json())
.then((data) => {

    data.forEach((day) => {

        const dayDOM = document.createElement('div');
        dayDOM.classList.add('day');
        
        dayDOM.addEventListener('click', (e) => {
            e.target.classList.add('active');
            
            if(e.target.className.includes('active')) {
                const amount = document.querySelectorAll('.amount');
                amount.forEach((item) => {
                    if(e.target.dataset.id === item.dataset.id) {
                        item.style.display = "block"
                    }
                })
            }
        })

        const amountDOM = document.createElement('p');
        amountDOM.classList.add('amount');
        amountDOM.innerHTML = day.amount
        amountDOM.dataset.id = day.dataset;
        

        const partDOM = document.createElement('span');
        partDOM.classList.add('part');
        partDOM.style.height = `${day.amount * 2}px`;
        partDOM.dataset.id = day.dataset;

        

        const dayNameDOM = document.createElement('p');
        dayNameDOM.classList.add('dayName');
        dayNameDOM.innerHTML = day.day; 


        dayDOM.appendChild(amountDOM);
        dayDOM.appendChild(partDOM);
        dayDOM.appendChild(dayNameDOM);
        bottomCharts.appendChild(dayDOM);
        
    })
    
})



