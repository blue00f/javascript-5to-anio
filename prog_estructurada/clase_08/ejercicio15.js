/*  Clase 08 - 19/05/2022 - Jueves
    Ejercicio 15 (Funciones):
    Un supermercado tiene 3 secciones; almacen, verduleria y panaderia.
    El supermercado tiene un total de 6 cajas, 2 para cada seccion.

    Cada vez que una persona pasa por la caja se le entrega un comprobante con los siguientes datos:
        a. numero de caja
        b. numero de seccion
        c. importe de la venta
        d. cantidad de productos comprados
    Si el importe de la venta supera los $5000, se le hara un descuento del 10%.

    Un comprobante similar al que se le entrega los clientes queda guardado
    en la maquina registradora con los siguientes datos:
        a. Cantidad de comprobantes emitidos en cada caja
        b. La recaudacion de cada caja
        c. La caja en que se registro la venta de mayor importe
        d. El porcentaje de ventas en pesos de cada caja sobre el total de las ventas
        e. La cantidad de comprobantes con importes mayor a $1000 que haya comprado menos de 3 productos
        f. El sueldo de cada cajero, cada cajero gana el 10% de la recaudacion de su caja
    NOTA: Condicion de salida; numero de caja=0
    NOTA: Utilizar FUNCIONES Y PROCEDIMIENTOS
*/

function datosMaquinaRegistradora(){
    if(importeVenta>=5000){
        alert(`Numero de caja: ${numCaja}\nNumero de seccion: ${numSeccion}\nImporte de la venta (Sin descuento): ${importeVenta}\nImporte de la venta (Con 10% de descuento): ${importeVentaDesc}\nCantidad de productos: ${cantProd}`);

        if(importeVentaDesc>importeAnterior){
            cajaMayor=numCaja;
            importeCajaMayor=importeVentaDesc;
        }
        importeAnterior=importeVentaDesc;

        if(cantProd<3){
            cantMenosDe3Prod++;
        }
    }else{
        alert(`Numero de caja: ${numCaja}\nNumero de seccion: ${numSeccion}\nImporte de la venta: ${importeVenta}\nCantidad de productos: ${cantProd}`)

        if(importeVenta>importeAnterior){
            cajaMayor=numCaja;
            importeCajaMayor=importeVenta;
        }
        importeAnterior=importeVenta;

        if(importeVenta>=1000 && cantProd<3){
            cantMenosDe3Prod++;
        }
    }    
    //numCaja=parseInt(prompt(`Ingrese numero de caja (1-6):\n0. Finalizar`));
}

function ingresoImporteYCantidad(){
    importeVenta=parseFloat(prompt(`Ingrese el importe de la venta (total de cuanto se gastó):`));
    cantProd=parseInt(prompt(`Ingrese la cantidad de productos comprados:`));
}

function recaudacionCajas(recaudCaja){
    if(importeVenta>=5000){
        importeVentaDesc=importeVenta-(importeVenta*0.1);
        return recaudCaja+=importeVentaDesc;
    }else{
        return recaudCaja+=importeVenta;
    }
}

let numCaja, numSeccion, importeVenta, importeVentaDesc, cantProd;
let cantComprobCaja1=0,cantComprobCaja2=0,cantComprobCaja3=0,cantComprobCaja4=0,cantComprobCaja5=0,cantComprobCaja6=0;
let recaudCaja1=0,recaudCaja2=0,recaudCaja3=0,recaudCaja4=0,recaudCaja5=0,recaudCaja6=0;
let importeAnterior=0, cajaMayor=0, importeCajaMayor, totalVentas=0;
let cantMenosDe3Prod=0;

do{
    numCaja=parseInt(prompt(`Ingrese numero de caja (1-6):\n0. Finalizar`));
}while(numCaja<1 || numCaja>6 || isNaN(numCaja));


