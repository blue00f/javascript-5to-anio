/*
    CLASE DEL DIA 13 DE OCTUBRE

*/
const vecEmpleados = [];

class Persona{
    constructor(nombre,apellido,edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    infoPersonal(){
        console.log(`Nombre: ${this.nombre} Apellido: ${this.edad} Edad: ${this.edad}`);
    }
}

class Empleado extends Persona{
    constructor(nombre,apellido,edad,cuil,cargo){
        super(nombre,apellido,edad)
        this.cuil = cuil;
        this.cargo = cargo;
    }

    infoEmpleado(){
        console.log(`Nombre: ${this.nombre} Apellido: ${this.apellido} Edad: ${this.edad} Cuil: ${this.cuil} Cargo: ${this.cargo}`);
    }
}

function rellenoAtributosEmpleados(){
    let opc = true;
    let nombre, apellido, edad, cuil, cargo;
    while(opc == true){
        nombre = prompt(`Ingresa el nombre: `);
        apellido = prompt(`Ingresa el apellido: `);

        edad = prompt(`Ingresa la edad: `);
        edad = parseInt(edad,10);

        cuil = prompt(`Ingresa el cuil: `);
        cuil = parseInt(cuil,10);

        cargo = prompt(`Ingresa el cargo: `);

        vecEmpleados.push(new Empleado(nombre, apellido, edad, cuil, cargo));
        opc = prompt(`Ingresar otro empleado.\n0. No.\n1. Si: `);
    }
}

rellenoAtributosEmpleados();
