const nav = document.querySelector("nav");
const mobileNav = document.querySelector(".mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

document.addEventListener("DOMContentLoaded", function () {

  function addClassOnScroll() {
    if (window.scrollY > 100) {
        nav.classList.add("scrolled");
      mobileNav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
      mobileNav.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", addClassOnScroll);
});

menuIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.add("active");
});

closeIcon.addEventListener("click", () => {
  mobileMenuContainer.classList.remove("active");
});
