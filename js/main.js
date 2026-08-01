// ===============================
// NOVA STORE
// MAIN
// ===============================

// تحميل المنتجات
const savedProducts = JSON.parse(localStorage.getItem("products"));

if (savedProducts && savedProducts.length > 0) {
    products.length = 0;
    savedProducts.forEach(product => products.push(product));
}

const container = document.getElementById("productsContainer");

function renderProducts() {

    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">

        <h3>${product.name}</h3>

        <p>${product.description}</p>

        <p>⭐ ${product.rating}</p>

        <h2>$${product.price}</h2>

        <button class="buy-btn">Add To Cart</button>

        <button class="fav-btn">❤</button>

        </div>
        `;

        container.appendChild(card);

    });

}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});
// أزرار السلة والمفضلة

document.addEventListener("click", (e) => {

    // إضافة للسلة
    if (e.target.classList.contains("buy-btn")) {

        const index = [...document.querySelectorAll(".buy-btn")].indexOf(e.target);

        if (typeof addToCart === "function") {
            addToCart(products[index].id);
        }

    }

    // المفضلة
    if (e.target.classList.contains("fav-btn")) {

        const index = [...document.querySelectorAll(".fav-btn")].indexOf(e.target);

if (typeof toggleWishlist === "function") {
    toggleWishlist(products[index].id);
}

}

});

window.renderProducts = renderProducts;        
