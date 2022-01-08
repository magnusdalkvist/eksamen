document.querySelector(".menu_button").addEventListener("click", rotate);

function rotate() {
    if (document.querySelector(".menu_button").classList.contains("rotate") == true) {
        document.querySelector(".menu_button").classList.remove("rotate");
        document.querySelector(".menu_button").classList.add("reset");
        closeMenu();
    } else {
        document.querySelector(".menu_button").classList.remove("reset");
        document.querySelector(".menu_button").classList.add("rotate");
        openMenu();
    }
}

function openMenu() {
    document.querySelector(".menu").style.transform = ("translateY(0)");
}

function closeMenu() {
    document.querySelector(".menu").style.transform = ("translateY(-100%)");
}