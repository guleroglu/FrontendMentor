const openMenu = document.querySelector('.header-mobile');
const headerMenu = document.querySelector('.header-right');
const closeMenu = document.querySelector('.close-mobile');



openMenu.addEventListener('click', () => {
    headerMenu.style.transform = 'translateX(-260px)';
    closeMenu.style.transform = "translateX(-60px)";
})

closeMenu.addEventListener('click', () => {
    headerMenu.style.transform = 'translateX(260px)';
    closeMenu.style.transform = "translateX(60px)";
})