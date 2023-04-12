/*  Clase 06 - 21/04/2022 - Jueves
    Ejercicio 13 (Integrador):
    Una linea aerea vende pasajes en 3 aeropuertos. En cada uno de ellos hay 3 empleados que son los que efectuan la venta.
    Cada vez que un cliente compra un pasaje, se registran los siguientes datos; numero de aeropuerto, numero de empleado,
    valor del pasaje y cantidad de pasajes. El ingreso de datos finaliza con un numero de aeropuerto igual a 0.
    NOTA:Los datos de cada cliente deben ser mostrados en formato de tabla.

    Los numeros de los empleados se identifican del 1 al 9. Cada cliente puede comprar mas de un pasaje
    Se pide: Cantidad de pasajes vendidos por cada empleado, la recaudacion por aeropuerto, el numero de empleado que haya
    vendido la mayor cantidad de pasajes en una venta, la cantidad de pasajes vendidos por aeropuerto, la cantidad de ventas
    que hayan excedido los 15.000 pesos, el porcentaje de ventas en pesos de cada aeropuerto sobre el total, la cantidad de
    pasajes vendidos en el aeropuerto 2 vendidos por el empleado 5.

    NOTA: Los empleados pueden trabajar en CUALQUIER aeropuerto
*/
let numAerop, numEmp;
let recaudAerop1=0, recaudAerop2=0, recaudAerop3=0;
let cantPasaje=0,cantPasajeEmp1=0,cantPasajeEmp2=0,cantPasajeEmp3=0,cantPasajeEmp4=0,cantPasajeEmp5=0,cantPasajeEmp6=0,cantPasajeEmp7=0,cantPasajeEmp8=0,cantPasajeEmp9=0;
let valorPasaje=0, precioVenta=0, cantPasaje1=0, cantPasaje2=0, cantPasaje3=0; 
let cantPasajeMayor=0, numEmpMayor=0, contPrecioAlto=0, totalVentas=0, cantPasajeVendidoEmp5=0;
    
do{
    numAerop=parseInt(prompt(`Selecciona el numero de aeropuerto:\n1. Aeropuerto\n2. Aeropuerto\n3. Aeropuerto`));
    if(numAerop<0 || numAerop>3 || isNaN(numAerop) ){
        alert(`ERROR - El dato ingresado es incorrecto`)
    }

}while(numAerop<0 || numAerop>3 || isNaN(numAerop));

while(numAerop!=0){

    // Ingreso del numero de empleado con restricciones
    do{
        numEmp=parseInt(prompt(`Selecciona el numero de empleado (1-9):`));
        if(numEmp<1 || numEmp>9 || isNaN(numEmp)){
            alert(`ERROR - El dato ingresado es incorrecto`)
        }
    }while(numEmp<1 || numEmp>9 || isNaN(numEmp));
    
    // Se elige el empleado y se elige el valor del pasaje y la cantidad de pasajes
    switch(numEmp){
        case 1:
            valorPasaje = parseFloat (prompt(`Ingrese el precio del pasaje`));
            cantPasaje = parseInt (prompt(`Ingrese la cantidad de pasajes`));
            cantPasajeEmp1+=cantPasaje; // Acumulador: cantPasajeEmp1 = cantPasajeEmp1+cantPasaje;
            break;

        case 2:
            valorPasaje = parseFloat (prompt(`Ingrese el precio del pasaje`));
            cantPasaje = parseInt (prompt(`Ingrese la cantidad de pasajes`));
            cantPasajeEmp2+=cantPasaje;
            break;

        case 3:
            valorPasaje = parseFloat (prompt(`Ingrese el precio del pasaje`));
            cantPasaje = parseInt (prompt(`Ingrese la cantidad de pasajes`));
            cantPasajeEmp3+=cantPasaje;
            break;

        case 4:
            valorPasaje = parseFloat (prompt(`Ingrese el precio del pasaje`));
            cantPasaje = parseInt (prompt(`Ingrese la cantidad de pasajes`));
            cantPasajeEmp4+=cantPasaje;
            break;

        case 5:
            valorPasaje = parseFloat (prompt(`Ingrese el precio del pasaje`));
            cantPasaje = parseInt (prompt(`Ingrese la cantidad de pasajes`));
            cantPasajeEmp5+=cantPasaje;
            break;

        case 6:
            valorPasaje = parseFloat (prompt(`Ingrese el precio del pasaje`));
            cantPasaje = parseInt (prompt(`Ingrese la cantidad de pasajes`));
            cantPasajeEmp6+=cantPasaje;
            break;
            
        case 7:
            valorPasaje = parseFloat (prompt(`Ingrese el precio del pasaje`));
            cantPasaje = parseInt (prompt(`Ingrese la cantidad de pasajes`));
            cantPasajeEmp7+=cantPasaje;
            break;

        case 8:
            valorPasaje = parseFloat (prompt(`Ingrese el precio del pasaje`));
            cantPasaje = parseInt (prompt(`Ingrese la cantidad de pasajes`));
            cantPasajeEmp8+=cantPasaje;
            break;

        case 9:
            valorPasaje = parseFloat (prompt(`Ingrese el precio del pasaje`));
            cantPasaje = parseInt (prompt(`Ingrese la cantidad de pasajes`));
            cantPasajeEmp9+=cantPasaje;
            break;

        default:
            alert("ERROR - Numero de empleado mal digitado");
            break;
    }

    // Se calcula la recaudacion de cada aeropuerto
    switch(numAerop){
        case 1:
            precioVenta=valorPasaje*cantPasaje;
            recaudAerop1+=precioVenta;                            
            break;

        case 2:
            precioVenta=valorPasaje*cantPasaje;
            recaudAerop2+=precioVenta;       
            break;

        case 3:
            precioVenta=valorPasaje*cantPasaje;
            recaudAerop3+=precioVenta;         
            break;

        default:
            alert("ERROR - Numero de aeropuerto mal digitado");
            break;       
    }

    alert(`Precio del pasaje: ${valorPasaje}\nCantidad de pasajes: ${cantPasaje}\nPrecio de venta: ${precioVenta}`);

    totalVentas+=precioVenta;

    if(cantPasaje>cantPasajeMayor){
        cantPasajeMayor=cantPasaje;
        numEmpMayor=numEmp;
    }

    if(precioVenta>15000){
        contPrecioAlto+=1
    }

    if(numEmp==5 && numAerop==2){
        cantPasajeVendidoEmp5=cantPasaje;
    }

    do{
        numAerop=parseInt(prompt(`Selecciona el numero de aeropuerto:\n1. Aeropuerto\n2. Aeropuerto\n3. Aeropuerto`));
        if(numAerop<0 || numAerop>3 || isNaN(numAerop)){
            alert(`ERROR - El dato ingresado es incorrecto`)
        }
    }while(numAerop<0 || numAerop>3 || isNaN(numAerop));
}

