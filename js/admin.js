// ===============================
// ADMIN PANEL
// ===============================

const adminPassword = "nova2026";

const adminButton = document.getElementById("adminButton");
const adminBox = document.getElementById("adminBox");
const addProductBtn = document.getElementById("addProductBtn");

adminButton.addEventListener("click", () => {

    const pass = prompt("Enter Admin Password");

    if (pass !== adminPassword) {
        alert("Wrong Password");
        return;
    }

    adminBox.style.display =
    adminBox.style.display === "block"
    ? "none"
    : "block";

});

addProductBtn.addEventListener("click", () => {

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

});
