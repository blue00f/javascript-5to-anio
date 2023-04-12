/*  Clase 02 - 17/03/2022 - Jueves
    Ejercicio 4:
    Solicitar al usuario que ingrese 4 numeros y que informe por pantalla cuantos de los numeros ingresados
    son iguales y que ademas nos muestre los numeros. verificar que los numeros sean mayores a 0, en caso de no cumplir las
    condiciones indicar al usuario que los datos no son validos
*/

//Comparacion de 2 numeros
function compDosNum (num1,num2){
    if(num1==num2 && num1==num3 && num1==num4 && num2==num3 && num3==num4){
        return band2=false;
    }

    else if(num1==num2){
        return band2=true;
    }
    
    else if(num1==num3){
        return band2=true;
    }
    
    else if(num1==num4){
        return band2=true;
    }

    else if(num2==num3){
        return band2=true;
    }

    else if(num3==num4){
        return band2=true;
    }

    else if(num2==num4){
        return band2=true;
    }
}

// Comparacion de 3 numeros
function compTresNum(num1,num2,num3,num4){

    if(num1!=num2 && num1!=num3 && num1!=num4 && num2!=num3 && num3!=num4 && num2!=num4){
        return band3=false;
    }

    if(num1!=num2 && num2==num3 && num2==num4){
        return band3=true;
    }

    else if (num2!=num1 && num1==num3 && num1==num4){
        return band3=true;
    }

    else if (num3!=num1 && num1==num2 && num1==num4){
        return band3=true;
    }

    else if (num4!=num1 && num1==num3 && num1==num2){
        return band3=true;
    }
}

let num1, num2, num3, num4;
let band3,band2;

alert("Ingrese 4 numeros para saber si son iguales")
num1 = parseInt(prompt("Ingrese el primer numero"));
num2 = parseInt(prompt("Ingrese el segundo numero"));
num3 = parseInt(prompt("Ingrese el tercer numero"));
num4 = parseInt(prompt("Ingrese el cuarto numero"));

band3 = compTresNum(num1,num2,num3,num4);
band2 = compDosNum(num1,num2);

//alert(band3); // Testeo para verificar los valores que van a tomar las banderas (false o verdadero)
//alert(band2);

// Mostrando los mensajes utilizando banderas
if(num1>0 && num2>0 && num3>0 && num4>0){
    if(band3==undefined && band2==true){
        alert(`Hay 2 numeros iguales \n ${num1} ${num2} ${num3} ${num4}`);
    }

    else if(band3==true && band2==true){
        alert(`Hay 3 numeros iguales \n${num1} ${num2} ${num3} ${num4}`);
    }

    else if(band3==undefined && band2==false){
        alert(`Todos los numeros son iguales \n ${num1} ${num2} ${num3} ${num4}`);
    }

    else{
       alert(`Todos los numeros son distintos\n ${num1} ${num2} ${num3} ${num4}`);
    }
}
else{
    alert(`Alguno de los numeros son negativos - ERROR\n ${num1} ${num2} ${num3} ${num4}`);
}