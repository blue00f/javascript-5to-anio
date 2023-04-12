/*
    Ejercicio 10 ELECTRODOMESTICOS
*/

//const prompt = require("prompt-sync")({sigint: true}); // Sirve para ejecutar el codigo mediante NodeJS (consola)

const electrodomesticos = []; // vector que guarda 'Lavarropa' y 'Television'

/*
    Creacion de las clases (Electrodomestico, Lavarropa, Television)
*/

class Electrodomestico {
    #PrecioBase;
    #Color;
    #ConsumoEnergetico;
    #Peso;
    constructor(PrecioBase, Color, ConsumoEnergetico, Peso) {
        this.#PrecioBase = PrecioBase;
        this.#Color = Color;
        this.#ConsumoEnergetico = ConsumoEnergetico;
        this.#Peso = Peso;
    }

    get PrecioBase() {
        return this.#PrecioBase;
    }
    set PrecioBase(nuevoPrecioBase) {
        this.#PrecioBase = nuevoPrecioBase;
    }
    get Color() {
        return this.#Color;
    }
    set Color(nuevoColor) {
        this.#Color = nuevoColor;
    }
    get ConsumoEnergetico() {
        return this.#ConsumoEnergetico;
    }
    set ConsumoEnergetico(nuevoConsumoEnergetico) {
        this.#ConsumoEnergetico = nuevoConsumoEnergetico;
    }
    get Peso() {
        return this.#Peso;
    }
    set Peso(nuevoPeso) {
        this.#Peso = nuevoPeso;
    }
    
    PrecioFinal() {
        let precioBase;
        const precioA = 100, precioB = 80, precioC = 60, precioD = 50, precioE = 30, precioF = 10;
        const precioPesoA = 10, precioPesoB = 50, precioPesoC = 80, precioPesoD = 100, precioPesoE = 120, precioPesoF = 150;
        if(this.ConsumoEnergetico == 'A') {precioBase = precioA + precioPesoA;}
        if(this.ConsumoEnergetico == 'B') {precioBase = precioB + precioPesoB;}
        if(this.ConsumoEnergetico == 'C') {precioBase = precioC + precioPesoC;}
        if(this.ConsumoEnergetico == 'D') {precioBase = precioD + precioPesoD;}
        if(this.ConsumoEnergetico == 'E') {precioBase = precioE + precioPesoE;}
        if(this.ConsumoEnergetico == 'F') {precioBase = precioF + precioPesoF;}
        return precioBase;
    }
}

class Lavarropa extends Electrodomestico {
    #Carga;
    constructor(PrecioBase, Color, ConsumoEnergetico, Peso, Carga) {
        super(PrecioBase, Color, ConsumoEnergetico, Peso);
        this.#Carga = Carga;
    }

    get Carga() {
        return this.#Carga;
    }
    set Carga(nuevaCarga) {
        this.#Carga = nuevaCarga;
    }
    PrecioFinalLavarropa(){
        let precioFinalLavarropa, aumentoPrecioCarga = 0;
        if(this.Carga >= 30) {
            aumentoPrecioCarga = 50;
        }
        precioFinalLavarropa = this.PrecioBase + aumentoPrecioCarga  + super.PrecioFinal();
        return precioFinalLavarropa;
    }
    static InfoLavarropa() {
        let i;
        for(i=0; i<electrodomesticos.length ; i++) {
            if(electrodomesticos[i].constructor.name == 'Lavarropa'){
                console.log(`Lavarropa numero ${i+1}\nPrecio base: ${electrodomesticos[i].PrecioBase}\nColor: ${electrodomesticos[i].Color}\nConsumo energetico: ${electrodomesticos[i].ConsumoEnergetico}\nPeso: ${electrodomesticos[i].Peso} kg\nCarga: ${electrodomesticos[i].Carga}`);
            }
        }
    }
}

class Television extends Electrodomestico {
    #Resolucion;
    #SintonizadorDigital;
    constructor(PrecioBase, Color, ConsumoEnergetico, Peso, Resolucion, SintonizadorDigital) {
        super(PrecioBase, Color, ConsumoEnergetico, Peso);
        this.#Resolucion = Resolucion;
        this.#SintonizadorDigital = SintonizadorDigital;
    }

