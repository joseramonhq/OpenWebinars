// Importando el módulo assert para realizar aserciones
const assert = require('assert');

// Desestructurando las funciones Given, When, Then del módulo cucumber
const { Given, When, Then } = require('cucumber');

// Importando el módulo fs para operaciones en el sistema de archivos
const fs = require('fs');

// Importando el módulo vm para ejecutar código JavaScript dentro de un contexto aislado
const vm = require('vm');

// Leyendo el contenido del archivo 'script.js' y almacenándolo en la variable 'code'
const code = fs.readFileSync('script.js');

// Ejecutando el código JavaScript de 'script.js' dentro del contexto actual
vm.runInThisContext(code);

// Definiendo un paso para la palabra clave Given con dos parámetros enteros
Given("que tengo {int} y {int}", (first, second) => {
	// Almacenando los primeros y segundos parámetros en el contexto para su uso posterior
	this.first = first;
	this.second = second;
});

// Definiendo un paso para la palabra clave When con dos parámetros enteros
When("resto {int} menos {int}", (first, second) => {
	// Calculando el resultado de restar el segundo parámetro del primero
	this.result = substract(first, second);
});

// Definiendo un paso para la palabra clave Then con un parámetro entero
Then("el resultado tiene que ser {int}", (expected) => {
	// Asegurando que el resultado calculado sea igual al valor esperado
	assert.strictEqual(this.result, expected);
});
