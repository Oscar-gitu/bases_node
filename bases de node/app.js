
const {creararchivo, listarTabla} = require('./multiplicar/multiplicar')
const {argv} = require('./configs/yargs')


let argumento = process.argv // esta tomando los argumentos
let argumento2 = argumento[2] // se toma la posicion 3 ya que es donde se crea el nuevo argumento
let argumento3 = argumento2.split('=')  // realizamos un split donde separamos por el = y crea un arreglo
let base = argumento3[1] // al crear el arreglo separado, hay que tomar el numero en dicha posicion

let comando = argv._[0]
console.log(argv)

switch(comando){
    case 'listar':
        listarTabla(argv.base, argv.limite)
        break;
    case 'crear':
        creararchivo(argv.base, argv.limite).then(archivo =>{
            console.log(`archivo creado: ${archivo}`)
        }).catch(e => {
            console.log(e)
        })
        break;
    default:
        console.log('comando no reconocido')
}

