let tema_1 = {
    "nombre": "Cultura",
    descripcion: "Cosas interesantes",
    'getTexto': function() {
        return `Tema: ${this.nombre} - ${this.descripcion}`;
    },
    "getMayusculas": new Function("return this.getTexto().toUpperCase();")
};
let tema_2 = new Object();
tema_2.nombre = "Deportes";
tema_2.descripcion = "Movidas deportivas";
tema_2.getTexto = tema_1.getTexto;  // Chapuza que ilustra que los métodos son
                                    // variables de tipo referencia a un objeto
                                    // de tipo función

console.log(tema_1.getTexto());
console.log(tema_1.getMayusculas());
console.log(tema_2.getTexto());
console.log(tema_1.nombre + " en forma punto");
console.log(tema_1["descripcion"] + " en forma mapa");
// es decir, los objetos en javascript se pueden acceder como a un diccionario
// Las funciones al ser objetos, también
tema_2['getMayusculas'] = tema_1['getMayusculas'];  
console.log(tema_2['getMayusculas']());

let tema_3 = ["Política"];
tema_3.nombre = tema_3[0];  // No es buena práctica, un array se debe usar como 
                            // un array, peeeero como es un objeto...
console.log(tema_3.nombre);
