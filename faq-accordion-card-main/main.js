const buttonDOM = document.querySelectorAll('.arrow-button');



buttonDOM.forEach((button) => {
    button.addEventListener('click', (e) => {
        const id = e.target.dataset.id;

        button.classList.toggle('active')
        if (id === button.dataset.id) {
            const arrow = document.querySelectorAll('.arrow');
            arrow.forEach((arrow) => {
                if (arrow.dataset.id === button.dataset.id) {
                    arrow.classList.toggle('toggle')
                }
            })

            const cardReplyDOM = document.querySelectorAll('.card-reply');
            cardReplyDOM.forEach((reply) => {
                
                if(id === reply.dataset.id) {
                    reply.classList.toggle('block')
                }
            })

            const questionTitleDOM = document.querySelectorAll('.card-question-title');
            questionTitleDOM.forEach((question) => {
                if (id === question.dataset.id) {
                    question.classList.toggle("active");
                }
            })
        }
    })
})