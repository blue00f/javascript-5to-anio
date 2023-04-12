/*
    Una empresa de informatica tiene 100 empleados, cada uno de ellos pertenece
    a una categoria que se le asigna cuando ingresa a trabajar en la empresa

    las categorias son:
        1) Analista Senior
        2) Analista Junior
        3) Programador Senior
        4) Programador Junior
        5) Tester
    
    Los sueldos son:
        1) $2500
        2) $2000
        3) $1500
        4) $1200
        5) $800

    Existen departamentos: 1, 2, 3

    Un empleado puede trabajar en una de estas categorias y pertenecer a uno de estos
    departamentos. Los sueldos son fijos por cada categoria.
    
    Se pide:
        a) Cantidad de empleados por categoria
        b) Sueldos totales de cada categoria
        c) Cantidad de empleados por departamento
        d) Nombre de la categoria que tenga mas empleados
        e) Numero de departamento que tenga la minima cantidad de empleados

    NOTA: El usuario carga el departamento
*/


const empleados=[], sueldos=[], departamentos=[]; // En este vector se van a almacenar las categorias que eligen los empleados, este vector va a guardar strings.
const sueldoAnalistaSen=2500, sueldoAnalistaJun=2000, sueldoProgramadorSen=1500, sueldoProgramadorJun=1200, sueldoTester=800;

let contAnalistaSen=0, contAnalistaJun=0, contProgramadorSen=0, contProgramadorJun=0, contTester=0; // Contadores de las categorias
let sueldoTotalAnalistaSen=0, sueldoTotalAnalistaJun=0, sueldoTotalProgramadorSen=0, sueldoTotalProgramadorJun=0, sueldoTotalTester=0;

let contDepartamento1=0, contDepartamento2=0, contDepartamento3=0;

function cargarDepartamentos(){
    let departamento;
    
    do{
        departamento=parseInt(prompt(`Elegi el departamento:\n1. Departamento 1\n2. Departamento 2\n3. Departamento 3`));
        
        if(departamento>=1 || departamento<=3){
            if(departamento==1){contDepartamento1++;}
            if(departamento==2){contDepartamento2++;}
            if(departamento==3){contDepartamento3++;}
        }else{
            console.log(`Error-Numero de departamento incorrecto`);
        }
    }while(departamento<1 || departamento>3);

    return departamento;
}

function cargarEmpleados(){
    let cantEmpleados, numCategoria;
    let i;

    cantEmpleados=parseInt(prompt(`Ingresar la cantidad de empleados que van a ingresar a una categoria:`));
    for(i=0; i<cantEmpleados; i++){
        numCategoria=parseInt(prompt(`Ingresa el numero de categoria:\n1. Analista Senior\n2. Analista Junior\n3. Programador Senior\n4. Programador Junior\n5. Tester`));

        switch(numCategoria){
            case 1:
                empleados.push('Analista Senior');
                sueldos.push(sueldoAnalistaSen);
                departamentos.push(cargarDepartamentos());
                break;
            case 2:
                empleados.push('Analista Junior');
                sueldos.push(sueldoAnalistaJun);
                departamentos.push(cargarDepartamentos());
                break;
            case 3:
                empleados.push('Programador Senior');
                sueldos.push(sueldoProgramadorSen);
                departamentos.push(cargarDepartamentos());
                break;
            case 4:
                empleados.push('Programador Junior');
                sueldos.push(sueldoProgramadorJun);
                departamentos.push(cargarDepartamentos());
                break;
            case 5:
                empleados.push('Tester');
                sueldos.push(sueldoTester);
                departamentos.push(cargarDepartamentos());
                break;
            default:
                console.log(`ERROR-Numero de categoria incorrecta`);
                i--;
                break;
        }
    }   
}

