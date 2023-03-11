const images = [
    'images/Emma.jpg',
    'images/eren.jpg',
    'images/hinata.jpg',
    'images/kakashi.jpg',
    'images/midoriya.jpg'
];


const fristImage = 0;
const lastImage = images.length - 1;
let currentImage = 0;
const nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', () => {
    const imageTag = document.getElementById('image');
    currentImage++;
    if (currentImage >= lastImage) {
        currentImage = 4;
    }
    imageTag.src = images[currentImage];
});