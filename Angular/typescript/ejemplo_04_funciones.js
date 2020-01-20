// En JS podemos programar Orientado a Objetos
// O programar con funciones: Programación funcional o mezcla
function suma(x, y) {
    return x + y;
}
let multiplica = function(x, y) {
    return x * y;
}
let divide = (x, y) => {    // La diferencia de las lambdas 
    // (también llamas funciones flecha o funciones anónimas) 
    // es con la palabra this
    return x / y;
}
let resta = (x, y)  => x - y;
let restoDiv = new Function("x", "y", "return x % y");

console.log("suma = " + suma(3, 5));
console.log("multiplica = " + multiplica(3, 5));
let operacion = restoDiv;

console.log("operacion = " + operacion(8, 3));
