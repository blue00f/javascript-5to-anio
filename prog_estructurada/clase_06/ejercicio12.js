/*  Clase 06 - 21/04/2022 - Jueves
    Ejercicio 12:
    Hacer un programa que le permita ingresar numeros al usuario, el programa debera de informar
    cuantos numeros pares e impares se ingresaron. Ademas, debera sacar la sumatoria y el promedio
    de los numeros ingresados. La condicion de salida sera 0 y podran ingresarse tanto numeros positivos
    y negativos.
*/
let suma=0, promedio=0, num;
let i=0, contImp=0, contPar=0;
let contNeg=0, contPos=0, numMayor, numMenor; // Variables extras
alert('Ingrese numeros, cuando ingrese un 0, el programa se los dejara de pedir');

do{
    i++;
    num = parseInt(prompt('Ingrese un numero: '));
    if(num<0 || num>0){ // Se toman los numeros negativos y positivos, no se toma el 0
        suma = parseInt(suma) + num;
        if(num%2==0){contPar++;} // Contador de numeros pares
        if(num%3==0){contImp++;} // Contador de numeros impares
        if(num<0){contNeg++;}
        if(num>0){contPos++;}
    }
    else if(num==0){i--;}
    else{
        alert('ERROR - No se aceptan numeros vacios')
        i--; // Si el valor ingresado es vacio, el iterador resta 1
    }
}while(num!=0);

promedio = parseFloat(promedio);
promedio = suma/i;
alert(`Cantidad de numeros ingresados: ${i}\nSuma: ${suma}\nPromedio: ${promedio}\n\nCantidad de numeros pares: ${contPar}\nCantidad de numeros impares: ${contImp}\n\nCantidad de numeros positivos: ${contPos}\nCantidad de numeros negativos: ${contNeg}`);