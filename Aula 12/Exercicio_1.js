//Criar um array com 5 números diferentes e imprimir todos.
let numeros = [10, 20, 30, 40, 50];

console.log("Imprimir os números do array:")
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}


//Calcular a soma e a média dos elementos de um array.
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

let media = soma / numeros.length;

console.log("\nA soma do array é:", soma); 
console.log("A média do array é:", media); 

//Encontrar os números maior e menor de um array.
let maior = numeros[0];
let menor = numeros[0];

for (let i = 1; i < numeros.length; i++) {
  if (numeros[i] > maior) maior = numeros[i];
  if (numeros[i] < menor) menor = numeros[i];
}

console.log("\nO maior número do array é:", maior);
console.log("O menor número do array é:", menor);

//Criar array com for 
let arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(i + 1); // Adiciona os números de 1 a 5 no novo array
}

console.log(`\nO novo array contém os seguintes números: ${arr}`); // [1, 2, 3, 4, 5]