const cart = [];

document.getElementById("shopBtn").addEventListener("click", () => {
    document.querySelector(".products").scrollIntoView({
        behavior: "smooth"
    });
});

document.querySelectorAll(".product-card").forEach(card => {

    const button = card.querySelector("button");

    button.addEventListener("click", () => {

        const name = card.querySelector("h3").textContent;
        const price = card.querySelector("span").textContent;

        cart.push({
            name,
            price
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        alert(`تمت إضافة ${name} إلى السلة 🛒`);
    });

});
