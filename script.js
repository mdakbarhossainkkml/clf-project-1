const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".cfl-nav-menu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

console.log("first");
