/*

    Banco 3 sucursales, numero de sucursal 2 digitos, permita ingresar, modificar y dar de baja a los clientes. 
    en el caso de dar de alta a nuevos clientes podra realizarze hasta que el usuario ingrese como condicion de salida sucursal igual 0.

    1, Ingresar Clientes
    2. Modificar Clientes
    3. Baja de Clientes

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

function ingresoDeDatosClientes(){
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
    let nroCliente, opcionModificar;
    let opcionSalida=true;

    nroCliente=parseInt(prompt(`Ingrese el numero del cliente que desea modificar`));

    
    while(opcionSalida != false){
        opcionModificar=parseInt(prompt(`Seleccione el atributo a modificar del cliente ${clientes[nroCliente].nombre} ${clientes[nroCliente].apellido} \n1. Nombre\n2. Apellido\n3. Edad\n4. Numero de sucursal\n5. Monto depositado\n0. Salir`));
        switch(opcionModificar){
            case 0:
                break;
    
            case 1:
                clientes[nroCliente].nombre=prompt(`Ingresa el nuevo nombre`);
                break;
            
            case 2:
                clientes[nroCliente].apellido=prompt(`Ingresa el nuevo apellido`);
                break;
            
            case 3:
                clientes[nroCliente].edad=parseInt(prompt(`Ingresa la nueva edad`));
                break;
            
            case 4:
                do{
                    clientes[nroCliente].sucursal=parseInt(prompt(`Ingresa la nueva sucursal`));
                }while(cliente[nroCliente].sucursal < 1 || cliente[nroCliente].sucursal > 3);
                break;
            
            case 5:
                clientes[nroCliente].monto_depositado=parseInt(prompt(`Ingresa el nuevo monto depositado`));
                break;
    
            default:
                console.log('Error-Opcion no valida');
                break;
        }
        opcionSalida=prompt(`Volver a modificar otro valor para ${clientes[nroCliente].nombre} ${clientes[nroCliente].apellido}\n1. Si\n0. No`);
    }

    // Seleccionar un cliente por el nro_cliente
    // Usar un switch para modificar algunos de los valores (nombre,apellido,edad,sucursal,monto_depositado)
}

function borrarCliente(){
    let nroCliente;
    let opcion=true
    nroCliente=parseInt(prompt(`Ingrese el numero del cliente que desea borrar`));

    opcion=prompt(`Quiere borrar al cliente ${clientes[nroCliente].nombre} ${clientes[nroCliente].apellido}\n1. Si\n0. No`);

    if(opcion == 1){
        clientes.splice(nroCliente, 1); // Recorre el vector clientes y va a la posicion que le asignamos y borra 1 diccionario
    }
}

let cliente={}; // Diccionario de cliente
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
    ingresoDeDatosClientes();
    opcion=prompt(`Ingresar nuevo cliente\n0. No\n1. Si`);
}

while(opcionABM!=0){
    opcionABM=parseInt(prompt(`Ingresa una opcion\n1. Agregar cliente\n2. Modificar cliente\n3. Borrar cliente\n0. Salir`));
    switch(opcionABM){
        case 0:
            alert(`Gracias por usar`);
            break;        
        case 1:
            ingresoDeDatosClientes();
            break;
        case 2:
            modificarCliente();
            break;
        
        case 3:
            borrarCliente();
            break;
    
        default:
            console.log(`Opcion no valida`);
    }
}
