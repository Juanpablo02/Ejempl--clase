// Funcion tradicional

function sumar23(valor1,valor2){
    return valor1 + valor2
}

console.log(sumar23(24,56))

// Funcion anonima

let sumar23a = function(valor1, valor2){return valor1 + valor2}

console.log(sumar23a(34,56))

// Funcion flecha

let sumar45 = (valor1,valor2) => valor1 + valor2

console.log(sumar45(66,34))

let sumar46 = (valor1,valor2) => {return valor1 + valor2}

console.log(sumar46(66,33))



if (sumar46(33,66) > 60){
    console.log(`Tiene el derecho a compra`)
} else {
    console.log(`No tiene derecho a compra`)
}



// Operador ternario

console.log(sumar23a(43,12) > 70 ? `Tiene derecho al bono` : `No tiene derecho al bono`)


// Metodo math para sacar raiz cuadrada
numero1 = 81
valor1 = Math.sqrt(numero1)
console.log(valor1)


// Metodo para sacar raiz de cualquier numero
numero2 = 4 
valor2 = Math.pow(numero2, 1/2)
console.log(valor2)


// Usando math en metodo anonimo 
let fraiz = function(num,raiz){return Math.pow(num,1/raiz)}
console.log(fraiz(4,2))