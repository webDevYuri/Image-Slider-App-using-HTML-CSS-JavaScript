const items = document.querySelectorAll(".item"); // Select all items (slides)
const images = document.querySelectorAll(".itemImage"); // Select all images
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (items.length > 0) {
        items[slideIndex].classList.add("displaySlide");
    }

    // Add event listeners for the arrows
    document.querySelector(".prev").addEventListener("click", prevSlide);
    document.querySelector(".next").addEventListener("click", nextSlide);
}

function showSlide(index) {
    if (index >= items.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = items.length - 1;
    }

    items.forEach(item => {
        item.classList.remove("displaySlide"); // Hide all slides
    });
    items[slideIndex].classList.add("displaySlide"); // Show the current slide
}

function prevSlide() {
    clearInterval(intervalId); // Stop the auto-slide
    slideIndex--;
    showSlide(slideIndex);
    updateImages('img-slide-left');
}

function nextSlide() {
    clearInterval(intervalId); // Stop the auto-slide
    slideIndex++;
    showSlide(slideIndex);
    updateImages('img-slide-right');
}

function updateImages(className) {
    images.forEach(image => {
        image.classList.remove('img-slide-left', 'img-slide-right');
        image.classList.add(className);
    });
}
