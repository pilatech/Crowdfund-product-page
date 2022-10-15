const toggle = document.querySelector('.nav__toggle')
const nav = document.querySelector('.nav')

toggle.addEventListener('click', () => {
 nav.classList.toggle('nav--active')
 if(nav.classList.contains('nav--active')){
  toggle.innerHTML = ` <img src="images/icon-close-menu.svg" alt="close" class="nav__toggle-icon">`
 } else {
 toggle.innerHTML = `<img src="images/icon-hamburger.svg" alt="hamburger" class="nav__toggle-icon">`
 }
})