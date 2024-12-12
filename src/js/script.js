// Fixed Navbar
window.onscroll = function() {
  const navbar = document.querySelector("navbar");
  const fixedNav = navbar.offsetTop;

  if (window.scrollY > fixedNav) {
    navbar.classList.add("navbar-fixed");
  } else {
    navbar.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function() {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

// Back To Top
const scrollToTopButton = document.getElementById("scroll-to-top");

// Show button when user scrolls down
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollToTopButton.style.display = "block";
  } else {
    scrollToTopButton.style.display = "none";
  }
});

// Smooth scroll to top
function scrollToTop() {
  window.scrollTo({
    top: 0
  });
}
