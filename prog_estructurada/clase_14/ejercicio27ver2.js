/*
    Banco 3 sucursales, numero de sucursal 2 digitos, permita ingresar, modificar y dar de baja a los clientes. 
    en el caso de dar de alta a nuevos clientes podra realizarze hasta que el usuario ingrese como condicion de salida sucursal igual 0.

    1. Ingresar Clientes
    2. Modificar Clientes
    3. Baja de Clientes

    -----

    - Agregar Clientes
    - Modificar Cliente (Dado un nombre de cliente se solicita poder hacer la modificación del mismo)
    - Dar de Baja Cliente (Dado un nombre de cliente se solicita poder hacer la Baja del mismo)
    - Dado un numero de cliente mostrar los datos del Cliente y la sucursal correspondiente

    - Edad promedio de los clientes por sucursal (incluir los datos de la sucursal)
    - Cliente con Mayor Monto depositado (mostrar también los datos de la sucursal)
    - Monto depositado del cliente de Mayor edad (mostrar también los datos de la sucursal)
    - Sucursal con Mayor cantidad de dinero depositado (incluir los datos de la sucursal)

    Nota: Se deberá armar un menú que permita realizar las operaciones mencionadas
*/

/*
    NOTA:
    1. Los datos de las sucursales fueron precargados.
    2. Para comprobar rapidamente los datos cargados, usar los vectores "clientes" y "sucursales" en la consola del navegador.
*/

function ingresoDeDatosSucursales(){
    sucursal.sucursal=1;
    sucursal.direccion="Avenida Siempreviva 2041";
    sucursal.localidad="CABA";

    sucursales.push(
        {
            'sucursal':sucursal.sucursal,
            'direccion':sucursal.direccion,
            'localidad':sucursal.localidad
        }
    );

    sucursal.sucursal=2;
    sucursal.direccion="Avenida Carton 929";
    sucursal.localidad="GCBA";

    sucursales.push(
        {
            'sucursal':sucursal.sucursal,
            'direccion':sucursal.direccion,
            'localidad':sucursal.localidad
        }
    );
    sucursal.sucursal=3;
    sucursal.direccion="Avenida Caseros 294";
    sucursal.localidad="CABA";

    sucursales.push(
        {
            'sucursal':sucursal.sucursal,
            'direccion':sucursal.direccion,
            'localidad':sucursal.localidad
        }
    );
}

function agregarClientes(){
    i++;
    cliente.nombre=prompt(`Cliente ${i}\nIngresa un nombre`);
    cliente.apellido=prompt(`Cliente ${i}\nIngresa un apellido`);
    cliente.edad=parseInt(prompt(`Cliente ${i}\nIngresa una edad`));

    do{
        cliente.nro_cliente=i;
        alert(`Cliente ${i}\nNumero de cliente asignado ${cliente.nro_cliente}`);
    }while(cliente.nro_cliente < 1 || cliente.nro_cliente > 99);

    do{
        cliente.sucursal=parseInt(prompt(`Cliente ${i}\nIngresa el numero de sucursal [Entre 1 y 3]`));        
    }while(cliente.sucursal < 1 || cliente.sucursal > 3);

    cliente.monto_depositado=parseFloat(prompt(`Cliente ${i}\nIngresa el monto depositado`));

    clientes.push(
        {
            'nombre':cliente.nombre,
            'apellido':cliente.apellido,
            'edad':cliente.edad,
            'nro_cliente':cliente.nro_cliente,
            'sucursal':cliente.sucursal,
            'monto_depositado':cliente.monto_depositado
        }
    );
}

function modificarCliente(){
    let nombreCliente, opcionModificar, i;
    let opcionSalida=true;

    nombreCliente=prompt(`Ingrese el nombre del cliente que desea modificar`);

    for(i=0; i<clientes.length; i++){
        if(clientes[i].nombre == nombreCliente){
            while(opcionSalida != false){
                opcionModificar=parseInt(prompt(`Seleccione el atributo a modificar de ${clientes[i].nombre} ${clientes[i].apellido} \n1. Nombre\n2. Apellido\n3. Edad\n4. Numero de sucursal\n5. Monto depositado\n0. Salir`));
                switch(opcionModificar){
                    case 0:
                        opcionSalida=false;
                        break;
            
                    case 1:
                        clientes[i].nombre=prompt(`Ingresa el nuevo nombre`);
                        break;
                    
                    case 2:
                        clientes[i].apellido=prompt(`Ingresa el nuevo apellido`);
                        break;
                    
                    case 3:
                        clientes[i].edad=parseInt(prompt(`Ingresa la nueva edad`));
                        break;
                    
                    case 4:
                        do{
                            clientes[i].sucursal=parseInt(prompt(`Ingresa la nueva sucursal`));
                        }while(clientes[i].sucursal < 1 || clientes[i].sucursal > 3);
                        break;
                    
                    case 5:
                        clientes[i].monto_depositado=parseInt(prompt(`Ingresa el nuevo monto depositado`));
                        break;
            
                    default:
                        console.log('Error-Opcion no valida');
                        break;
                }
                if(opcionModificar>=1 && opcionModificar<=5 && isNaN(opcionModificar)){
                    opcionSalida=prompt(`Volver a modificar otro valor para ${clientes[i].nombre} ${clientes[i].apellido}\n1. Si\n0. No`);
                }
            }
        }
    }
}

