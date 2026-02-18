import AirSensor from "../sensors/airSensor.js";
import RandomStrategy from "../strategies/ RandomGenerationStrategy.js";

export default class SensorFactory {

    static createAirSensors(n){
        return Array.from({length:n},
            () => new AirSensor(new RandomStrategy())
        );
    }
}
