const offers = [

{
title:"Summer Sale",
text:"Up to 50% OFF on selected products.",
button:"Shop Now"
},

{
title:"Free Shipping",
text:"Free shipping on orders over $100.",
button:"Learn More"
},

{
title:"New Collection",
text:"Discover the newest premium products.",
button:"Explore"
}

];

const offersContainer =
document.getElementById("offersContainer");

if(offersContainer){

offers.forEach(offer=>{

offersContainer.innerHTML += `

<div class="offer-card">

<h3 class="offer-title">
${offer.title}
</h3>

<p class="offer-text">
${offer.text}
</p>

<button class="offer-btn">
${offer.button}
</button>

</div>

`;

});

  }
