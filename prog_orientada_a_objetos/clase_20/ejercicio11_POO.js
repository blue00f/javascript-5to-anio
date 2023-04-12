/*
    Creacion de la clase padre 'Bebida' y la clase hija 'Gaseosa'
*/

class Bebida {
    #Nombre;
    #Descripcion;
    #CantidadDeLitros;
    constructor(Nombre, Descripcion, CantidadDeLitros) {
        this.#Nombre = Nombre;
        this.#Descripcion = Descripcion;
        this.#CantidadDeLitros = CantidadDeLitros;
    }

    set Nombre(nuevoNombre) {
        this.#Nombre = nuevoNombre;
    }
    get Nombre() {
        return this.#Nombre;
    }

    set Descripcion(nuevaDescripcion) {
        this.#Descripcion = nuevaDescripcion;
    }
    get Descripcion() {
        return this.#Descripcion;
    }

    set CantidadDeLitros(nuevaCantidadDeLitros) {
        this.#CantidadDeLitros = nuevaCantidadDeLitros;
    }
    get CantidadDeLitros() {
        return this.#CantidadDeLitros;
    }

    InfoBebida() {
        console.log(`Nombre: ${this.#Nombre}\nDescripcion: ${this.#Descripcion}\nCantidad de litros: ${this.#CantidadDeLitros}`);
    }

    static InfoBebidas(numero_punto_de_venta) {
        const vec_InfoBebidas = [];
        let i;
        for(i=0; i<bebidas.length; i++) {
            if(bebidas[i].NumeroPuntoDeVenta == numero_punto_de_venta) {
                vec_InfoBebidas.push(bebidas[i]);
            }
        }
        return vec_InfoBebidas;
    }

    static CalcularInfoBebidas(numero_punto_de_venta) {
        let cantidad_bebidas_vendidas = 0, i;
        for(i=0; i<bebidas.length; i++) {
            if(bebidas[i].NumeroPuntoDeVenta == numero_punto_de_venta) {
                cantidad_bebidas_vendidas++;
            }
        }
        return cantidad_bebidas_vendidas;
    }
}

class Gaseosa extends Bebida {
    #Sabor;
    #NumeroSerie;
    #PrecioPorLitro;
    #Presentacion;
    #NumeroPuntoDeVenta;
    #PrecioVenta;
    constructor(Nombre, Descripcion, CantidadDeLitros, Sabor, NumeroSerie, PrecioPorLitro, Presentacion, NumeroPuntoDeVenta, PrecioVenta) {
        super(Nombre, Descripcion, CantidadDeLitros);
        this.#Sabor = Sabor;
        this.#NumeroSerie = NumeroSerie;
        this.#PrecioPorLitro = PrecioPorLitro;
        this.#Presentacion = Presentacion;
        this.#NumeroPuntoDeVenta = NumeroPuntoDeVenta;
        this.#PrecioVenta = PrecioVenta;
    }

    set Sabor(nuevoSabor) {
        this.#Sabor = nuevoSabor;
    }
    get Sabor() {
        return this.#Sabor;
    }

    set NumeroSerie(nuevoNumeroSerie) {
        this.#NumeroSerie = nuevoNumeroSerie;
    }
    get NumeroSerie() {
        return this.#NumeroSerie;
    }

    set PrecioPorLitro(nuevoPrecioPorLitro) {
        this.#PrecioPorLitro = nuevoPrecioPorLitro;
    }
    get PrecioPorLitro() {
        return this.#PrecioPorLitro;
    }

    set Presentacion(nuevaPresentacion) {
        this.#Presentacion = nuevaPresentacion;
    }
    get Presentacion() {
        return this.#Presentacion;
    }

    set NumeroPuntoDeVenta(nuevoNumeroPuntoDeVenta) {
        this.#NumeroPuntoDeVenta = nuevoNumeroPuntoDeVenta;
    }
    get NumeroPuntoDeVenta() {
        return this.#NumeroPuntoDeVenta;
    }

    set PrecioVenta(nuevoPrecioVenta) {
        this.#PrecioVenta = nuevoPrecioVenta;
    }
    get PrecioVenta() {
        return this.#PrecioVenta;
    }

