/*  Clase 06 - 21/04/2022 - Jueves
    Ejercicio 11:
    Hacer un programa que le permita ingresar numeros al usuario y calcular la sumatoria y el
    promedio de los numeros ingresados. Los numeros deben ser mayores a 0 y la condicion de
    salida sera 0 
*/
let suma=0, promedio=0, num, i=0;
alert('Ingrese numeros, cuando ingrese un 0, el programa se los dejara de pedir');

do{
    i++;   
    num = parseInt(prompt('Ingrese un numero: '));
    if(num>0){
        suma = parseInt(suma) + num;
    }
    else if(num==0){i--;}
    else{
        alert('ERROR - No se aceptan numeros negativos o vacios')
        i--; // Si el valor ingresado es negativo o vacio, el iterador resta 1
    }
}while(num!=0);

parseFloat (promedio);
promedio = suma/i;
alert(`La suma de los ${i} numeros ingresados es: ${suma}`);
alert(`El promedio de la suma es: ${promedio}`);