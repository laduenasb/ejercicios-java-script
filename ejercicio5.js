// Acceder a las propiedades de un objeto e imprima todo el contenido en un mensaje

// Inicializar los datos de entrada

let persona = {
	nombre: 'Augusto',
	edad: 25,
	pelo: 'negro',
	peso: 70.5,
	casado: true
}

let estado=(casado)=>{if (casado) {return "casado"} else {return "soltero"}};

console.log(`${persona.nombre} tiene ${persona.edad} años y su pelo es de color ${persona.pelo}, pesa ${persona.peso} Kg y se encuentra ${estado(persona.casado)}`);