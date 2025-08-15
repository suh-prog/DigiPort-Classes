/* Crie um programa que apresenta um menu de opções ao usuário. Ele pode escolher entre diferentes operações, como verificar saldo, depositar, sacar ou sair do sistema. 
Defina o saldo inicial como R$ 1000,00
O loop while mantém o menu ativo até que o usuário escolha a opção de sair.. */


const prompt = require("prompt-sync")();

let saldo = 1000;
let opcao = '0';

while (opcao !== '4') {
    console.log("\n======MENU======");
    console.log("1 - Verificar Saldo");
    console.log("2 - Depositar");
    console.log("3 - Sacar");
    console.log("4 - Sair");

    opcao = prompt("Escolha uma opção: ");

    switch(opcao){
        case '1':
            console.log(`Seu saldo atual é: R$${saldo.toFixed(2)}`);
            break;

        case '2':
            console.log("Depositando dinheiro.");
            break;

        case '3':
            console.log("Transferindo para área de Saque");
            break;

        case '4':
            console.log("Saindo do Sistema... Até mais!");
            break;

        default:
            console.log("Opção inválida! Tente novamente.");
    }
}