// Estructura que tendra un objeto

interface Producto {
    name: string,
    price: number,

    //* Método o función
    showPrice: (tax: number) => number
}

const producto: Producto = {
    name: "Patatas",
    price: 2.5,
    showPrice: (tax) => 15 * tax
}

console.log(producto.showPrice(10))
console.log(producto.name)

//* Extends
interface Bolleria extends Producto {
    light: boolean
}

const donut: Bolleria = {
    light: true,
    name: 'donut',
    price: 3,
    showPrice: (tax) => donut.price * tax
}