// SALIDA DE DATOS
alert(`Los siguientes datos serán mostrados en la consola, aprete F12 y haga click en "Console" para ver los datos.`)
console.log(`----------------------------------------`);
console.log(`CANTIDAD DE PASAJES VENDIDOS POR CADA EMPLEADO:`);
console.log(`\tCantidad del empleado 1: ${cantPasajeEmp1}`);
console.log(`\tCantidad del empleado 2: ${cantPasajeEmp2}`);
console.log(`\tCantidad del empleado 3: ${cantPasajeEmp3}`);
console.log(`\tCantidad del empleado 4: ${cantPasajeEmp4}`);
console.log(`\tCantidad del empleado 5: ${cantPasajeEmp5}`);
console.log(`\tCantidad del empleado 6: ${cantPasajeEmp6}`);
console.log(`\tCantidad del empleado 7: ${cantPasajeEmp7}`);
console.log(`\tCantidad del empleado 8: ${cantPasajeEmp8}`);
console.log(`\tCantidad del empleado 9: ${cantPasajeEmp9}`);
console.log(`----------------------------------------`);
console.log(`RECAUDACION POR AEROPUERTO:`);
console.log(`\tAeropuerto 1: ${recaudAerop1}`);
console.log(`\tAeropuerto 2: ${recaudAerop2}`);
console.log(`\tAeropuerto 3: ${recaudAerop3}`);
console.log(`----------------------------------------`);
console.log(`NUMERO DE EMPLEADO QUE HIZO LA MAYOR CANTIDAD DE VENTAS:`);
console.log(`\tNumero de empleado: ${numEmpMayor}`);
console.log(`\tVentas realizadas: ${cantPasajeMayor}`);
console.log(`----------------------------------------`);
console.log(`CANTIDAD DE VENTAS QUE SUPERARON LOS $15000:`);
console.log(`\tCantidad: ${contPrecioAlto}`);
console.log(`----------------------------------------`);
console.log(`PORCENTAJE DE VENTAS EN PESOS DE CADA AEROPUERTO SOBRE EL TOTAL:`);
console.log(`\tPorcentaje Aeropueto 1: ${(recaudAerop1*100)/totalVentas}`);
console.log(`\tPorcentaje Aeropueto 2: ${(recaudAerop2*100)/totalVentas}`);
console.log(`\tPorcentaje Aeropueto 3: ${(recaudAerop3*100)/totalVentas}`);
console.log(`----------------------------------------`);
console.log(`CANTIDAD DE PASAJES VENDIDOS POR EL EMPLEADO 5 EN EL AEROPUERTO 2:`);
console.log(`\tCantidad de pasajes vendidos: ${cantPasajeVendidoEmp5}`);
console.log(`----------------------------------------\n\n\n`);