const menu = document.querySelector('.menu')
const menuBtn = document.querySelector('.button')
const allMenuItems = document.querySelectorAll('.menu__item')

const handleNav = () => {
	menu.classList.toggle('menu--active')

	allMenuItems.forEach(item => {
		item.addEventListener('click', () => {
			menu.classList.remove('menu--active')
		})
	})
}

menuBtn.addEventListener('click', handleNav)
