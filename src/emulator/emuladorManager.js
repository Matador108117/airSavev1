import api from "../api/apiClient.js";

class EmulatorManager {

    static instance;

    constructor() {
        if (EmulatorManager.instance) return EmulatorManager.instance;

        this.timer = null;
        this.sensors = [];
        this.vent = 0;
        this.alert = 0;

        EmulatorManager.instance = this;
    }

    configure(sensors) {
        this.sensors = sensors;
    }

    start(interval) {
        if (this.timer) return;
        this.timer = setInterval(async () => {
            console.log("::: Emulacion iniciada :::");
            for (const s of this.sensors) {
                const data = s.read();
                await api.send(data);
                console.log(new Date().toLocaleTimeString(), data);
            }
        }, interval);
    }

    stop() {
        clearInterval(this.timer);
        this.timer = null;
        console.log("::: Emulacion detenida :::");
    }

    toggleVent(state) {
        this.vent = state;
        api.send({ ventilacion: this.vent });
    }
    toggleAlert(state) {
        this.alert = state;
        api.send({ alerta: this.alert });
    }

}

export default new EmulatorManager();
