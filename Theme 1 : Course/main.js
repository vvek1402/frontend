const nav = document.querySelector("nav");
const mobileNav = document.querySelector("nav.mobile-nav");
const menuIcon = document.querySelector(".menu-icon");
const closeIcon = document.querySelector(".mobile-menu-container .close-icon");
const mobileMenuContainer = document.querySelector(".mobile-menu-container");

document.addEventListener("DOMContentLoaded", function () {
  const element = document.getElementsByClassName("navbar")[0];

  function addClassOnScroll() {
    if (window.scrollY > 100) {
      element.classList.add("scrolled");
      mobileNav.classList.add("scrolled");
    } else {
      element.classList.remove("scrolled");
      mobileNav.classList.remove("scrolled");
    }
  }

  // Add scroll event listener
  window.addEventListener("scroll", addClassOnScroll);
});

menuIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.add("active");
  });
  
  closeIcon.addEventListener("click", () => {
    mobileMenuContainer.classList.remove("active");
  });
