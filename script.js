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

        alert("تمت الإضافة إلى السلة");

    });

});
document.querySelector(".cart-icon").addEventListener("click",()=>{

if(cart.length===0){
alert("السلة فارغة 🛒");
return;
}

let text="🛒 المنتجات:\n\n";

cart.forEach((item,index)=>{
text+=`${index+1}. ${item.name} - ${item.price}\n`;
});

alert(text);

});
const cartPage = document.getElementById("cartPage");
const cartItems = document.getElementById("cartItems");
const cartTotal = document.getElementById("cartTotal");

document.querySelector(".cart-icon").onclick = () => {
    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach(item => {
        total += parseFloat(item.price);

        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>${item.price}</span>
        </div>`;
    });

    cartTotal.textContent = `المجموع: ${total}$`;
    cartPage.style.display = "block";
};

document.getElementById("closeCart").onclick = () => {
    cartPage.style.display = "none";
};
