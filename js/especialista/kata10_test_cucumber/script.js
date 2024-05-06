/**
 * Resta los números dados.
 * @param {...number} args - Los números que se restarán.
 * @returns {number} - El resultado de la resta.
 */
function substract(...args) {
	return args.splice(1).reduce((a, b) => a - b, args[0]);
}