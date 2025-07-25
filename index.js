// Product images, prices, and descriptions info for each image
const products = [
  {
    name: "Smartwatches",
    price: "R299.99",
    description: "Stay connected, monitor health, and look sharp with every step.",
    images: [
      {
        src: "images/smartwatch 1.jpg",
        price: "R249.99",
        description: "Sleek and stylish smartwatch with health tracking features."
      },
      {
        src: "images/smartwatch 2.jpg",
        price: "R299.99",
        description: "Track your fitness and receive notifications with ease."
      },
      {
        src: "images/smartwatch 3.jpg",
        price: "R349.99",
        description: "Premium smartwatch with advanced health tracking and long battery life."
      },
    ],
  },
  {
    name: "Laptops",
    price: "R3000.99",
    description: "Power through work and play with sleek, fast, and ultra-portable laptops.",
    images: [
      {
        src: "images/laptop1.jpg",
        price: "R5099.99",
        description: "Lightweight laptop with fast performance for all tasks."
      },
      {
        src: "images/laptop 2.jpg",
        price: "R4099.99",
        description: "High-performance laptop with ultra-fast SSD and vivid display."
      },
      {
        src: "images/laptop 3.jpg",
        price: "R8200.99",
        description: "Gaming laptop with exceptional graphics and long battery life."
      },
    ],
  },
  {
    name: "Wireless Earbuds",
    price: "R229.99",
    description: "Immersive sound and all-day comfort. Your music, your way.",
    images: [
      {
        src: "images/earbuds 1.jpg",
        price: "R229.99",
        description: "Compact and stylish earbuds with great sound quality."
      },
      {
        src: "images/earbuds 2.jpg",
        price: "R389.99",
        description: "Noise-cancelling earbuds with superior bass and clarity."
      },
      {
        src: "images/earbuds 3.jpg",
        price: "R239.99",
        description: "Ergonomic wireless earbuds with long-lasting battery."
      },
    ],
  },
  {
    name: "Portable Chargers",
    price: "R150.99",
    description: "Power up anywhere with slim, high-capacity backup batteries.",
    images: [
      {
        src: "images/charger 1.jpg",
        price: "R149.99",
        description: "Compact charger with 10,000mAh capacity."
      },
      {
        src: "images/charger 2.jpg",
        price: "R459.99",
        description: "Portable charger with fast charging capabilities."
      },
      {
        src: "images/charger 3.jpg",
        price: "R359.99",
        description: "High-capacity charger with dual output for multiple devices."
      },
    ],
  },
];

// Grab elements
const exploreButton = document.querySelector(".Button"); // Explore Products button
const shopNowButton = document.querySelector(".shopbutton"); // Shop Now button
const galleryModal = document.getElementById("galleryModal");
const galleryImages = document.getElementById("galleryImages");
const closeGallery = document.getElementById("closeGallery");

// Function to open gallery modal
function openGallery() {
  // Clear previous images and content
  galleryImages.innerHTML = "";

  // Add all product images with their individual prices and descriptions to the gallery
  products.forEach((product) => {
    product.images.forEach((img) => {
      const imgContainer = document.createElement("div");
      imgContainer.style.marginBottom = "30px";
      imgContainer.style.textAlign = "center";
      imgContainer.style.width = "250px";

      const image = document.createElement("img");
      image.src = img.src;
      image.alt = product.name;
      image.style.width = "100%";
      image.style.height = "200px";
      image.style.objectFit = "cover";
      image.style.borderRadius = "8px";

      // Product description for each image
      const description = document.createElement("p");
      description.textContent = img.description;
      description.style.fontSize = "1em";
      description.style.marginTop = "10px";
      description.style.color = "#555";

      // Product price for each image
      const price = document.createElement("p");
      price.textContent = img.price;
      price.style.fontSize = "1.2em";
      price.style.fontWeight = "bold";
      price.style.color = "#ee28f5";
      price.style.marginTop = "10px";

      // Append all to the container
      imgContainer.appendChild(image);
      imgContainer.appendChild(description);
      imgContainer.appendChild(price);

      galleryImages.appendChild(imgContainer);
    });
  });

  // Show the gallery modal
  galleryModal.style.display = "flex";
}

// Event listener for Explore Products button
exploreButton.addEventListener("click", openGallery);

// Event listener for Shop Now button
shopNowButton.addEventListener("click", openGallery);

// Close the gallery modal
closeGallery.addEventListener("click", () => {
  galleryModal.style.display = "none";
});
// Get all the reviews
const reviews = document.querySelectorAll(".reviews p");

// Set the initial index to 0 (the first review)
let currentReviewIndex = 0;

// Function to show the next review
function rotateReviews() {
  // Hide the current review by removing the 'active' class
  reviews[currentReviewIndex].classList.remove("active");

  // Move to the next review
  currentReviewIndex = (currentReviewIndex + 1) % reviews.length; // Loop back to the first review after the last one

  // Show the next review by adding the 'active' class
  reviews[currentReviewIndex].classList.add("active");
}

// Show the first review when the page loads
rotateReviews();

// Set an interval to rotate the reviews every 3 seconds
setInterval(rotateReviews, 3000); // Adjust the time interval as needed (3000ms = 3 seconds)
