
    document.addEventListener('DOMContentLoaded', function() {
        const imagePaths = ['../img/ex4/4_0.jpg', '../img/ex4/4_1.jpg', '../img/ex4/4_2.jpg', '../img/ex4/4_3.jpg', '../img/ex4/4_4.jpg', '../img/ex4/4_5.jpg', '../img/ex4/4_6.jpg', '../img/ex4/4_7.jpg', '../img/ex4/4_8.jpg', '../img/ex4/4_9.jpg'];

        const galleryContainer = document.querySelector('.carousel-container');

        // Shuffle the images array and select the first 4 for the carousel
        const shuffledImages = imagePaths.sort(() => 0.5 - Math.random()).slice(0, 4);

        // Add images to the carousel container (row of 4)
        shuffledImages.forEach(imagePath => {
            const imgElement = document.createElement('img');
            imgElement.src = imagePath;
            imgElement.alt = "Exhibition Image";
            galleryContainer.appendChild(imgElement);
        });

        // Carousel functionality to switch the 4 images without resetting the entire container
        let currentIndex = 0;
        const images = galleryContainer.querySelectorAll('img');

        setInterval(() => {
            const newShuffledImages = imagePaths.sort(() => 0.5 - Math.random()).slice(0, 4);

            // Replace each image individually to avoid page refresh or jump
            newShuffledImages.forEach((imagePath, index) => {
                images[index].src = imagePath;
            });

        }, 3000); // Change every 3 seconds
    });
    