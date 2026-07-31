/* ==========================================
   NOVA STORE PREMIUM
   Version 2.0
========================================== */

// عناصر الموقع
const productsContainer = document.getElementById("productsContainer");
const cartCount = document.getElementById("cartCount");
const favCount = document.getElementById("favCount");

// البيانات
let cart = [];
let wishlist = [];

// المنتجات التجريبية
const products = [
  {
    id: 1,
    name: "Laptop Pro X",
    price: 1499,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
    description: "Powerful premium laptop.",
    rating: 4.9,
    badge: "NEW"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 299,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
    description: "Luxury smart watch.",
    rating: 4.8,
    badge: "SALE"
  },
  {
    id: 3,
    name: "Gaming Headset",
    price: 189,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
    description: "Professional gaming headset.",
    rating: 4.7,
    badge: ""
  }
];

console.log("NOVA STORE Loaded");
