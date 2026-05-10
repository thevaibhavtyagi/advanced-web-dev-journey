// store/index.js

import products, {
  getByCategory,
  getExpensive,
} from "./products.js";

import {
  formatProductList,
} from "./formatter.js";

console.log("===== FULL PRODUCT CATALOG =====");
console.log(formatProductList(products));

console.log("\n===== ELECTRONICS =====");
console.log(formatProductList(getByCategory("Electronics")));

console.log("\n===== EXPENSIVE PRODUCTS (> ₹10,000) =====");
console.log(formatProductList(getExpensive(10000)));