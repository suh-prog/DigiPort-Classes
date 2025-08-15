//Crie um código que valide a senha de um usuário.

/* Para isso, crie uma variável (correctPassword) com o valor "1234".
Depois, faça um loop que irá solicitar a senha pro usuário, até que ele digite a senha correta.
Quando isso acontecer, imprima a mensagem: "Senha correta! Acesso concedido" */

const prompt = require("prompt-sync")();

const correctPassword = '1234';
let password = "";

while (password !== correctPassword) {
    password = prompt("Digite a senha correta: ")
}

console.log("Senha correta! Acesso concedido.")
