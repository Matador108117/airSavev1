import emulator from "./emulator/emuladorManager.js";
import SensorFactory from "./Factories/sensorFactory.js";
import SwitchFactory from "./Factories/switchFactory.js";
import { ENV } from "./config/config.js";

const iniciar = document.getElementById('iniciar');
const detener = document.getElementById('detener');
const ventilacionBtn = document.getElementById('ventilacion');
const alertaBtn = document.getElementById('alerta');


emulator.configure(
    SensorFactory.createAirSensors(1)
);

const ventSwitch = SwitchFactory.create("vent", emulator);
const alertSwitch = SwitchFactory.create("alert", emulator);

iniciar.onclick = () => emulator.start(ENV.interval);
detener.onclick = () => emulator.stop();

ventilacionBtn.onclick = () => ventSwitch.toggle();
alertaBtn.onclick = () => alertSwitch.toggle();
