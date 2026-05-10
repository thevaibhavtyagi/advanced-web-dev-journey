// store/products.js

const products = [
    {
        id: 1,
        name: "iPhone 15",
        price: 79999,
        category: "Electronics",
    },
    {
        id: 2,
        name: "Mechanical Keyboard",
        price: 4999,
        category: "Accessories",
    },
    {
        id: 3,
        name: "Gaming Mouse",
        price: 2499,
        category: "Accessories",
    },
    {
        id: 4,
        name: "Monitor",
        price: 15999,
        category: "Electronics",
    },
    {
        id: 5,
        name: "Office Chair",
        price: 8999,
        category: "Furniture",
    },
];

export function getByCategory(category) {
    return products.filter (
        (products) => products.category.toLowerCase() === category.toLowerCase()
    );
}

export function getExpensive(minPrice) {
  return products.filter((product) => product.price > minPrice);
}

export default products;