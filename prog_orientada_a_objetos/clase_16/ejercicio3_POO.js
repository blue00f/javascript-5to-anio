/*
CLASE DEL DIA MARTES 11 DE OCTUBRE (11/10/2022)

    Se tiene la clase empleados con los siguientes atributos (o keys):
        Nombre
        Apellido
        Edad
        Valor por hora
        Horas Trabajadas

    La clase empleados tiene los siguientes metodos (o funciones):
        Mostrar informacion del empleado
        Si la cantidad de horas trabajadas es mayor a 48 horas, aumentarle su sueldo un 50% mas

    NOTA: los atributos de la clase empleados tienen que ser guardados en un vector
*/

const prompt = require("prompt-sync")({sigint: true}); // Sirve para ejecutar el codigo mediante NodeJS (consola)
const vecEmpleados = [];

class empleado{
    constructor(nombre,apellido,edad,valorHora,horasTrabajadas){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.valorHora = valorHora;
        this.horasTrabajadas = horasTrabajadas;
    }
    
    infoEmpleados(){
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`;
    }

    sueldoEmpleados(horasTrabajadas,valorHora){
        let valorHoraAumento;
        const porcentaje = 0.5;

        if(horasTrabajadas >= 48){
            valorHoraAumento = valorHora + (valorHora * porcentaje);
            return valorHoraAumento;
        }
        else{
            return valorHora;
        }

    }
}

// Relleno de datos de los empleados
function rellenoAtributosEmpleados(){
    let opc = true;
    let nombre, apellido, edad, valorHora, horasTrabajadas;
    while(opc == true){
        nombre = prompt(`Ingresa el nombre: `);
        apellido = prompt(`Ingresa el apellido: `);

        edad = prompt(`Ingresa la edad: `);
        edad = parseInt(edad,10);

        valorHora = prompt(`Ingresa el valor por hora: `);
        valorHora = parseFloat(valorHora);

        horasTrabajadas = prompt(`Ingresa la cantidad de horas trabajadas: `);
        horasTrabajadas = parseInt(horasTrabajadas,10);

        vecEmpleados.push(new empleado(nombre, apellido, edad, valorHora, horasTrabajadas));
        opc = prompt(`Ingresar otro empleado. 0. No. 1. Si: `);
        console.log(`-----`);
    }
}

function ejecutarMetodos(){
    let i;
    for(i=0; i<vecEmpleados.length; i++){
        console.log(vecEmpleados[i].infoEmpleados());
        console.log(vecEmpleados[i].sueldoEmpleados(vecEmpleados[i].horasTrabajadas, vecEmpleados[i].valorHora));
    }
}

rellenoAtributosEmpleados();
ejecutarMetodos();