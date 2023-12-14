//1.Accede a las propiedades de un objeto que tenga: nombre, apellido, fecha de nacimiento y  cedula de ciudadania que imprima un mensaje.
//Inicializar objeto
let datos={
    Nombre:'Jose',
    Apellido:'Ramirez',
    fechaNacimiento: new Date(1990, 5, 15), // Año 1990, mes 5 (junio), día 15
    cedulaCiudadania:1234578
}//Crea una variable de la palabra reservada Date e imprime la fecha actual.
 let año = datos.fechaNacimiento.getFullYear();
 let mes = datos.fechaNacimiento.getMonth();    // Obtener el mes (0-11)
 let dia = datos.fechaNacimiento.getDate();       // Obtener el día
//Imprimir mensaje
console.log("El nombre es "+datos.Nombre+", "+"el apellido es "+ datos.Apellido+ " la fecha de nacimiento es "+dia+" "+mes+" "+año+"" +" Con cedula de ciudadania es "+datos.cedulaCiudadania)