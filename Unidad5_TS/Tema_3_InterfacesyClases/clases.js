class Producto {
    // Propiedades
    name;
    price;

    // Propiedad estática: pertenece a la clase y no a la instancia
    #price;
    static inStock = 0;

    constructor(name, price) {
        this.name = name,
        this.#price = price

        Producto.inStock = Producto.inStock + 1;
    }
    // Métodos
    showInfo(currency = "€") {
        return `${this.name} : ${this.#price}${currency}`
    }

    // Getters y Setters
    get price() {
        return this.#price;
    }
}

// console.log(Producto)

// Crear una instancia de una clase
const tarta = new Producto("Tarta", 15);
const donut = new Producto("Donut", 3);
const napolitana = new Producto("Napolitana", 3);
const baguette = new Producto("Baguette", 1.2);

// console.log(tarta)
// tarta.name = "Tarta";
// console.log(tarta)

console.log(tarta)
console.log(donut)
console.log(napolitana)
console.log(baguette)

console.log(tarta instanceof Producto)

if (tarta instanceof Producto) {
    console.log(tarta.showInfo("$"))
}


console.log(Producto.inStock)
console.log(tarta.price)