while(numCaja!=0){
    do{
        numSeccion=parseInt(prompt(`Ingrese el numero de seccion:\n1. Almacen\n2. Verduleria\n3. Panaderia`));
    }while(numSeccion<1 || numSeccion>3 || isNaN(numSeccion));
        
    if(numCaja!=0){
        switch(numCaja){
            case 1:
                cantComprobCaja1++;
                ingresoImporteYCantidad();
                recaudCaja1=recaudacionCajas(recaudCaja1);
                break;
            case 2:
                cantComprobCaja2++;
                ingresoImporteYCantidad();
                recaudCaja2=recaudacionCajas(recaudCaja2);
                break;
    
            case 3:
                cantComprobCaja3++;
                ingresoImporteYCantidad();
                recaudCaja3=recaudacionCajas(recaudCaja3);
                break;
            case 4:
                cantComprobCaja4++;
                ingresoImporteYCantidad();
                recaudCaja4=recaudacionCajas(recaudCaja4);
                break;
            case 5:
                cantComprobCaja5++;
                ingresoImporteYCantidad();
                recaudCaja5=recaudacionCajas(recaudCaja5);
                break;
            case 6:
                cantComprobCaja6++;
                ingresoImporteYCantidad();
                recaudCaja6=recaudacionCajas(recaudCaja6);
                break;
        }
        numCaja=parseInt(prompt(`Ingrese numero de caja (1-6):\n0. Finalizar`));
    }
}
datosMaquinaRegistradora();

// SALIDA DE DATOS
alert("Ir a la consola para ver los datos de la maquina registradora.\nF12 y Console.")
totalVentas=recaudCaja1+recaudCaja2+recaudCaja3+recaudCaja4+recaudCaja5+recaudCaja6;

console.log(`--------------------------------------------------`);
console.log(`CANTIDAD DE COMPROBANTES EMITIDOS EN CADA CAJA:`);
console.log(`\tComprobantes de la caja 1: ${cantComprobCaja1}`);
console.log(`\tComprobantes de la caja 2: ${cantComprobCaja2}`);
console.log(`\tComprobantes de la caja 3: ${cantComprobCaja3}`);
console.log(`\tComprobantes de la caja 4: ${cantComprobCaja4}`);
console.log(`\tComprobantes de la caja 5: ${cantComprobCaja5}`);
console.log(`\tComprobantes de la caja 6: ${cantComprobCaja6}`);
console.log(`--------------------------------------------------`);
console.log(`RECAUDACION TOTAL DE CADA CAJA:`);
console.log(`\tRecaudacion de la caja 1: $${recaudCaja1}`);
console.log(`\tRecaudacion de la caja 2: $${recaudCaja2}`);
console.log(`\tRecaudacion de la caja 3: $${recaudCaja3}`);
console.log(`\tRecaudacion de la caja 4: $${recaudCaja4}`);
console.log(`\tRecaudacion de la caja 5: $${recaudCaja5}`);
console.log(`\tRecaudacion de la caja 6: $${recaudCaja6}`);
console.log(`--------------------------------------------------`);
console.log(`NUMERO DE CAJA QUE TUVO EL MAYOR IMPORTE:`);
console.log(`\tNumero de caja de mayor importe: ${cajaMayor}`);
console.log(`\tValor del importe mayor: $${importeCajaMayor}`);
console.log(`--------------------------------------------------`);
console.log(`NUMERO DE CAJA QUE TUVO EL MAYOR IMPORTE:`);
console.log(`\tPorcentaje de la caja 1: ${(recaudCaja1*100)/totalVentas} %`);
console.log(`\tPorcentaje de la caja 2: ${(recaudCaja2*100)/totalVentas} %`);
console.log(`\tPorcentaje de la caja 3: ${(recaudCaja3*100)/totalVentas} %`);
console.log(`\tPorcentaje de la caja 4: ${(recaudCaja4*100)/totalVentas} %`);
console.log(`\tPorcentaje de la caja 5: ${(recaudCaja5*100)/totalVentas} %`);
console.log(`\tPorcentaje de la caja 6: ${(recaudCaja6*100)/totalVentas} %`);
console.log(`--------------------------------------------------`);
console.log(`CANTIDAD DE COMPROBANTES CON IMPORTES MAYORES A $1000 QUE HAYAN COMPRADO MENOS DE 3 PRODUCTOS:`);
console.log(`\tCantidad de comprobantes mayores a $1000 y menores a 3 productos: ${cantMenosDe3Prod}`);
console.log(`--------------------------------------------------`);
console.log(`EL SUELDO DE CADA CAJERO:`);
console.log(`\tSueldo del cajero 1: $${recaudCaja1*0.1}`);
console.log(`\tSueldo del cajero 2: $${recaudCaja2*0.1}`);
console.log(`\tSueldo del cajero 3: $${recaudCaja3*0.1}`);
console.log(`\tSueldo del cajero 4: $${recaudCaja4*0.1}`);
console.log(`\tSueldo del cajero 5: $${recaudCaja5*0.1}`);
console.log(`\tSueldo del cajero 6: $${recaudCaja6*0.1}`);
console.log(`--------------------------------------------------\n\n`);