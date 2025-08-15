// Voce recebeu 10 numeros pra analisar. Conte quantos são positivos, negativos e zeros.

const prompt = require('prompt-sync')();

let positivos = 0;
let negativos = 0;
let zeros = 0;

for (let i = 1; i <= 10; i++) {
    let numero = Number(prompt(`Digite o ${i}º número: `));

    if (numero > 0) {
        positivos++;
    } else if (numero < 0) {
        negativos++;
    } else {
        zeros++;
    }
}

console.log(`Positivos: ${positivos}`);
console.log(`Negativos: ${negativos}`);
console.log(`Zeros: ${zeros}`);
