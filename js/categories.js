const categories = [
{
name:"Electronics",
icon:"💻"
},
{
name:"Fashion",
icon:"👕"
},
{
name:"Gaming",
icon:"🎮"
},
{
name:"Home",
icon:"🏠"
},
{
name:"Beauty",
icon:"💄"
},
{
name:"Sports",
icon:"⚽"
},
{
name:"Books",
icon:"📚"
},
{
name:"Accessories",
icon:"⌚"
}
];

const categoriesContainer =
document.getElementById("categoriesContainer");

if(categoriesContainer){

categories.forEach(category=>{

categoriesContainer.innerHTML += `
<div class="category-card">

<div class="category-icon">
${category.icon}
</div>

<h3 class="category-title">
${category.name}
</h3>

</div>
`;

});

  }
