
const {direccion} = require('./api_direccion')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv

const ciudad = argv.direccion

direccion(ciudad).then( resp => {
    console.log(resp)
})
