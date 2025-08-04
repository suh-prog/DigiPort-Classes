/* Dado um número de 1 a 4, indique qual estação do ano corresponde:
1: Primavera
2: Verão
3: Outono
4: Inverno */

const estacao = 2;

switch (estacao) {
    case 1:
        console.log("Primavera");
        break;
    case 2:
        console.log("Verão");
        break;
    case 3:
        console.log("Outono");
        break;
    case 4:
        console.log("Inverno");
        break;
    default:
        console.log("Estacao inválida");
}
