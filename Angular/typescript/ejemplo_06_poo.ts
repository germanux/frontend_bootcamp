interface PuedeComunicarse {
    comunicar(): void;
}
abstract class Animal implements PuedeComunicarse {
    private nombre: string; // siempre privados los campos (variables miembro)
    public abstract comunicar(): void;
};
class Perro extends Animal {
    private peso: number;   // Por costumbre, debemos hacer
    
    public comunicar(): void {
        this.ladrar();
        // return "GUAU!";
    }
    public ladrar(): void {
        let texto = "¡Dice GUAU!";  // Inferir: Deducir el tipo
        console.log(texto);
    }
};
class Ornitorrinco extends Animal {
    
    private longitud: number;
    public comunicar(): void {
        this.cuac();
    }

    public cuac() {
        console.log("Cuac cuac");
    }
}
class Maquina implements PuedeComunicarse {
    public comunicar(): void {
        this.mostrarEnConsola();
    }
    public mostrarEnConsola(): void {
        console.log("En consola digo 01010101");
    }
}
let miPerro : Perro = new Perro();
let tuPerro : Perro = new Perro();
let miOrni : Ornitorrinco = new Ornitorrinco();
let terminator : Maquina = new Maquina();

let animales: PuedeComunicarse[] = new Array();
// animales.push("Gato");
animales.push(miPerro);
animales.push(tuPerro);
animales.push(miOrni);
animales.push(terminator);

for (let i = 0; i < animales.length; i++) {
    let elAnimal = animales[i];
    elAnimal.comunicar();
}



