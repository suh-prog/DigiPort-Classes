/* Carlos possui um saldo em sua conta. Se ele tiver R$ 10.000,00 ou mais, decidirá comprar um novo computador.
Se o saldo for entre R$ 3.000,00 e R$ 9.999,00, ele comprará um smartphone.
Se o saldo for inferior a R$ 3.000,00, ele decidirá economizar */

const saldo = 3500

if (saldo >= 10000) {
    console.log("Vou comprar um computador!");
  } else if ( saldo >= 3000) {
    console.log("Vou comprar um smartphone!");
  } else {
    console.log("Tenho que economizar!");
  }