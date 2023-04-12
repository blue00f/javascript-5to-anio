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
        console.log(`Patente: ${this.patente}\nTitular: ${this.titular}\nAño: ${this.anio}\nColor: ${this.color}\nTipo de combustible: ${this.tipoCombustible}\nCapacidad combustible: ${this.capacidadCombustible}\nConsumo promedio: ${this.consumoPromedio}`);
    }

    recorridoMaximo(){
        // instrucciones
    }
    
    static informacionGeneral(){

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

function cargarSUV(){
    let patente, titular, anio, color, tipoCombustible; // atributos de la clase Automovil
    let capacidadCombustible, consumoPromedio; // atributos de la clase SUV
    let letrasPatente, numerosPatente; // variables que sirven para dividir en 2 partes la patente y hacer la validacion correspondiente
    let opcMenu = true;
    while(opcMenu != true){
        do{
            patente = prompt(`Numero de patente (Formato: 3 letras y 3 numeros): `);
            patente = patente.toUpperCase(); // convierto la patente a mayusculas
            letrasPatente = patente.slice(0,3);
            numerosPatente = parseInt(patente.slice(3,6), 10);
            
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
            tipoCombustible = prompt(`Tipo de combustible (Nafta o Gasoil): `);
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
}

let opcMenu=true;
while(opcMenu == false){
    cargarSUV();
    opcMen
}