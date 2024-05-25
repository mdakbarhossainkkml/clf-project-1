const burger = document.querySelector(".burger");
const navMenu = document.querySelector(".cfl-nav-menu");

burger.addEventListener("click", () => {
  navMenu.classList.toggle("nav-active");
  burger.classList.toggle("toggle");
});

// console.log("first");

const swiper = new Swiper(".swiper", {
  loop: true,
  // spaceBetween: 32,
  grabCursor: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    500: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});
