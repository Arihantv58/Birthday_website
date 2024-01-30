// birthday.js

document.addEventListener('DOMContentLoaded', function () {
    // Wait for the DOM content to be fully loaded

    // Gallery carousel
    var currentImageIndex = 0;
    var galleryImages = document.querySelectorAll('.gallery-container img');
    var totalImages = galleryImages.length;

    function showImage(index) {
        galleryImages.forEach(function (image) {
            image.style.display = 'none';
        });

        galleryImages[index].style.display = 'block';
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % totalImages;
        showImage(currentImageIndex);
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + totalImages) % totalImages;
        showImage(currentImageIndex);
    }

    // Initial display
    showImage(currentImageIndex);

    // Add event listeners for next and previous buttons
    var nextButton = document.getElementById('nextButton');
    var prevButton = document.getElementById('prevButton');

    if (nextButton && prevButton) {
        nextButton.addEventListener('click', nextImage);
        prevButton.addEventListener('click', prevImage);
    }

    // Additional functionality can be added here based on your requirements
});
