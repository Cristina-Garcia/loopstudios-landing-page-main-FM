const menuHamburguer = document.querySelector(".menu");
const mobileMenu = document.querySelector(".mobile-menu");
const menuClose = document.querySelector(".menu-close");
menuHamburguer.addEventListener("click", toggleMobileMenu);
menuClose.addEventListener("click", toggleMobileMenu);

function toggleMobileMenu() {
  const menuActive = mobileMenu.classList.toggle("inactive");
}
