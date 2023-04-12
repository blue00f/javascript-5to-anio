//const prompt = require("prompt-sync")({sigint: true}); // Sirve para ejecutar el codigo mediante NodeJS (consola)

const vecTarjetas = [];

class TarjetaCredito {
    #entidad;
    #numero;
    #titular;
    #limite;
    constructor(entidad, numero, titular, limite) {
        this.#entidad = entidad;
        this.#numero = numero;
        this.#titular = titular;
        this.#limite = limite;
    }

    infoTarjeta(){
        return `Entidad: ${this.#entidad}\nNumero: ${this.#numero}\nTitular: ${this.#titular}\nLimite: ${this.#limite}`;
    }
    
    // Metodo que sirve para modificar el 'limite'
    set limite(nuevoLimite) {
        this.#limite = nuevoLimite;
    }

    get limite() {
        return this.#limite;
    }

    // Para el atributo privado 'numero' solo pongo GET, evitando la modificacion de este atributo. Solo se puede acceder al numero, pero no se lo puede modificar
    get numero() {
        return this.#numero;
    }
}


function modificarLimite(numeroTarjeta){
    let nuevoLimite, i;
    nuevoLimite = prompt(`Ingresa el nuevo limite para la tarjeta ${numeroTarjeta}`);
    nuevoLimite = parseFloat(nuevoLimite);

    for(i=0; i<vecTarjetas.length; i++){
        if(vecTarjetas[i].numero == numeroTarjeta){
            vecTarjetas[i].limite = nuevoLimite;
        }
    }
}


function cargarTarjeta(){
    let entidad, numero, titular, limite;
    do{
        entidad = prompt(`Nombre de la entidad bancaria: `);
    } while(entidad == ""); // validacion para que no quede en blanco

    do{
        numero = prompt(`Numero de tarjeta de credito:\nXXXX XXXX XXXX XXXX (colocar sin espacios)`);
        numero = parseInt(numero, 10);
    } while(numero < 1000000000000000 || numero > 9999999999999999n || isNaN(numero)); // isNan --> validacion para que no ingresar numeros vacios

    do{
        titular = prompt(`Nombre y apellido del titular: `);
    } while(titular == ""); // validacion para que no quede en blanco

    do{
        limite = prompt(`Ingresa el dinero disponible de la tarjeta de credito: `);
        limite = parseFloat(limite);
    } while(limite < 0 || limite > 1000000 || isNaN(limite)); // isNan --> validacion para que no ingresar numeros vacios

    vecTarjetas.push(new TarjetaCredito(entidad, numero, titular, limite));
}

function menu(){
    let opcion, opcionCargarTarjeta=true;
    let numeroTarjeta;
    do{
        opcion = prompt(`1. Cargar indefinidamente tarjetas de credito\n2. Modificar el limite de la tarjeta por el numero\n0. Salir`);
        opcion = parseInt(opcion, 10);
        switch(opcion){
            case 0:
                break;
            case 1:
                do{
                    cargarTarjeta();
                    opcionCargarTarjeta = prompt(`Ingresar otra tarjeta:\n1. Si\n0. No`);
                } while(opcionCargarTarjeta == true);
                break;
            case 2:
                numeroTarjeta = prompt(`Ingresa el numero de tarjeta al cual queres modificar su limite:`);
                numeroTarjeta = BigInt(numeroTarjeta);
                modificarLimite(numeroTarjeta);
                break;
            default:
                console.log(`Opcion no valida`);
                break;
        }
    } while(opcion != 0);
}

menu();