export default class Sensor {

    constructor(strategy){
        if(new.target === Sensor){
            throw new Error("Sensor es abstracto");
        }

        if(!strategy){
            throw new Error("Sensor requiere estrategia");
        }

        this.strategy = strategy;
    }

    read(){
        throw new Error("Implementa read()");
    }
}
