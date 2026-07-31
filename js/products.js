// ===============================
// NOVA STORE
// Products Database
// ===============================

const products = [

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
// تحميل المنتجات المحفوظة

const savedProducts = JSON.parse(localStorage.getItem("products"));

if (savedProducts && savedProducts.length > 0) {
    products.length = 0;
    savedProducts.forEach(product => products.push(product));
}
