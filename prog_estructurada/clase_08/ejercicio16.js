/*  Clase 08 - 26/05/2022 - Jueves
    Ejercicio 16 (Con funcion sin PARAMETROS ni RETURN):

    Hacer un programa que le permita al usuario realizar una de las siguientes operaciones: sumar, restar, multiplicar y dividir y mostrar por pantalla el resultado.
    El usuario podrá realizar estas operaciones todas las veces que lo desee y la condición de salida será 0.

    1) Teniendo en cuenta el enunciado 1 realizar una versión de dicho programa implementando funciones sin parámetros y que no devuelvan valores. (Funciones sin parametros ni return)
 
    2) Teniendo en cuenta el mismo enunciado, hacer una nueva versión del programa implementando Funciones con parámetros.
*/
var num1,num2,suma,resta,mult,division,operacion;

function entradaDatos(){
    num1=parseInt(prompt(`Ingresa el primer numero:`));
    num2=parseInt(prompt(`Ingresa el segundo numero:`));
}

function ingresoOperacion(){
    operacion=parseInt(prompt(`Ingresa el numero de operacion:\n0. Finalizar\n1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Cambiar numeros`));
}

function opeSuma(){
    suma=num1+num2;
    alert(`La suma de ${num1} y ${num2} es: ${suma}`);
}

function opeResta(){
    resta=num1-num2;
    alert(`La resta de ${num1} y ${num2} es: ${resta}`);
}

function opeMult(){
    mult=num1*num2;
    alert(`La resta de ${num1} y ${num2} es: ${mult}`);
}

function opeDivision(){
    if(num2==0){
        alert(`No se puede dividir entre 0.`)
    }
    else{
        division=num1/num2;
        alert(`La resta de ${num1} y ${num2} es: ${division}`);
    }
}

alert(`Bienvenido al programa, vas a ingresar numeros para hacer diferentes operaciones.`);

entradaDatos();
ingresoOperacion();

while(operacion!=0 || isNaN(operacion)){
    switch(operacion){
        case 1:
            opeSuma();
            break;
        case 2:
            opeResta();
            break;
        case 3:
            opeMult();
            break;
        case 4:
            opeDivision();
            break;
        case 5:
            entradaDatos();
            break;
        default:
            alert(`Numero de operacion INCORRECTO`);
            break;
    }
    ingresoOperacion();
}

alert(`Programa finalizado`);