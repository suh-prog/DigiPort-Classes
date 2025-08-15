/* Júlia montou uma lanchonete virtual. Os clientes podem escolher entre:

1 - Ver o cardápio
2 - Fazer um pedido
3 - Falar com um atendente
4 - Sair

Simule esse menu usando um while, e só encerre o programa quando a opção 4 (Sair) for escolhida. 

Dentro do while, use um switch para tratar as opções. */

let opcao = '0';
const prompt = require("prompt-sync")();

while (opcao != '4'){
    console.log("\n=====MENU=====");
    console.log("1 - Ver cardário");
    console.log("2 - Fazer pedido");
    console.log("3 - Falar com um atendente");
    console.log ("4 - Sair");
    
    opcao = prompt("Escolha uma opcao: ");
   
    switch (opcao){
        case '1':
            console.log("Mostrar cardápio");
            break;
        
        case '2':
            console.log("Faça seu pedido:");
            break;
        
        case '3':
            console.log("Um atendente esta vindo atender você!");
            break;
        
        case '4':
            console.log("Obrigado! Volte sempre!");
            break;
        
        default:
            console.log("Opção inválida! Tente novamente.");
    }
}