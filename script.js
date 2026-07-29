let cart = JSON.parse(localStorage.getItem("cart")) || [];

const count = document.getElementById("cartCount");
count.textContent = cart.length;

document.getElementById("shopBtn").addEventListener("click", () => {
    document.querySelector(".products").scrollIntoView({
        behavior:"smooth"
    });
});

document.querySelectorAll(".product-card").forEach(card=>{

    card.querySelector("button").addEventListener("click",()=>{

        const name = card.querySelector("h3").textContent;
        const price = card.querySelector("span").textContent;

        cart.push({name,price});

        localStorage.setItem("cart",JSON.stringify(cart));

        count.textContent = cart.length;

        alert("تمت الإضافة إلى السلة 🛒");

    });

});
