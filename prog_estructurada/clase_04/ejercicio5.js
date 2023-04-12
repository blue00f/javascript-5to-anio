/*  Clase 04 - 29/03/2022 - Martes
    Ejercicio 5:
    Pedir al usuario que ingrese un numero del 1 al 7 y mostrar el dia correspondiente
    en caso de no cumplir con la condicion indicar al usuario que el dato no es valido.
*/

let opcion;
alert("Ingrese un numero del 1 al 7 para mostrar el dia correspondiente");

opcion = parseInt (prompt("Ingrese un dia"));

switch(opcion){
    case 1:
        alert("Lunes")
        break;
    case 2:
        alert("Martes")
        break;
    case 3:
        alert("Miercoles")
        break;
    case 4:
        alert("Jueves")
        break;
    case 5:
        alert("Viernes")
        break;
    case 6:
        alert("Sabado")
        break;
    case 7:
        alert("Domingo")
        break;
    default:
        alert("Dato mal ingresado")
}