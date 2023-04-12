/*  Clase 08 - 26/05/2022 - Jueves
    Ejercicio 18 (Con funcion con PAREMETROS):

    Hacer un programa que le permita al usuario realizar una de las siguientes operaciones: sumar, restar, multiplicar y dividir.
    Mostrar por pantalla el resultado y además informar si el resultado es par o impar, además informar cual es el mayor de los números ingresados y cual es el menor.
    Las operaciones deberán realizarse con valores mayores a 0.
    En el caso de la división, verificar que no sea una división por 0.
    El usuario podrá realizar estas operaciones todas las veces que lo desee y la condición de salida será 0.
    
    1) Teniendo en cuenta el enunciado 2 realizar una versión de dicho programa implementando Funciones con parámetros y que devuelvan valores.
*/

function entradaDatos()
{
    do
    {
        num1=parseFloat(prompt(`Ingrese el primer numero:`));
    }while(num1<=0 || isNaN(num1));

    do
    {
        num2=parseFloat(prompt(`Ingrese el segundo numero:`));
    }while(num2<=0 || isNaN(num2));
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

function determinarParImpar(resultado)
{
    if(resultado%2==0)
    {
        alert(`El resultado ${resultado} es par.`)
    }
    else
    {
        alert(`El resultado ${resultado} es impar.`);
    }
}

function determinarMayorYMenor(num1,num2)
{
    if(num1>num2)
    {
        alert(`El primer numero ingresado ${num1} es mayor al segundo ${num2}`);
    }
    else if(num2>num1)
    {
        alert(`El segundo numero ingresado ${num2} es mayor al primero ${num1}`);
    }
    else
    {
        alert(`El primer numero ${num1} es igual al segundo ${num2}`);
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
            determinarParImpar(resultado);
            determinarMayorYMenor(num1,num2);
            break;
        case 2:
            opeResta(num1,num2);
            determinarParImpar(resultado);
            determinarMayorYMenor(num1,num2);
            break;
        case 3:
            opeMult(num1,num2);
            determinarParImpar(resultado);
            determinarMayorYMenor(num1,num2);
            break;
        case 4:
            opeDivision(num1,num2);
            determinarParImpar(resultado);
            determinarMayorYMenor(num1,num2);
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