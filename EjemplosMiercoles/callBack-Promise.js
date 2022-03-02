let myImg = document.getElementById('Imagen');
myImg.style.visibility = "hidden"

function sumar(num1, num2){
    return parseFloat(num1) + parseFloat(num2)
}

function fnCallBack(fnc){
    let num1 = prompt(`Ingrese el valor 1: `)
    let num2 = prompt(`Ingrese el valor 2: `)
    return fnc(num1,num2)
}

//console.log(fnCallBack(sumar))



function server(){
    setTimeout(function(){
        let datasal = {cedula:"123", nombre:"pedro sala", salario:5400000}
        console.log(`Cedula: ${datasal.cedula}, Nombre: ${datasal.nombre}, salario: ${datasal.salario}`)
        let misdatos = document.getElementById('datos')
        misdatos.innerHTML = datasal.cedula + " " + datasal.nombre + " " + datasal.salario;
        myImg.style.visibility = "hidden"
    },3000)
}


function fcPeticion(fn){
    fn() //Simular la peticion al servidor
    console.log("Espere, por favor..., buscando informacion")
    myImg.style.visibility = "visible"
}

// fcPeticion(server)

//Promesas

let promesa1 = new Promise((resolve,reject)=>{
    let myState = true
    if(myState){
        resolve("Esta habilitado")
    } else {
        reject("No está habilitado")
    }
})

let misdatos = document.getElementById('datos')     
promesa1
    .then((message)=>{
        misdatos.innerHTML = message
    })
    .then(()=>{
        misdatos.innerHTML = "Se puede liquidar el empleado"
    })
    .catch(function(error){
        misdatos.innerHTML = error
    })

/*
    Generar callBacks para
    1. Retornar el promedio de 3 notas
    2. Retornar el valor de la comision de cualquier venta, teniendo en cuenta que
        si la venta es mayor a 10 millones, se dara una comision del 5%, de lo contrario sera de 2%
    3. El exponente o raiz (cualquiera) de cualquier numero, realice un efecto de proceso asincronico
        con setTimeOut
*/


