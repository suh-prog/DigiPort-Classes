//Inserir numeros até que numero inserido seja negativo. Retorne a soma de todos os numeros inseridos.

const prompt = require('prompt-sync')();

let soma = 0;
let numero = 0;

while(true) {
    numero = Number(prompt("Insira um número: "));

    if(numero < 0){
        break; //sai do loop se o numero for negativo
    }

    soma += numero;
}

console.log("A soma dos números inseridos é:", soma);