    get Resolucion() {
        return this.#Resolucion;
    }
    set Resolucion(nuevaResolucion) {
        this.#Resolucion = nuevaResolucion;
    }
    get SintonizadorDigital() {
        return this.#SintonizadorDigital;
    }
    set SintonizadorDigital(nuevoSintDigital) {
        this.#SintonizadorDigital = nuevoSintDigital;
    }
    PrecioFinalTelevision(){ 
        let precioFinalTelevision, aumentoPrecioRes = 0, aumentoPrecioSint = 0;
        if(this.Resolucion > 40 ) { aumentoPrecioRes = this.PrecioBase * 0.3 }
        if(this.SintonizadorDigital == true) { aumentoPrecioSint = 50 }
        precioFinalTelevision = this.PrecioBase + (aumentoPrecioRes + aumentoPrecioSint) + super.PrecioFinal();
        return precioFinalTelevision;
    }
    static InfoTelevision() {
        let i;
        for(i=0; i<electrodomesticos.length ; i++) {
            if(electrodomesticos[i].constructor.name == 'Television'){
                console.log(`Television numero ${i+1}\nPrecio base: ${electrodomesticos[i].PrecioBase}\nColor: ${electrodomesticos[i].Color}\nConsumo energetico: ${electrodomesticos[i].ConsumoEnergetico}\nPeso: ${electrodomesticos[i].Peso} kg\nResolucion: ${electrodomesticos[i].Resolucion} pulgadas\nTiene sintonizador digital: ${electrodomesticos[i].SintonizadorDigital}`);
            }
        }
    }
}

/*
    Funciones que sirven de restricciones a los atributos de las clases
*/

function verificarCarga(numCargo){
    switch(numCargo) {
        case 5: case 7: case 8: case 10: case 12: case 15:
        case 20: case 25: case 30: case 35: case 40: case 50:
            return true;
        default:
            return false;
    }
}

function asignarConsumo(peso) {
    let consumoEnergetico;
    if(peso >= 1 && peso <= 19){ consumoEnergetico = 'A'; }
    if(peso >= 20 && peso <= 49){ consumoEnergetico = 'B'; }
    if(peso >= 50 && peso <= 79){ consumoEnergetico = 'C'; }
    if(peso >= 80 && peso <=99){ consumoEnergetico = 'D'; }
    if(peso >= 100 && peso <=119){ consumoEnergetico = 'E'; }
    if(peso >= 120 && peso <=160){ consumoEnergetico = 'F'; }
    return consumoEnergetico;
}

/*
    Funciones que sirven para instanciar a las clases (cargar datos a los atributos)
*/

function cargarLavarropa() {
    let precioBase, color, consumoEnergetico, peso;
    let carga, comprobarCarga;
    do {
        precioBase = prompt(`Ingrese el precio: `);
        precioBase = parseFloat(precioBase);
    } while(precioBase <= 0 || isNaN(precioBase));
    
    do {
        color = prompt(`Ingrese el color (blanco, negro, rojo, azul o gris)`);
        color = color.toUpperCase();
    } while(color != 'BLANCO' && color != 'NEGRO' && color != 'ROJO' && color != 'AZUL' && color != 'GRIS');
    
    do {
        peso = prompt(`Ingrese el peso (entre 1 y 160 kg)`)
        peso = parseFloat(peso);
    } while(peso < 1 || peso > 160 || isNaN(peso));
    
    consumoEnergetico = asignarConsumo(peso);
    alert(`Tu consumo energetico es ${consumoEnergetico}`);
    
    do {
        carga = prompt(`Ingrese la carga (valores: 7, 8, 10, 12, 15, 20, 25, 30, 35, 40 o 50)`)
        carga = parseInt(carga, 10);
        comprobarCarga = verificarCarga(carga);
    } while(comprobarCarga == false || isNaN(carga));
    
    electrodomesticos.push(new Lavarropa(precioBase, color, consumoEnergetico, peso, carga));
}

