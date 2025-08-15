/* Você tem uma lista de alunas, e cada uma tem um nome e um sabor de sorvete favorito. 
Escreva um programa que percorra essa lista e imprima o nome e o sabor de sorvete favorito correspondente.

Exemplo: "Nome: Ana | Sabor favorito: Chocolate" */

const alunas = [
    { nome: "Ana", sabor: "Chocolate" },
    { nome: "Maria", sabor: "Morango" },
    { nome: "Carla", sabor: "Baunilha" },
    { nome: "Julia", sabor: "Limão" }
];

alunas.forEach(aluna => {
    console.log(`Nome: ${aluna.nome} | Sabor favorito: ${aluna.sabor}`);
});