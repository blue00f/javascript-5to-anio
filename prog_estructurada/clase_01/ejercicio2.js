/*  Clase 01 - 03/03/2022 - Jueves
    Ejercicio 2:
    Pedir al usuario dos numeros y mostrar por pantalla cual es el mayor y cual es el menor. 
    Verificar que los numeros no sean iguales y que sean mayores a 0. En caso de no cumplir las condiciones solicitadas
    indicar al usuario que los datos no son validos.
*/

let num1,num2;
num1=parseInt(prompt("Ingrese un numero "));
num2=parseInt(prompt("Ingresa otro numero "));
if((num1<0 || num2<0) || (num1==num2) ){
    alert(`Los numeros ${num1} y ${num2} no cumplen con lo requerido `);
}
else if(num1>num2){
    alert(`el ${num1} es el numero mayor `);
}
else if(num2>num1){
    alert(`el ${num2} es el numero mayor `);
}