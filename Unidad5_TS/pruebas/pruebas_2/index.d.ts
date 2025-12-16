type productos = string | {
    name: string;
    price: number;
    category?: 'food' | 'tech' | 'clothes';
};
declare let categoriaFinal: string;
declare function processProduct(product: productos): void;
