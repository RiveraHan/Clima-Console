const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        type: 'string',
        desc: 'Dirección de la cuidad para obtener el clima',
        demand: true
    }
}).argv;

module.exports = { argv };