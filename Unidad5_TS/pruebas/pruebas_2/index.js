"use strict";
// La función debe:
let categoriaFinal = "No especificada";
function processProduct(product) {
    if (typeof product === "string") {
        console.log(`Producto sin datos: ${product}`);
    }
    else {
        if (product.name === '' || product.price < 0) {
            console.warn(`Producto no válido`);
            return;
        }
        if (product.category) {
            categoriaFinal = product.category;
        }
        console.log(`Producto: ${product.name} | Precio: ${product.price}€ | Categoría: ${categoriaFinal}`);
    }
}
processProduct("Manzana");
processProduct("Zapatillas");
processProduct("Cargador USB");
processProduct("");
// processProduct({ name: "Manzana", price: 2, category: "food" });
processProduct({ name: "Pan", price: 1 });
