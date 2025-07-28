/*
Larissa só vai sair se não estiver chovendo OU ela tiver guarda chuva.

No dia da festa, Larissa olha pela janela e vê que está chovendo,
mas ela não possui guarda chuva.

Printe no console se Larissa irá sair pra festa.
*/

let estaChovendo = true;
let possuiGuardaChuva = false;

let vaiSair = !estaChovendo || possuiGuardaChuva;

console.log("Larissa vair sair?", vaiSair);