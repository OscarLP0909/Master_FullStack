// La función debe:

// Detectar el tipo de entrada

// Si es un string → imprimir:
// "Producto sin datos: NOMBRE"

// Si es un objeto → validar:

// name debe ser string no vacío

// price debe ser number positivo

// Si el objeto es válido → imprimir:
// "Producto: NAME | Precio: PRICE€ | Categoría: CATEGORY"

// Si la categoría no existe → imprimir: "Categoría: no especificada"

// Manejar errores con mensajes claros y salir con return.

type productos = string | { name: string; price: number; category?: 'food' | 'tech' | 'clothes' }
let categoriaFinal: string = "No especificada";

function processProduct (product: productos): void {
    if (typeof product === "string") {
        console.log(`Producto sin datos: ${product}`)
    } else {
        if (product.name === '' || product.price < 0) {
            console.warn(`Producto no válido`)
            return;
        }
        if(product.category){
            categoriaFinal = product.category
        }
        console.log(`Producto: ${product.name} | Precio: ${product.price}€ | Categoría: ${categoriaFinal}`)
    }
}
processProduct("Manzana");
processProduct("Zapatillas");
processProduct("Cargador USB");
processProduct("");
// processProduct({ name: "Manzana", price: 2, category: "food" });
processProduct({ name: "Pan", price: 1 });