function borrarCliente(){
    let nombreCliente, i;
    let opcion=true
    nombreCliente=prompt(`Ingrese el nombre del cliente que desea borrar`);

    for(i=0; i<clientes.length; i++){
        if(clientes[i].nombre == nombreCliente){
            opcion=prompt(`Quiere borrar al cliente ${clientes[i].nombre} ${clientes[i].apellido}\n1. Si\n0. No`);
            if(opcion == true){
                clientes.splice(i, 1); // Recorre el vector clientes y va a la posicion que le asignamos y borra 1 diccionario
            }
        }
    }
}

function mostrarDatos(){
    let numeroCliente, numeroSucursal;
    numeroCliente=parseInt(prompt(`Ingresa el Numero de Cliente para mostrar sus datos y la sucursal`));
    numeroSucursal=clientes[numeroCliente].sucursal-1;
    alert(`Numero de cliente: ${numeroCliente}\n-Nombre: ${clientes[numeroCliente].nombre}\n-Apellido: ${clientes[numeroCliente].apellido}\n-Edad: ${clientes[numeroCliente].edad}\n-Numero cliente: ${clientes[numeroCliente].nro_cliente}\n-Sucursal: ${clientes[numeroCliente].sucursal}\n-Monto depositado: ${clientes[numeroCliente].monto_depositado}\n\nNumero de sucursal: ${sucursales[numeroSucursal].sucursal}\n-Direccion: ${sucursales[numeroSucursal].direccion}\n-Localidad: ${sucursales[numeroSucursal].localidad}`);
}

// Edad promedio de los clientes por sucursal (con los datos de la sucursal)
function edadPromedioPorSucursal(){
    let i, sumaEdades1=0, sumaEdades2=0, sumaEdades3=0;
    let contEdades1=0, contEdades2=0, contEdades3=0;
    const edadesPromedio=[];
    let mensajeEdadesPromedio;
    
    for(i=0; i<clientes.length; i++){
        if(clientes[i].sucursal==1){
            contEdades1++;
            sumaEdades1=sumaEdades1+clientes[i].edad;
        }

        if(clientes[i].sucursal==2){
            contEdades2++;
            sumaEdades2=sumaEdades2+clientes[i].edad;
        }

        if(clientes[i].sucursal==3){
            contEdades3++;
            sumaEdades3=sumaEdades3+clientes[i].edad;
        }
    }
    edadesPromedio.push(sumaEdades1/contEdades1, sumaEdades2/contEdades2, sumaEdades3/contEdades3);

    if(isNaN(edadesPromedio[0])){
        edadesPromedio.splice(0,1,"Ninguno");
    }

    if(isNaN(edadesPromedio[1])){
        edadesPromedio.splice(1,1,"Ninguno");
    }

    if(isNaN(edadesPromedio[2])){
        edadesPromedio.splice(2,1,"Ninguno");
    }

    mensajeEdadesPromedio=`---\nEdad promedio de la sucursal ${sucursales[0].sucursal}: ${edadesPromedio[0]}\nLocalidad: ${sucursales[0].localidad}\nDireccion: ${sucursales[0].direccion}\n---\nEdad promedio de la sucursal ${sucursales[1].sucursal}: ${edadesPromedio[1]}\nLocalidad: ${sucursales[1].localidad}\nDireccion: ${sucursales[1].direccion}\n---\nEdad promedio de la sucursal ${sucursales[2].sucursal}: ${edadesPromedio[2]}\nLocalidad: ${sucursales[2].localidad}\nDireccion: ${sucursales[2].direccion}\n---\n\n`;
    return mensajeEdadesPromedio;
}

// Cliente con mayor monto depositado (con los datos de la sucursal)
function maximoMontoCliente(){
    let i, numSucursal=0;
    let montoMaximo=clientes[0].monto_depositado;
    let mensajeMontoMaximo;
    for(i=1; i<clientes.length; i++){
        if(clientes[i].monto_depositado>montoMaximo){
            montoMaximo=clientes[i].monto_depositado;
            numSucursal=clientes[i].sucursal-1; // el "-1" es porque en el vector los indices se cuenta desde 0, asi que resto 1 para poder usarlo en el vector "sucursales"
        }
    }
    mensajeMontoMaximo=`---\nMonto mayor depositado: $ ${montoMaximo}\nNumero sucursal: ${numSucursal+1}\nLocalidad: ${sucursales[numSucursal].localidad}\nDireccion: ${sucursales[numSucursal].direccion}\n---\n\n`;
    return mensajeMontoMaximo;
}

