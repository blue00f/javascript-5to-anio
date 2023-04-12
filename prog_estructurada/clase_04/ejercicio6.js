/*  Clase 04 - 29/03/2022 - Martes
    Ejercicio 6:
    Solicitar al usuario un dia de la semana
    e informar si es un dia habil o un dia de fin de semana
*/
let dia;

dia = prompt("Ingrese un dia de la semana");
dia = dia.toLowerCase(dia);

//document.write(dia);
switch(dia){  
    case "lunes":         
    case "martes": 
    case "miercoles":  
    case "jueves":       
    case "viernes":
        alert("Es un dia habil")
        break;

    case "sabado":   
    case "domingo":
        alert("Es un dia no habil")
        break;
        
    default:
        alert("Dato mal ingresado")
}