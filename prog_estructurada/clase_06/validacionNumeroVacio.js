/*  Clase 06 - 28/04/2022 - Jueves
    Se valida si el numero ingresado es vacio
*/
let num;
num=parseInt(prompt('Ingresa un numero'));

if (isNaN(num) || num==null)
    alert("El numero ingresado es vacio");
else
    alert(`El numero ingresado es:\n${num}`);    