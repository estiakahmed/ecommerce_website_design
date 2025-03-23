document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;

    // Main Image Slider
    const mainSlider = document.querySelector('.product_slider .mainImg .productMainimg'); 
    const slides = mainSlider.querySelectorAll('.productslide_img'); 
    const totalSlides = slides.length;

    // Main Slider Controls
    const leftArrow = document.querySelector('.product_slider .leftarrow');
    const rightArrow = document.querySelector('.product_slider .rightarrow');

    // Thumbnails
    const thumbnailsContainer = document.querySelector('.thumbImgs .productMainimg'); 
    const thumbnails = document.querySelectorAll('.thumbImgs .thumimg'); 

    // Thumbnail Slider Controls
    const thumbLeftArrow = document.querySelector('.thumbImgs .leftarrow');
    const thumbRightArrow = document.querySelector('.thumbImgs .rightarrow');
    
    let thumbIndex = 0; 
    const maxThumbsVisible = 4; 
    const totalThumbnails = thumbnails.length;

    // Full-size Modal
    const fullSizeModal = document.getElementById('fullSizeModal');
    const closeModalBtn = document.getElementById('closeModal');
    const fullSizeImage = document.getElementById('fullSizeImage');

    // Function to update the main image slider
    function updateMainSlider() {
        mainSlider.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateActiveThumbnail();
        ensureThumbnailVisible(); 
    }

    // Function to set active thumbnail border & remove grayscale effect
    function updateActiveThumbnail() {
        thumbnails.forEach((thumb, index) => {
            thumb.classList.toggle('active', index === currentIndex);
        });
    }

    // Function to ensure the selected thumbnail is visible
    function ensureThumbnailVisible() {
        if (currentIndex < thumbIndex) {
            thumbIndex = currentIndex;
        } else if (currentIndex >= thumbIndex + maxThumbsVisible) {
            thumbIndex = currentIndex - maxThumbsVisible + 1;
        }
        updateThumbnailSlider();
    }

    // Function to update the thumbnail slider
    function updateThumbnailSlider() {
        const offset = -thumbIndex * (100 / maxThumbsVisible);
        thumbnailsContainer.style.transform = `translateX(${offset}%)`;
    }

    // Function to change main image when sliding thumbnails
    function updateMainImageFromThumbnails() {
        currentIndex = thumbIndex;
        updateMainSlider();
    }

    // Main slider controls
    rightArrow.addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateMainSlider();
    });

    leftArrow.addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateMainSlider();
    });

    // Click event for thumbnails to change main image
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('click', () => {
            currentIndex = index;
            updateMainSlider();
        });
    });

    // Hover event for thumbnails to change main image
    thumbnails.forEach((thumb, index) => {
        thumb.addEventListener('mouseenter', () => {
            currentIndex = index;
            updateMainSlider();
        });
    });

    // Thumbnail slider navigation (Now updates main image too)
    thumbRightArrow.addEventListener('click', () => {
        if (thumbIndex + maxThumbsVisible < totalThumbnails) {
            thumbIndex++;
            updateThumbnailSlider();
            updateMainImageFromThumbnails(); // Change main image
        }
    });

    thumbLeftArrow.addEventListener('click', () => {
        if (thumbIndex > 0) {
            thumbIndex--;
            updateThumbnailSlider();
            updateMainImageFromThumbnails(); // Change main image
        }
    });

    // Show full-size image in modal
    function showFullSizeImage(imageSrc) {
        fullSizeImage.src = imageSrc;
        fullSizeModal.style.display = 'flex';
    }

    // Click event for main image or thumbnail to show full-size image
    const allImages = document.querySelectorAll('.productslide_img img, .thumimg img');
    allImages.forEach(img => {
        img.addEventListener('click', () => {
            showFullSizeImage(img.src);
        });
    });

    // Close the modal when clicking on the close button
    closeModalBtn.addEventListener('click', () => {
        fullSizeModal.style.display = 'none';
    });

    // Close the modal when clicking outside the image
    fullSizeModal.addEventListener('click', (e) => {
        if (e.target === fullSizeModal) {
            fullSizeModal.style.display = 'none';
        }
    });

    updateMainSlider(); // Initialize main slider
    updateThumbnailSlider(); // Initialize thumbnail slider
});
