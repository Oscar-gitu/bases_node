const opt = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: '10',
        demand: false
    }
}

const argv = require('yargs')
                            .command('listar', 'Imprime en consola la tabla de multiplicar', opt)
                            .command('crear', 'Crea el archivo para la tabla de multiplicar', opt)
                            .help()
                            .argv

module.exports = {
    argv
}