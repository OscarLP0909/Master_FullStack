interface Producto {
    name: string;
    price: number;
    showPrice: (tax: number) => number;
}
declare const producto: Producto;
interface Bolleria extends Producto {
    light: boolean;
}
declare const donut: Bolleria;
