const menu = document.querySelector('.menu');
const menuBtn = document.querySelector('.button');

const handleNav = () => {
    menu.classList.toggle('menu--active')
}

menuBtn.addEventListener('click', handleNav)