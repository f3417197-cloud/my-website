// ===== NOVA STORE =====

// السلة
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let products = JSON.parse(localStorage.getItem("products")) || [];

// العناصر
const productsContainer = document.querySelector(".products");
const cartCount = document.getElementById("cartCount");
const cartIcon = document.querySelector(".cart-icon");
const cartPage = document.getElementById("cartPage");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("closeCart");

// تحديث عداد السلة
function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

updateCartCount();
// عرض المنتجات المحفوظة
function renderProducts() {

    document.querySelectorAll(".product-card.dynamic").forEach(card => {
        card.remove();
    });

    products.forEach((product) => {

        productsContainer.innerHTML += `
        <div class="product-card dynamic">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>منتج جديد</p>
            <span>${product.price}</span>
            <button class="buy-btn">شراء الآن</button>
        </div>
        `;

    });

    attachBuyEvents();
}

renderProducts();
// ربط أزرار الشراء
function attachBuyEvents() {

    document.querySelectorAll(".buy-btn").forEach(button => {

        button.onclick = () => {

            const card = button.closest(".product-card");

            const name = card.querySelector("h3").textContent;
            const price = card.querySelector("span").textContent;

            cart.push({ name, price });

            localStorage.setItem("cart", JSON.stringify(cart));

            updateCartCount();

            alert("تمت إضافة المنتج إلى السلة 🛒");

        };

    });

}

// ربط الأزرار الموجودة من البداية
attachBuyEvents();
// فتح السلة
if (cartIcon) {
    cartIcon.onclick = () => {

        cartItems.innerHTML = "";

        let total = 0;

        cart.forEach((item) => {

            total += parseFloat(item.price) || 0;

            cartItems.innerHTML += `
            <div class="cart-item">
                <span>${item.name}</span>
                <span>${item.price}</span>
            </div>
            `;
        });

        cartTotal.textContent = `المجموع: ${total}$`;

        cartPage.style.display = "block";
    };
}

// إغلاق السلة
if (closeCart) {
    closeCart.onclick = () => {
        cartPage.style.display = "none";
    };
    }
// إضافة منتج جديد
const addProductBtn = document.getElementById("addProductBtn");

if (addProductBtn) {

    addProductBtn.onclick = () => {

        const name = document.getElementById("productName").value.trim();
        const price = document.getElementById("productPrice").value.trim();
        const image = document.getElementById("productImage").value.trim();

        if (!name || !price || !image) {
            alert("املأ جميع الحقول");
            return;
        }

        products.push({
            name,
            price,
            image
        });

        localStorage.setItem("products", JSON.stringify(products));

        renderProducts();

        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";
        document.getElementById("productImage").value = "";

        alert("تمت إضافة المنتج ✅");
    };

        }
// زر ابدأ التسوق
const shopBtn = document.getElementById("shopBtn");

if (shopBtn) {
    shopBtn.onclick = () => {
        document.querySelector(".products").scrollIntoView({
            behavior: "smooth"
        });
    };
}

// حفظ عداد السلة عند تشغيل الموقع
updateCartCount();
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

document.addEventListener("click", (e) => {

    if (e.target.classList.contains("fav-btn")) {

        const card = e.target.closest(".product-card");

        const name = card.querySelector("h3").textContent;

        if (!favorites.includes(name)) {
            favorites.push(name);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            e.target.textContent = "💖";
        } else {
            favorites = favorites.filter(item => item !== name);
            localStorage.setItem("favorites", JSON.stringify(favorites));
            e.target.textContent = "❤️";
        }

    }

});
document.addEventListener("click", (e) => {

    if (e.target.classList.contains("delete-btn")) {

        if (confirm("حذف هذا المنتج؟")) {

            e.target.closest(".product-card").remove();

        }

    }

});
