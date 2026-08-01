// ===============================
// NOVA STORE - ADMIN
// ===============================

const adminPassword = "nova2026";

const adminButton = document.getElementById("adminButton");
const adminBox = document.getElementById("adminBox");
const addBtn = document.getElementById("addProductBtn");

// فتح وإغلاق لوحة الإدارة
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

// إضافة منتج
addBtn.addEventListener("click", () => {

    const name = document.getElementById("productName").value.trim();
    const price = Number(document.getElementById("productPrice").value);
    const image = document.getElementById("productImage").value.trim();
    const rating = Number(document.getElementById("productRating").value);
    const description = document.getElementById("productDescription").value.trim();

    if (!name || !price || !image) {
        alert("املأ جميع الحقول");
        return;
    }

    const product = {
        id: Date.now(),
        name,
        price,
        image,
        rating,
        description
    };

products.push(product);

localStorage.setItem("products", JSON.stringify(products));

location.reload();

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productImage").value = "";
    document.getElementById("productRating").value = "";
    document.getElementById("productDescription").value = "";

    alert("✅ تمت إضافة المنتج");

});
