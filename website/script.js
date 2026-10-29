// External JavaScript file: script.js

function expandImage(element) {
    const img = element.querySelector('img');
    const description = element.nextElementSibling.querySelector('.product-description').innerText;
    const price = element.nextElementSibling.querySelector('.product-price').innerText;
    const overlay = document.getElementById('imageOverlay');
    const expandedImage = document.getElementById('expandedImage');
    const expandedDescription = document.getElementById('expandedDescription');
    const expandedPrice = document.getElementById('expandedPrice');

    // Set the source of the expanded image
    expandedImage.src = img.src;
    //expandedDescription.innerText = description; // Set the description
    //expandedPrice.innerText = price; // Set the price
    // Show the overlay
    overlay.style.display = 'flex';
}

function closeImage() {
    const overlay = document.getElementById('imageOverlay');
    overlay.style.display = 'none';
}
