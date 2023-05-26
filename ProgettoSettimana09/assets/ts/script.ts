interface Smartphone {
    credito: number;
    numeroChiamate: number;
    ricarica(ammount: number): void;
    chiamata(time: number): void;
    numero404(): number;
    getNumeroChiamate(): number;
    azzeraChiamate(): void
}

class Cellulare implements Smartphone {
    costoMinuto: number = 0.2;
    credito: number;
    numeroChiamate: number;
    constructor ( _credito, _numeroChiamate) {
        this.credito = _credito;
        this.numeroChiamate = _numeroChiamate;
    }
    ricarica(ammount: number): void {
        this.credito += ammount;
    };
    chiamata(time: number): void {
        this.credito -= time * this.costoMinuto;
    };
    numero404(): number {
        return this.credito}; 
    getNumeroChiamate(): number {
        return this.numeroChiamate++;
    };
    azzeraChiamate(): void {
        this.numeroChiamate = 0;
    }
}


console.log ('Dati utente 1')
let mario = new Cellulare (20,2);

console.log (`Credito iniziale: ${mario.numero404()}$`);
mario.ricarica(50);
mario.chiamata(30);
mario.ricarica(20);
mario.chiamata(50);
console.log (`Credito residuo: ${mario.numero404()}$`);
console.log (`Numero totale di chiamate: ${mario.getNumeroChiamate()}`);
mario.azzeraChiamate();
console.log (`Numero di chiamate riportate a ${mario.getNumeroChiamate()}`);

console.log ('---------------------------------------------------------');
console.log ('Dati utente 2')
let giacomo = new Cellulare (40,2);

console.log (`Credito iniziale: ${giacomo.numero404()}$`);
giacomo.ricarica(10);
giacomo.chiamata(20);
giacomo.ricarica(20);
giacomo.chiamata(70);
console.log (`Credito residuo: ${giacomo.numero404()}$`);
console.log (`Numero totale di chiamate: ${giacomo.getNumeroChiamate()}`);
giacomo.azzeraChiamate();
console.log (`Numero di chiamate riportate a ${giacomo.getNumeroChiamate()}`);

console.log ('---------------------------------------------------------');
console.log ('Dati utente 3')
let serena = new Cellulare (10,2);

console.log (`Credito iniziale: ${serena.numero404()}$`);
serena.ricarica(100);
serena.chiamata(300);
serena.ricarica(20);
serena.chiamata(5);
console.log (`Credito residuo: ${serena.numero404()}$`);
console.log (`Numero totale di chiamate: ${serena.getNumeroChiamate()}`);
serena.azzeraChiamate();
console.log (`Numero di chiamate riportate a ${serena.getNumeroChiamate()}`);


