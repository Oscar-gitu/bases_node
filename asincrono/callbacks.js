setTimeout( () => {
    console.log("object")
},3000)

let getusuarioByid = (id, callback) => {
    let usuario = {
        nombre : "Oscar",
        id
    }

    if(id === 20){
        callback("el id 20 no existe")
    } else {
        callback(null, usuario)
    }

    
}

getusuarioByid(2, (err, data) => {
    if(err){
        return console.log(err)
    } else {
        console.log(`el usuario es ${data.nombre}`)
    }
    
} )