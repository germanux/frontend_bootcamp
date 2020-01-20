let operacion = "multiplicar";     // harcodeamos la entrada del usuario

function suma(x, y) {   return x + y;   }
let multiplica = function(x, y) { return x * y; }
let divide = (x, y) => { return x / y; }

let arrayA = [2, 10, 100];
let arrayB = [2, 20, 20];

function operarArrays(arrA, arrB, funCllBk) {
    console.log("Empezando a calcular");
    if (arrA.length === arrB.length) {
        let arrC = new Array();
        for (let i = 0; i < arrA.length; i++)
        {
            arrC[i]   = funCllBk(arrA[i], arrB[i]);
            // arrC.push(funCllBk(arrA[i], arrB[i]));
        }
        return arrC;
    }
    // undefined si los arrays no coinciden
}

let resultado = operarArrays(arrayA, arrayB, divide);

console.log("Posicion = " + resultado.toString());

