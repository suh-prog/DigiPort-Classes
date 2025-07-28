/*
Luiz Otavio Miranda tem 30 anos, pesa 84 kg
tem 1.8 de altura e seu IMC é de
25.925925925925924
luiz miranda nasceu em 1995
*/

const nome = 'Luiz Otavio Miranda';
const idade = 30;
const peso = 84;
const altura = 1.8;

let anoAtual = 2025;
let imc = peso / (altura * altura);
let anoNascimento = anoAtual - idade;

console.log(`${nome} tem ${idade} anos, pesa ${peso} kg`);
console.log(`tem ${altura} de altura e seu IMC é de`);
console.log(imc);
console.log(`${nome.split(' ')[0].toLowerCase()} ${nome.split(' ')[2].toLowerCase()} nasceu em ${anoNascimento}`);

