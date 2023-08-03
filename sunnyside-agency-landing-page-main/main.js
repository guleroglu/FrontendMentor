const mobileMenu = document.querySelector('.mobile');
const list = document.querySelector('.header-nav-list')
mobileMenu.addEventListener('click', () => {
    list.style.display = "block"
})