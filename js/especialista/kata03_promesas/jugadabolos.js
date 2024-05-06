"use strict";

// Utilizamos una función flecha en lugar de la sintaxis de función de expresión.
// Esto hace que el código sea más conciso y legible.
/**
 * ${1:Description placeholder}
 */
const jugadaBolos = () => {
	// Generamos un tiempo aleatorio para simular la duración del juego.
	const tiempo = Math.random() * 2000;

	// Creamos una nueva promesa para representar el juego de bolos.
	const promesaBolos = new Promise((resolve, reject) => {
		// Utilizamos setTimeout para simular la acción de tirar los bolos después de cierto tiempo.
		setTimeout(() => {
			// Definimos la cantidad de bolos a tirar (un número aleatorio entre 0 y 9).
			const tirados = Math.floor(Math.random() * 10);

			// Verificamos si se ha tirado al menos un bolo.
			if (tirados > 0) {
				// Resolvemos la promesa con un mensaje de éxito (strike si se tira 9, o el número de bolos tirados).
				resolve(tirados === 9 ? `¡Strike!` : `Has tirado ${tirados} bolos.`);
			} else {
				// Rechazamos la promesa con un mensaje de error si no se ha tirado ningún bolo.
				reject(new Error(`¡Qué fallo! No has tirado ningún bolo.`));
			}
		}, tiempo); // Tiempo de espera antes de resolver o rechazar la promesa.
	});

	// Manejo de la promesa utilizando async/await para un código más limpio y legible.
	// Utilizamos try...catch para manejar cualquier error que ocurra durante la ejecución de la promesa.
	(async () => {
		try {
			// Esperamos a que la promesa se resuelva o se rechace.
			const resultado = await promesaBolos;
			// Imprimimos el resultado en la consola.
			console.log(resultado);
		} catch (error) {
			// Si la promesa se rechaza, imprimimos el mensaje de error en la consola.
			console.error(error.message);
		}
	})();
};

jugadaBolos();