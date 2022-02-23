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
function sumar (valor1, valor2){
    var valor1 = parseInt(prompt(`Porfavor ingrese el valor 1: `))
    var valor2 = parseInt(prompt(`Porfavor ingrese el valor 2: `))
    resultado = valor1 + valor2
    return alert(`Este es el resultado de tu suma: ${resultado}`)
}

function restar (valor1, valor2){
    var valor1 = parseInt(prompt(`Porfavor ingrese el valor 1: `))
    var valor2 = parseInt(prompt(`Porfavor ingrese el valor 2: `))
    resultado = valor1 - valor2
    return alert(`Este es el resultado de tu resta: ${resultado}`)
}

function multiplicar (valor1, valor2){
    var valor1 = parseInt(prompt(`Porfavor ingrese el valor 1: `))
    var valor2 = parseInt(prompt(`Porfavor ingrese el valor 2: `))
    resultado = valor1 * valor2
    return alert(`Este es el resultado de tu multiplicacion: ${resultado}`)
}

function dividir (valor1, valor2){
    var valor1 = parseInt(prompt(`Porfavor ingrese el valor 1: `))
    var valor2 = parseInt(prompt(`Porfavor ingrese el valor 2: `))
    resultado = valor1 / valor2
    return alert(`Este es el resultado de tu divicion: ${resultado}`)
}

let callBack = callBack => callBack()


function llamarOperacion(){
    let operacion = prompt(`Que operacion desea ejecutar Suma(+), Resta(-), Multiplicacion(*), Dividir(/): `)
    if(operacion == "+"){
        callBack(sumar)
    } else if(operacion == "-"){
        callBack(restar)
    } else if(operacion == "*"){
        callBack(multiplicar)
    } else if(operacion == "/"){
        callBack(dividir)
    } else {
        alert("Porfavor ingrese uno de los signos pedidos")
    }
}

llamarOperacion()


