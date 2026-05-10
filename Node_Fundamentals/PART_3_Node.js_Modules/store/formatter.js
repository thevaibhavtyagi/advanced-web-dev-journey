// store/formatter.js

export function formatPrice(price) {
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR",
    }).format(price);
}


export function formatProduct(product) {
    return `
    ID: ${product.id}
    Name: ${product.name}
    Price: ${formatPrice(product.price)}
    Category: ${product.category}
    `;
}

export function formatProductList(products) {
  return products.map(formatProduct).join("\n----------------\n");
}