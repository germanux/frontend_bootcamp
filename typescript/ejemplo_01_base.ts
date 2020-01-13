let nombre="Fulanito";
// nombre = 10;

console.log(nombre);
class Persona {
    nombre: string; // << nombre variable>> : <<tipo de dato>>
    apellidos: string;
    edad: number;  
}
let persona : Persona = {     //  variable global
    "nombre": nombre,
    'apellidos': "De tal",
    edad: 33
}
function mostrarPersona(per: Persona): boolean {  // per es variable local a la función, como parámetro
    console.log(per.nombre + ", " + per.apellidos + " tiene " + per.edad + " años");
    return true;
}
mostrarPersona(persona);
// mostrarPersona(20);
// mostrarPersona("otra cosa");
