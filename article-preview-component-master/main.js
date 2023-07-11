const shareButtonDOM = document.querySelector('.share-button');
const shareOptionDOM = document.querySelector('.share-option');


shareButtonDOM.addEventListener('click', () => {
    shareButtonDOM.classList.toggle('active');
    shareOptionDOM.classList.toggle('share-active')
})