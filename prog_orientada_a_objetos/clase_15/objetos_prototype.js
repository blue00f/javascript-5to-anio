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
        let pesoIdeal;
        pesoIdeal=peso/(altura*altura);
        return `Tu peso ideal es: ${pesoIdeal}`;
    }
} 

const persona1 = new Persona('Sebastian', 'Perez', 40, 60.2, 1.82);
const persona2 = new Persona('Julio', 'Iglesias', 65, 85.9, 1.90);
const persona3 = new Persona('Homero', 'Simpsons', 62, 102, 1.78);

Persona.prototype.calcularTiempoEstimadoDeVida = function(){
    let tiempoEstimadoDeVida;
    tiempoEstimadoDeVida = this.edad / 2;
    return tiempoEstimadoDeVida;
}

console.log(persona1.calcularTiempoEstimadoDeVida());
console.log(persona2.calcularTiempoEstimadoDeVida());
console.log(persona3.calcularTiempoEstimadoDeVida());

console.log(persona1);