    InfoGaseosa() {
        console.log(`Sabor: ${this.#Sabor}\nNumero de serie: ${this.#NumeroSerie}\nPrecio por litro: ${this.#PrecioPorLitro}\nPresentacion: ${this.#Presentacion}\nNumero punto de venta: ${this.#NumeroPuntoDeVenta}\nPrecio de venta: ${this.#PrecioVenta}`);
    }
    
    static PrecioDeVenta(cantidad_de_litros, precio_por_litro) {
        let precio_venta = 0;
        precio_venta = cantidad_de_litros * precio_por_litro;
        if(cantidad_de_litros < 1) {
            return precio_venta; 
        }
        else if(cantidad_de_litros >= 1 && cantidad_de_litros < 2) {
            precio_venta = precio_venta + (precio_venta * 0.12);
            return precio_venta;
        }
        else if(cantidad_de_litros >= 2 && cantidad_de_litros < 3) {
            precio_venta = precio_venta + (precio_venta * 0.24);
            return precio_venta;
        }
        else {
            precio_venta = precio_venta + (precio_venta * 0.36);
            return precio_venta;
        }
    }
}

/*
    Declaracion de variables y vectores
*/

const bebidas = []; // Vector que va a guardar los datos de las bebidas
const punto_de_venta = {}; // Diccionario que va a guardar los datos de un punto de venta (singular)
const puntos_de_venta = []; // Vector que va a guardar los datos de varios puntos de venta (plural)
const vec_cant_vendida = []; // Vector que va a guardar la cantidad de ventas de cada gaseosa ingresada
const vec_total_vendido = []; // Vector que va a guardar lo cobrado por cada gaseosa segun la cantidad de ventas

// Definiendo las variables del diccionaio 'punto_de_venta'
punto_de_venta['Nombre'];
punto_de_venta['NumeroPuntoDeVenta'];
punto_de_venta['Direccion'];
punto_de_venta['Telefono'];
punto_de_venta["InfoBebidas"];

/*
    Funcion  que sirve para cargar el diccionaro 'punto_de_venta'
*/

function cargar_puntos_de_venta() {
    punto_de_venta.Nombre = "DISTRIBUIDORA 1";
    punto_de_venta.NumeroPuntoDeVenta = 10;
    punto_de_venta.Direccion = "Avenida Siempreviva 2041";
    punto_de_venta.Telefono = "4912-8274";
    punto_de_venta.InfoBebidas = Bebida.InfoBebidas(10);
    puntos_de_venta.push (
        {
            "Nombre": punto_de_venta.Nombre,
            "NumeroPuntoDeVenta": punto_de_venta.NumeroPuntoDeVenta,
            "Direccion": punto_de_venta.Direccion,
            "Telefono": punto_de_venta.Telefono,
            "InfoBebidas": punto_de_venta.InfoBebidas
        }
    );

    punto_de_venta.Nombre = "DISTRIBUIDORA 2";
    punto_de_venta.NumeroPuntoDeVenta = 20;
    punto_de_venta.Direccion = "Avenida Caseros 928";
    punto_de_venta.Telefono = "4911-9287";
    punto_de_venta.InfoBebidas = Bebida.InfoBebidas(20);
    puntos_de_venta.push(
        {
            "Nombre": punto_de_venta.Nombre,
            "NumeroPuntoDeVenta": punto_de_venta.NumeroPuntoDeVenta,
            "Direccion": punto_de_venta.Direccion,
            "Telefono": punto_de_venta.Telefono,
            "InfoBebidas": punto_de_venta.InfoBebidas
        }
    );

    punto_de_venta.Nombre = "DISTRIBUIDORA 3";
    punto_de_venta.NumeroPuntoDeVenta = 30;
    punto_de_venta.Direccion = "Avenida Corrientes 1982";
    punto_de_venta.Telefono = "4912-5291";
    punto_de_venta.InfoBebidas = Bebida.InfoBebidas(30);
    puntos_de_venta.push(
        {
            "Nombre": punto_de_venta.Nombre,
            "NumeroPuntoDeVenta": punto_de_venta.NumeroPuntoDeVenta,
            "Direccion": punto_de_venta.Direccion,
            "Telefono": punto_de_venta.Telefono,
            "InfoBebidas": punto_de_venta.InfoBebidas
        }
    );

    punto_de_venta.Nombre = "DISTRIBUIDORA 4";
    punto_de_venta.NumeroPuntoDeVenta = 40;
    punto_de_venta.Direccion = "Avenida La Plata 421";
    punto_de_venta.Telefono = "4912-1234";
    punto_de_venta.InfoBebidas = Bebida.InfoBebidas(40);
    puntos_de_venta.push(
        {
            "Nombre": punto_de_venta.Nombre,
            "NumeroPuntoDeVenta": punto_de_venta.NumeroPuntoDeVenta,
            "Direccion": punto_de_venta.Direccion,
            "Telefono": punto_de_venta.Telefono,
            "InfoBebidas": punto_de_venta.InfoBebidas
        }
    );

    punto_de_venta.Nombre = "DISTRIBUIDORA 5";
    punto_de_venta.NumeroPuntoDeVenta = 50;
    punto_de_venta.Direccion = "Avenida Saenz 583";
    punto_de_venta.Telefono = "4912-4321";
    punto_de_venta.InfoBebidas = Bebida.InfoBebidas(50);
    puntos_de_venta.push(
        {
            "Nombre": punto_de_venta.Nombre,
            "NumeroPuntoDeVenta": punto_de_venta.NumeroPuntoDeVenta,
            "Direccion": punto_de_venta.Direccion,
            "Telefono": punto_de_venta.Telefono,
            "InfoBebidas": punto_de_venta.InfoBebidas
        }
    );
}

