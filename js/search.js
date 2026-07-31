// ===============================
// SEARCH SYSTEM
// ===============================

function searchProducts() {

const input =
document.getElementById("searchInput");

if (!input) return;

const keyword =
input.value.toLowerCase();

const cards =
document.querySelectorAll(".product-card");

cards.forEach(card => {

const title =
card.querySelector(".product-title");

if (!title) return;

const text =
title.textContent.toLowerCase();

if (text.includes(keyword)) {

card.style.display = "block";

} else {

card.style.display = "none";

}

});

}

const searchInput =
document.getElementById("searchInput");

if (searchInput) {

searchInput.addEventListener(
"keyup",
searchProducts
);

}
