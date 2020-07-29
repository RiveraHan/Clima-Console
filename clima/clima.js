const axios = require('axios');

const getClima = async(direccion) => {

    try {

        const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${ direccion }&appid=68591edc392e98b9a00534e5de14de5c&units=metric`);

        const nombre = resp.data.name;
        const lat = resp.data.coord.lat;
        const lng = resp.data.coord.lon;
        const descripcion = resp.data.weather[0].description;
        const temperatura = resp.data.main.temp;

        return { nombre, temperatura, descripcion, lat, lng }

    } catch (err) {
        console.error('No se pudo determinar el clima', err.response.statusText);
    }
}

module.exports = { getClima };