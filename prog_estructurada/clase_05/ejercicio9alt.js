/*  Clase 05 - 07/04/2022 - Jueves
    Ejercicio 9 (Rodriguez):
    Realizar un programa que informa por consola todos los resultados posibles que se pueden obtener tirando dos dados.
    Ademas se solicita que por cada combinacion se realice la suma de la misma, se muestre el resultado, se indique 
    si es par o impar y si el resultado es multiplo de 3.
    Se debe seguir el siguiente formato Dado + Dado2 = suma + par/impar + muiltiplo de 3
*/

// Ejercicio hecho por Santiago Rodriguez y Dylan Luna
let i,j, sumaDados;

for(i=1; i<7; i++){
    for(j=1; j<7; j++){     
        console.log(`1er dado: ${i} -- 2do dado: ${j}`);
        sumaDados=i+j;
        console.log(`El resultado de la suma es= ${sumaDados}`);

        if(sumaDados%2==0){
            console.log(`El resultado de la suma (${sumaDados}) es par `);
        }
        else{
            console.log(`El resultado de la suma (${sumaDados}) es impar`);
        }

        if(sumaDados%3==0){
            console.log(`El resultado es (${sumaDados}) es multiplo de 3`);
        }
        else{
            console.log(`El resultado (${sumaDados}) no es multiplo de 3`);
        }
        console.log(`-------------------------------------------------------------`);
    }
}