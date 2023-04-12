/*
    VECTORES
    Metodos shift, splice, pop
    1) Cargar valores
    2) Eliminar valores
    3) Mostrar valores
*/

let valor, valores=[], opcion;

function rellenarValores(){
    do{
        valor=parseInt(prompt(`Ingrese un valor:`));
        valores.push(valor);
    } while(valor!=0);
    valores.pop();
}

function insertarValor(){
    let indice, valor;
    indice=parseInt(prompt("Ingresa el indice del vector"));
    valor=parseInt(prompt("Ingresa un valor"));
    valores.splice(indice, 0, valor);
}

function eliminarValor(){
    let indice, cantidad;
    indice=parseInt(prompt("Ingresa el indice del vector"));
    cantidad=parseInt(prompt("Ingresa la cantidad de elementos a eliminar"));
    valores.splice(indice,cantidad);
}

rellenarValores();

do{
    opcion=parseInt(prompt("0) Salir\n1) Cargar valores\n2) Eliminar valores\n3) Mostrar valores"));
    switch(opcion){
        case 0:
             break;
        case 1:
            insertarValor();
            break;
        
        case 2:
            eliminarValor();
            break;

        case 3:
            alert(valores);
            break;
        default:
            alert("Error");
            break;
    }
}while(opcion!=0);