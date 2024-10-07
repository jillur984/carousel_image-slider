let currentIndex = 0;
let intervalId;
const images = document.querySelectorAll('.img__container');
const totalImages = images.length;

function showImage(index) {
    images.forEach((img, i) => {
        img.classList.remove('active');
        if (i === index) {
            img.classList.add('active');
        }
    });
}

function nextImage() {
    currentIndex = (currentIndex + 1) % totalImages;
    showImage(currentIndex);
}

function prevImage() {
    currentIndex = (currentIndex - 1 + totalImages) % totalImages;
    showImage(currentIndex);
}

function startAutoSlide() {
    intervalId = setInterval(nextImage, 3000); 
}

function stopAutoSlide() {
    clearInterval(intervalId);
}


document.getElementById('next-btn').addEventListener('click', () => {
    stopAutoSlide();
    nextImage();
    startAutoSlide();
});

document.getElementById('prev-btn').addEventListener('click', () => {
    stopAutoSlide();
    prevImage();
    startAutoSlide();
});

const carouselContainer = document.getElementById('carousel__container');
carouselContainer.addEventListener('mouseenter', stopAutoSlide);
carouselContainer.addEventListener('mouseleave', startAutoSlide);


startAutoSlide();
showImage(currentIndex);


