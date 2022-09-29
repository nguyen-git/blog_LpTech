const $ = document.querySelector.bind(document);

const mobileMenu = $(".mobile__menu")
const headerNavMenu = $(".header__nav--menu")
const model = $(".model")
const closeModel = $(".close__model")
const headerLogo = $(".header__nav--logo")



mobileMenu.onclick = function() {
    model.style.display = "block"
    headerNavMenu.style.display = "block"
    headerLogo.style.display = "none"
    mobileMenu.style.display = "none"
}

closeModel.onclick = function() {
    model.style.display = "none"
    headerNavMenu.style.display = "none"
    headerLogo.style.display = "block"
    mobileMenu.style.display = "block"
}