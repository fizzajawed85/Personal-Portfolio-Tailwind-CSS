// Toggle mobile menu
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// aos-init.js
document.addEventListener('DOMContentLoaded', function () {
  AOS.init({ duration: 800, once: true });
});
