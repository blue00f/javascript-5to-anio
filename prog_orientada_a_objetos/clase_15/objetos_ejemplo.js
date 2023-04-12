const computadora = {
    procesador: 'i3 8100',
    gpu: 'gtx 1060',
    ram: 16,

    ingresarRam(cantidad){
        this.ram = this.ram + cantidad;
        return "RAM: " + this.ram;
    },
    sacarRam(cantidad){
        this.ram = this.ram - cantidad;
        return "RAM: " + this.ram;
    }
}


console.log(computadora.ingresarRam(16));
console.log(computadora.sacarRam(8));