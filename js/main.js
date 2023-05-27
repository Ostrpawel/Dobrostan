const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.button')
const allMenuItems = document.querySelectorAll('.menu__item')

allMenuItems.forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.remove('menu--active')
	})
})

const handleNav = () => {
	menu.classList.toggle('menu--active')

}

menuBtn.addEventListener('click', handleNav)
