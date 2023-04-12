/*  Clase 09 - 07/06/2022 - Martes
    Ejercicio 21 (Vectores):

    Realizar un programa que haga lo siguiente:
        1) Ingresar numeros
        2) Calcular la cantidad de numeros pares
        3) Calcular el promedio de los numeros pares
        4) Mostrar los numeros ingresados al reves
        5) Mostrar el menor de los numeros pares
        0) Salir
    Los puntos tienen que ser mostrados en un menu
*/

let cantidad, numeros=[];
let opcion, opcion2=true, contPares=0
let acumPares=0, promedioPares=0;
let parMenor=1000;


// Declaracion de funciones
function ingresarNumeros(){
    cantidad=parseInt(prompt(`Cuantos numeros desea ingresar:`));
    for(let i=0; i<=cantidad-1; i++){
        numeros[i]=parseInt(prompt(`Ingresa el numero ${i}`));
    }
}

function calcularCantidadPares(){
    contPares=0;
    // el metodo "length" devuelve el numero de elementos del vector
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2==0){
            contPares++;
        }
    }
    return contPares;
}

function calcularSumaPares(){
    acumPares=0;
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2==0){
            acumPares=acumPares+numeros[i];
        }
    }
    return acumPares;
}

function calcularPromedioPares(acumPares, contPares){
    promedioPares=acumPares/contPares;
    return promedioPares;
}

function ordenarVectorAlReves(){
    console.log(`Vector ordenado al reves:\n`)
    for(let i=numeros.length-1; i>=0; i--){
        console.log(`\t${numeros[i]}`);
    }
}

function determinarParMenor(){
    for(let i=0; i<numeros.length; i++){
        if(numeros[i]%2==0 && parMenor>numeros[i]){
            parMenor=numeros[i];
        }
    }
    return parMenor;
}

// Main
do{
    opcion=parseInt(prompt(`Ingresa una opcion:\n0. Salir\n1. Ingresar numeros\n2. Calcular cantidad de numeros pares\n3. Calcular promedio de los numeros pares\n4. Mostrar el vector al reves\n5. Determinar el menor de los numeros pares`));
    switch(opcion){
        case 0:
            opcion2=false;
            break;
        case 1:
            ingresarNumeros();
            break;
        case 2:
            contPares=0;
            contPares=calcularCantidadPares();
            console.log(`Cantidad de numeros pares: ${contPares}`);
            break;   
        case 3:
            acumPares=calcularSumaPares();
            promedioPares=calcularPromedioPares(acumPares,contPares);
            console.log(`Suma de los numeros pares: ${acumPares}\nPromedio de pares: ${promedioPares}`);
            break;
        case 4:
            ordenarVectorAlReves();
            break;
        case 5:
            parMenor=determinarParMenor();
            console.log(`El numero par menor es: ${parMenor}`)
            break;
        default:
            alert(`ERROR`);
            break;

    }
}while(opcion2==true);

/*
    EVALUACION JUEVES 23 JUNIO-
    Todo lo que vimos hasta ahora (funciones y vectores)
*/