function agregarTarea() {
	// Obtener el valor del elemento con el id "nuevaTarea"
	let tarea = document.getElementById("nuevaTarea").value;
	// Comprobar si el valor de la tarea no esta vacío
	if(tarea!==""){
		// Obtenear la lista de tareas con el id "listaTareas"
		let lista = document.getElementById("listaTareas");

		// Nos permite agregar un nuevo elemento a la lista 
		let elemento = document.createElement("li");

		// Establecer el texto del elemento li con el valor que capturo el campo de entrada

		elemento.textContent = tarea;

		// Ordenar las tareas
		lista.appendChild(elemento);
		// Resetear el campo de entrada para que quede vacío después de haber ingresado un dato
		document.getElementById("nuevaTarea").value="";
	}
}