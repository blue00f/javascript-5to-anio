/*
    Vehiculo
        patente
        modelo
        potencia
        infoVehiculo()

        Taxi
            numeroLicencia
            turno
            infoTaxi()

        Colectivo
            numeroDePlazas
            interno
            infoAutobus()
*/

class Vehiculo{
    constructor(patente,modelo,potencia){
        this.patente = patente;
        this.modelo = modelo;
        this.potencia = potencia;
    }

    infoVehiculo(){
        return `Patente: ${this.patente} Modelo: ${this.modelo}`;
    }
}

class Taxi extends Vehiculo{
    constructor(patente,modelo,potencia,numeroLicencia,turno){
        super(patente,modelo,potencia)
        this.numeroLicencia = numeroLicencia;
        this.turno = turno;
    }
    infoTaxi(){
        return `Numero de licencia: ${this.numeroLicencia} Turno: ${this.turno}`; 
    }
}

class Colectivo extends Vehiculo{
    constructor(patente,modelo,potencia,numeroDePlazas,interno){
        super(patente,modelo,potencia)
        this.numeroDePlazas = numeroDePlazas;
        this.interno = interno;
    }
    infoColectivo(){
        return `Numero de plazas: ${this.numeroDePlazas} Interno: ${this.interno}`;
    }
}

const vehiculo1 = new Taxi('7ABC6','Minguito','80CV','123456ABC','Noche');
const vehiculo2 = new Colectivo('2DEF4','Falopin','120CV',40,205);

