//Front-End : Sessão onde o usuário faz o preenchimento dos dados 
let carga1 = 50;
let carga2 = 275;
let carga3 = 9950;

let cargaMaxima = 5000;
let cargaMinima = 1000;

let frota1 = 'oito eixos';
let frota2 = 'doze eixos';-

//Back-End
let cargaSomada = carga1 + carga2 + carga3;

let mediaDasCargas = (cargaSomada) / 2;

const cargaEstruturada = () => {

    cargaResultante = mediaDasCargas;
    /* console.log(cargaResultante); */ 
    return cargaResultante;

}
cargaEstruturada();

if (cargaResultante >= cargaMaxima) {
    
    console.log(`Carga máxima com volume de ${mediaDasCargas}kg. Recalcule a sua carga para a frota de ${frota1}.`)
    
} else {
    
    console.log(`Carga minima com volume de ${mediaDasCargas}kg. Recalcule a sua carga para a frota de ${frota2}.`)
    
}


const produtosIndustriais = [ 'Pote Verde', 'Pote Amarelo', 'Pote Azul', 'Pote Branco', 'Pote Rosa', 'Pote Cinza', 'Pote Roxo', 'Pote Grande', 'POte Médio'];

console.log(produtosIndustriais.map(produtoIndustrial => produtoIndustrial.length));
