const navList = document.querySelector(".nav-list");
const menu = document.querySelector(".fa-bars");

// Events when menu bar is clicked
menu.addEventListener("click", () => {
    navList.classList.toggle("active");
    menu.classList.toggle("fa-xmark");
});

window.onscroll = () => {
    navList.classList.remove("active");
    menu.classList.remove("fa-xmark");
}