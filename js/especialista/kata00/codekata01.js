// Definición de una matriz de nombres
/**
 * ${1:Description placeholder}
 *
 * @type {{}\}
 */
let namedCollection = [
	"Merl",
	"German",
	"Luisa",
	"Stephon",
	"Elta",
	"Fannie Kelley",
	"Manuel Schneider",
	"Luke Powell",
	"Millie Olson",
	"Theodore Ballard",
	"Miguel Martinez",
	"Beatrice Mason",
	"Bertie Morton",
	"Loretta Reese",
	"Rosa Benson",
	"Christian Bass",
	"Olga Hunter",
	"Kate McBride",
];

// Verificando si "Elta" está en la matriz
console.log("Elta" in namedCollection); // Output: true

// Verificando si el índice 20 está en la matriz
console.log(20 in namedCollection); // Output: false

// Obteniendo la longitud de la matriz
console.log(namedCollection.length); // Output: 18

// Imprimiendo la matriz completa
console.log(namedCollection);

// Creando un conjunto de nombres
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let enumu = new Set([
	"Eugene Greer",
	"Georgia Doyle",
	"Virgie Morgan",
	"Bernice Richards",
	"Barry Parker",
	"Julia Bennett",
	"Eugene Austin",
	"Jessie Howell",
	"Christian Hale",
	"Harry Francis",
	"Maria Ryan",
	"Francisco Riley",
	"Beulah Palmer",
	"Essie Allen",
	"Harriet Doyle",
]);

// Obteniendo el tamaño del conjunto
console.log(enumu.size); // Output: 15

// Imprimiendo el conjunto completo
console.log(enumu);

// Creando un mapa de nombres con sus respectivos códigos
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let map = new Map([
	["10", "Jeffrey Patterson"],
	["74", "Caroline Butler"],
	["54", "Edgar Lawrence"],
	["24", "Mabel Murphy"],
	["86", "Clara Mitchell"],
	["62", "Lulu Rios"],
	["2", "Jack Higgins"],
	["75", "Grace Washington"],
	["78", "Seth Jones"],
	["33", "Isabelle Rogers"],
	["78", "Gavin Rice"],
]);

// Obteniendo el tamaño del mapa
console.log(map.size); // Output: 10 (el último elemento duplicado no se cuenta)

// Imprimiendo el mapa completo
console.log(map);

// Creando un objeto con información personal
/**
 * ${1:Description placeholder}
 *
 * @type {{ name: string; surname1: string; surname2: string; }\}
 */
let obj = {
	name: "Jose Ramon",
	surname1: "Hidalgo",
	surname2: "Quintana",
};

// Imprimiendo el objeto completo
console.log(obj);

// Obteniendo las claves del objeto
console.log(Object.keys(obj)); // Output: ["name", "surname1", "surname2"]

// Obteniendo los valores del objeto
console.log(Object.values(obj)); // Output: ["Jose Ramon", "Hidalgo", "Quintana"]

// Verificando si "name" está en el objeto
console.log("------> " + ("name" in obj)); // Output: ------> true

// Iterando sobre las entradas del objeto
Object.entries(obj).forEach((x) =>
	console.log(Object.keys(x) + "  " + Object.values(x))
);

// Creando un conjunto débil
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let wo = new WeakSet([new Number(4), new String("3")]);
wo.add(new Object());

// Obteniendo el tamaño del conjunto débil
console.log(wo.size); // Output: undefined (los conjuntos débiles no tienen propiedad 'size')

// Definición de una función generadora para lanzar un dado
/**
 * ${1:Description placeholder}
 *
 * @param {*} attempts
 * @returns {{}\}
 */
function* generador(attempts) {
	// El bucle for se ejecuta 'attempts' veces
	for (let iteration = 0; iteration < attempts; iteration++)
		// La palabra clave 'yield' pausa la ejecución de la función y devuelve un valor
		// En este caso, genera un número aleatorio entre 1 y 15 y lo devuelve
		yield Math.floor(Math.random() * 15) + 1;
}

// Creando una instancia del generador
// Al llamar a la función generadora, no se ejecuta inmediatamente, sino que devuelve un iterador
// Este iterador se puede usar para controlar el flujo de ejecución de la función generadora
/**
 * ${1:Description placeholder}
 *
 * @type {{}\}
 */
