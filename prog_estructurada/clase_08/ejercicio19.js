/*  Clase 08 - 26/05/2022 - Jueves
    Ejercicio 19 (Utilizando funciones):

    Realizar un programa que le permita ingresar al usuario 3 números mayores a 0.

    Implementar una función booleana que verifique que los números ingresados son mayores a 0,
    otra que los muestre ordenados de menor a mayor,
    otra que informe cuántos de los números ingresados son pares y cuántos son impares.

    En caso que algunos de los números ingresados no cumpla con la condición
    se le solicitará al usuario que ingrese nuevamente los números.

    El usuario podrá realizar esta tarea todas las veces que lo requiera, la condición de salida es 0.
 
    1) Teniendo en cuenta el enunciado 3, implementar las funciones solicitadas de la manera que Uds. consideren más conveniente.
    Pueden incluir funciones adicionales, además de las solicitadas, en caso que lo consideren necesario.
*/

let num1, num2, num3, opcion=true;
let estadoNumMayores;

function ingresoDatos(){
    do{
        num1=parseInt(prompt(`Ingresa el numero 1:`));
        num2=parseInt(prompt(`Ingresa el numero 2:`));
        num3=parseInt(prompt(`Ingresa el numero 3:`));
    }while(isNaN(num1) || isNaN(num2) || isNaN(num3));
}

function determinarNumMayores(num1,num2,num3){
    if(num1>0 && num2>0 && num3>0){
        return estNum = true;
    } else{
        return estNum = false;
    }    
}

function ordenamientoMenAMay(num1,num2,num3){
    if(num1>num2 && num1>num3){
        if(num2>num3){
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 3: ${num3}\nNumero 2: ${num2}\nNumero 1: ${num1}`);
        } 
        else if(num3>num2){
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 2: ${num2}\nNumero 3: ${num3}\nNumero 1: ${num1}`);

        }
    }

    if(num2>num1 && num2>num3){
        if(num3>num1){
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 1: ${num1}\nNumero 3: ${num3}\nNumero 2: ${num2}`);
        }
        else if(num1>num3){
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 3: ${num3}\nNumero 1: ${num1}\nNumero 2: ${num2}`);
        }
    }

    if(num3>num1 && num3>num2){
        if(num1>num2){
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 2: ${num2}\nNumero 1: ${num1}\nNumero 3: ${num3}`);
        }
        else if(num2>num1){
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 1: ${num1}\nNumero 2: ${num2}\nNumero 3: ${num3}`);          
        }
    }

    if(num1==num2 && num2==num3 && num3==num1){
        console.log(`Todos los numeros son iguales\nNumero 1: ${num1}\nNumero 2: ${num2}\nNumero 3: ${num3}`);
    }

    if(num1==num2 && num3!=num1 && num3!=num2){ // 1 1 0
        if(num3>num1 || num3>num2){
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 1: ${num1}\nNumero 2: ${num2}\nNumero 3: ${num3}`);
        }
        else{
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 3: ${num3}\nNumero 1: ${num1}\nNumero 2: ${num2}`);
        }
    }

    if(num2==num3 && num1!=num2 && num1!=num3){ // 0 1 1
        if(num1>num2 || num1>num3){
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 2: ${num2}\nNumero 3: ${num3}\nNumero 1: ${num1}`);
        }
        else{
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 1: ${num1}\nNumero 2: ${num2}\nNumero 3: ${num3}`);
        }
    }

    if(num1==num3 && num2!=num1 && num2!=num3){ // 1 0 1
        if(num2>num1 || num2>num3){
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 1: ${num1}\nNumero 3: ${num3}\nNumero 2: ${num2}`);
        }
        else{
            console.log(`ORDENAMIENTO DE MENOR A MAYOR\nNumero 2: ${num2}\nNumero 1: ${num1}\nNumero 3: ${num3}`);
        }
    }
}

function determinarParImpar(num1,num2,num3){
    if(num1%2==0){
        console.log(`El numero 1: ${num1} es PAR`);
    }
    else{
        console.log(`El numero 1: ${num1} es IMPAR`);
    }

    if(num2%2==0){
        console.log(`El numero 2: ${num2} es PAR`);
    }
    else{
        console.log(`El numero 2: ${num2} es IMPAR`);
    }

    if(num3%2==0){
        console.log(`El numero 3: ${num3} es PAR`);
    }
    else{
        console.log(`El numero 3: ${num3} es IMPAR`);
    }
}


while(opcion==true){
    ingresoDatos();
    estadoNumMayores=determinarNumMayores(num1,num2,num3);
    
    if(estadoNumMayores==true){
        console.log(`Los numeros ${num1}, ${num2} y ${num3} son mayores a 0.`);
    }else{
        console.log(`Alguno de los numeros no son mayores a 0.\n`)
    }
    ordenamientoMenAMay(num1,num2,num3);
    determinarParImpar(num1,num2,num3);
    console.log(`--------------------------------------------------`)

    opcion=prompt(`--Valores guardados--\nDesea ingresar otros valores\n0. No\n1. Si`);
}