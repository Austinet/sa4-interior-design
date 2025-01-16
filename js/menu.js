const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".header-container__nav--links");

// Toggle Navbar - Mobile Screen
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("top-positioning")
});