/*
    Funciones que sirven para hacer restricciones o validaciones
*/

function validar_nombre_repetido(nombre_bebida){
    let validacion_nombre, i;
    validacion_nombre = true;
    for(i=0; i<bebidas.length; i++){
        if(bebidas[i].Nombre == nombre_bebida){
            validacion_nombre = false;
        }
    }
    return validacion_nombre;
}

function validar_numero_serie(numero_serie) {
    let validacion_num_serie; // Puede valer 'true' (validacion correcta) o 'false' (validacion incorrecta)
    const regex_num_serie = /^\d{6}\D{3}$/;
    /*
        Partes de la expresion regular:
            /: indica la creacion de una expresion regular.
            ^: es una asercion que indica el comienzo de la entrada de la expresion regular.
            $: es una asercion que indica el final de la entrada de la expresion regular.
            \d: es una clase de caracter que busca numeros del rango [0-9].
            \D: es una clase de caracter que busca caracteres QUE NO SEAN del rango numerico [0-9].
            x{n}: es un cuantificador que indica la cantidad de veces que tiene que aparecer la 'x'.
    */
    if(regex_num_serie.test(numero_serie)) { // El metodo 'test' va a ejecutar la expresion regular inicializada 'regex_num_serie' sobre una cadena de texto, que es 'numero_serie'
        validacion_num_serie = true;
        return validacion_num_serie;
    }
    else {
        validacion_num_serie = false;
        return validacion_num_serie;
    }
}

function validar_numero_serie_repetido(numero_serie) {
    let repetido_estado, i;
    repetido_estado = true;
    for(i=0; i<bebidas.length; i++){
        if(bebidas[i].NumeroSerie == numero_serie){
            repetido_estado = false;
        }
    }
    return repetido_estado;
}

/*
    Funciones que realizan las ABM de gaseosas (Agregar, Modificar y Borrar) y el agregado de ventas de las gaseosas
*/

