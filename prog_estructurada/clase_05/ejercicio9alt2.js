/*  Clase 05 - 07/04/2022 - Jueves
    Ejercicio 9 (Roca):
    Realizar un programa que informa por consola todos los resultados posibles que se pueden obtener tirando dos dados.
    Ademas se solicita que por cada combinacion se realice la suma de la misma, se muestre el resultado, se indique 
    si es par o impar y si el resultado es multiplo de 3.
    Se debe seguir el siguiente formato Dado + Dado2 = suma + par/impar + muiltiplo de 3
*/

// Hecho por Roca sin usar el "numero magico"
let i,j,suma;
let est, estMult; // 'est' indica si el numero es par o impar, 'estMult' indica si el numero es multiplo de 3 o no
console.log()
for(i=1; i<7; i++){
    suma=0;
    for(j=1; j<7; j++){
        suma=i+j;

        if(suma%2==0){
            est="Par";
        }else{
            est="Impar";
        }

        if(suma%3==0){
            estMult="Es multiplo de 3";
        }else{
            estMult="No es multiplo de 3";
        }

        console.log(`Dado(${i}) + Dado(${j}) = ${i+j}, ${est}, ${estMult}`);
        console.log(`---------------------------------------------------`);
    }
}