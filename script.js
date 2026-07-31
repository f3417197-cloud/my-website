/* ==========================================
   NOVA STORE PREMIUM
   Version 1.0
========================================== */

/* ===========================
   الموقع
=========================== */

const STORE = {
    name: "NOVA STORE",
    currency: "$"
};

/* ===========================
   المنتجات
=========================== */

let products = [

{
id:1,
name:"Laptop Pro X",
price:1499,
category:"Electronics",
rating:4.9,
badge:"NEW",
shipping:"Free Shipping",
image:"https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=900",
description:"Powerful premium laptop."
},

{
id:2,
name:"Smart Watch",
price:299,
category:"Accessories",
rating:4.8,
badge:"SALE",
shipping:"Free Shipping",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900",
description:"Luxury smart watch."
},

{
id:3,
name:"Gaming Headset",
price:189,
category:"Gaming",
rating:4.7,
badge:"",
shipping:"Free Shipping",
image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900",
description:"Professional gaming headset."
}

];

/* ===========================
   البيانات
=========================== */

let cart =
JSON.parse(localStorage.getItem("cart")) || [];

let wishlist =
JSON.parse(localStorage.getItem("wishlist")) || [];

/* ===========================
   العناصر
=========================== */

const productsContainer =
document.getElementById("productsContainer");

const cartCount =
document.getElementById("cartCount");

const favCount =
document.getElementById("favCount");
