const vecPersonas = [];

class Persona{
    #edad;
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.#edad = edad;
    }

    infoPersonal(){
        console.log(`Nombre: ${this.nombre} Apellido: ${this.edad} Edad: ${this.edad}`);
    }

    // Primera forma de modificar y obtener
    set edad(nuevaEdad){
        this.#edad = nuevaEdad;
    }

    get edad(){
        return this.#edad;
    }
    

    // Segunda forma de modificar y obtener
    /*
    modificarEdad(nuevaEdad){
        this.#edad = nuevaEdad;
    }

    obtenerEdad(){
        return this.#edad;
    }
    */
}

function rellenoAtributosEmpleados(){
    let opc = true;
    let nombre, apellido, edad;
    while(opc == true){
        nombre = prompt(`Ingresa el nombre: `);
        apellido = prompt(`Ingresa el apellido: `);

        edad = prompt(`Ingresa la edad: `);
        edad = parseInt(edad,10);

        vecPersonas.push(new Persona(nombre, apellido, edad));
        opc = prompt(`Ingresar otro empleado.\n0. No.\n1. Si: `);
    }
}

rellenoAtributosEmpleados();
