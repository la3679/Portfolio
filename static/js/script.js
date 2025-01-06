let currentIndex = 0;

function showSlide(index, container, slidesCount) {
    // Calculate the offset for the transform property
    const offset = -index * 100;
    container.style.transform = `translateX(${offset}%)`;
}

document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".carousel-container");
    const slides = document.querySelectorAll(".carousel img");
    const nextButton = document.querySelector("#next");
    const prevButton = document.querySelector("#prev");

    if (slides.length > 0) {
        // Set the initial slide
        showSlide(currentIndex, container, slides.length);

        // Add event listener for the Next button
        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % slides.length; // Loop back to the first slide if at the end
            showSlide(currentIndex, container, slides.length);
        });

        // Add event listener for the Previous button
        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Loop back to the last slide if at the beginning
            showSlide(currentIndex, container, slides.length);
        });

        // Optional: Auto-slide every 10 seconds
        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            showSlide(currentIndex, container, slides.length);
        }, 50000); // Adjust to 15000 for 15 seconds if desired
    }
});
