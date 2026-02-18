import VentilationSwitch from "../switch/ventiladorSwitch.js";
import AlertSwitch from "../switch/alertSwitch.js";

export default class SwitchFactory {

    static create(type, manager){

        switch(type){

            case "vent":
                return new VentilationSwitch(manager);

            case "alert":
                return new AlertSwitch(manager);

            default:
                throw new Error("Switch desconocido");
        }
    }
}
