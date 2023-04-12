/*
    Ejemplos de funciones normales
*/

console.log(`-FUNCIONES NORMALES-`)

// Ejemplo 1: Crear una funcion que retorne un mensaje
let mensaje1 = function() {
    return `Texto mostrado por una funcion normal`;
}
console.log(mensaje1());

// Ejemplo 2: Retornar un saludo usando como parametro el nombre
let saludar = function(nombre) {
    return `Hola ${nombre}`;
}
console.log(`Saludo usando una funcion normal: ${saludar('Bruno')}`);

// Ejemplo 3: Suma de dos numeros
let sumar = function(num1,num2) {
    return num1+num2;
}
console.log(`Suma usando una funcion normal: ${sumar(11,9)}`);

// Ejemplo 4: Crear una funcion que haga un saludo usando variables locales (no usar parametros)
let mensaje2 = function() {
    let texto;
    texto = `Este texto fue mostrado utilizando una funcion normal`;
    return texto;
}
console.log(mensaje2());

/*
    Ejemplos de funciones flecha
*/

console.log(`\n-FUNCIONES FLECHAS-`)

// Ejemplo 1: Crear una funcion que retorne un mensaje
let mensaje1_flecha = () => `Texto mostrado por una funcion flecha`;
console.log(mensaje1_flecha());

// Ejemplo 2: Retornar un saludo usando como parametro el nombre
let saludar_flecha = nombre => `Hola ${nombre}`;
console.log(`Saludo usando una funcion flecha: ${saludar_flecha('Nicole')}`);

// Ejemplo 3: Suma de dos numeros
let sumar_flecha = (num1,num2) => num1+num2;
console.log(`Suma usando la funcion flecha: ${sumar_flecha(4,6)}`);

// Ejemplo 4: Crear una funcion que haga un saludo usando variables locales (no usar parametros)
let mensaje2_flecha = () => {
    let texto;
    texto = `Este texto fue mostrado utilizando una funcion flecha`;
    return texto;
}
console.log(mensaje2_flecha());