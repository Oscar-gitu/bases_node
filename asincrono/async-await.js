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

let getempleado = async (id) => {
        let empleado = empleados.find( empleado => {return empleado.id === id})
        if(!empleado){
            throw new Error("No existe un empleado con el id " + id)
        }
        return empleado
}

let getsalario = async (idempleado) => {
    let salario = Salarios.find( salario => {return salario.id === idempleado.id})
    if(!salario){
        throw new Error(`no existe salario para el usuario ${idempleado.nombre}`)
    }
    return (`el salario es ${salario.salario}`)
}

let getinformacion = async (id) => {
    let idempleado = await getempleado(id)
    let salario = await getsalario(idempleado)

    return salario
    
}

getinformacion(1).then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
})
