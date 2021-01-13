
const fs = require('fs');

module.exports.creararchivo = async (base, limite) => {
    var data = '';

    if(!Number(base)){
        throw new Error(`La base-${base} introducida no es un numero.`);
    }

    for( let i = 1; i<=limite; i++){
        data += (`${base} * ${i} = ${base * i}\n`)
    }
    
    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) =>{
        if(err){
            throw new Error(err);
        } 

    })

    return (`tabla-${base}.txt`)
}

module.exports.listarTabla =  (base, limite) => {
    console.log('el limite es' + limite)

    for( let i = 1; i<=limite; i++){
        console.log(`${base} * ${i} = ${base * i}\n`)
    }

}

// module.exports = {
//     creararchivo
// }



