/* function saludar (){
    var name = prompt(`Por favor ingrese un nombre: `)
    alert (`Hola ${name}`)
}   

function login(){
    var user = prompt(`Por favor ingrese un nombre: `)
    alert(`Bienvenid@, ${user}`)
}

function llamarSaludar(callBack){
    // var name = prompt(`Por favor ingrese un nombre: `)
    // var lastName = prompt(`Por favor ingrese un apellido: `)
    //llamar la funcion que es el argumento de esta
    callBack()
}

llamarSaludar(saludar)
llamarSaludar(login)
*/

/* Generar una funcion (CallBack) para invocar otra(s) funciones que permitan
restar, sumar, multiplicar y dividir, dos cifra*/


let sumar = (valor1, valor2) => parseFloat(valor1) + parseFloat(valor2)


let restar = (valor1, valor2) => parseFloat(valor1) - parseFloat(valor2)


let multiplicar = (valor1, valor2) => parseFloat(valor1) * parseFloat(valor2)


let dividir = (valor1, valor2) => parseFloat(valor1) / parseFloat(valor2)


function callBack(fncallBack,operador){
    let valor1 = prompt(`Porfavor ingrese el valor 1: `)
    let valor2 = prompt(`Porfavor ingrese el valor 2: `)
    return fncallBack(valor1,valor2,operador)
}


function llamarOperacion(){
    let operacion = prompt(`Que operacion desea ejecutar Suma(+), Resta(-), Multiplicacion(*), Dividir(/): `)
    switch (operacion){
        case "+":
            console.log(`El resultado de tu suma es: ${callBack(sumar)}`)
            break
        case "-":
            console.log(`El resultado de tu resta es: ${callBack(restar)}`)
            break
        case "*":
            console.log(`El resultado de tu resta es: ${callBack(multiplicar)}`)
            break
        case "/":
            console.log(`El resultado de tu resta es: ${callBack(dividir)}`)
            break
        default:
            alert("Porfavor ingrese uno de los signos pedidos")
            break
        }
}

llamarOperacion()






