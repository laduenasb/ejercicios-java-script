//Crea un símbolo con una descripción y úsalo en un objeto
//Inicializar datos
let simbolo = Symbol('contraseñaPrivada');//Preguntar
let datos={
    nombre:'Luis',
    [simbolo]:"CAsa$89212"
}
console.log(datos[simbolo]);
console.log(datos)