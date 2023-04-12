/*  Clase 03 - 22/03/2022 - Martes
    Durante esta clase se avanzo con el ejercicio4 de la clase_02

*/


//const PC = {CPU: "i3 8100", GPU: "GTX 1060", RAM:"18 GB", MotherBoard: "H310 Gigabyte"};


const points = [40, 100, 1, 5, 25, 10];
document.getElementById("demo1").innerHTML = points;  

points.sort(function(a, b){return a - b});
document.getElementById("demo2").innerHTML = points;