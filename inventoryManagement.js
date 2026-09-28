// Write your code here

// Product Inventory Array
let products = ["laptop", "phone", "headphones", "monitor"];

// Access Product Information
function accessFirstProduct() {
  console.log(products[0]);
}

// Add a New Product to the Array
function addProduct(productName) {
  products.push(productName);
}

// Change the Name of a Product
function changeProduct(position, newName) {
  products[position] = newName;
}

// Remove a Product from Array
function removeLastProduct() {
  products.pop();
}

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
