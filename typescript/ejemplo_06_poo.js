var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
;
var Perro = /** @class */ (function (_super) {
    __extends(Perro, _super);
    function Perro() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Perro.prototype.comunicar = function () {
        this.ladrar();
        // return "GUAU!";
    };
    Perro.prototype.ladrar = function () {
        var texto = "¡Dice GUAU!"; // Inferir: Deducir el tipo
        console.log(texto);
    };
    return Perro;
}(Animal));
;
var Ornitorrinco = /** @class */ (function (_super) {
    __extends(Ornitorrinco, _super);
    function Ornitorrinco() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ornitorrinco.prototype.comunicar = function () {
        this.cuac();
    };
    Ornitorrinco.prototype.cuac = function () {
        console.log("Cuac cuac");
    };
    return Ornitorrinco;
}(Animal));
var Maquina = /** @class */ (function () {
    function Maquina() {
    }
    Maquina.prototype.comunicar = function () {
        this.mostrarEnConsola();
    };
    Maquina.prototype.mostrarEnConsola = function () {
        console.log("En consola digo 01010101");
    };
    return Maquina;
}());
var miPerro = new Perro();
var tuPerro = new Perro();
var miOrni = new Ornitorrinco();
var terminator = new Maquina();
var animales = new Array();
// animales.push("Gato");
animales.push(miPerro);
animales.push(tuPerro);
animales.push(miOrni);
animales.push(terminator);
for (var i = 0; i < animales.length; i++) {
    var elAnimal = animales[i];
    elAnimal.comunicar();
}
