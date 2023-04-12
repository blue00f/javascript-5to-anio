/*  Clase 09 - 02/06/2022 - Jueves
    Ejercicio 20:
    
    Realizar un programa que le permita al usuario ingresar 5 numeros
*/

// Inicializacion del vector "dinamico"
let numeros=[];

// Carga del vector
for(let i=0; i<5; i++){
    numeros.unshift(prompt(`Ingresa el valor del vector [${i}]`));
}

// Mostrando el vector
for(let i=0; i<numeros.length; i++){
    console.log(`${numeros[i]}`);   
}
