//Um programa que leia um número de 0 a 10, e mostre por extenso no console, default número fora do intervalo

function interval(number){
    switch(number){
        case 0:
            return 'Zero'
            break
        case 1:
            return 'Um'
            break
        case 2:
            return 'Dois'
            break
        case 3:
            return 'Três'
            break
        case 4:
            return 'Quatro'
            break
        case 5:
            return 'Cinco'
            break
        case 6:
            return 'Seis'
            break
        case 7:
            return 'Sete'
            break
        case 8:
            return 'Oito'
            break
        case 9:
            return 'Nove'
            break
        case 10:
            return 'Dez'
            break
            default:
                return 'Número fora do intervalo'
    }
}

console.log(interval(0))
console.log(interval(10))
console.log(interval(5))

//Receba o código do produto, a quantidade  e calcule o valor a ser pago por tal lanche
console.log('---EX19---')

function account(cod, qtd){
    switch(cod){
        case 100:
            return 'Cachorro quente: '+ (qtd * 3.0) + 'R$'
        case 200:
            return qtd * 4.0
        case 300:
            return qtd * 5.5
        case 400:
            return qtd * 7.5
        case 500:
            return 'Refrigerante: ' + (qtd * 3.5) + 'R$' 
        case 600:
            return qtd * 2.8
        default:
            return 'Não temos esse produto'
    }
}

console.log(account(500,2))

//Receba um valor em reais, e retorne as cédulas que irá compor aquele valor
console.log('---EX20---')


//Verifique as idades e retorne o valor segundo o plano de saúde
console.log('---EX21---')

function plano_saude(idade){

    if(idade <= 10){
        console.log('Total: ' + (100 + 80))
    } else if(idade > 10 && idade <= 30){
        console.log('Total: ' + (100 + 50))
    } else if (idade > 30 && idade <= 60){
        console.log('Total: ' + (100 + 95))
    } else if(idade > 60){
        console.log('Total: ' + (100 + 130))
    }
}

plano_saude(62)

//Função para calcular valor a ser pago de anuidade a uma associação
console.log('---EX22---')

function calcularValor(mes, valor){
    if(mes > 0 && mes < 13) {
        atraso = mes - 1
        return (valor * ((1 + (5/100))**atraso)).toFixed(2)
    } else {
        return 'Mês inválido.'
    }
}

console.log(calcularValor(4, 100))

//Calcule a média ponderada de um aluno, retorne o código e a nota calculada, mostrando se foi ou não aprovado
console.log('---EX23---')

//Imprimir 11 vezes Hello world usando a estrutura de repetição while
console.log('---EX24---')

function rep(){
    var cont = 1

    while(cont < 12){
       console.log(cont + ' - Hello World') 
       cont ++
    }
}

rep()

//Exibir números de 1 à 50 na tela
console.log('---EX25---')

function exiba(){

    let number = 1

    while(number < 51){
        console.log(number)
        number++
    }
}

exiba()

//Exiba na tela todos números pares
console.log('---EX26---')

function even_number(){

    for(let i = 1; i <= 100; i++){
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

console.log('Todos os números pares da sentença: ')
even_number()