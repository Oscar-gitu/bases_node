let empleados = [
    {
    id: 1,
    nombre: "Oscar",
    },
    {
    id: 2,
    nombre: "Ricky",
    },
    {
    id: 3,
    nombre: "Mafer",
    }
]

let Salarios = [
    {
    id: 1,
    salario: 1000,
    },
    {
    id: 2,
    salario: 2000,
    }
]


let getempleado = (id, callback) => {
    let empleado = empleados.find( empleado => {return empleado.id === id})
    
    if(!empleado){
        callback("No existe un empleado con el id " + id)
    } else {
        callback(null, empleado)
    }
        
}

let getsalario = (idempleado, callback) => {
    let salario = Salarios.find( salario => {return salario.id === idempleado})

    if(!salario){
        callback("No existe el salario para un empleado con el id " + idempleado)
    } else {
        callback(null, `el salario es ${salario.salario}`)
    }
}

getempleado(2, (err, data) => {
    if(err){
        console.log(err)
    } else {
        getsalario(data.id, (err, data) => {
            if(err){
                console.log(err)
            } else {
                console.log(data)
            }
        })
    }

})

