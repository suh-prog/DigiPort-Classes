/*Rafaela está recheando 10 donuts. Os donuts de número:

> múltiplo de 3 recebem recheio de chocolate
> os outros recebem baunilha. 

Use um for com if/else para mostrar o tipo de recheio de cada donut. */

const num = 10

for (let i = 0; i < 10; i++) {
    if (i%3 === 0){
        console.log (`Recheio do donut número ${i} é chocolate`)
    }
    else {
        console.log (`Recheio do donut número ${i} é baunilha`)
    }
}

console.log("\n")