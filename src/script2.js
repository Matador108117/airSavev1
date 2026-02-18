const iniciar = document.getElementById('iniciar');
const detener = document.getElementById('detener');
const ventilacionBtn = document.getElementById('ventilacion');
const alertaBtn = document.getElementById('alerta');

// URL API UBIDOTS (CAMBIA TU TOKEN)
const apiURL =
'https://industrial.api.ubidots.com/api/v1.6/devices/safeair-101/?token=BBUS-cYozsYvLRPPGXYWj0UYSqvEcjrloQu';

const tasaRequest = 8000;

// Variables de control
var data;
var edoVentilacion = 0;
var edoAlerta = 0;

// Iniciar emulación
iniciar.addEventListener('click', () =>{
    console.log('* INICIA EMULACION SAFE AIR *');
    data = setInterval(generarDatos, tasaRequest);
});

// Generar datos aleatorios
function generarDatos(){
    let d = new Date();
    let t = d.toLocaleTimeString();

    let temperatura = parseFloat((Math.random() * (30 - 18) + 18).toFixed(2));
    let humedad = parseFloat((Math.random() * (80 - 40) + 40).toFixed(2));
    let co2 = parseFloat((Math.random() * (1000 - 400) + 400).toFixed(0));
    let pm25 = parseFloat((Math.random() * (150 - 5) + 5).toFixed(0));

    axios({
        method: 'POST',
        url: apiURL,
        data: {
            temp: temperatura,
            hum: humedad,
            co2: co2,
            pm25: pm25
        }
    }).then(res => {
        console.log(t, 
            'Temp:', temperatura,
            'Hum:', humedad,
            'CO2:', co2,
            'PM2.5:', pm25,
            res.statusText);
    }).catch(errors => {
        console.log('ERROR EN ENVIO DE VARIABLES');
    });
}

// Control Ventilación
ventilacionBtn.addEventListener('click', () =>{
    edoVentilacion = edoVentilacion === 0 ? 1 : 0;

    axios({
        method: 'POST',
        url: apiURL,
        data: {
            ventilacion: edoVentilacion
        }
    }).then(res => {
        console.log('VENTILACION:', edoVentilacion);
    }).catch(errors => {
        console.log('ERROR EN VENTILACION');
    });
});

// Control Alerta
alertaBtn.addEventListener('click', () =>{
    edoAlerta = edoAlerta === 0 ? 1 : 0;

    axios({
        method: 'POST',
        url: apiURL,
        data: {
            alerta: edoAlerta
        }
    }).then(res => {
        console.log('ALERTA:', edoAlerta);
    }).catch(errors => {
        console.log('ERROR EN ALERTA');
    });
});

// Detener emulación
detener.addEventListener('click', () =>{
    clearInterval(data);
    console.log('* EMULACION DETENIDA *');
});
