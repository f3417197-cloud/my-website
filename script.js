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
/* ===========================
   عرض المنتجات
=========================== */

function renderProducts(){

productsContainer.innerHTML = "";

products.forEach(product=>{

productsContainer.innerHTML += `

<div class="product-card">

${product.badge ? `<div class="badge">${product.badge}</div>` : ""}

<img src="${product.image}" alt="${product.name}">

<div class="product-info">

<h3 class="product-title">${product.name}</h3>

<p class="product-description">
${product.description}
</p>

<p class="product-rating">
⭐ ${product.rating}
</p>

<p class="product-shipping">
🚚 ${product.shipping}
</p>

<p class="product-price">
${STORE.currency}${product.price}
</p>

<div class="product-buttons">

<button class="buy-btn"
onclick="addToCart(${product.id})">

Add To Cart

</button>

<button class="fav-btn"
onclick="addToWishlist(${product.id})">

❤

</button>

</div>

</div>

</div>

`;

});

}

renderProducts();
/* ===========================
   عدادات
=========================== */

function updateCounters(){

cartCount.textContent = cart.length;

favCount.textContent = wishlist.length;

}

updateCounters();
/* ===========================
   إضافة للسلة
=========================== */

function addToCart(id){

const product = products.find(p => p.id === id);

cart.push(product);

localStorage.setItem("cart", JSON.stringify(cart));

updateCounters();

alert(product.name + " تمت إضافته إلى السلة");

}

/* ===========================
   إضافة للمفضلة
=========================== */

function addToWishlist(id){

const product = products.find(p => p.id === id);

const exists = wishlist.find(p => p.id === id);

if(exists){

alert("المنتج موجود بالمفضلة");

return;

}

wishlist.push(product);

localStorage.setItem("wishlist", JSON.stringify(wishlist));

updateCounters();

alert(product.name + " تمت إضافته إلى المفضلة");

}
