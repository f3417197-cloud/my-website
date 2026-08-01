// ===============================
// NOVA STORE
// MAIN (FIXED IMAGES)
// ===============================

// تحميل المنتجات المحفوظة
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

        // تعديل كود الـ HTML لإجبار الصورة على الظهور بحجم مناسب وممتاز
        card.innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 220px; object-fit: cover; border-radius: 8px; display: block; margin-bottom: 15px;">

        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description || ''}</p>
            <p>⭐ ${product.rating || 5}</p>
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

document.addEventListener("click", (e) => {
    // إضافة للسلة
    if (e.target.classList.contains("buy-btn")) {
        const index = [...document.querySelectorAll(".buy-btn")].indexOf(e.target);
        if (typeof addToCart === "function" && products[index]) {
            addToCart(products[index].id);
        }
    }

    // المفضلة
    if (e.target.classList.contains("fav-btn")) {
        const index = [...document.querySelectorAll(".fav-btn")].indexOf(e.target);
        if (typeof toggleWishlist === "function" && products[index]) {
            toggleWishlist(products[index].id);
        }
    }
});

window.renderProducts = renderProducts;
