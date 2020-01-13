let operacion = "multiplicar";     // harcodeamos la entrada del usuario

function suma(x, y) {   return x + y;   }
let multiplica = function(x, y) { return x * y; }
let divide = (x, y) => { return x / y; }

function operar(x, y, nombreOperacion) {
    switch (nombreOperacion) {
        case "sumar":    return suma(x, y);  break;
        case "multiplicar":    return multiplica(x, y);  break;
        case "dividir":    return divide(x, y);  break;
    }
}
console.log("Operacion = " + operar(15, 3, operacion));

function operarCallBack(x, y, funcionCallBack) {  // Función callback o de retrollamada
    console.log("Invocando a un servidor");
    console.log("O modificando el DOM");
    return funcionCallBack(x, y);
}

console.log("Operacion con CllBk = " + operarCallBack(15, 3, divide));    

