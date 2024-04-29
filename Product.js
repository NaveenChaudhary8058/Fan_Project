const products = [
    { name: "Laptop", 
    image: "https://media.istockphoto.com/id/1529986184/photo/laptop-keyboard-top-view-of-laptop-with-black-keyboard-on-white-texture-background-copy-space.jpg?s=1024x1024&w=is&k=20&c=SRrh9P65pdwf1fhy3f0mJUcG7YYTpBggnXuxJJFUGX0=",
     price: 999 },
    { name: "Smartphone", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvnOgDwYRHwfMQc8LccU2siSvuRg_GV_AEdw&usqp=CAU", 
    price: 599 },
    { name: "Tablet", 
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyiU4DO9DwTifEfhD4yqlRrEpicComRmjXhg&usqp=CAU", 
    price: 299 },
    { name: "Headphones", image: "https://www.aptronixindia.com/media/catalog/product/cache/31f0162e6f7d821d2237f39577122a8a/b/e/beats_studio3_wireless_over_ear_headphones-removebg-preview.png", price: 149 },
    { name: "Camera", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQrXpC2varAGsCRbnMzU3yyqiWjbsIWbmfQ&usqp=CAU", price: 799 },
    { name: "Printer", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVM0TDVta-biPfxuy9EM84Nb2NI2AGmDJj9w&usqp=CAU", price: 199 },
    { name: "Keyboard", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI4_Sxn94MQoazicN741fPiK2o_SvLLPDFIw&usqp=CAU", price: 49 },
    { name: "Mouse", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuYDMiDVnNgJKmjpMnRAaxvpq5QVS4txKVzQ&usqp=CAU", price: 29 },
    { name: "Monitor", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcoVJllL8XrLG7X_m7rFakNU2Bzn6LCqVPtQ&usqp=CAU", price: 299 },
];

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");

searchInput.addEventListener("input", function() {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchTerm));
    displayResults(filteredProducts);
});

function displayResults(results) {
    searchResults.innerHTML = "";
    results.forEach(result => {
        const li = document.createElement("li");
        li.classList.add("product");

        const img = document.createElement("img");
        img.src = result.image;
        img.alt = result.name;

        const name = document.createElement("span");
        name.textContent = result.name;

        const price = document.createElement("span");
        price.textContent = "$" + result.price;

        const actions = document.createElement("div");
        actions.classList.add("actions");

        const addToCartButton = document.createElement("button");
        addToCartButton.textContent = "Add to Cart";
        addToCartButton.addEventListener("click", function() {
            addToCart(result);
        });

        const buyButton = document.createElement("button");
        buyButton.textContent = "Buy Now";
        buyButton.addEventListener("click", function() {
            buyNow(result);
        });

        actions.appendChild(addToCartButton);
        actions.appendChild(buyButton);

        li.appendChild(img);
        li.appendChild(name);
        li.appendChild(price);
        li.appendChild(actions);

        searchResults.appendChild(li);
    });
}

function addToCart(product) {
    // Implement adding product to cart functionality
    console.log("Added", product.name, "to cart.");
}

function buyNow(product) {
    // Implement buy now functionality
    console.log("Bought", product.name, "now.");
}
