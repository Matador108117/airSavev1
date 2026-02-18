export default class RandomGenerationStrategy {

    generate(){
        return {
            temp: this.rand(18,30,2),
            hum: this.rand(40,80,2),
            co2: this.rand(400,1000,0),
            pm25: this.rand(5,150,0)
        }
    }

    rand(min,max,fixed){
        return parseFloat(
            (Math.random()*(max-min)+min).toFixed(fixed)
        );
    }
}