function agregar_gaseosa() {
    let nombre, descripcion, cantidad_de_litros;
    let sabor, numero_serie, precio_por_litro, presentacion, numero_punto_de_venta, precio_venta;
    
    do {
        nombre = prompt(`Ingresa el nombre de la bebida: `);
        nombre = nombre.toUpperCase();
        if(validar_nombre_repetido(nombre) == false) {
            alert(`ERROR\nEl nombre de esta bebida ya esta registrado.`);
        }
    } while(validar_nombre_repetido(nombre) == false || nombre == "");

    do {
        descripcion = prompt(`Ingresa una breve descripcion de la bebida: `);
    } while(descripcion == "");

    do {
        cantidad_de_litros = prompt(`Ingresa la cantidad de litros de la bebida\n[0.6 - 1 - 1.5 - 2 - 2.25 - 3]: `);
        cantidad_de_litros = parseFloat(cantidad_de_litros);
    } while(cantidad_de_litros != 0.6 && cantidad_de_litros != 1 && cantidad_de_litros != 1.5 && cantidad_de_litros != 2 && cantidad_de_litros != 2.25 && cantidad_de_litros != 3);

    do {
        sabor = prompt(`Ingresa el sabor de la gaseosa\n[limonada - naranja - pomelo - tonica - guarana]: `)
        sabor = sabor.toUpperCase();
    } while(sabor != 'LIMONADA' && sabor != 'NARANJA' && sabor != 'POMELO' && sabor != 'TONICA' && sabor != 'GUARANA');

    do {
        numero_serie = prompt(`Ingresa el numero de serie de la gaseosa\n(X: numero - C: caracter)\n[XXXXXX-CCC] (ingresar sin el guion)`);
        numero_serie = numero_serie.toUpperCase();
        if(validar_numero_serie(numero_serie) == false) {
            alert(`ERROR\nEl formato del numero de serie es incorrecto`);
        }
        if(validar_numero_serie_repetido(numero_serie) == false) {
            alert(`ERROR\nEl numero de serie ingresado ya esta registado`);
        }
    } while(validar_numero_serie(numero_serie) == false || validar_numero_serie_repetido(numero_serie) == false);

    do {
        precio_por_litro = prompt(`Ingresa el precio por litro de la gaseosa [entre 110 y 130]: `);
        precio_por_litro = parseFloat(precio_por_litro);
    } while(precio_por_litro < 110 || precio_por_litro > 130);

    do {
        presentacion = prompt(`Ingresa la presentacion de la gaseosa\n[retornable - descartable - vidrio - lata]`);
        presentacion = presentacion.toUpperCase();
    } while(presentacion != 'RETORNABLE' && presentacion != 'DESCARTABLE' && presentacion != 'VIDRIO' && presentacion != 'LATA');

    do {
        numero_punto_de_venta = prompt(`Ingresa el numero de punto de venta de la gaseosa: `);
        numero_punto_de_venta = parseInt(numero_punto_de_venta, 10);
    } while(numero_punto_de_venta != 10 && numero_punto_de_venta != 20 && numero_punto_de_venta != 30 && numero_punto_de_venta != 40 && numero_punto_de_venta != 50);

    // Uso el metodo estatico 'PrecioDeVenta(par1, par2)' porque asi puedo llamar al metodo sin necesidad de instanciar la clase 'Gaseosa'
    precio_venta = Gaseosa.PrecioDeVenta(cantidad_de_litros, precio_por_litro);
    alert(`El precio de venta de '${nombre}' es $ ${precio_venta}`)
    bebidas.push(new Gaseosa(nombre, descripcion, cantidad_de_litros, sabor, numero_serie, precio_por_litro, presentacion, numero_punto_de_venta, precio_venta));
}

