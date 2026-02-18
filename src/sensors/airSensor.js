export default class AirSensor {

    constructor(strategy){
        this.strategy = strategy;
    }

    read(){
        return this.strategy.generate();
    }
}
