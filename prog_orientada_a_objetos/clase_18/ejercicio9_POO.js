const automoviles = [];

class Automovil{
    #patente;
    #titular;
    #anio;
    #color;
    #tipoCombustible;
    constructor(patente, titular, anio, color, tipoCombustible){
        this.#patente = patente;
        this.#titular = titular;
        this.#anio = anio;
        this.#color = color;
        this.#tipoCombustible = tipoCombustible;
    }

    get patente(){
        return this.#patente;
    }

    set titular(nuevoTitular){
        this.#titular = nuevoTitular;
    }

    get titular(){
        return this.#titular;
    }

    get anio(){
        return this.#anio;
    }

    get color(){
        return this.#color;
    }

    get tipoCombustible(){
        return this.#tipoCombustible;
    }

    infoAutomovil(){
        console.log(`Patente: ${this.#patente}\nTitular: ${this.#titular}\nAño: ${this.#anio}\nColor: ${this.#color}\nTipo de combustible: ${this.#tipoCombustible}`);
    }
}

class SUV extends Automovil{
    #capacidadCombustible;
    #consumoPromedio;
    constructor(patente, titular, anio, color, tipoCombustible, capacidadCombustible, consumoPromedio){
        super(patente, titular, anio, color, tipoCombustible);
        this.#capacidadCombustible = capacidadCombustible;
        this.#consumoPromedio = consumoPromedio;
    }

    get capacidadCombustible(){
        return this.#capacidadCombustible;
    }

    get consumoPromedio(){
        return this.#consumoPromedio;
    }

    infoSUV(){
        return `Patente: ${this.patente}\nTitular: ${this.titular}\nAño: ${this.anio}\nColor: ${this.color}\nTipo de combustible: ${this.tipoCombustible}\nCapacidad combustible: ${this.capacidadCombustible}\nConsumo promedio: ${this.consumoPromedio}\nRecorrido maximo: ${this.recorridoMaximo(this.capacidadCombustible, this.consumoPromedio)} KM`;
    }

    recorridoMaximo(capacidadCombustible, consumoPromedio){
        let recorridoTotal;
        recorridoTotal = (capacidadCombustible * 100) / consumoPromedio;
        return recorridoTotal;
    }
    
    static informacionGeneral(automovilesSUV){
        let i;
        for(i=0; i<automovilesSUV.length; i++){
            console.log(`-----\nAUTOMOVIL SUV N°${i+1}\n${automoviles[i].infoSUV()}`);
        }
    }
}

function validarPatentesRepetidos(patente){
    let estadoRepetido, i;
    estadoRepetido = true;
    for(i=0; i<automoviles.length; i++){
        if(automoviles[i].patente == patente){
            estadoRepetido = false;
        }
    }
    return estadoRepetido;
}

function modificarTitular(patente){
    let i, nuevoTitular;
    nuevoTitular = prompt(`Ingresa el nuevo titular (nombre y apellido) para la patente ${patente}: `);
    for(i=0; i<automoviles.length; i++){
        if(automoviles[i].patente == patente){
            automoviles[i].titular = nuevoTitular;
        }
    }
}

function cargarSUV(){
    let patente, titular, anio, color, tipoCombustible; // atributos de la clase Automovil
    let capacidadCombustible, consumoPromedio; // atributos de la clase SUV
    let letrasPatente, numerosPatente; // variables que sirven para dividir en 2 partes la patente y hacer la validacion correspondiente
    do{
        patente = prompt(`Numero de patente (Formato: 3 letras y 3 numeros): `); // ABC123
        patente = patente.toUpperCase(); // convierto la patente a mayusculas
        letrasPatente = patente.slice(0,3); // ABC
        numerosPatente = parseInt(patente.slice(3,6), 10); // 123
        
        /*
            De la cadena de texto 'patente' voy a dividrla en 2 partes, guardandolas en 2 variables diferentes:
                -En la variable 'letrasPatente' guardo los primeros 3 caracteres que deben ser letras (al usar un typeof obtengo 'string')
                -En la variable 'numerosPatente' guardo los ultimos 3 caracteres y lo convierto al tipo de dato Int (obteniendo 'number' al usar typeof)
    
            En el primer 'if' estan las condiciones en caso de que se inserte mal los ultimos 3 caracteres:
                -Primera condicion: el valor de 'numerosPatente' es NaN
                -Segunda condicion: convierto el numero a string y determino la cantidad de caracteres que tiene, si es menor a 3
                (es decir, que en los ultimos 3 caracteres se mezclaron numeros y letras) entonces se ingresó mal la patente
            Si se entra en el primer if, la variable de estado 'validacionPat' vale false.
    
            En el segundo 'if' este se ejecuta cuando se ingresa correctamente la patente
            La variable de estado 'validacionPat' vale true.
    
            En cualquier otro caso la 'validacionPat' vale false.
        */
        if(validarPatentesRepetidos(patente) == true){
            if(isNaN(numerosPatente) || String(numerosPatente).length < 3){
                validacionPat = false;
            }
            else if(typeof(letrasPatente) === 'string' || typeof(numerosPatente) === 'number'){
                validacionPat = true;
            }
            else{
                validacionPat = false;
            }
        }
        else{
            validacionPat = false;
        }
    } while(patente.length != 6 || validacionPat != true);

    do{
        titular = prompt(`Nombre y apellido del titular: `);
    } while(titular == "");

    do{
        anio = prompt(`Año del automovil (Debe ser entre 1990 y 2022): `);
        anio = parseInt(anio, 10);
    } while(anio < 1990 || anio > 2022 || isNaN(anio));

    do{
        color = prompt(`Color del automovil: `);
        color = color.toLowerCase();
    } while(color != "blanco" && color != "rojo" && color != "negro" && color != "azul");

    do{
        tipoCombustible = prompt(`Tipo de combustible (Nafta o gasoil): `);
        tipoCombustible = tipoCombustible.toLowerCase();
    } while(tipoCombustible != "nafta" && tipoCombustible != "gasoil");

    do{
        capacidadCombustible = prompt(`Capacidad maxima de combustible (Ingresar entre 45 y 65): `);
        capacidadCombustible = parseInt(capacidadCombustible, 10);
    } while(capacidadCombustible < 45 || capacidadCombustible > 65 || isNaN(capacidadCombustible));

    do{
        consumoPromedio = prompt(`Cantidad de litros promedio que consume el SUV cada 100km (Ingresar entre 7 y 14): `);
        consumoPromedio = parseInt(consumoPromedio, 10);
    } while(consumoPromedio < 7 || consumoPromedio > 14 || isNaN(consumoPromedio));

    automoviles.push(new SUV(patente, titular, anio, color, tipoCombustible, capacidadCombustible, consumoPromedio));
}


function menu(){
    let opcion;
    let patente;
    do{
        opcion = prompt(`1. Cargar SUV\n2. Mostrar informacion de todos los SUV\n3. Modificar titular mediante el numero de patente\n0. Salir`);
        opcion = parseInt(opcion, 10);
        switch(opcion){
            case 0:
                break;
            case 1:
                cargarSUV();
                break;
            case 2:
                SUV.informacionGeneral(automoviles);                
                break;
            case 3:
                patente = prompt(`Ingresa la patente para modificar su titular: `);
                patente = patente.toUpperCase();
                if(validarPatentesRepetidos(patente) == false){
                    modificarTitular(patente);
                }
                else{
                    alert(`ERROR-Patente no encontrada`)
                }
                break;
            default:
                console.log(`opcion no valida`);
                break;
        }
    } while(opcion != 0);
}

menu();