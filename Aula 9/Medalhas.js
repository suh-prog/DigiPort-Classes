/* Ana quer saber qual medalha irá ganhar numa competição:
> Se terminar em menos de 1 min., ganhará uma medalha de ouro;
> Se terminar entre 1 min. e 2 min. (inclusive), ganhará uma medalha de prata;
> Se demorar mais de 2 min., receberá uma medalha de bronze. */

const tempo = 1;

if (tempo < 1) {
    console.log("Ana arrasou e levou medalha de Ouro!");
  } else if ( tempo <= 2) {
    console.log("Ana foi muito bem e ganhou a medalha de Prata!");
  } else {
    console.log("Ana leva medalha de Bronze!");
  }