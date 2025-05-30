// ✅ JS to Toggle Mobile Menu

const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// JavaScript to handle form submission
document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks! We'll be in touch soon.");
});

// JavaScript for the accordion functionality
function toggleAccordion(index) {
  for (let i = 1; i <= 6; i++) {
    const content = document.getElementById(`content-${i}`);
    const icon = document.getElementById(`icon-${i}`);
    const item = content.closest(".accordion-item") || content.parentElement;

    if (i === index) {
      const isHidden = content.classList.contains("hidden");

      // Toggle content visibility and icon
      content.classList.toggle("hidden");
      icon.textContent = isHidden ? "−" : "+";

      // Toggle background color
      if (isHidden) {
        item.classList.add("bg-orange-200");
      } else {
        item.classList.remove("bg-orange-200");
      }
    } else {
      // Hide other accordions
      document.getElementById(`content-${i}`).classList.add("hidden");
      document.getElementById(`icon-${i}`).textContent = "+";

      const otherItem =
        document.getElementById(`content-${i}`).closest(".accordion-item") ||
        document.getElementById(`content-${i}`).parentElement;
      otherItem.classList.remove("bg-orange-200");
    }
  }
}

// JavaScript for the slider functionality
let currentIndex = 0;
const slider = document.getElementById("slider");
const slides = slider.children;

function updateSlider() {
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
    updateSlider();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateSlider();
  }
}
