// ===== NOVA STORE =====

// البيانات
let cart = JSON.parse(localStorage.getItem("cart")) || [];
let defaultProducts = [
{
name:"حذاء رياضي",
price:"59$",
image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500"
},
{
name:"ساعة ذكية",
price:"89$",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500"
}
];

let products = JSON.parse(localStorage.getItem("products"));

if(!products){
products = defaultProducts;
localStorage.setItem("products", JSON.stringify(products));
}
let favorites = JSON.parse(localStorage.getItem("favorites")) || [];
let editingIndex = -1;
// العناصر
const productsContainer = document.querySelector(".products");
const cartCount = document.getElementById("cartCount");
const cartIcon = document.querySelector(".cart-icon");
const cartPage = document.getElementById("cartPage");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");
const closeCart = document.getElementById("closeCart");
const addProductBtn = document.getElementById("addProductBtn");
// تحديث عداد السلة
function updateCartCount() {
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

updateCartCount();
// عرض المنتجات المحفوظة
function renderProducts() {

    document.querySelectorAll(".dynamic").forEach(item => item.remove());

    products.forEach(product => {

        productsContainer.insertAdjacentHTML("beforeend", `
        <div class="product-card dynamic">
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>منتج جديد</p>
            <span>${product.price}</span>

        <button class="delete-btn">🗑️</button>

<button class="edit-btn">✏️</button>

<button class="fav-btn">
    ${favorites.includes(product.name) ? "💖" : "❤️"}
</button>

<button class="buy-btn">شراء الآن</button>
        </div>
        `);

    });

}

renderProducts();
// إضافة منتج جديد
if (addProductBtn) {

    addProductBtn.onclick = () => {

        const name = document.getElementById("productName").value.trim();
        const price = document.getElementById("productPrice").value.trim();
        const image = document.getElementById("productImage").value.trim();

        if (!name || !price || !image) {
            alert("املأ جميع الحقول");
            return;
        }

        const product = { name, price, image };

        products.push(product);

        localStorage.setItem("products", JSON.stringify(products));

        renderProducts();

        document.getElementById("productName").value = "";
        document.getElementById("productPrice").value = "";
        document.getElementById("productImage").value = "";

        alert("تمت إضافة المنتج ✅");

    };

            }
// الأحداث (شراء - مفضلة - حذف)
document.addEventListener("click", (e) => {

    // شراء
    if (e.target.classList.contains("buy-btn")) {

        const card = e.target.closest(".product-card");

        const name = card.querySelector("h3").textContent;
        const price = card.querySelector("span").textContent;

        cart.push({ name, price });

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert("تمت إضافة المنتج إلى السلة 🛒");
    }
// تعديل
if (e.target.classList.contains("edit-btn")) {

    const card = e.target.closest(".product-card");
editingIndex = [...document.querySelectorAll(".product-card")].indexOf(card);
    document.getElementById("productName").value =
        card.querySelector("h3").textContent;

    document.getElementById("productPrice").value =
        card.querySelector("span").textContent;

    document.getElementById("productImage").value =
        card.querySelector("img").src;

    alert("تم تحميل بيانات المنتج للتعديل ✏️");

}
    // مفضلة
    if (e.target.classList.contains("fav-btn")) {

        const card = e.target.closest(".product-card");
        const name = card.querySelector("h3").textContent;

        if (favorites.includes(name)) {
            favorites = favorites.filter(item => item !== name);
            e.target.textContent = "❤️";
        } else {
            favorites.push(name);
            e.target.textContent = "💖";
        }

        localStorage.setItem("favorites", JSON.stringify(favorites));
    }

    // حذف
    if (e.target.classList.contains("delete-btn")) {

        if (!confirm("حذف المنتج؟")) return;

        const card = e.target.closest(".product-card");
        const name = card.querySelector("h3").textContent;

        card.remove();

        products = products.filter(p => p.name !== name);

        localStorage.setItem("products", JSON.stringify(products));
    }

});
// فتح وإغلاق السلة
if (cartIcon) {

    cartIcon.onclick = () => {

        cartItems.innerHTML = "";

        let total = 0;

        cart.forEach(item => {

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

if (closeCart) {

    closeCart.onclick = () => {

        cartPage.style.display = "none";

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
