// Utiliza una expresión regular para validar un formato de correo electrónico
//Inicializar datos
let correo="asrro@gmail.com"
let expresionRegular = /[a-zA-Z]/;
const expresionRegularCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Ejemplos de direcciones de correo electrónico para probar la expresión regular
const correo1 = 'usuario@example.com';
const correo2 = 'otro_usuario@dominio.com';
const correo3 = 'correo_con_espacios @dominio.com';

// Probar las direcciones de correo electrónico con la expresión regular
console.log(expresionRegularCorreo.test(correo1)); // Salida: true
console.log(expresionRegularCorreo.test(correo2)); // Salida: true
console.log(expresionRegularCorreo.test(correo3)); // Salida: false
//
