const menuIcon = document.getElementById("menu-icon");
const menu = document.getElementById("menu"); 

menuIcon.addEventListener ("click", showHideMenuiconControls);

function showHideMenuiconControls() {
    menu.classList.toggle("display-none")
}

