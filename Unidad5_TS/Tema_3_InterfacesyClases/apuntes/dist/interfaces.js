"use strict";
const producto = {
    name: "Patatas",
    price: 2.5,
    showPrice: (tax) => 15 * tax
};
console.log(producto.showPrice(10));
console.log(producto.name);
const donut = {
    light: true,
    name: 'donut',
    price: 3,
    showPrice: (tax) => donut.price * tax
};
