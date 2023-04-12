/*  Clase 06 - 26/04/2022 - Martes (Hecho por la noche)
    En este archivo se experimento la extension "live share",
    para que dos personas puedan programar de forma remota.
*/
let num1, num2, i;
let suma, promedio;

do{
    i++; // i=1
    num = parseInt(prompt('Ingrese un numero: ')); // "null"
    if(num<0){
        alert('ERROR - No se aceptan numeros negativos')
    }
    else{
        suma =  parseInt(suma) + num;
    }

}while(num!=0);


do{
    i++; // i=1
    num = parseInt(prompt('Ingrese un numero: ')); // "null" i=1
    if(num<0 || num==null ){
        alert('ERROR - No se aceptan numeros negativos')
        i--;
    }
    else{
        suma = parseInt(suma) + num;
    }

}while(num!=0);