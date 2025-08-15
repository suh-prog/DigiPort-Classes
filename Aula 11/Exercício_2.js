//Joao esta colheu maçãs durante 7 dias. Imprima quantas maçãs Joao colheu

const prompt = require('prompt-sync')();

for (let i = 1; i <= 7; i++) {
    let numero = prompt("Quantas maçãs João colheu no dia " + i + "? ");
    console.log("No dia", i, "João colheu", numero, "maçãs");
}