let lanzaDado = generador(3);

// Lanzando el dado e imprimiendo el valor generado
// La función next() del iterador avanza la ejecución de la función generadora hasta el próximo 'yield'
// Cada llamada a next() devuelve un objeto con dos propiedades: value y done
// 'value' contiene el valor devuelto por el 'yield', y 'done' indica si la función generadora ha terminado
console.log(lanzaDado.next().value); // Se imprime el valor generado en la primera iteración
console.log(lanzaDado.next().value); // Se imprime el valor generado en la segunda iteración
console.log(lanzaDado.next().value); // Se imprime el valor generado en la tercera iteración
console.log(lanzaDado.next().value); // Como la función generadora solo tiene 3 iteraciones, 'done' es true y 'value' es undefined

// Declaración de arrays para almacenar números del juego y del cartón del jugador
/**
 * ${1:Description placeholder}
 *
 * @type {{}\}
 */
let numbers = [];
/**
 * ${1:Description placeholder}
 *
 * @type {{}\}
 */
let numbersCarton = [];

// Definición de una función generadora para extraer números únicos
/**
 * ${1:Description placeholder}
 *
 * @param {*} attempts
 * @param {*} array
 * @returns {{}\}
 */
function* extractNumber(attempts, array) {
	let number;
	// Genera 'attempts' números únicos
	for (let index = 0; index < attempts; index++) {
		// Genera un número aleatorio único y lo guarda en 'number'
		do {
			number = Math.floor(Math.random() * 90) + 1;
		} while (array.includes(number)); // Repite si el número ya está en el array
		// Devuelve el número generado en esta iteración
		yield number;
	}
}

// Creación de instancias para generar números del juego y del cartón del jugador
/**
 * ${1:Description placeholder}
 *
 * @type {{}\}
 */
let times = extractNumber(90, numbers); // 90 números posibles en el juego
/**
 * ${1:Description placeholder}
 *
 * @type {{}\}
 */
let carton = extractNumber(15, numbersCarton); // 15 números en el cartón del jugador

// Función para obtener el siguiente número del cartón del jugador
/**
 * ${1:Description placeholder}
 *
 * @returns {*}
 */
function rellenarCarton() {
	return carton.next().value;
}

// Función para obtener el siguiente número del juego
/**
 * ${1:Description placeholder}
 *
 * @returns {*}
 */
function bingo() {
	return times.next().value;
}

// Función principal para jugar al bingo simulado
/**
 * ${1:Description placeholder}
 */
function jugar() {
	// Rellena el cartón del jugador con 15 números únicos
	for (let index = 0; index < 15; index++) {
		let number = rellenarCarton();
		numbersCarton.push(number);
	}
	console.log(numbersCarton); // Muestra el cartón del jugador

	// Realiza 70 iteraciones del juego
	for (let index = 0; index < 70; index++) {
		let number = bingo(); // Obtiene el siguiente número del juego
		// Verifica si el número jugado está en el cartón del jugador
		if (numbersCarton.includes(number)) {
			// Elimina el número del cartón si está presente
			let position = numbersCarton.indexOf(number);
			numbersCarton.splice(position, 1);
		}
		numbers.push(number); // Añade el número jugado al array de números del juego
		// Si el cartón está vacío, muestra "Ganaste" y termina el juego
		if (numbersCarton.length == 0) {
			console.log("Ganaste");
			break;
		}
	}
	// Muestra el resultado del juego
	if (numbersCarton.length == 0) {
		console.log("Ganaste");
	} else {
		console.log("Perdiste");
	}
	console.log(numbers); // Muestra todos los números jugados en el juego
	console.log(numbersCarton); // Muestra los números restantes en el cartón del jugador
}

// Función para iniciar el juego
jugar();

