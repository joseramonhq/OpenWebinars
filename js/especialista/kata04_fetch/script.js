"use strict";

/**
 * ${1:Description placeholder}
 *
 * @type {string}
 */
let url = "http://www.boredapi.com/api/activity/";
document.querySelector(".request").addEventListener("click", (event) => fetchData());
function data1(data) {
	let div = document.querySelector(".activity");
	let h1 = document.createElement("h1");
	let a = document.createElement("a");
	div.textContent = a.textContent = ""
	h1.textContent = data.activity;
	a.setAttribute("href", data.link);
	a.textContent = data.link;
	div.append(h1, a);

}

/**
 * ${1:Description placeholder}
 *
 * @async
 * @returns {*}
 */
async function fetchData() {//async function
	try {
		const response = await fetch(url); //await para esperar a que se cargue la respuesta

		if (!response.ok) {// Verificar si la respuesta es exitosa (código de estado 200-299)
			throw new Error('La solicitud no fue exitosa');
		}

		const data = await response.json(); // Parsear la respuesta como JSON

		data1(data); // Mostrar la respuesta en el DOM

	} catch (error) {
		console.error('Se produjo un error:', error); // Capturar y manejar errores de la solicitud
	}
}






