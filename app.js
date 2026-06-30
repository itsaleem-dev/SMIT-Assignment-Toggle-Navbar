const menuBtn = document.querySelector(".btn-menu");
const closeBtn = document.querySelector(".btn-cross");
const navMenu = document.querySelector("nav ul");
menuBtn.onclick = () => {
    navMenu.classList.add("active");
};

closeBtn.onclick = () => {
    navMenu.classList.remove("active");
};