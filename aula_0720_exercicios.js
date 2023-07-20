var minhaVar;
minhaVar = 10;

var soma = 15+8;
soma++;
soma*=3;
console.log("O valor da variável soma até agora é", soma);

var fazSol = true;
console.log(fazSol);

var comida = ["arroz", "feijão", "ovo"];
console.log(comida[1]);

console.log(soma === minhaVar);
console.log(minhaVar<=soma);

function divisao(num1,num2){
    return num1/num2;
}
console.log(divisao(10,2))

var num3 = 43245
if (num3 > 0){
    console.log(true);
}

if (num3%2 == 0){
    console.log(`O ${num3} é par`);
}

string_vazia = ""
if (string_vazia == ""){
    console.log(`A string é vazia`);
}

if (num3 > 10){
    console.log(`${num3} é maior que 10`)
}
var3 = true 
if (typeof var3 == "boolean"){
    console.log("A variável é boleana");
}

/*if else */
var num3 = -43245
if (num3 > 0){
    console.log(`O número ${num3} é POSITIVO`);
} else {
    console.log(`ERROR: O número ${num3} não é POSITIVO`);
}

if (num3%2 == 0){
    console.log(`O número ${num3} é PAR`);
} else {
    console.log(`O número ${num3} é IMPAR`);
}

string_vazia = "dgfdg"
if (string_vazia == ""){
    console.log(`A string é vazia`);
} else{
    console.log(`A string não é vazia, seu conteúdo é ${string_vazia}`);
}

if (num3 > 10){
    console.log(`${num3} é maior que 10`)
} else{
    console.log(num3 *= 2)
}

var3 = 21 
if (typeof var3 == "boolean"){
    console.log("A variável é boleana");
} else{
    var3 = true
    console.log("A variável não era booleana, por isso foi modificada para True")
}