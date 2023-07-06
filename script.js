const blocks = document.querySelector("#blocks");
const menu = document.querySelector("#menu");
const nav = document.querySelector("nav");
const navContainer = document.querySelector(".nav-container");


function changeImg() {
    if (window.innerWidth < 1000) {
        blocks.src = "assets/images/image-web-3-mobile.jpg";
    } else {
        blocks.src = "assets/images/image-web-3-desktop.jpg";
    };
};
changeImg();

window.addEventListener("resize", () => {
    changeImg();
});

menu.addEventListener("click", () => {
    nav.classList.toggle("hidden");
    navContainer.classList.toggle("hidden");
    if (menu.src === "http://127.0.0.1:5500/assets/images/icon-menu.svg") {
        menu.src = "assets/images/icon-menu-close.svg";
    } else {
        menu.src = "assets/images/icon-menu.svg";
    };
});