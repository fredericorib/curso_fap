/*Estrutura de decisão - SWITCH*/

var pergunta = require("readline-sync");

/*Verifique o dia da semana com base em um numero de 1 a 7:*/

var diaSemana = pergunta.questionInt("Informe o dia da semana usando númerosde 1-7 de acordo com as opçoes:\n1-Domingo 2-Segunda 3-terça 4-quarta 5-quinta 6-sexta 7-sabado\n")

switch (diaSemana){
    case 1:
        console.log("Hoje é domingo")
        break
    case 2:
        console.log("Hoje é segunda")
        break
    case 3:
        console.log("Hoje é terça")
        break
    case 4:
        console.log("Hoje é quarta")
        break
    case 5:
        console.log("Hoje é quinta")
        break
    case 6:
        console.log("Hoje é sexta")
        break
    case 7:
        console.log("Hoje é sabado")
        break
    default:
        console.log("Você informou um valor errado, responda com os números de 1 a 7")
        break
}

/*Converta um número de mês em seu nome correspondente*/
var nome_mes = 0

switch (nome_mes){
    case 1:
        console.log("Estamosno em janeiro")
        break
    case 2:
        console.log("Estamosno em fevereiro")
        break
    case 3:
        console.log("Estamosno em março")
        break
    case 4:
        console.log("Estamosno em abril")
        break
    case 5:
        console.log("Estamosno em maio")
        break
    case 6:
        console.log("Estamosno em junho")
        break
    case 7:
        console.log("Estamosno em julho")
        break
    case 8:
        console.log("Estamosno em agosto")
        break
    case 9:
        console.log("Estamosno em satembro")
        break
    case 10:
        console.log("Estamosno em outubro")
        break
    case 11:
        console.log("Estamosno em novembro")
        break
    case 12:
        console.log("Estamosno em dezembro")
        break
    default:
        console.log("Valor errado informado!\nPor favor informar um número de 1-12")
        break
}

/*Exiba uma msg de acordo com o estado civil: "solteiro", "casado", "divorciado", ou "outro"*/
var estadoCivil = "casado"

switch (estadoCivil){
    case "solteiro":
        console.log("Estado civil informado: SOLTEIRO")
        break
    case "casado":
        console.log("Estado civil informado: CASADO")
        break
    case "divorciado":
        console.log("Estado civil informado: DIVORCIADO")
        break
    case "outro":
        console.log("Estado civil informado: OUTRO")
        break
    default:
        console.log("Valor errado foi informado!\nInforme solteiro, casado, divorciado, ou outro")
        break
}

/* Exiba uma msg dependendo do tipo de animal: cachorro, gato, passaro, outro*/
var animal = "gadto"

switch (animal){
    case "cachorro":
        console.log("Animal escolhido: CACHORRO")
        break
    case "gato":
        console.log("Animal escolhido: GATO")
        break
    case "passaro":
        console.log("Animal escolhido: PASSARO")
        break
    case "outro":
        console.log("Animal escolhido: OUTRO")
        break
    default:
        console.log("Valor errado informado!\nPor favor informar um número de animal")
        break
}

/* Calcule o valor de uma operação matematica com base em um operador: soma, subtração, multiplicação, divisão*/
var num1 = pergunta.questionInt("Informa o primeiro número: ")
var num2 = pergunta.questionInt("Informe o segundo número: ")
var operacao = pergunta.questionInt("Informe um operador usando os números 1-4 de acordo com as opções a seguir:\n 1-soma 2-subtração 3-multiplicação 4-divisão\n")

switch (operacao){
    case 1:
        console.log(`Resultado da soma de ${num1} e ${num2}: `, num1 + num2)
        break
    case 2:
        console.log(`Resultado da subtração de ${num1} e ${num2}: `, num1 - num2)
        break
    case 3:
        console.log(`Resultado da multiplicação de ${num1} e ${num2}: `, num1 * num2)
        break
    case 4:
        console.log(`Resultado da divisão de ${num1} e ${num2}: `, num1 / num2)
        break
    default:
        console.log(`O valor informado, ${operacao}, não condis com nenhuma operação disponivel.\nInforme um valor de 1-4 para definir a operação matemática: `)
        break
}