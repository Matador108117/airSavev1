import Switch from "../abstract/switch.js";

export default class VentilationSwitch extends Switch {

    toggle(){
        this.state ^= 1;
        this.manager.toggleVent(this.state);
        console.log("VENTILACION:", this.state);
    }
}
