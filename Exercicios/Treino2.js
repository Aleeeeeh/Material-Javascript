//Entre com um ano e verifque se é ano bissexto, retorne true ou false
console.log('---EX11----')
function cal_bissexto(ano){
    if(ano < 0){
        return false
    } else if (ano % 4 == 0){
        return true
    } else if(ano % 100 == 0){
        return false
    } else if(ano % 400 == 0){
        return true
    } else {
        return false
    }
}

console.log(cal_bissexto(2025))
console.log(cal_bissexto(2020))

//CALCULE O FATORIAL DE UM NÚMERO
console.log('---EX12----')
function fatorial(number){
    var fatorial = 1 
    var cont = 1

    while(cont <= number){
        fatorial = fatorial * cont
        cont ++
    }
    return fatorial
}

console.log(fatorial(6))
console.log(fatorial(5))

//Programa para verificar se o dia digitado é um dia util
console.log('---EX13---')

function ver_dia(dia){

    switch(dia){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            return 'Dia útil'
            break
        case 1:
        case 7:
            return 'Fim de semana'
            break
        default:
            'Dia inválido'
    }
}

console.log(ver_dia(5))

//Receba Strings com nome de fruta e usando a estrutura switch retorne no console se tem ou não
console.log('---EX14---')
function verifica(fruta){
    switch(fruta){
        case 'maça':
            return 'Não vendemos essa fruta aqui'
            break
        case 'kiwi':
            return 'Estamos com escassez de kiwis'
            break
        case 'melancia':
            return 'Aqui está, são três reais o quilo'
            break
        default:
            return 'Não temos essa fruta aqui'
    }
}

console.log(verifica('melancia'))

//Verifique o modelo do carro, e retorne resposta conforme o pedido
console.log('---EX15---')
function revenda(carro){
    switch(carro){
        case 'hatch':
            return 'Compra efetuada com sucesso'
            break
        case 'sedan':
        case 'motocicleta':
        case 'caminhonete':
            return 'Tem certeza que não prefere esse modelo?'
            break
        default:
            return 'Não trabalhamos com esse tipo de automóvel aqui'

    }
}

console.log(revenda('hatch'))
console.log(revenda('sedan'))

//Receba dois números e o sinal de operação e exiba o resultado da operação no console, senão default com op.inválidas
console.log('---EX16---')
function calculadora(num, num2,sinal){
    switch(num, num2, sinal){
        case '+':
            return num + num2
            break
        case '-':
            return num - num2
            break
        case '/':
            return num / num2
            break
        default:
            return 'Operação inválida'
    }
}

console.log(calculadora(10,10, '+'))

//Receba um plano de trabalho e retorne quanto de aumento irá ter 
console.log('---EX17---')
function plano(salario,plano){
    switch(salario,plano){
        case 'a':
            return salario * (10/100) + salario
            break
        case 'b':
            return salario * (15/100) + salario
            break
        case 'c':
            return salario * (20/100) + salario
            break
            default:
                return 'Plano inválido'
    }
}

console.log('R$' + plano(1000,'a'))