// Definición de la clase Extractor
/**
 * ${1:Description placeholder}
 *
 * @class Extractor
 * @typedef {Extractor}
 */
class Extractor {
	// Propiedad privada para almacenar el valor extraído
	/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
	#valor;

	// Constructor de la clase Extractor
	// Recibe el HTML y la expresión regular para buscar en él
	/**
 * Creates an instance of Extractor.
 *
 * @constructor
 * @param {*} html
 * @param {*} regex
 */
	constructor(html, regex) {
		// Llama al método privado extrae para extraer el valor deseado del HTML
		// y lo asigna a la propiedad privada #valor
		this.#valor = this.#extrae(html, regex);
	}

	// Método privado que extrae el valor del HTML utilizando la expresión regular
	/**
 * ${1:Description placeholder}
 *
 * @param {*} html
 * @param {*} regex
 * @returns {*}
 */
	#extrae(html, regex) {
		//try {
		// Ejecuta la expresión regular en el HTML y devuelve el resultado
		return regex.exec(html);
		/*	} catch (Error) {
				console.log("No se encuentran coincidencias");
			}*/

	}

	// Getter para acceder al valor extraído de forma segura
	/**
 * ${1:Description placeholder}
 *
 * @readonly
 * @type {*}
 */
	get value() {
		// Devuelve el valor almacenado en la propiedad privada #valor
		try {
			return this.#valor[1];
		} catch (error) {
			return "No hay valor";
		}
	}
}

// Definición de la clase Product
/**
 * ${1:Description placeholder}
 *
 * @class Product
 * @typedef {Product}
 */
class Product {
	// Propiedades privadas para almacenar el título y la imagen del producto
	/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
	#title;
	/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
	#image;

	// Constructor de la clase Product
	// Recibe el título y la imagen del producto
	/**
 * Creates an instance of Product.
 *
 * @constructor
 * @param {*} title
 * @param {*} image
 */
	constructor(title, image) {
		// Asigna el título y la imagen a las propiedades privadas correspondientes
		this.#title = title;
		this.#image = image;
	}

	// Getter para acceder al título del producto
	/**
 * ${1:Description placeholder}
 *
 * @readonly
 * @type {*}
 */
	get title() {
		// Devuelve el título almacenado en la propiedad privada #title
		return this.#title;
	}

	// Getter para acceder a la imagen del producto
	/**
 * ${1:Description placeholder}
 *
 * @readonly
 * @type {*}
 */
	get image() {
		// Devuelve la imagen almacenada en la propiedad privada #image
		return this.#image;
	}
}

// Creación de una instancia de Extractor para extraer el valor de la etiqueta <img> del HTML
/**
 * ${1:Description placeholder}
 *
 * @type {Extractor}
 */
let a = new Extractor(
	document.body.innerHTML, // HTML del documento
	new RegExp(/<img src="(.*)".*?>/) // Expresión regular para buscar la etiqueta <img>
);

// Creación de una instancia de Extractor para extraer el valor del título del HTML
/**
 * ${1:Description placeholder}
 *
 * @type {Extractor}
 */
let title = new Extractor(
	document.body.innerHTML, // HTML del documento
	new RegExp(/<p class="(.*)".*\/?y>/) // Expresión regular para buscar la etiqueta <p>
);

// Creación de una instancia de Extractor para extraer el valor de la imagen del HTML
/**
 * ${1:Description placeholder}
 *
 * @type {Extractor}
 */
let image = new Extractor(
	document.body.innerHTML, // HTML del documento
	new RegExp(/<img src="(.*)".*?>/) // Expresión regular para buscar la etiqueta <img>
);

// Creación de una instancia de Product con el título y la imagen extraídos
/**
 * ${1:Description placeholder}
 *
 * @type {Product}
 */
let product = new Product(title.value, image.value);

// Imprime en la consola el título y la imagen del producto utilizando los getters
console.log(product.title);
console.log(product.image);

