"use strict";

// Declaración de la función jugarBolos utilizando la sintaxis de función de expresión.
// Esta función simula un juego de bolos y retorna una promesa que se resuelve o se rechaza según el resultado del juego.
/**
 * ${1:Description placeholder}
 */
function jugarBolos() {
	// Generar un tiempo aleatorio para simular la duración del juego.
	let time = Math.random() * 2000;

	// Creación de una nueva promesa.
	let a = new Promise((resolve, reject) => {
		// Utilizar setTimeout para simular la acción de tirar los bolos después de cierto tiempo.
		setTimeout(() => {
			// Definir la cantidad de bolos a tirar (un número aleatorio entre 0 y 9).
			let strike = 9;
			let tirados = Math.floor(Math.random() * 10);

			// Verificar si se ha tirado al menos un bolo.
			if (tirados > 0) {
				// Si se han tirado bolos, resolver la promesa con un mensaje de éxito (strike si se tira 9, o el número de bolos tirados).
				resolve(tirados === strike ? `Strike!!!` : `Has tirado ${tirados} bolos!!!`);
			} else {
				// Si no se ha tirado ningún bolo, rechazar la promesa con un mensaje de error.
				reject(new Error(`QUÉ FALLO!!! Has tirado ${tirados} bolos!!!`));
			}
		}, time); // Tiempo de espera antes de resolver o rechazar la promesa.
	});

	// Manejo de la promesa utilizando el método then y catch.
	a.then((mensaje) => {
		// Si la promesa se resuelve, imprimir el mensaje de éxito en la consola.
		console.log(mensaje);
	}).catch((error) => {
		// Si la promesa se rechaza, imprimir el mensaje de error en la consola.
		console.error(`${error.message}!!!`);
	});
}

// Llamar a la función jugarBolos para iniciar el juego.
jugarBolos();

