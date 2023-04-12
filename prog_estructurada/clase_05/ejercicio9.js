/*  Clase 05 - 07/04/2022 - Jueves
    Ejercicio 9 (Roca):
    Realizar un programa que informa por consola todos los resultados posibles que se pueden obtener tirando dos dados.
    Ademas se solicita que por cada combinacion se realice la suma de la misma, se muestre el resultado, se indique 
    si es par o impar y si el resultado es multiplo de 3.
    Se debe seguir el siguiente formato Dado + Dado2 = suma + par/impar + muiltiplo de 3
*/

// En este ejercicio se emplea un "numero magico"
let dado1,dado2,suma;

do{
    opc = parseInt(prompt("Cuantos lanzamientos de dados vas a hacer: "));
}while(opc<0);


for(let i=0; i<opc; i++){
    do{
        dado1 = parseInt (Math.random()*7);
        dado2 = parseInt (Math.random()*7);
    }while(dado1==0 || dado2==0);

    suma = dado1 + dado2;

    if (suma%2==0){
        est = "Par";

    }
    else{
        est = "Impar";
    }

    if (suma%3==0){
        est2= "Si";
    }
    else{
        est2= "No";
    }

    alert(`Dado 1    Dado 2    Suma    Par/Impar    Multiplo de 3
        ${dado1}                 ${dado2}            ${suma}          ${est}              ${est2}`);
    }