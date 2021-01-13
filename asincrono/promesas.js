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

let getempleado = (id) => {

    return new Promise((resolve, reject) => {

        let empleado = empleados.find( empleado => {return empleado.id === id})
    
        if(!empleado){
            reject("No existe un empleado con el id " + id)
        } else {
            resolve(empleado)
        }
            
    })
}


let getsalario = (idempleado) => {

    return new Promise((resolve, reject) => {
        let salario = Salarios.find( salario => {return salario.id === idempleado})

        if(!salario){
            reject("No existe el salario para un empleado con el id " + idempleado)
        } else {
            resolve(`el salario es ${salario.salario}`)
        }
    })

}

getempleado(2)
.then( data => {
    getsalario(data.id)
    .then(data => {
        console.log(data)
    })
})
.catch( err => {
    console.log(err)
})