// Ejemplo de manipulación de HTML utilizando expresiones regulares
/**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
let html = `<html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>Document</title>
                </head>
                <body>
                    <h1 class="h1 font text">Formación técnica</h1>
                </body>
            </html>`;

// Expresión regular para extraer el texto de una etiqueta <h1>
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let expression = new RegExp(/<h1(.*)>(.*)<\/h1>/);
console.log(expression.exec(html)[2]); // Muestra el texto extraído de la etiqueta <h1>

// Expresión regular con grupos de captura con nombres
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let expression2 = new RegExp(/<h1(.*)>(?<texto>.*)<\/h1>/);
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let result = expression2.exec(html);
console.log(result.groups.texto); // Muestra el texto extraído utilizando el grupo de captura con nombre

// Expresión regular para validar números de teléfono español
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let phone = new RegExp(/\+?34 ?[6-7]([0-9]{2} ?)([0-9]{3} ?)([0-9]{3})/);
/**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
let res = "+34 650568345";
console.log(phone.test(res)); // Verifica si el número de teléfono es válido según el patrón definido

/////////////////////////////////////////////////////////////////////////////////////////
// Prototipo 1: Objeto literal como prototipo

/**
 * ${1:Description placeholder}
 *
 * @type {{ greet(): void; }\}
 */
const studentPrototype = {
	greet() {
		// Método 'greet' dentro del objeto literal
		console.log("Hola con el primer prototipo");
	},
};

/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
const firstStudent = Object.create(studentPrototype); // Crea un objeto basado en el prototipo
firstStudent.greet(); // Llama al método 'greet' heredado del prototipo

//Explicación:
// En este primer ejemplo, se define un objeto literal llamado 'studentPrototype' que contiene
// un método llamado 'greet'. Luego, se utiliza la función 'Object.create' para crear un nuevo
// objeto llamado 'firstStudent' que tiene como prototipo a 'studentPrototype'. Al llamar al método
// 'greet' en 'firstStudent', se ejecuta el método definido en el prototipo.

/////////////////////////////////////////////////////////////////////////////////////////
// Prototipo 2: Función constructora con asignación de prototipo

/**
 * ${1:Description placeholder}
 *
 * @type {{ greet(): void; }\}
 */
const studentPrototype2 = {
	greet() {
		console.log("Hola con el primer prototipo de " + this.name);
	},
};

/**
 * ${1:Description placeholder}
 *
 * @param {*} name
 * @returns
 */
function Student(name) {
	// Función constructora 'Student' que recibe un parámetro 'name'
	this.name = name;
}

Object.assign(Student.prototype, studentPrototype2); // Asigna el prototipo2 al prototype de Student

/**
 * ${1:Description placeholder}
 *
 * @type {Student}
 */
let firstStudent2 = new Student("Pablo"); // Crea una nueva instancia de 'Student' con el nombre 'Pablo'

firstStudent2.greet(); // Llama al método 'greet' heredado del prototipo asignado

//Explicación:
// En este segundo ejemplo, se define una función constructora llamada 'Student' que recibe un
// parámetro 'name' y lo asigna a la propiedad 'name' del nuevo objeto. Luego, se utiliza la
// función 'Object.assign' para asignar el objeto 'studentPrototype2' como prototipo del objeto
// 'Student.prototype'. Al crear una nueva instancia de 'Student' con 'new Student("Pablo")', se
// hereda el método 'greet' del prototipo asignado.

/////////////////////////////////////////////////////////////////////////////////////////
// Prototipo 3: Función constructora con definición de método en el prototipo

/**
 * ${1:Description placeholder}
 *
 * @param {*} name
 * @returns
 */
function Persona(name) {
	// Función constructora 'Persona' que recibe un parámetro 'name'
	this.name = name;
}

Persona.prototype.greet = function () {
	// Define el método 'greet' en el prototype de Persona
	console.log("Hola desde la tercera forma de prototipo, " + this.name);
};

/**
 * ${1:Description placeholder}
 *
 * @type {Persona}
 */
let yo = new Persona("Jose"); // Crea una nueva instancia de 'Persona' con el nombre 'Jose'

yo.greet(); // Llama al método 'greet' definido en el prototipo de Persona

//Explicación:
// En este tercer ejemplo, se define una función constructora llamada 'Persona' similar al
// ejemplo anterior. Sin embargo, en esta ocasión, el método 'greet' se define directamente
// dentro de la propiedad 'prototype' del objeto 'Persona'. De esta forma, todas las instancias
// creadas a partir de 'Persona' heredarán el método 'greet'.
