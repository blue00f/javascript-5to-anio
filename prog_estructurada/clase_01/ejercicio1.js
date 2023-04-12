/*  Clase 01 - 03/03/2022 - Jueves
    Ejercicio 1:
    Pedir al usuario que ingrese un numero positivo
    e informar al usuario si el mismo es par o impar
*/

let num1,num2;
num1=parseInt(prompt("Ingrese un numero par/impar"));
num2=parseInt(prompt("Ingresa otro numero par/impar"));
if(num1<=0 || num2<=0){
    alert(`Los numeros ${num1} y ${num2} son negativos`);
}
else if(num1%2==0 && num2%2==0){
    alert(`Los numeros ${num1} y ${num2} son pares`);
}
if(num1%2!=0 || num2&2!=0){
    alert(`Los numeros ${num1} y ${num2} son pares e impares`);
}
else{
    alert(`Los numeros ${num1} y ${num2} son impares`);
}