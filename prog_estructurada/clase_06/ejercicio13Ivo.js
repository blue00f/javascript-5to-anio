let mayorCantidad = 0, mayEmpleado = 0;
let aeropuerto, empleado, valorPasaje, cantidadPasajes;
let cantPasajesEmpleado1 = 0,
    cantPasajesEmpleado2 = 0,
    cantPasajesEmpleado3 = 0,
    cantPasajesEmpleado4 = 0,
    cantPasajesEmpleado5 = 0,
    cantPasajesEmpleado6 = 0,
    cantPasajesEmpleado7 = 0,
    cantPasajesEmpleado8 = 0,
    cantPasajesEmpleado9 = 0;  
let recaudacionAeropuerto1 = 0,
    recaudacionAeropuerto2 = 0,
    recaudacionAeropuerto3 = 0;
let cantidadPasajesAeropuerto1 = 0,
    cantidadPasajesAeropuerto2 = 0,
    cantidadPasajesAeropuerto3 = 0;
let cantidadVendida = 0,
    cantPasajesAeropuerto2Vendedor5 = 0;
let procentajeAeropuerto1 = 0,
    procentajeAeropuerto2 = 0,
    procentajeAeropuerto3 = 0;
let total = 0;  

aeropuerto = parseInt(prompt('Ingrese el numero de aeropuerto'));
while(aeropuerto != 0)
{      
   empleado = parseInt(prompt('Ingrese el numero de empleado'));
   valorPasaje = Number(prompt('Ingrese el valor del pasaeje'));
   cantidadPasajes = Number(prompt('Ingrese la cantidad de pasajes'));  
  
   switch(empleado)
   {
       case 1:
           cantPasajesEmpleado1 = cantPasajesEmpleado1 + cantidadPasajes;
           break;
       case 2:
           cantPasajesEmpleado2 = cantPasajesEmpleado2 + cantidadPasajes;
           break;
       case 3:
           cantPasajesEmpleado3 = cantPasajesEmpleado3 + cantidadPasajes;
           break;
       case 4:
           cantPasajesEmpleado4 = cantPasajesEmpleado4 + cantidadPasajes;
           break;
       case 5:
           cantPasajesEmpleado5 = cantPasajesEmpleado5 + cantidadPasajes;
           break;
       case 6:
           cantPasajesEmpleado6 = cantPasajesEmpleado6 + cantidadPasajes;
           break;
       case 7:
           cantPasajesEmpleado7 = cantPasajesEmpleado7 + cantidadPasajes;
           break;            
       case 8:
           cantPasajesEmpleado8 = cantPasajesEmpleado8 + cantidadPasajes;
           break;        
       case 9:
           cantPasajesEmpleado9 = cantPasajesEmpleado9 + cantidadPasajes;
           break;        
       }
  
   switch(aeropuerto)
   {
       case 1:
           recaudacionAeropuerto1 = recaudacionAeropuerto1 +(valorPasaje * cantidadPasajes);
           cantidadPasajesAeropuerto1 = cantidadPasajesAeropuerto1 + cantidadPasajes;
           break;
      
       case 2:
           recaudacionAeropuerto2 = recaudacionAeropuerto2 +(valorPasaje * cantidadPasajes);
           cantidadPasajesAeropuerto2 = cantidadPasajesAeropuerto2 + cantidadPasajes;
           break;

       case 3:
           recaudacionAeropuerto3 = recaudacionAeropuerto3 +(valorPasaje * cantidadPasajes);
           cantidadPasajesAeropuerto3 = cantidadPasajesAeropuerto3 + cantidadPasajes;
           break;

   }    

   if (cantidadPasajes>mayorCantidad)
   {
       mayorCantidad = cantidadPasajes;
       mayEmpleado = empleado;
   }

   if((valorPasaje * cantidadPasajes) >15000)
   {
       cantidadVendida = cantidadVendida + 1;
   }

   if(aeropuerto == 2 && empleado == 5)
   {
       cantPasajesAeropuerto2Vendedor5 = cantPasajesAeropuerto2Vendedor5 + cantidadPasajes;
   }
   aeropuerto = parseInt(prompt('Ingrese el numero de aeropuerto'));
}


total = recaudacionAeropuerto1 + recaudacionAeropuerto2 + recaudacionAeropuerto3;
porcentajeAeropuerto1 = (recaudacionAeropuerto1*100)/total;
porcentajeAeropuerto2 = (recaudacionAeropuerto2*100)/total;
porcentajeAeropuerto3 = (recaudacionAeropuerto3*100)/total;


console.log('----------------------------------------------------------------');
console.log(`Cantidad de pasajes vendidos por el empleado 1 ${cantPasajesEmpleado1}`);
console.log(`Cantidad de pasajes vendidos por el empleado 2 ${cantPasajesEmpleado2}`);
console.log(`Cantidad de pasajes vendidos por el empleado 3 ${cantPasajesEmpleado3}`);
console.log(`Cantidad de pasajes vendidos por el empleado 4 ${cantPasajesEmpleado4}`);
console.log(`Cantidad de pasajes vendidos por el empleado 5 ${cantPasajesEmpleado5}`);
console.log(`Cantidad de pasajes vendidos por el empleado 6 ${cantPasajesEmpleado6}`);
console.log(`Cantidad de pasajes vendidos por el empleado 7 ${cantPasajesEmpleado7}`);
console.log(`Cantidad de pasajes vendidos por el empleado 8 ${cantPasajesEmpleado8}`);
console.log(`Cantidad de pasajes vendidos por el empleado 9 ${cantPasajesEmpleado9}`);
console.log('----------------------------------------------------------------');
console.log(`Recaudacion Aeropuerto 1 ${recaudacionAeropuerto1}`);
console.log(`Recaudacion Aeropuerto 2 ${recaudacionAeropuerto2}`);
console.log(`Recaudacion Aeropuerto 3 ${recaudacionAeropuerto3}`);
console.log('----------------------------------------------------------------');
console.log(`El numero de empleado que mas vendio es ${mayEmpleado}`);
console.log('----------------------------------------------------------------');
console.log(`Cantidad de pasajes vendidos por el Aeropuerto 1 ${cantidadPasajesAeropuerto1}`);
console.log(`Cantidad de pasajes vendidos por el Aeropuerto 2 ${cantidadPasajesAeropuerto2}`);
console.log(`Cantidad de pasajes vendidos por el Aeropuerto 3 ${cantidadPasajesAeropuerto3}`);
console.log('----------------------------------------------------------------');
console.log(`Cantidad de ventas que exeden los $15000' ${cantidadVendida}`);
console.log('----------------------------------------------------------------');
console.log(`Porcentaje de ventas del Aeropuerto 1 respecto al total ${porcentajeAeropuerto1}`);
console.log(`Porcentaje de ventas del Aeropuerto 2 respecto al total ${porcentajeAeropuerto2}`);
console.log(`Porcentaje de ventas del Aeropuerto 3 respecto al total ${porcentajeAeropuerto3}`);
console.log('----------------------------------------------------------------');
console.log(`Cantidad de pasajes vendidos en el Aeropuerto por el empleado 5 ${cantPasajesAeropuerto2Vendedor5}`);