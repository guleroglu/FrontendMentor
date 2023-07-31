const headerMobile = document.querySelector('.header-mobile');
const nav = document.querySelector('.navigation');
const headerClose = document.querySelector('.header-mobile-close');
const headerForm = document.querySelector('.header-right');

headerMobile.addEventListener('click', () => {
    nav.style.display = "block";
    headerClose.style.display = "block";
    headerForm.style.display = "flex";
})


headerClose.addEventListener('click', () => {
    nav.style.display = "none";
    headerClose.style.display = "none";
    headerForm.style.display = "none";
})