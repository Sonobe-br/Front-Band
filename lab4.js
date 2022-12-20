/* Método map() */

let numberEven = [1, 3, 5, 7, 9, 11];
let evenCalculation = numberEven.map(function(num) { 
    
    return num * 2;

});

Math.pow = (2, 2);
/* 
*
*
Soma Projeto 
*
*/
let areaComprimento = Math.round (2.90 + 4.20 + 5.07 + 4.70 + 4.70 + 2.10 + 2.00 + 2.10);
let areaLargura = Math.round (4.70 + 4.70 + 5.15);
/* console.log (areaComprimento);
console.log (areaLargura); */

let somaAreasLineares = (areaComprimento + areaLargura);
/* console.log (somaAreasLineares); */

let areaQuadrada = Math.round(areaComprimento * areaLargura);
/* console.log(areaQuadrada); */



/* dados da viagem Camburi 18/12 */
let pessoas = 5;
let combustivel = 100.00;
let pedagioIda = 4.90;
let pedagioVolta = 4.90;
let destino = "camburi";

/* dados do Daniel */
var pix = "dev.obe78@gmail.com";
email = pix;
let banco = "Safra";
let nomeFavorecido = "Daniel Sonobe Silveira";

/* função */
const somaCustos = Math.round(combustivel + pedagioIda + pedagioVolta);
console.log(somaCustos);
var divisaoCustos = Math.round(somaCustos / pessoas);
console.log(divisaoCustos);

if (destino == "camburi" && pessoas <= 5) {

    console.log(`O valor total da viagem, dividido ficou em R$ ${divisaoCustos} para cada um.`);
    console.log(`A chave do PIX é ${email} - Banco ${banco}.`);
    console.log(`Favorecido: ${nomeFavorecido}`);
    
} else {
    
    console.log("Limite de pessoas acima do permitido")

}