function modificar_gaseosa() {
    let i, numero_serie, opcion_sabor, opcion_present, estado_error;
    numero_serie = prompt(`Ingresa el numero de serie de la gaseosa para modificar su sabor y/o presentacion`);
    numero_serie = numero_serie.toUpperCase();

    for(i=0; i<bebidas.length; i++) {
        if(bebidas[i].NumeroSerie == numero_serie) {
            opcion_sabor = prompt(`El sabor de la bebida '${bebidas[i].Nombre}' es ${bebidas[i].Sabor}\n¿Desea cambiarlo?\n1. Si\n0. No`);
            if(opcion_sabor == true) {
                do {
                    sabor = prompt(`Ingresa el nuevo sabor de la gaseosa\n[limonada - naranja - pomelo - tonica - guarana]: `)
                    sabor = sabor.toUpperCase();
                    bebidas[i].Sabor = sabor;
                } while(sabor != 'LIMONADA' && sabor != 'NARANJA' && sabor != 'POMELO' && sabor != 'TONICA' && sabor != 'GUARANA');
            }

            opcion_present = prompt(`La presentacion de la gaseosa '${bebidas[i].Nombre}' es ${bebidas[i].Presentacion}\n¿Desea cambiarlo?\n1. Si\n0. No`);
            if(opcion_present == true) {
                do {
                    presentacion = prompt(`Ingresa la nueva presentacion de la gaseosa\n[retornable - descartable - vidrio - lata]`);
                    presentacion = presentacion.toUpperCase();
                    bebidas[i].Presentacion = presentacion;
                } while(presentacion != 'RETORNABLE' && presentacion != 'DESCARTABLE' && presentacion != 'VIDRIO' && presentacion != 'LATA');
            }
            estado_error = true;
            break;
        }
        else {
            estado_error = false;
        }
    }
    if(estado_error == false) {
        alert(`ERROR\nEl numero de serie ingresado no se encuentra registrado`);
    }
}

function borrar_gaseosa() {
    let i, numero_serie, opcion_borrar;
    numero_serie = prompt(`Ingresa el numero de serie de la gaseosa para borrar una gaseosa`);
    numero_serie = numero_serie.toUpperCase();
    for(i=0; i<bebidas.length; i++) {
        if(bebidas[i].NumeroSerie == numero_serie) {
            opcion_borrar = prompt(`¿Seguro que desea borrar la gaseosa '${bebidas[i].Nombre}'\n1. Si\n0. No`);
            if(opcion_borrar == true) {
                bebidas.splice(i, 1);
            }
        }
    }
}

function agregar_ventas() {
    let i, cant_ventas;
    for(i=0; i<bebidas.length; i++) {
        if(typeof(vec_cant_vendida[i]) == 'number') {
            continue;
        }
        else {
            do {
                cant_ventas = prompt(`Ingresa la cantidad de ventas de la gaseosa '${bebidas[i].Nombre}'`);
                cant_ventas = parseInt(cant_ventas, 10);
            } while(isNaN(cant_ventas) || cant_ventas < 0);
            vec_cant_vendida.push(cant_ventas);
        }
    }
}

function modificar_venta() {
    let i, cant_ventas;
    numero_serie = prompt(`Ingresa el numero de serie de la gaseosa para modificar la venta de una gaseosa`);
    numero_serie = numero_serie.toUpperCase();
    for(i=0; i<bebidas.length; i++) {
        if(bebidas[i].NumeroSerie == numero_serie) {
            do {
                cant_ventas = prompt(`Gaseosa seleccionada '${bebidas[i].Nombre}'\nLa anterior cantidad de ventas fue ${vec_cant_vendida[i]}\nIngresa la nueva cantidad de ventas: `);
                cant_ventas = parseInt(cant_ventas, 10);
            } while(isNaN(cant_ventas) || cant_ventas < 0);
            vec_cant_vendida[i] = cant_ventas;
        }
    }
}

/*
    Funciones que retornan un valor estadistico de la empresa (por ej: gaseosa mas vendida, la menos vendida, etc.)
*/

function calcular_ventas() {
    let i;
    for(i=0; i<vec_cant_vendida.length; i++) {
        vec_total_vendido[i] = vec_cant_vendida[i] * bebidas[i].PrecioVenta;
    }
}

function calcular_max_ventas() {
    let max_ventas, i, pos_gaseosa = 0; // posicion de la gaseosa
    let mensaje_salida;
    max_ventas = vec_cant_vendida[0]; 
    for(i=1; i<vec_cant_vendida.length; i++) {
        if(max_ventas < vec_cant_vendida[i]) { 
            max_ventas = vec_cant_vendida[i];
            pos_gaseosa = i;
        }
    }
    mensaje_salida = `La gaseosa con mas ventas realizadas es '${bebidas[pos_gaseosa].Nombre}' con ${vec_cant_vendida[pos_gaseosa]} ventas realizadas`;
    return mensaje_salida;
}

