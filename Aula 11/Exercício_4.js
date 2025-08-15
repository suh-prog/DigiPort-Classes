// Vc tem uma caixa com 10 frutas. Cada fruta pode ser vermelha ou verde. Pergunte a cor de cada fruta e conte quantas sao vermelhas e quantas sao verdes.

const prompt = require('prompt-sync')();

let vermelho = 0;
let verde = 0;

for (let i = 1; i <= 10; i++) {
    let cor = prompt(`Digite a cor da fruta ${i} (vermelho/verde): `).toLowerCase();

    if (cor == "vermelho") {
        vermelho++;
    } else if (cor == "verde") {
        verde++;
    } else {
        console.log("Cor inválida! Conte como nenhuma.");
    }
}

console.log(`Total de frutas vermelhas: ${vermelho}`);
console.log(`Total de frutas verdes: ${verde}`);
