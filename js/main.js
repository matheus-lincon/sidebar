const menuButton = document.querySelector('#menu-icon')
const navOptions = document.querySelectorAll('a.option')

navOptions.forEach((option) => {
  option.addEventListener('click', () => {
    navOptions.forEach((op) => {
      op.classList.remove('active')
    })
    option.classList.add('active')
  })
})

menuButton.addEventListener('click', toggleMenu)

/* FUNCTIONS */
function toggleMenu() {
  let sidebar = document.querySelector('.sidebar')
  let body = document.querySelector('body')
  sidebar.classList.toggle('toggle')
  body.classList.toggle('toggle')
}
