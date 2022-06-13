const toggle = document.querySelector(".toggle");
const navbar = document.querySelector(".navbar-menu");
const icon = document.querySelector(".fa-solid");

toggle.addEventListener("click", function () {
    navbar.classList.toggle("active");
    icon.classList.toggle("fa-xmark");
});

const nav = document.querySelector('nav');
window.addEventListener("scroll", function () {
    if (window.scrollY >= 650) {
        nav.style.backgroundColor = "#ddd";
    } else {
        nav.style.backgroundColor = "";
    }
})