function calcular_min_ventas() {
    let min_ventas, i, pos_gaseosa = 0; // posicion de la gaseosa
    let mensaje_salida;
    min_ventas = vec_cant_vendida[0];
    for(i=1; i<vec_cant_vendida.length; i++) {
        if(min_ventas > vec_cant_vendida[i]) {
            min_ventas = vec_cant_vendida[i];
            pos_gaseosa = i;
        }
    }
    mensaje_salida = `La gaseosa con menos ventas realizadas es '${bebidas[pos_gaseosa].Nombre}' con ${vec_cant_vendida[pos_gaseosa]} ventas realizadas`;
    return mensaje_salida;
}

function calcular_promedio_ventas() {
    let suma_ventas = 0, prom_ventas, i;
    let mensaje_salida;
    for(i=0; i<vec_total_vendido.length; i++) {
        suma_ventas = suma_ventas + vec_total_vendido[i];
    }
    prom_ventas = suma_ventas / vec_total_vendido.length;
    mensaje_salida = `El promedio de todas las gaseosas vendidas es de $ ${prom_ventas}`;
    return mensaje_salida;
}

function calcular_total_ventas() {
    let suma_ventas = 0, i;
    let mensaje_salida;
    for(i=0; i<vec_total_vendido.length; i++) {
        suma_ventas = suma_ventas + vec_total_vendido[i];
    }
    mensaje_salida = `Cantidad de ventas totales ${vec_total_vendido.length} y total facturado $ ${suma_ventas}`;
    return mensaje_salida;
}

function mostrar_ventas_y_facturado() {
    let i;
    for(i=0; i<vec_cant_vendida.length; i++) {
        console.log(`-Gaseosa ${i+1}-\nCantidad de ventas: ${vec_cant_vendida[i]}\nTotal facturado: ${vec_total_vendido[i]}`);
    }
}

function mostrar_gaseosas(numero_punto_de_venta) {
    let i, total_facturado = 0;
    for(i=0; i<bebidas.length; i++) {
        if(bebidas[i].NumeroPuntoDeVenta == numero_punto_de_venta) {
            bebidas[i].InfoGaseosa();
        }
    }
    for(i=0; i<bebidas.length; i++) {
        if(bebidas[i].NumeroPuntoDeVenta == numero_punto_de_venta) {
            total_facturado = total_facturado + vec_total_vendido[i];
        }
    }
    alert(`La informacion de todas las gaseosas del punto de venta ${numero_punto_de_venta} fue mostrado por consola.\nEl total facturado es: $ ${total_facturado}`);
}

function mostrar_punto_de_venta_mayor() {
    let i, pos_gaseosa_mayor = 0, numero_venta, pos_venta_mayor;
    let max_ventas, total_ventas;
    total_ventas = vec_total_vendido[0];
    max_ventas = vec_cant_vendida[0]; 
    for(i=1; i<vec_cant_vendida.length; i++) {
        if(max_ventas < vec_cant_vendida[i]) { 
            max_ventas = vec_cant_vendida[i];
            total_ventas = vec_total_vendido[i];
            pos_gaseosa_mayor = i;
        }
    }
    numero_venta = bebidas[pos_gaseosa_mayor].NumeroPuntoDeVenta;
    for(i=0; i<puntos_de_venta.length; i++) {
        if(puntos_de_venta[i].NumeroPuntoDeVenta == numero_venta) {
            pos_venta_mayor = i;
        }
    }
    console.log(`Punto de venta: ${(pos_venta_mayor+1)*10}\nNombre: ${puntos_de_venta[pos_venta_mayor].Nombre}\nNumero Punto de Venta: ${puntos_de_venta[pos_venta_mayor].NumeroPuntoDeVenta}\nDireccion: ${puntos_de_venta[pos_venta_mayor].Direccion}\nTelefono: ${puntos_de_venta[pos_venta_mayor].Telefono}\nCantidad de ventas: ${max_ventas}\nTotal facturado: ${total_ventas}`);
}

