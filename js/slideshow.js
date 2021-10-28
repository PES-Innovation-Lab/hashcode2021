// Just populate all images here
const images = [
    'https://cdn.shopify.com/s/files/1/0272/4770/6214/articles/when-do-puppies-start-walking.jpg?v=1593020034',
    'https://images.unsplash.com/photo-1591871937573-74dbba515c4c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80',
]

let currentIndex = 0;
const interval = 3000;

const renderSlideshowItem = () => {
    const imageContainer = $("#current-image");
    const image = $("#slideshow-image");

    image.fadeOut('slow', () => {
        image.attr('src', images[currentIndex]);
        image.fadeIn('slow');
    });    
    currentIndex = (currentIndex + 1) % images.length;
}

const renderSlideshow = () => {
    renderSlideshowItem();
    setInterval(renderSlideshowItem, interval);
}

renderSlideshow();