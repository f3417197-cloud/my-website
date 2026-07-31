// ===============================
// CART SYSTEM
// ===============================

let cart = JSON.parse(localStorage.getItem("nova_cart")) || [];

// حفظ السلة
function saveCart() {
    localStorage.setItem("nova_cart", JSON.stringify(cart));
}

// إضافة منتج
function addToCart(id) {

    const product = products.find(p => p.id === id);

    if (!product) return;

    cart.push(product);

    saveCart();

    updateCartCounter();

    alert(product.name + " added to cart");
}

// تحديث العداد
function updateCartCounter() {

    const counter = document.getElementById("cartCount");

    if (counter) {
        counter.textContent = cart.length;
    }

}

// حذف منتج
function removeFromCart(id) {

    cart = cart.filter(item => item.id !== id);

    saveCart();

    updateCartCounter();

}

// تشغيل العداد عند فتح الموقع
updateCartCounter();
