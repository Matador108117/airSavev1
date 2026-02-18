import Switch from "../abstract/switch.js";

export default class AlertSwitch extends Switch {

    toggle(){
        this.state ^= 1;
        this.manager.toggleAlert(this.state);
        console.log("ALERTA:", this.state);
    }
}
