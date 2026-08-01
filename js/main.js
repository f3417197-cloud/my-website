// ===============================
// NOVA STORE
// MAIN (PERFECTLY MATCHED WITH CSS)
// ===============================

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
            <div class="product-title">${product.name}</div>
            <div class="product-description">${product.description || ''}</div>
            <div class="product-description">⭐ ${product.rating || 5}</div>
            <div class="product-price">$${product.price}</div>
            <div class="product-buttons">
                <button class="buy-btn">Add To Cart</button>
                <button class="fav-btn">❤</button>
            </div>
        </div>
        `;

        container.appendChild(card);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderProducts();
});

document.addEventListener("click", (e) => {
    if (e.target.classList.contains("buy-btn")) {
        const index = [...document.querySelectorAll(".buy-btn")].indexOf(e.target);
        if (typeof addToCart === "function" && products[index]) {
            addToCart(products[index].id);
        }
    }
    if (e.target.classList.contains("fav-btn")) {
        const index = [...document.querySelectorAll(".fav-btn")].indexOf(e.target);
        if (typeof toggleWishlist === "function" && products[index]) {
            toggleWishlist(products[index].id);
        }
    }
});

window.renderProducts = renderProducts;
