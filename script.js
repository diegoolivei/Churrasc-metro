let qtdAdultos = document.getElementById("adultosBtn")
let qtdCriancas = document.getElementById("criancasBtn")
let qtdDuracao = document.getElementById("duracaoBtn")
let resultado = document.getElementById("resultado")

function calculando(){

 let adultos = qtdAdultos.value   
 let crianças = qtdCriancas.value
 let duracao = qtdDuracao.value

 let qtdTotalpaodealho = paodealho(duracao) * adultos + paodealho(duracao) /2 * crianças
 let qtdTotalCarne = carnePP(duracao) * adultos + carnePP(duracao) /2 * crianças
 let qtdTotalCerveja = cervejaPP(duracao) * adultos
 let qtdTotalbebidas = bebidasPP(duracao) * adultos + bebidasPP(duracao) /2 * crianças

 resultado.innerHTML = `<p>${qtdTotalCarne/1000}  Kg de Carne </p>`
 resultado.innerHTML += `<p>${qtdTotalpaodealho}  Und de Pão de Alho </p>`
 resultado.innerHTML += `<p>${qtdTotalCerveja/1000} L de Cerveja </p>`
 resultado.innerHTML += `<p>${qtdTotalbebidas/1000}  L de Bebidas </p>`
 
}


function carnePP(duracao){
    if(duracao >= 6) {
        return 650;
    } else{
        return 400;
    }
}

function paodealho(duracao){
    if(duracao >= 6) {
        return 2;
    } else{
        return 1;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6) {
        return 2000;
    } else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if(duracao >= 6) {
        return 1500;
    } else{
        return 1000;
    }
}