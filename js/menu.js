const menuBtn = document.getElementById("menu-btn");
const navLinks = document.querySelector(".header-container__nav");
const menuIcon = document.getElementById("menu-icon");

// Set Default Menu Icon
let menuIconSource= 'hamburger'
menuIcon.setAttribute('src', `assets/icons/${menuIconSource}.svg`)


// Toggle Navbar - Mobile Screen
menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("top-positioning")

  // Sets Menu Icon
  menuIconSource = menuIconSource === 'hamburger' ? 'close' : 'hamburger'
  menuIcon.setAttribute('src', `assets/icons/${menuIconSource}.svg`)
});
