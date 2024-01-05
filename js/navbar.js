const searchButton = document.querySelector(".navbar__actions__search-icon");
const closeSearchBoxButton = document.querySelector(".navbar__search-box__close");
const navbarMain = document.querySelector("#navbar__main");
const navbarSearchBar = document.querySelector("#navbar__search-bar");
const menuToggle = document.querySelector("#navbar__toggle-menu");
const openMenuButton = document.querySelector("#open-menu");
const closeMenuButton = document.querySelector("#close-menu");

window.onresize = onResizeWindow;

function openSearchBar() {
    navbarSearchBar.classList.remove("inactive");
    navbarSearchBar.classList.add("navbar__search-bar");
    navbarMain.classList.add('inactive');   
}

function closeSearchBar() {
    navbarMain.classList.remove("inactive");
    navbarSearchBar.classList.remove("navbar__search-bar");
    navbarSearchBar.classList.add('inactive'); 
}

function openMenu() {
    menuToggle.classList.remove("inactive");
    menuToggle.classList.add('navbar__toggle-menu');   
    openMenuButton.classList.remove('menu__btn--active'); 
    closeMenuButton.classList.remove('inactive');

}

function closeMenu() {
    menuToggle.classList.remove("navbar__toggle-menu");
    menuToggle.classList.add('inactive');   
    openMenuButton.classList.add('menu__btn--active'); 
    closeMenuButton.classList.add('inactive');
}

function onResizeWindow() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768) {
        closeSearchBar();
        closeMenu();  
    } 
}

searchButton.addEventListener("click", () => openSearchBar());
closeSearchBoxButton.addEventListener("click", () => closeSearchBar());
openMenuButton.addEventListener("click", () => openMenu());
closeMenuButton.addEventListener("click", () => closeMenu());
