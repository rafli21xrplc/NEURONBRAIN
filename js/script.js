const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    scrolled >= 650 ? header.classList.add('headerBaru') : header.classList.remove('headerBaru');
});

const imageOne = document.querySelector('.containerImageOne');
const imageTwo = document.querySelector('.containerImageTwo');

setTimeout(() => {
    imageTwo.classList.replace('containerImageTwo', 'containerImageOne');
}, 60000);