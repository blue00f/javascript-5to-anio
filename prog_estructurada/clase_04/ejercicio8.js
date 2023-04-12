/*
    Ejercicio 8 - Integrador
    Hacer un programa que le permita al usuario realizar una de las siguientes operaciones
    sumar, restar, multiplicar o dividir. En caso de que el usuario desee realizar una suma, o una resta,
    dichas operaciones deberan realizarse con 3 numeros. En caso de que desee realizar una multiplicacion
    solo podra realizarse con numeros positivos. En caso de que desee realizar una division, verificar que no
    sea una division por 0.

    Nota: Suma y resta, pedir tres numeros. Multiplicacion y Division SOLO DOS numeros

    Ademas de mostrar el resultado por pantalla, en el caso de la suma o de la resta, mostrar cual
    de los 3 numeros ingresados es el mayor, y cual es el menor.
    En el caso de la multiplicacion, ademas del resultado informar cuantos numeros pares e impares
    se ingresaron e informar si ambos numeros son iguales o no.
    En el caso de la division, ademas de informar el resultado, mostrar los numeros ordenados de mayor a menor
    e informar si tanto el divisor y el resultado son o no numeros pares o impares.
*/

let num1,num2,num3,mayor,menor;
function pedirD2(){ //Esta funcion pide dos datos
    num1 = parseFloat(prompt("Ingrese el primer numero"));
    num2 = parseFloat(prompt("Ingrese el segundo numero"));
}

function pedirD3(){ //Esta funcion pide tres datos
    num1 = parseFloat(prompt("Ingrese el primer numero"));
    num2 = parseFloat(prompt("Ingrese el segundo numero"));
    num3 = parseFloat(prompt("Ingrese el tercer numero"));
}

//alert(`num1=${num1} \n num2=${num2} \n num3=${num3}`)
//alert(`num1=${num1} \n num2=${num2}`)
function sumar(num1,num2,num3){
    return num1+num2+num3;
}

function resta(num1,num2,num3){
    return num1-num2-num3;
}

function mult(num1,num2){
    return num1*num2;
}

function div(num1,num2){
    return num1/num2;
}

function mayMen(){ // Determina el mayor y menor de 2 numeros
      if(num1>num2 && num1>num3){
        //alert(typeof(num1));
        mayor = num1;
        if(num2>num3){
            menor = num3;
        }
        else{
            menor = num2;
        }
    }
    else if(num2>num1 && num2>num3){
        mayor = num2;
        if(num3>num1){
            menor = num1;
        }
        else {
            menor = num3;
        }
    }
    else if(num3>num1 && num3>num2){
        mayor = num3;
        if(num1>num2){
            menor = num2;
        }
        else{
            menor= num1;
        }
    }
}

