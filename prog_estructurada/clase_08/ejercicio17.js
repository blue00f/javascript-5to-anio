/*  Clase 08 - 26/05/2022 - Jueves
    Ejercicio 17 (Con funcion con PAREMETROS):

    Hacer un programa que le permita al usuario realizar una de las siguientes operaciones: sumar, restar, multiplicar y dividir y mostrar por pantalla el resultado.
    El usuario podrá realizar estas operaciones todas las veces que lo desee y la condición de salida será 0.

    1) Teniendo en cuenta el enunciado 1 realizar una versión de dicho programa implementando funciones sin parámetros y que no devuelvan valores. (Funciones sin parametros ni return)
 
    2) Teniendo en cuenta el mismo enunciado, hacer una nueva versión del programa implementando Funciones con parámetros.
*/

function entradaDatos()
{
    do
    {
        num1=parseFloat(prompt(`Ingrese el primer numero:`));
    }while(isNaN(num1));

    do
    {
        num2=parseFloat(prompt(`Ingrese el segundo numero:`));
    }while(isNaN(num2));
}

function ingresoOperacion()
{
    ope=parseInt(prompt(`Ingresa el numero de operacion:\n0. Finalizar\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Cambiar numeros`));
}

function opeSuma(num1,num2)
{
    resultado = num1+num2;
    alert(`La suma entre ${num1} y ${num2} es:\n${resultado}`);
    return resultado;
}

function opeResta(num1,num2)
{
    resultado = num1-num2;
    alert(`La resta entre ${num1} y ${num2} es:\n${resultado}`);
    return resultado;
}


function opeMult(num1,num2)
{
    resultado = num1*num2;
    alert(`La multiplicacion entre ${num1} y ${num2} es:\n${resultado}`);
    return resultado;
}


function opeDivision(num1,num2)
{
    if(num2==0)
    {
        alert("No se puede dividir entre 0.")
    }
    else
    {
        resultado = num1/num2;
        alert(`La division entre ${num1} y ${num2} es:\n${resultado}`);

        return resultado;
    }
}

alert("Bienvenido al programa, vas a ingresar 2 numeros para realizar algunas operaciones.");

entradaDatos();
ingresoOperacion();

while(ope!=0 || isNaN(ope))
{
    switch(ope)
    {
        case 1:
            opeSuma(num1,num2);
            break;
        case 2:
            opeResta(num1,num2);
            break;
        case 3:
            opeMult(num1,num2);
            break;
        case 4:
            opeDivision(num1,num2);
            break;
        case 5:
            entradaDatos();
            break;
        default:
            alert(`El numero de operacion es incorrecto.`)
            break;
    }
    ingresoOperacion();
}
alert("Programa finalizado.");