// ===============================
// NOVA STORE
// Products Database & Renderer
// ===============================

// المنتجات الافتراضية
const defaultProducts = [
    {
        id: 1,
        name: "UltraBook X Pro",
        category: "Computers",
        price: 1499,
        oldPrice: 1699,
        rating: 4.9,
        badge: "NEW",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
        description: "High performance laptop."
    },
    {
        id: 2,
        name: "Flagship Phone",
        category: "Phones",
        price: 999,
        oldPrice: 1199,
        rating: 4.8,
        badge: "HOT",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=900",
        description: "Premium smartphone."
    },
    {
        id: 3,
        name: "Smart Watch",
        category: "Wearables",
        price: 299,
        oldPrice: 349,
        rating: 4.7,
        badge: "SALE",
        image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
        description: "Luxury smart watch."
    },
    {
        id: 4,
        name: "Gaming Headset",
        category: "Gaming",
        price: 189,
        oldPrice: 239,
        rating: 4.8,
        badge: "",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
        description: "Professional gaming headset."
    }
];

// قراءة المنتجات من الذاكرة أو استخدام الافتراضية إذا كانت فارغة
let products = JSON.parse(localStorage.getItem("products"));
if (!products || products.length === 0) {
    products = defaultProducts;
    localStorage.setItem("products", JSON.stringify(products));
}

// دالة عرض المنتجات في الصفحة تلقائياً
function renderProducts() {
    const container = document.getElementById("productsContainer");
    if (!container) return;

    container.innerHTML = ""; // تنظيف الحقل قبل العرض

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "product-card";
        productCard.style = "border: 1px solid #ccc; padding: 15px; margin: 10px; border-radius: 8px; text-align: center; display: inline-block; width: 250px; background: #1a1a1a; color: white;";

        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 200px; object-fit: cover; border-radius: 4px;">
            <h3 style="margin: 10px 0;">${product.name}</h3>
            <p style="color: #ff9900; font-weight: bold;">$${product.price}</p>
            <p style="font-size: 12px; color: #aaa;">${product.description || ''}</p>
        `;
        container.appendChild(productCard);
    });
}

// تشغيل الدالة فور تحميل الصفحة
document.addEventListener("DOMContentLoaded", renderProducts);