let ope, opc, res; //Oper valora la operacion que se elige. Opc la opcion para volver entrar o no al menu
do{
    ope = parseInt(prompt("Seleccione que calculo quiere hacer. \n1. Sumar \n2. Restar \n3. Multiplicar \n4. Dividir"));

    switch (ope){
        case 1:
            pedirD3();
            res = sumar(num1,num2,num3); //res guarda el resultado de funcion sumar
            mayMen();
            opc = prompt(`El resultado de la suma es: ${res} \nEl mayor es ${mayor}\nEl menor es ${menor} \n\n0. Salir\n1. Volver`);
            break;
            
        case 2:
            pedirD3();
            res = resta(num1,num2,num3);
            mayMen();
            opc = prompt(`El resultado de la resta es: ${res} \nEl mayor es ${mayor}\nEl menor es ${menor} \n\n0. Salir\n1. Volver`);
            break;

        case 3:
            pedirD2();
            if (num1>=0 && num2>=0){
                res = mult(num1,num2); //res guarda el resultado de funcion mult
                if(num1%2==0 && num2%2==0){
                    opc = prompt(`El resultado de la multiplicacion es: ${res}\n
                    Los numeros ${num1} y ${num2} son pares\n\n0. Salir\n1. Volver`);    
                }
                else if(num1%2!=0 && num2%2!=0){
                    opc = prompt(`El resultado de la multiplicacion es: ${res}\n
                    Los numeros ${num1} y ${num2} son impares\n\n0. Salir\n1. Volver`);    
                }
                else if(num1%2==0 && num2%2!=0){
                    opc = prompt(`El resultado de la multiplicacion es: ${res}\n
                    El numero ${num1} es par y ${num2} es impar\n\n0. Salir\n1. Volver`);    

                }
                else if(num1%2!=0 && num2%2==0){
                    opc = prompt(`El resultado de la multiplicacion es: ${res}\n
                    El numero ${num1} es impar y ${num2} es par\n\n0. Salir\n1. Volver`);    
                }
            }
            else{
                opc = prompt(`ERROR\nLos numeros tienen que ser positivos\n\n0. Salir\n1. Volver`);
            }
            break;

        case 4:
            pedirD2();
            if (num2 != 0){
                res = div(num1,num2); //res guarda el resultado de funcion div
                if(num1>num2){
                    if(num2%2==0 && res%2==0){
                        opc = prompt(`El resultado de la division es: ${res}\nLos numeros ordenados de mayor a menor son: ${num1}, ${num2}\nEl divisor ${num2} es par y el resultado ${res} es par\n\n0. Salir\n1. Volver`);
                    }
                    else if(num2%2!=0 && res%2!=0){
                        opc = prompt(`El resultado de la division es: ${res}\nLos numeros ordenados de mayor a menor son: ${num1}, ${num2}\nEl divisor ${num2} es impar y el resultado ${res} es impar\n\n0. Salir\n1. Volver`);
                    }
                    else if(num2%2==0 && res%2!=0){
                        opc = prompt(`El resultado de la division es: ${res}\nLos numeros ordenados de mayor a menor son: ${num1}, ${num2}\nEl divisor ${num2} es par y el resultado ${res} es impar\n\n0. Salir\n1. Volver`);
                    }
                    else if(num2%2!=0 && res%2==0){
                        opc = prompt(`El resultado de la division es: ${res}\nLos numeros ordenados de mayor a menor son: ${num1}, ${num2}\nEl divisor ${num2} es impar y el resultado ${res} es par\n\n0. Salir\n1. Volver`);
                    }
                    opc = prompt(`El resultado de la division es: ${res}\nLos numeros ordenados de mayor a menor son: ${num1}, ${num2} \n\n0. Salir\n1. Volver`);
                }
                else{
                    if(num2%2==0 && res%2==0){
                        opc = prompt(`El resultado de la division es: ${res}\nLos numeros ordenados de mayor a menor son: ${num2}, ${num1}\nEl divisor ${num2} es par y el resultado ${res} es par\n\n0. Salir\n1. Volver`);
                    }
                    else if(num2%2!=0 && res%2!=0){
                        opc = prompt(`El resultado de la division es: ${res}\nLos numeros ordenados de mayor a menor son: ${num2}, ${num1}\nEl divisor ${num2} es impar y el resultado ${res} es impar\n\n0. Salir\n1. Volver`);

                    }
                    else if(num2%2==0 && res%2!=0){
                        opc = prompt(`El resultado de la division es: ${res}\nLos numeros ordenados de mayor a menor son: ${num2}, ${num1}\nEl divisor ${num2} es par y el resultado ${res} es impar\n\n0. Salir\n1. Volver`);
                    }
                    else if(num2%2!=0 && res%2==0){
                        opc = prompt(`El resultado de la division es: ${res}\nLos numeros ordenados de mayor a menor son: ${num2}, ${num1}\nEl divisor ${num2} es impar y el resultado ${res} es par\n\n0. Salir\n1. Volver`);
                    } 
                }
            }
            else{
                alert("No es posible dividir por 0")
            }
            break;

        default:
            opc = prompt("Opcion invalida.\n0.Salir\n1.Volver");
            break;
    }
}while(opc==true);