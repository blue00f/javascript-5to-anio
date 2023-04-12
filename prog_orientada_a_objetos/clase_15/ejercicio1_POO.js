/*  CLASE 15 - 7 de octubre, 2022
    Abstraccion:
    De una clase se tiene que sacar la informacion que realmente importa.
    Por ejemplo una clase "Persona" que hace operaciones bancarias tiene que tener atributos como CUIT, fecha de nacimiento, CVU, etc.
    Una clase "Persona" normal puede tener altura, peso, color de piel, tipo de pelo, etc.

    Segun el contexto de la clase, tenemos que obtener atributos que sean utiles para describir a ese objeto.
    Este pilar se lo llama "abstraccion" y es el primero en la Programacion Orientada a Objetos.
*/

class Persona{
    constructor (nombre,apellido,edad,peso,altura){
        this.nombre=nombre;
        this.apellido=apellido;
        this.edad=edad;
        this.peso=peso;
        this.altura=altura
    }
    mostrarInfo(){
        //console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`);
        return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`;
    }
    calcularPesoIdeal(peso,altura){
        let pesoIdeal, imc;
        pesoIdeal=peso/(altura*altura);
        return `Tu peso ideal es: ${pesoIdeal}`;
    }
        
}

let persona1 = new Persona('Juan','Perez',23);
console.log(persona1.mostrarInfo());
console.log(persona1.calcularPesoIdeal(50,1.72));

/*
    concepto "prototype": sirve para alterar un constructor.
    Por ejemplo una clase "Persona" tiene los siguientes atributos; nombre, apellido, edad, peso, altura. Y los siguientes metodos: mostrarInfo, calcularIMC.
    Tambien se tienen los siguientes objetos; persona1, persona2, persona3. Cada uno tiene cargado sus atributos y metodos.

    Si yo quiero agregar un nuevo metodo que sea "calcularTiempoEstimadoDeVida" tengo que utilizar "prototype".
    La sintaxis para esto seria:

    class Persona{
        constructor (nombre,apellido,edad,peso,altura){
            this.nombre=nombre;
            this.apellido=apellido;
            this.edad=edad;
            this.peso=peso;
            this.altura=altura
        }
        mostrarInfo(){
            //console.log(`Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`);
            return `Nombre: ${this.nombre}, Apellido: ${this.apellido}, Edad: ${this.edad}`;
        }
        calcularIMC(peso,altura){
            let pesoIdeal, imc;
            pesoIdeal=peso/(altura*altura);
            return `Tu peso ideal es: ${pesoIdeal}`;
        }
    } 

    persona1.prototype.calcularTiempoEstimadoDeVida = function(){
        //codigo de ejemplo
        return tiempoEstimadoDeVida;
    }
*/
