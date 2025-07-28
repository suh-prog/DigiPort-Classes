/*
Fernanda quer comprar uma jaqueta de R$200,00.
A loja está oferecendo 10% de desconto

Qual será o valor final a pagar?
*/

const jaqueta = 200;
let desconto = 0.1;

valorFinal = 200 * (1 - desconto);

console.log(`O preço final da jaqueta será de R$${valorFinal.toFixed(2)}`);

