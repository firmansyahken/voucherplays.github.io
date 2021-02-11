const navbar = document.querySelector(".navbar")
const banner = document.querySelector(".banner")
window.addEventListener("scroll", stickyNav)

function stickyNav() {
    navbar.classList.toggle("active", scrollY > 0)
}
