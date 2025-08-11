/* Faça um script que receba um valor para turno como M-
matutino ou V-Vespertino ou N-Noturno.
Imprima a mensagem 'Bom Dia!, Boa Tarde!' ou "Boa Noite!" ou "Valor Inválido!", conforme o caso. */

let turno = 'M'; //Pode ser 'M', 'V' ou 'N'

switch (turno.toUpperCase()) {
    case "M":
        console.log("Bom Dia!");
        break;
    case "V":
        console.log("Boa Tarde!");
        break;
    case "N":
        console.log("Boa Noite!");
        break;
    default:
        console.log("Valor Inválido!");
}