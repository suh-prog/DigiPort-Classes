/* Dada uma letra representando uma nota, indique a classificação correspondente:
A: Excelente
B: Bom
C: Regular
D: Ruim
E: Insuficiente
*/

const nota = "B";

switch (nota) {
    case "A":
        console.log("Excelente");
        break;
    case "B":
        console.log("Bom");
        break;
    case "C":
        console.log("Regular");
        break;
    case "D":
        console.log("Ruim");
        break;
    case "E":
        console.log("Insuficiente");
        break;
    default:
        console.log("Nota inválida!");
}
