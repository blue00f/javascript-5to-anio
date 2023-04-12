/*  Clase 04 - 29/03/2022 - Martes
    Ejercicio 7:
    Realizar un programa que le permita al usuario seleccionar una de las siguientes
    operaciones, sumar, restar, multiplicar y dividir. Mostrar por pantalla el resultado.
    La division no puede ser por 0.
*/
let num1,num2,suma,resta,div,mult,opcion;

num1 = parseFloat(prompt("Ingrese el primer numero"));
num2 = parseFloat(prompt("Ingrese el segundo numero"));
opcion = parseInt(prompt("Seleccione que calculo quiere hacer. \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir"));

switch (opcion){
    case 1:
        suma = num1 + num2;
        alert(`La suma es: ${suma}`);
        break;
        
    case 2:
        resta = num1 - num2;
        alert(`La resta es: ${resta}`);
        break;

    case 3:
        mult = num1 * num2;
        alert(`La multiplicacion es: ${mult}`);
        break;
        
    case 4:
        if (num2!=0){
            div = num1 / num2;
            alert(`La division es: ${div}`);
            break;
        } 
        else{
            alert("No se puede dividir por 0");
            break;
        }
    default:
        alert("La opcion ingresada no es valida");
}