/*  Clase 10 - 16/06/2022 - Jueves
    Ejercicio 22 (Vectores):
        
    Hacer un programa que permita ingresar el nombre y la edad de diferentes personas, para esto se debera contar con dos vectores.
        1- almacenar los nombres 
        2- almacenar las edades
    La condicion de salida sera 0.

    El programa debera verificar que no se almacenen nombres repetidos para esto implementar una funcion.

    Ademas debera verificar que las edades sean validas (entre 1 - 100).
    Ademas sean ingresados ambos datos de lo contrario informar al usuario.

    El programa debera dado un nombre mostrar la edad de esa persona en el mensaje tambien debera incluirse el nombre de la persona si el nombre no existe se le informara al usuario.

    Ademas el programa debera mostrar el promedio de edades y los datos completos de la persona de menor edad.

    Tambien debera incluir un listado completo de todas las personas ingresadas.
*/

let nombre, nombres=[], longitudVector;
let edad, edades=[], promedioEdades, indiceEdadMenor;
let opcion;

function rellenarNombre(){
    nombre=prompt(`Ingrese un nombre:`);
    nombres.push(nombre.toLowerCase()); // Todos los nombres ingresados van a convertirse a minusculas
}

function rellenarEdad(){
    do{
        edad=parseInt(prompt(`Ingrese una edad:`));
        if(edad<1 || edad>100){
            alert(`Edad no valida.`);
        }else{
            edades.push(edad);
        }
    }while(edad<1 || edad>100)
}

function opcionDeSalida(){
    opcion=prompt(`Ingresar otro nombre y edad.\n1. Si\n0. No`);
    return opcion;
}

function borrarNombresRepetidos(longitudVector){
    let i,j;
    alert(`ANTES DE APLICAR LA FUNCION DE BORRAR REPETIDOS\nNombre 1: ${nombres[0]}\nNombre 2: ${nombres[1]}\nNombre 3: ${nombres[2]}\nNombre 4: ${nombres[3]}\nNombre 5: ${nombres[4]}\nNombre 6: ${nombres[5]}`);
    for(i=0; i<longitudVector; i++){
        for(j=0; j<longitudVector; j++){
            if(i!=j){
                if(nombres[i]==nombres[j]){ // indice 3 == indice 5
                    nombres.splice(j,1);
                }
            }
        }
    }
    alert(`DESPUES DE APLICAR LA FUNCION DE BORRAR REPETIDOS\nNombre 1: ${nombres[0]}\nNombre 2: ${nombres[1]}\nNombre 3: ${nombres[2]}\nNombre 4: ${nombres[3]}\nNombre 5: ${nombres[4]}\nNombre 6: ${nombres[5]}`);
}

function identificarEdadXNombre(longitudVector){ // 
    let i, band=true;
    nombre=prompt(`Ingresa un nombre para conocer su edad:`);
    for(i=0; i<longitudVector; i++){
        if(nombre==nombres[i]){
            alert(`La edad de ${nombre} es de ${edades[i]} años.`);
            band=true; // Cuando entra a este if, band vale true y sale del bucle. De esa forma se evita que en la proxima iteracion, se ejecute el "else".
            break; // Con este break terminamos el bucle por completo.
        }
        else{
            band=false; // Entramos a este if cuando el nombre no coincide con los elementos del vector "nombres".
        }
    }

    // La idea de usar "band" es poder ejecutar este mensaje solo una vez.
    if(band==false){
        alert(`${nombre} no esta en el vector.`);
    }
}

function calcularPromedioEdades(longitudVector){ // 
    let i, sumaEdades=0;
    for(i=0; i<longitudVector; i++){
        sumaEdades+=edades[i];
    }
    promedioEdades=parseFloat(sumaEdades/longitudVector);
    return promedioEdades;
}

function calcularEdadMenor(longitudVector){
    let i, edadMenor=Infinity, posicionVectorDelMenor;
    for(i=0; i<longitudVector; i++){
        if(edades[i]<edadMenor){
            edadMenor=edades[i];
            posicionVectorDelMenor=i;
        }
    }
    return posicionVectorDelMenor;
}

alert('Este programa le permitira ingresar nombres, si desea terminar de ingresar, ingrese el numero 0');

do{
    rellenarNombre();
    rellenarEdad();
    opcion=opcionDeSalida();
}while(opcion==true);

longitudVector=nombres.length; // La "longitudVector" es la longitud de los vectores "nombres[]" y "edades[]".

borrarNombresRepetidos(longitudVector);
identificarEdadXNombre(longitudVector, nombre);

promedioEdades=calcularPromedioEdades(longitudVector);
alert(`El promedio de edades es: ${promedioEdades}`);

indiceEdadMenor=calcularEdadMenor(longitudVector);
alert(`Informacion de la persona con la edad menor:\nNombre: ${nombres[indiceEdadMenor]}\nEdad: ${edades[indiceEdadMenor]}`);
