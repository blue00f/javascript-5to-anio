/*  Clase 05 - 07/04/2022 - Jueves
    Ejercicio 10:
    Un programa que vaya del 0 al 9.999, con el formato: x-x-x-x == 0-0-0-0
    cambiando el valor de estos digitos

    1 = A
    2 = E
    3 = I
    4 = O
    5 = U

    0-0-0-0
    0-0-0-9
    0-0-9-9
    0-9-9-9
    9-9-9-9
*/

let i, j, k, l;
let aux1,aux2,aux3,aux4;

for(i=0; i<10; i++){
    for(j=0; j<10; j++){
        if(i!=0){j=9;}
        for(k=0; k<10; k++){
            if(j!=0){k=9;}
            for(l=0; l<10; l++){
                if(k!=0){l=9;}

                aux1=i;
                if(i==1){i='A';}
                else if(i==2){i='E';}
                else if(i==3){i='I';}
                else if(i==4){i='O';}
                else if(i==5){i='U';}

                aux2=j;
                if(j==1){j='A';}
                else if(j==2){j='E';}
                else if(j==3){j='I';}
                else if(j==4){j='O';}
                else if(j==5){j='U';}

                aux3=k;
                if(k==1){k='A';}
                else if(k==2){k='E';}
                else if(k==3){k='I';}
                else if(k==4){k='O';}
                else if(k==5){k='U';}

                aux4=l;
                if(l==1){l='A';}
                else if(l==2){l='E';}
                else if(l==3){l='I';}
                else if(l==4){l='O';}
                else if(l==5){l='U';}

                console.log(`${i}-${j}-${k}-${l}`)
                i=aux1; // Aca los iteradores recuperan su valor numerico
                j=aux2;
                k=aux3;
                l=aux4;
            }
        }
    }
}