// Monto depositado del cliente con mayor edad (con los datos de la sucursal)
function montoMayorEdad(){
    let i, numSucursal=0;
    let edadMaxima=clientes[0].edad;
    let montoEdadMayor=clientes[0].monto_depositado;
    let mensajeMontoMayorEdad;

    for(i=1; i<clientes.length; i++){
        if(clientes[i].edad>edadMaxima){
            edadMaxima=clientes[i].edad; // se guarda la edad maxima
            montoEdadMayor=clientes[i].monto_depositado; // se guarda el monto de la persona mayor
            numSucursal=clientes[i].sucursal-1;
        }
    }

    mensajeMontoMayorEdad=`---\nLa persona mayor tiene: ${edadMaxima} años\nMonto depositado: $ ${montoEdadMayor}\nNumero sucursal: ${numSucursal+1}\nLocalidad: ${sucursales[numSucursal].localidad}\nDireccion: ${sucursales[numSucursal].direccion}\n---\n\n`;
    return mensajeMontoMayorEdad;
}

// Sucursal con mayor cantidad de dinero depositado (con los datos de la sucursal)
function sucursalMayorDinero(){
    let i, numSucursal=0;
    const acumSucursales=[];
    let montoSucursal1=0, montoSucursal2=0, montoSucursal3=0;
    let sucursalMayor;
    let mensajeSucursalMayor;

    for(i=0; i<clientes.length; i++){
        if(clientes[i].sucursal==1){
            montoSucursal1=montoSucursal1+clientes[i].monto_depositado;
        }

        if(clientes[i].sucursal==2){
            montoSucursal2=montoSucursal2+clientes[i].monto_depositado;
        }

        if(clientes[i].sucursal==3){
            montoSucursal3=montoSucursal3+clientes[i].monto_depositado;
        }
    }

    acumSucursales.push(montoSucursal1, montoSucursal2, montoSucursal3);
    sucursalMayor=acumSucursales[0];

    for(i=1; i<acumSucursales.length; i++){
        if(acumSucursales[i]>sucursalMayor){
            sucursalMayor=acumSucursales[i];
            numSucursal=i;
        }
    }
    mensajeSucursalMayor=`---\nNumero de sucursal: ${numSucursal+1}\nCantidad de dinero: $ ${sucursalMayor}\nLocalidad: ${sucursales[numSucursal].localidad}\nDireccion: ${sucursales[numSucursal].direccion}\n---\n\n`;
    return mensajeSucursalMayor;
}

let cliente={}; // Diccionario de clientes
let clientes=[]; // Vector que guarda varios clientes

let sucursal={}; // Diccionario de sucursal
let sucursales=[]; // Vector que guarda varias sucursales

let i=0, opcion=true, opcionABM;

// Definiendo las variables del diccionaio cliente
cliente['nombre'];
cliente['apellido'];
cliente['edad'];
cliente['nro_cliente'];
cliente['sucursal'];
cliente['monto_depositado'];

// Definiendo las variables del diccionario sucursal
sucursal['sucursal'];
sucursal['direccion'];
sucursal['localidad'];


// Ingresando datos de la sucursal al vector sucursales
ingresoDeDatosSucursales();

while(opcion != false){
    agregarClientes();
    opcion=prompt(`Ingresar nuevo cliente\n0. No\n1. Si`);
}

// Opcion ABM --> Opcion Actualizar, Borrar y Modificar
while(opcionABM!=0){
    opcionABM=parseInt(prompt(`Ingresa una opcion\n1. Agregar cliente\n2. Modificar cliente\n3. Borrar cliente\n4. Ingresar numero de cliente para ver sus datos y su sucursal\n0. Salir`));
    switch(opcionABM){
        case 0:
            break;    

        case 1:
            agregarClientes();
            break;
        case 2:
            modificarCliente();
            break;
        
        case 3:
            borrarCliente();
            break;
        
        case 4:
            mostrarDatos();
            break;
    
        default:
            console.log(`Opcion no valida`);
    }
}
alert(`Abrir la consola para ver más informacion sobre los clientes y los sucursales`);
console.log(`\nEDAD PROMEDIO DE LOS CLIENTES POR SUCURSAL\n${edadPromedioPorSucursal()}`);
console.log(`\nCLIENTE CON MAYOR MONTO DEPOSITADO\n${maximoMontoCliente()}`);
console.log(`\nMONTO DEPOSITADO DEL CLIENTE DE MAYOR EDAD\n${montoMayorEdad()}`);
console.log(`\nSUCURSAL CON MAYOR CANTIDAD DE DINERO DEPOSITADO\n${sucursalMayorDinero()}`);