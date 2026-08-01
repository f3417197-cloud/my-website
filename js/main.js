// ===============================
// NOVA STORE
// MAIN
// ===============================

// تحميل المنتجات المحفوظة
const savedProducts = JSON.parse(localStorage.getItem("products"));

if (savedProducts && savedProducts.length > 0) {
    products.length = 0;
    savedProducts.forEach(product => products.push(product));
}

const container = document.getElementById("productsContainer");

// عرض المنتجات
function renderProducts() {

    if (!container) return;

    container.innerHTML = "";

    products.forEach(product => {

        const card = document.createElement("div");

        card.className = "product-card";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.name}">

            <div class="product-info">

                <h3 class="product-title">${product.name}</h3>

                <p class="product-description">
                    ${product.description}
                </p>

                <p>⭐ ${product.rating}</p>

                <h2>$${product.price}</h2>

                <div class="product-buttons">

                    <button class="buy-btn">
                        Add To Cart
                    </button>

                    <button class="fav-btn">
                        ❤
                    </button>

                </div>

            </div>
        `;

        card.querySelector(".buy-btn").addEventListener("click", () => {

            if (typeof addToCart === "function") {
                addToCart(product.id);
            }

        });

        card.querySelector(".fav-btn").addEventListener("click", () => {

            if (typeof toggleWishlist === "function") {
                toggleWishlist(product.id);
            }

        });

        container.appendChild(card);

    });

}

// تشغيل الموقع
document.addEventListener("DOMContentLoaded", () => {

    renderProducts();

    const admin = document.getElementById("adminPanel");

    if (admin && typeof openAdmin === "function") {
        admin.onclick = openAdmin;
    }

});
function openAdmin(){}
