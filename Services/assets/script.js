var getHubergerIcon = document.getElementById("hamburger-menu");
var getHubergerCrossIcon = document.getElementById("hamburger-cross");
var getMobileMenu = document.getElementById("mobile-menu");

getHubergerIcon.addEventListener("click", function () {
    getMobileMenu.style.display = "flex";
    setTimeout(function () {
        getMobileMenu.style.transform = "translateX(0%)"; // Slide in the menu
    }, 50); // Add a small delay for better transition effect
});

getHubergerCrossIcon.addEventListener("click", function () {
    getMobileMenu.style.transform = "translateX(-100%)"; // Slide out the menu
    setTimeout(function () {
        getMobileMenu.style.display = "none";
    }, 300); // Wait for the transition to end before hiding
});

// Hide the mobile menu when the window is resized to a width greater than 770px
window.addEventListener("resize", function () {
    if (window.innerWidth > 770) {
        getMobileMenu.style.display = "none";
    }
});