/*
    FOR IN y FOR OF
    for in: recorre los indices del arreglo
    for of: recorre los elementos del arreglo

*/
let nomFem = ["nicole","sofia","soledad"];
let nomMas = ["dylan","fabian","santiago",nomFem];


document.write("NOMBRES MASCULINOS<br>");
for(let i in nomMas){
    if(i==3){
        document.write("<br>NOMBRES FEMENINOS<br>");
        for(let i of nomFem){
            document.write(i+"<br>");
        }
    }
    else{
        document.write(nomMas[i]+"<br>");
    }
}