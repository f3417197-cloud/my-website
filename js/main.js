// ===============================
// NOVA STORE
// MAIN
// ===============================

document.addEventListener("DOMContentLoaded", () => {

    const container = document.getElementById("productsContainer");

    if (!container) return;

    renderProducts();

    function renderProducts() {

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
                addToCart(product.id);
            });

            card.querySelector(".fav-btn").addEventListener("click", () => {
                toggleWishlist(product.id);
            });

            container.appendChild(card);

        });

    }

});
