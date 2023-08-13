const mobileButton = document.querySelector('.mobile-toggle');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');
const projectBtn = document.getElementById('projectBtn');


mobileButton.addEventListener('click', () => {
    mobileMenu.classList.add('active');
    mobileButton.style.display = "none";
    mobileClose.classList.add('active');
})

mobileClose.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
    mobileButton.style.display = "block";
    mobileClose.classList.remove('active');
})

projectBtn.addEventListener('click', () => {
    const modalCard = document.querySelector('.selection-modal-card');
    modalCard.style.display = "block";

    const markBtn = document.getElementById('mark');
    markBtn.addEventListener('click', () => {
        modalCard.style.display = "none";
    })
})

const selectProject = document.querySelectorAll('.select');
selectProject.forEach((item) => {
    item.addEventListener('click', () => {
        const projectCard = document.querySelectorAll('.project-card')
        projectCard.forEach((element) => {
            element.lastChild.previousElementSibling.style.display = "none"
            element.classList.remove('active');
            if(item.dataset.id === element.dataset.id) {
                element.classList.add('active')
                element.lastChild.previousElementSibling.style.display = "block"
            }
        })
    })
})