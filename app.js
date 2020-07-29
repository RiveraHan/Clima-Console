const { argv } = require('./config/yargs');
const clima = require('./clima/clima');


// lugar.getLugarLatLng(argv.direccion)
//     .then(console.log);

clima.getClima(argv.direccion)
    .then(data => console.log(`El clima en ${ data.nombre } es de: ${ data.temperatura}\nDescripción del clima: ${ data.descripcion }\nLatitud: ${ data.lat } Y Longitud: ${ data.lng}`))
    .catch((e) => console.log(`No se pudo determinar el clima de ${ argv.direccion }`, e));



// const getInfo = async( direccion  ) => {

//     const coords = await lugar.getLugarLatLng( argv.direccion )
// }