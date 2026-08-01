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
