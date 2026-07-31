const slides = [

{
title:"NOVA STORE",
text:"Premium Shopping Experience",
image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=1600"
},

{
title:"Mega Discounts",
text:"Save up to 70% today",
image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1600"
},

{
title:"Fast Delivery",
text:"Worldwide Shipping",
image:"https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1600"
}

];

let currentSlide = 0;

function changeHero(){

const hero = document.querySelector(".hero");

const title = document.querySelector(".hero h1");

const text = document.querySelector(".hero p");

if(!hero) return;

hero.style.background =
`linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.65)),url('${slides[currentSlide].image}') center/cover`;

title.textContent = slides[currentSlide].title;

text.textContent = slides[currentSlide].text;

currentSlide++;

if(currentSlide >= slides.length){

currentSlide = 0;

}

}

changeHero();

setInterval(changeHero,4000);
