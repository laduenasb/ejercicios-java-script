// Crear una función que determine si un número es par o impar
// Definir la función

function esPar(num) {
	// Retorne si el residuo de la division entre num y 2 es 0, entonces que me indique que es par
	return num % 2 === 0;
	// === Comparación Estricta
	// == Comparación
}

const resultadoPar = esPar(6);
// Imprima el dato de salida por consola
console.log(resultadoPar);