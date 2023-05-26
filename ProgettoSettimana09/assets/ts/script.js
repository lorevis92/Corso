var Cellulare = /** @class */ (function () {
    function Cellulare(_credito, _numeroChiamate) {
        this.costoMinuto = 0.2;
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    Cellulare.prototype.ricarica = function (ammount) {
        this.credito += ammount;
    };
    ;
    Cellulare.prototype.chiamata = function (time) {
        this.credito -= time * this.costoMinuto;
    };
    ;
    Cellulare.prototype.numero404 = function () {
        return this.credito;
    };
    ;
    Cellulare.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate++;
    };
    ;
    Cellulare.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return Cellulare;
}());
console.log('Dati utente 1');
var mario = new Cellulare(20, 2);
console.log("Credito iniziale: ".concat(mario.numero404(), "$"));
mario.ricarica(50);
mario.chiamata(30);
mario.ricarica(20);
mario.chiamata(50);
console.log("Credito residuo: ".concat(mario.numero404(), "$"));
console.log("Numero totale di chiamate: ".concat(mario.getNumeroChiamate()));
mario.azzeraChiamate();
console.log("Numero di chiamate riportate a ".concat(mario.getNumeroChiamate()));
console.log('---------------------------------------------------------');
console.log('Dati utente 2');
var giacomo = new Cellulare(40, 2);
console.log("Credito iniziale: ".concat(giacomo.numero404(), "$"));
giacomo.ricarica(10);
giacomo.chiamata(20);
giacomo.ricarica(20);
giacomo.chiamata(70);
console.log("Credito residuo: ".concat(giacomo.numero404(), "$"));
console.log("Numero totale di chiamate: ".concat(giacomo.getNumeroChiamate()));
giacomo.azzeraChiamate();
console.log("Numero di chiamate riportate a ".concat(giacomo.getNumeroChiamate()));
console.log('---------------------------------------------------------');
console.log('Dati utente 3');
var serena = new Cellulare(10, 2);
console.log("Credito iniziale: ".concat(serena.numero404(), "$"));
serena.ricarica(100);
serena.chiamata(300);
serena.ricarica(20);
serena.chiamata(5);
console.log("Credito residuo: ".concat(serena.numero404(), "$"));
console.log("Numero totale di chiamate: ".concat(serena.getNumeroChiamate()));
serena.azzeraChiamate();
console.log("Numero di chiamate riportate a ".concat(serena.getNumeroChiamate()));
