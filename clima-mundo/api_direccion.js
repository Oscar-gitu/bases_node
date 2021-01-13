const axios = require('axios')

const direccion = async (ciudad) => {

    var respuesta, longitud, longitud

    await axios.get('http://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: ciudad,
            appid: 'abb99ed03807bfab580412dcbaa968a0'
        }
    }).then( data => {
        if (data.estatus = 200) {
            respuesta = data.data;
            longitud = data.data.coord.lon;
            latitud = data.data.coord.lat;
        }
    }).catch( e => {
        return console.log(e)
    })

    return {
        respuesta,
        longitud,
        latitud
    }
    
}

module.exports = {
    direccion
}