/*
SCROLL REVEAL ANIMATION
*/
function revealOnScroll() {
  let revealElements = document.querySelectorAll(".reveal");

  revealElements.forEach((element) => {
    let elementTop = element.getBoundingClientRect().top;
    let windowHeight = window.innerHeight;
    let delay = parseInt(element.getAttribute("data-delay"));

    if (elementTop < windowHeight) {
      setTimeout(() => {
        element.style.opacity = 1;
        element.style.transform = "translateY(0)";
      }, delay);
    }
  });
}

// Calls the function when the page loads and when it scrolls
window.addEventListener("load", revealOnScroll);
window.addEventListener("scroll", revealOnScroll);
