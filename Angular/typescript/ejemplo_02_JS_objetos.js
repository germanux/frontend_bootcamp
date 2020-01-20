var unObjeto = new Object();

// La instancia a una clase
// Un espacio en memoria con datos.
unObjeto.unaProp = "sdfsdf";
unObjeto.otraProp = new Object();
unObjeto.otraProp.prop_1 = 10;
unObjeto.otraProp.prop_2 = 20;
// Una función o método también es un objeto
unObjeto.toString = function() {
    return `1: ${this.unaProp} 2: ${this.otraProp.prop_1}`;
}
console.log(unObjeto.toString());

var otroObj = unObjeto;
// Modificamos el primer objeto
unObjeto.otraProp.prop_1 = "Ahora soy texto";
// Mostramos el segundo, que tiene los mismos que el primer objeto     
console.log(otroObj.toString());

function modificarObj(obj) {    // No recibimos el objeto, 
    // en realidad recibimos una referencia (dirección o puntero de memoria)
    // al objeto, por eso aquí podemos modificar el objeto originalo
    obj.otraProp.prop_2 = "Prop modificada";
}
modificarObj(otroObj);
console.log("Prop 2: " + otroObj.otraProp.prop_2);
