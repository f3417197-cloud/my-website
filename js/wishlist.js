// ===============================
// WISHLIST SYSTEM
// ===============================

let wishlist =
JSON.parse(localStorage.getItem("nova_wishlist")) || [];

// حفظ المفضلة
function saveWishlist(){

localStorage.setItem(
"nova_wishlist",
JSON.stringify(wishlist)
);

}

// إضافة أو إزالة
function toggleWishlist(id){

const index =
wishlist.indexOf(id);

if(index === -1){

wishlist.push(id);

}else{

wishlist.splice(index,1);

}

saveWishlist();

updateWishlistCounter();

}

// تحديث العداد
function updateWishlistCounter(){

const counter =
document.getElementById("favCount");

if(counter){

counter.textContent =
wishlist.length;

}

}

// تشغيل العداد
updateWishlistCounter();