function calcularEmpleadosPorCategoria(){
    let mensaje;
    let i;
    for(i=0; i<empleados.length; i++){
        if(empleados[i]=='Analista Senior'){contAnalistaSen++;}
        if(empleados[i]=='Analista Junior'){contAnalistaJun++;}
        if(empleados[i]=='Programador Senior'){contProgramadorSen++;}
        if(empleados[i]=='Programador Junior'){contProgramadorJun++;}
        if(empleados[i]=='Tester'){contTester++;}
    }

    mensaje=`Cantidad de empleados en la categoria Analisis Senior: ${contAnalistaSen}\nCantidad de empleados en la categoria Analisis Junior: ${contAnalistaJun}\nCantidad de empleados en la categoria Programador Senior: ${contProgramadorSen}\nCantidad de empleados en la categoria Programador Junior: ${contProgramadorJun}\nCantidad de empleados en la categoria Tester: ${contTester}`;
    return mensaje;
}

function calcularSueldosPorCategoria(){
    let mensaje;
    sueldoTotalAnalistaSen=sueldoAnalistaSen*contAnalistaSen; // 0 = 2500 * contAnalistaSen
    sueldoTotalAnalistaJun=sueldoAnalistaJun*contAnalistaJun;

    sueldoTotalProgramadorSen=sueldoProgramadorSen*contProgramadorSen;
    sueldoTotalProgramadorJun=sueldoProgramadorJun*contProgramadorJun;

    sueldoTotalTester=sueldoTester*contTester;

    mensaje=`Sueldo total en la categoria Analisis Senior: $ ${sueldoTotalAnalistaSen}\nSueldo total en la categoria Analisis Junior: $ ${sueldoTotalAnalistaJun}\nSueldo total en la categoria Programador Senior: $ ${sueldoTotalProgramadorSen}\nSueldo total en la categoria Programador Junior: $ ${sueldoTotalProgramadorJun}\nSueldo total en la categoria Tester: $ ${sueldoTotalTester}`;
    return mensaje;
}

function categoriaConMasEmpleados(){
    const cantidadCategorias=[]; // Este vector va a servir para guardar momentaneamente los 5 contadores
    const categorias=['Analista Senior','Analista Junior','Programador Senior','Programador Junior','Tester'];
    let i, categoriaMayor, nombreCategoria, mensaje;

    cantidadCategorias.push(contAnalistaSen,contAnalistaJun,contProgramadorSen,contProgramadorJun,contTester);

    categoriaMayor=cantidadCategorias[0];
    nombreCategoria=categorias[0];
    //console.log(nombreCategoria);
    for(i=1; i<cantidadCategorias.length; i++){
        if(cantidadCategorias[i]>categoriaMayor){
            categoriaMayor=cantidadCategorias[i];
            nombreCategoria=categorias[i];
        }
    }
    mensaje=`Categoria con mas empleados: ${nombreCategoria}\nCantidad de empleados: ${categoriaMayor}`;
    
    return mensaje;
}

function departamentoConMenosEmpleados(){
    const empleadosPorDepartamento=[];
    empleadosPorDepartamento.push(contDepartamento1,contDepartamento2,contDepartamento3); // Guardamos momentaneamente los contadores de departamentos en un nuevo vector
    let numDepartamentoMinimo, cantEmpleadosMin=0;
    let i;

    cantEmpleadosMin=empleadosPorDepartamento[0];
    // empleadosPorDepartamento = [5,10,2]
    for(i=1; i<empleadosPorDepartamento.length; i++){
        if(empleadosPorDepartamento[i]<cantEmpleadosMin){
            cantEmpleadosMin=empleadosPorDepartamento[i];
            numDepartamentoMinimo=i+1;
        }
    }

    return mensaje=`Numero de departamento con la minima cantidad de empleados: ${numDepartamentoMinimo}\nCantidad de empleados: ${cantEmpleadosMin}`
}

cargarEmpleados();

console.log(calcularEmpleadosPorCategoria());
console.log(calcularSueldosPorCategoria());

console.log(categoriaConMasEmpleados());
console.log(departamentoConMenosEmpleados());   