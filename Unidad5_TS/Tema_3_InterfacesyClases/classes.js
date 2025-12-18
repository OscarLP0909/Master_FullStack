class Producto {
	// Propiedades
	// name;
	// price;

	//* Propiedad privada, declarada con #. No compatible con versiones anteriores de JS, cuidado!
	#price;

	//* Propiedad estática: pertenece a la clase, no a la instancia. Debe estar declarada obligatoriamente
	static inStock = 0;

	constructor(name, price, tax, hasDiscount = false) {
		this.name = name;
		this.hasDiscount = hasDiscount
		this.tax = tax;
		this.#price = price;

		//* Las propiedades estáticas me sirven para almacenar constantes en la clase. Por ejemplo una URL para una llamada HTTP de la que voy a tener una base y luego quiero cambiar una parte del path. O como en este caso, un recuento del stock de instancias
		Producto.inStock = Producto.inStock + 1;
	}

	//* Métodos
	showInfo(currency = "€") {
		return `${this.name}: ${this.priceWithTax}${currency}`;
	}

	//* Getter y setter básico
	// get price() {
	// 	return this.#price;
	// }

	//* Propiedades computadas mediante get
	get priceWithTax() {
		return this.#price + (this.#price * this.tax / 100);
	}

	//* Modificación de propiedad privada de una clase mediante set
	set price(newPrice) {
		if (newPrice < 0) {
			throw new Error("Precio no válido");
		}

		this.#price = newPrice;
	}
}

//* Crear una instancia de una clase
const tarta = new Producto("Tarta", 15, 21);
const baguette = new Producto("Baguette", 1.2, 5, 3);

console.log(tarta instanceof Producto); // true
console.log(tarta.showInfo("$")); // Baguete: 1,45

//* Con la palabra Object puedo acceder a diversos métodos para trabajar con objetos, como por ejemplo este para obtener las keys. 
console.log(Object.keys(tarta)); // [name, hasDiscount, tax]

//* Para invocar a un getter no indicamos los paréntesis, lo tratamos como una propiedad
console.log(baguette.priceWithTax);

//* Para acceder al setter puedo hacer lo mismo, especificar la propiedad y el nuevo valor, que será el único parámetro que reciba el setter
baguette.price = -1;

//* Es probable que en mi setter quiera manejar algo de lógica. Como quiero mantener las clases lo más genéricas posible, no es buena idea introducir lógica de negocio ahí. Podemos usar un throw new Error() dentro de la clase y gestionar el error donde se ejecuta con un try/catch
function updatePrice(producto, newPrice) {
	try {
		producto.price = newPrice;
	} catch (e) {
		//* Manejo del error al poner un precio negativo
		console.error(e);
	}
}

// * Herencia
class Baguette extends Producto {
	constructor(name, price, tax, hasDiscount, hasGluten) {
		// * LLamamos a super() para asignar las propiedades ya existentes. Si debugueamos, vemos que pasará por cada uno de los constructores
		super(name, price, tax, hasDiscount);
		this.hasGluten = hasGluten;
	}

	//* En un método también puedo llamar a super, pero haciendo referencia al método
	showInfo() {
		const parent = super.showInfo();
		return `${parent} (oferta)`;
	}
}

const sinGluten = new Baguette("Pan sin gluten", 3, 5, false, false);

console.log(sinGluten.price);
console.log(sinGluten.priceWithTax);
console.log(sinGluten.showInfo());

//* Cuando accedo a las propiedades estáticas, haré referencia a la propia clase, no a la instancia
console.log(Producto.inStock);
