const adminPassword = "nova2026";

function openAdmin(){

const pass = prompt("Enter Admin Password");

if(pass !== adminPassword){

alert("Wrong Password");

return;

}

const name = prompt("Product Name");

if(!name) return;

const price = prompt("Price");

const image = prompt("Image URL");

const rating = prompt("Rating (1-5)");

products.push({

name:name,

price:Number(price),

image:image,

rating:Number(rating),

description:"New Product"

});

localStorage.setItem("products",JSON.stringify(products));

renderProducts();

alert("Product Added Successfully");

}
