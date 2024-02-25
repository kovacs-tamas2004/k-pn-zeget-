const apiUrl = "https://via.assets.so/movie.jpg?id=";
const totalImages = 10;
let currentImageId = 1;

function loadImage() {
    const imageUrl = apiUrl + currentImageId;
    $("#displayed-image").attr("src", imageUrl);
}

function showPreviousImage() {
    currentImageId = (currentImageId === 1) ? totalImages : currentImageId - 1;
    loadImage();
}

function showNextImage() {
    currentImageId = (currentImageId === totalImages) ? 1 : currentImageId + 1;
    loadImage();
}

$("#prev-button").on("click", showPreviousImage);

$("#next-button").on("click", showNextImage);

loadImage();