function cargarTelevision() {
    let precioBase, color, consumoEnergetico, peso;
    let resolucion, sintonizadorDigital;
    do {
        precioBase = prompt(`Ingrese el precio: `);
        precioBase = parseFloat(precioBase);
    } while(precioBase <= 0 || isNaN(precioBase));
    
    do {
        color = prompt(`Ingrese el color (blanco, negro, rojo, azul o gris)`);
        color = color.toUpperCase();
    } while(color != 'BLANCO' && color != 'NEGRO' && color != 'ROJO' && color != 'AZUL' && color != 'GRIS');

    do {
        peso = prompt(`Ingrese el peso (entre 1 y 160 kg)`)
        peso = parseFloat(peso);
    } while(peso < 1 || peso > 160 || isNaN(peso));

    consumoEnergetico = asignarConsumo(peso);
    alert(`Tu consumo energetico es ${consumoEnergetico}`);
    
    do {
        resolucion = prompt(`Ingrese la resolucion (entre 32 y 75 pulgadas)`)
        resolucion = parseInt(resolucion, 10);
    } while(resolucion < 32 || resolucion > 75 || isNaN(resolucion))
    
    do {
        sintonizadorDigital = prompt(`Tiene Sintonizador.\n1. Si\n0. No`);
        sintonizadorDigital = parseInt(sintonizadorDigital, 10);
        if(sintonizadorDigital == 1){sintonizadorDigital = true;}
        if(sintonizadorDigital == 0){sintonizadorDigital = false;}
    } while(typeof(sintonizadorDigital) !== 'boolean');
    
    electrodomesticos.push(new Television(precioBase, color, consumoEnergetico, peso, resolucion, sintonizadorDigital));
}

function cargarElectrodomestico(){
    let tipoElectro;
    do {
        tipoElectro = prompt(`Elegir tipo de electrodomestico para cargar\n1. Lavarropa\n2. Television\n0. Ninguno`);
        tipoElectro = parseInt(tipoElectro, 10);
        switch(tipoElectro) {
            case 1:            
                cargarLavarropa();
                break;
            case 2:
                cargarTelevision();
                break;
            case 0:
                break;
            default:
                console.log(`ERROR`);
                break;
        }
    } while(tipoElectro != 0);
}

/*
    Funciones que sirven para mostrar informacion sobre las instancias cargadas
*/

function precioTotalVendido() {
    let totalVendido = 0, i;
    for(i=0; i<electrodomesticos.length; i++) {
        if(electrodomesticos[i].constructor.name == 'Television') {
            totalVendido = totalVendido + electrodomesticos[i].PrecioFinalTelevision();
        }
        else {
            totalVendido = totalVendido + electrodomesticos[i].PrecioFinalLavarropa();
        }
    }
    return totalVendido;
}

function cantVendidaLavarropa() {
    let contLavarropa = 0, i;
    for(i=0; i<electrodomesticos.length; i++) {
        if(electrodomesticos[i].constructor.name == 'Lavarropa') {
            contLavarropa++;
        }
    }
    return contLavarropa;
}

function cantVendidaTelevision() {
    let contTelevision = 0, i;
    for(i=0; i<electrodomesticos.length; i++) {
        if(electrodomesticos[i].constructor.name == 'Television') {
            contTelevision++;
        }
    }
    return contTelevision;
}

/*
    Funcion que muestra el menu principal del programa
*/

function menu() {
    let opcion;
    do {
        opcion = prompt(`1. Cargar electrodomesticos\n2. Precio total de los electrodomesticos vendidos\n3. Cantidad de electrodomesticos vendidos por tipo (lavarropa y television)\n0. Salir`);
        opcion = parseInt(opcion, 10);
        switch(opcion) {
            case 1:
                cargarElectrodomestico();
                break;
            case 2:
                alert(`Total vendido de todos los electrodomesticos ingresados:\n$ ${precioTotalVendido()}`);
                break;
            case 3:
                alert(`Cantidad de electrodomesticos vendidas por tipo:\nLavarropas: ${cantVendidaLavarropa()}\nTelevision: ${cantVendidaTelevision()}`);
                break;
            case 0:
                break;
            default:
                break;
        }
    } while(opcion != 0);
}

// Ejecucion de la funcion principal
menu();