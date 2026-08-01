// ===============================
// ADMIN PANEL
// ===============================

const adminPassword = "nova2026";

const adminButton = document.getElementById("adminButton");
const adminBox = document.getElementById("adminBox");

// فتح لوحة الإدارة
adminButton.addEventListener("click", () => {

    const pass = prompt("Enter Admin Password");

    if (pass !== adminPassword) {
        alert("Wrong Password");
        return;
    }

    if (adminBox.style.display === "block") {
        adminBox.style.display = "none";
    } else {
        adminBox.style.display = "block";
    }

});
document.getElementById("addProductBtn").onclick = function () {

const product = {
    id: Date.now(),
    name: document.getElementById("productName").value,
    price: Number(document.getElementById("productPrice").value),
    image: document.getElementById("productImage").value,
    rating: Number(document.getElementById("productRating").value),
    description: document.getElementById("productDescription").value
};

products.push(product);

localStorage.setItem("products", JSON.stringify(products));

renderProducts();

alert("تمت إضافة المنتج");

};
