// Funcion declarada
function saludarDeclarada(nombre) {
    console.log("Hola " + nombre);
}

saludarDeclarada("Rodrigo");

// Funcion expresada anónima
const sumar = function (num1, num2) {
    const resultado = num1 + num2;
    return resultado;
}

const result = sumar(3, 5);
console.log("La suma es: " + result);
console.log("La suma es: " + sumar(8, 3));


//funcion flecha
const sumarFlecha=(num1, num2)=> num1+num2

console.log("Función flecha: La suma es: " + sumarFlecha(30, 5));

// Funcion expresada
const saludarExpresada = function(nombre) {
    return "Hola, " + nombre;
}

const mensaje = saludarExpresada("Rodrigo");
console.log(mensaje);

// Funcion flecha
const saludarFlecha = nombre => "Hola, " + nombre;

const msg = saludarFlecha("Funcion Flecha: Hola flecha");
console.log(msg);






