document.addEventListener("DOMContentLoaded", () => {
  const shopBtn = document.getElementById("shopBtn");

  shopBtn.addEventListener("click", () => {
    alert("مرحباً بك في NOVA STORE 🚀");
  });

  localStorage.setItem("storeName", "NOVA STORE");

  console.log("Store Loaded");
});
