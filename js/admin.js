// ===============================
// ADMIN PANEL
// ===============================

function addProduct(product){

products.push(product);

renderProducts();

}

function deleteProduct(id){

const index = products.findIndex(
p => p.id === id
);

if(index !== -1){

products.splice(index,1);

renderProducts();

}

}

function editProduct(id,newData){

const product = products.find(
p => p.id === id
);

if(!product) return;

Object.assign(product,newData);

renderProducts();

  }
