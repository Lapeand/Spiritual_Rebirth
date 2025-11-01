let menu = document.querySelector(".header_menu")
let navbar = document.querySelector("#nav")
let navLinks = document.querySelectorAll(".nav-item a")


menu.onclick = () => {
    menu.classList.toggle('clicked')
    navbar.classList.toggle('showMenu')
}

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle("clicked")
        navbar.classList.toggle("showMenu")
    })
})