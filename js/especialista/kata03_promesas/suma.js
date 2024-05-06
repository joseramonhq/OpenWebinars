// Función total que recibe un array de promesas y devuelve una nueva promesa que se resuelve cuando todas las promesas en el array se han resuelto
/**
 * ${1:Description placeholder}
 *
 * @param {*} promises
 * @returns {*}
 */
let total = (promises) => {
	// Utiliza Promise.all para esperar a que todas las promesas se resuelvan
	return Promise.all(promises).then((results) => results.reduce((a, b) => a + b));
};

// Función suma que devuelve una promesa que se resuelve con la suma de dos números a y b, con un retraso opcional
/**
 * ${1:Description placeholder}
 *
 * @param {*} a
 * @param {*} b
 * @param {*} delay
 * @returns {*}
 */
let suma = (a, b, delay) => new Promise((resolve, reject) => {
	// Verifica si a y b son números
	if (typeof a === "number" && typeof b === "number") {
		// Si son números, espera el tiempo especificado (o 0 si no se proporciona un retraso) y luego resuelve la promesa con la suma de a y b
		setTimeout(() => resolve(a + b), delay || 0);
	} else {
		// Si a o b no son números, rechaza la promesa con un error
		reject(new Error("Alguno de los argumentos no es un número"));
	}
});

// Crea dos promesas de suma con diferentes valores y retrasos
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let a = suma(5, 10, 10000); // Suma de 5 y 10 con un retraso de 10 segundos
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let b = suma(10, 20, 2000); // Suma de 10 y 20 con un retraso de 2 segundos
/**
 * ${1:Description placeholder}
 *
 * @type {*}
 */
let c = suma(100, 200, 7000); // Suma de 100 y 200 con un retraso de 7 segundos

// Calcula la suma total de las promesas usando la función total y luego maneja el resultado o el error
total([a, b, c]).then(
	// Si todas las promesas se resuelven, muestra el resultado en la consola
	(result) => {
		console.log(result);
	})
	.catch((error) => {
		// Si alguna de las promesas se rechaza, muestra el mensaje de error en la consola
		console.error(error.message);
	});




/**
 * ${1:Description placeholder}
 *
 * @async
 * @returns {*}
 */
async function sumador() {
	console.log("Ejecucion");
	await b.then((result) => console.log(result));
	await c.then((result) => console.log(result));
	await a.then((result) => console.log(result));
	console.log("Finalizado");

}

sumador();



/**
 * ${1:Description placeholder}
 *
 * @returns {*}
 */
let d = () => new Promise((resolve) => setTimeout(console.log()));