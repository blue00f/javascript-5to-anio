/*
    CalculadoraBasica
        Sumar
        Restar
        Multiplicar
        Dividir
    
    Nota: cada metodo debe tener 2 parametros (num1,num2)
*/

class Calculadora{
    sumar(n1,n2){
        return `Suma: ${n1+n2}`;
    }
    restar(n1,n2){
        return `Resta: ${n1-n2}`;
    }
    multiplicar(n1,n2){
        return `Multiplicacion: ${n1*n2}`;
    }
    dividir(n1,n2){
        if(n2===0){
            return `Division: ERROR 69`;
        }
        else{
            return `Division: ${n1/n2}`;
        }
    }
}

let operacion = new Calculadora();
let n1,n2;

n1=parseFloat(prompt(`Ingresa el primer numero`));
n2=parseFloat(prompt(`Ingresa el segundo numero`));

console.log(operacion.sumar(n1,n2));
console.log(operacion.restar(n1,n2));
console.log(operacion.multiplicar(n1,n2));
console.log(operacion.dividir(n1,n2));