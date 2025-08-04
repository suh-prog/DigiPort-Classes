/* Dado um tipo de cliente, aplique um desconto correspondente em uma loja */

const tipoCliente = "Ouro";

switch (tipoCliente) {
    case "Bronze":
        console.log("Desconto de 5%");
        break;
    case "Prata":
        console.log("Desconto de 10%");
        break;
    case "Ouro":
        console.log("Desconto de 15%");
        break;
    case "Patina":
        console.log("Desconto de 20%");
        break;
    default:
        console.log("Tipo de Cliente inválido!");
}