/*
    Funcion principal que ejecuta el menu con todas las opciones
*/

function menu() {
    let opc_salida = false;
    do {
        opcion = prompt(`EMPRESA DE BEBIDAS\n1. Agregar gaseosa\n2. Modificar gaseosa\n3. Borrar gaseosa\n4. Agregar ventas\n5. Modificar venta\n6. La gaseosa mas vendida y la menos vendida\n7. Valor promedio de las gaseosas vendidas\n8. Mostrar las ventas realizadas y lo facturado\n9. Mostrar las gaseosas entregadas y el total segun el numero de punto de venta\n10. Mostrar datos completos de los Puntos de Venta\n0. SALIR`);
        opcion = parseInt(opcion, 10);
        switch(opcion) {
            case 1:
                agregar_gaseosa();
                break;
            case 2:
                if(bebidas.length == 0) {alert(`ERROR\nTenes que ingresar al menos una gaseosa para ingresar a esta opcion`);}
                else {modificar_gaseosa();}
                break;
            case 3:
                if(bebidas.length == 0) {alert(`ERROR\nTenes que ingresar al menos una gaseosa para ingresar a esta opcion`);}
                else {borrar_gaseosa(); calcular_ventas();}
                break;
            case 4:
                if(bebidas.length == 0) {alert(`ERROR\nTenes que ingresar al menos una gaseosa para ingresar a esta opcion`);}
                else {agregar_ventas(); calcular_ventas();}
                break;
            case 5:
                if(bebidas.length == 0){alert(`ERROR\nTenes que ingresar al menos una gaseosa para ingresar a esta opcion`);}
                else if(vec_cant_vendida.length == 0){alert(`ERROR\nTenes que ingresar la venta de las gaseosas`);}
                else {modificar_venta(); calcular_ventas();}
                break;
            case 6:
                if(bebidas.length == 0){alert(`ERROR\nTenes que ingresar al menos una gaseosa para ingresar a esta opcion`);}
                else if(vec_cant_vendida.length == 0) {alert(`ERROR\nTenes que ingresar la venta de las gaseosas`);
                }
                else {
                    calcular_ventas();
                    alert(calcular_max_ventas());
                    alert(calcular_min_ventas());
                }
                break;
            case 7:
                if(bebidas.length == 0){alert(`ERROR\nTenes que ingresar al menos una gaseosa para ingresar a esta opcion`);}
                else if(vec_cant_vendida.length == 0) {alert(`ERROR\nTenes que ingresar la venta de las gaseosas`);}
                else {
                    calcular_ventas();
                    alert(calcular_promedio_ventas());
                }
                break;
            case 8:
                if(bebidas.length == 0){alert(`ERROR\nTenes que ingresar al menos una gaseosa para ingresar a esta opcion`);}
                else if(vec_cant_vendida.length == 0) {alert(`ERROR\nTenes que ingresar la venta de las gaseosas`);}
                else {
                    mostrar_ventas_y_facturado();
                }
                break;
            case 9:
                if(bebidas.length == 0){alert(`ERROR\nTenes que ingresar al menos una gaseosa para ingresar a esta opcion`);}
                else if(vec_cant_vendida.length == 0) {alert(`ERROR\nTenes que ingresar la venta de las gaseosas`);}
                else {
                    let numero_venta;
                    numero_venta = prompt(`Ingresa el numero de venta para ver la informacion de las ventas y el total facturado: `);
                    numero_venta = parseInt(numero_venta, 10);
                    calcular_ventas();
                    mostrar_gaseosas(numero_venta)
                }
                break;
            case 10:
                if(bebidas.length == 0){alert(`ERROR\nTenes que ingresar al menos una gaseosa para ingresar a esta opcion`);}
                else if(vec_cant_vendida.length == 0) {alert(`ERROR\nTenes que ingresar la venta de las gaseosas`);}
                else {
                    calcular_ventas();
                    mostrar_punto_de_venta_mayor();
                }
                break;
            case 0:
                opc_salida = true;
                break;
        }
    } while(opc_salida == false);
    cargar_puntos_de_venta();
}

menu();