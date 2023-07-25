 
function get_random (deck) {
    return deck[Math.floor((Math.random()*deck.length))];
}

var deck = [1,2,3,4,5,6,7,8,9,10,10,10,10,11]
var carta1 = get_random(deck)
var carta2 = get_random(deck)
var cartasJogador
//var soma = carta1 + carta2
var soma

var cartaBanco1 = get_random(deck)
var cartaBanco2 = get_random(deck)
var cartaBanco3 = get_random(deck)
var cartaBanco4 = get_random(deck)
var cartasBanco
//var somaBanco = cartaBanco1 + cartaBanco2 + cartaBanco3 + cartaBanco4
var somaBanco
var jogada=true

while (jogada=true) {
    soma+=get_random(deck);
    somaBanco+=get_random(deck);
    console.log("antes if")
    if (soma > 21) {
        console.log("dentro if")
        console.log(`O jogador PERDEU!!!\nA soma de pontos foi igual a ${soma} e a do banco igual a ${somaBanco}`);
        jogada = false;
    } else if (somaBanco > 21) {
        console.log("dentro else")
        console.log(`A banca PERDEU!!!\nA soma de pontos do banco foi igual a ${somaBanco} e a soma do jogador foi igual a ${somaBanco}`);
        jogada = false;
    }
}
