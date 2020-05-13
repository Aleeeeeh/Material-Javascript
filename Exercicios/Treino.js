//receba um valor 0.300000 e retorne R$0,30

const real = (valor) =>{
    console.log(`R$ ${valor.toFixed(2)}`)
}

real(0.30000)

//Função que retorne um montante, uma função para cálcula de juros simples o outra para composto
console.log('----Ex6-------')
function simples(c,i,n){
    const montante = c * Math.pow((1 + i),n)
    return montante.toFixed(5)
    
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(simples(50.000,0.12,2))
console.log(jurosCompostos(50.000,0.12,2))

//Equação do segundo grau com Bhaskara
console.log('----Ex7---')

function bhaskara(ax2, bx, c){
    let resultado = []

    let delta = (bx ** 2) - (4 * ax2 * c)

    if(delta < 0){
        return 'Resultado de Delta é negativo, sem possibilidades de continuidade'
    }

    let x1 = (-bx + Math.sqrt(delta)) / 2 * ax2
    let x2 = (-bx - Math.sqrt(delta)) / 2 * ax2

    resultado.push(x1)
    resultado.push(x2)

    return resultado
}

console.log('Resultado: ' + bhaskara(1,12,-13))

console.log('-----EX8------')

let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 avaliacao = (stringPontuacoes) => {
    let pontuacoes = stringPontuacoes.split(', ')
    let Record = 0
    let piorJogo = 1
    let maiorPontuacao = pontuacoes[0]
    let menorPontuacao = pontuacoes[0]

    for(i = 1; i < pontuacoes.length; i++){
        if(pontuacoes[i] > maiorPontuacao){
            maiorPontuacao = pontuacoes[i]
            Record++
        }else if(pontuacoes[i] < menorPontuacao){
            menorPontuacao = pontuacoes[i]
            piorJogo = i+1
        }
    }
      return [Record, piorJogo]
 }

 console.log(avaliacao(stringPontuacoes))

 console.log('----EX9----')

 function classificaAluno(nota){
     //Notas corrigidas contem uma função para ser reutilizada para implementar a lógica de arredondamento abaixo
     const notasCorrigidas = arredondaNota(nota)

     if(notasCorrigidas >= 40){
         console.log(`Aluno aprovado com nota ${notasCorrigidas}`)
     } else {
         console.log(`Aluno reprovado com nota ${notasCorrigidas}`)
     }

     function arredondaNota(nota){
         if(nota % 5 > 2){
             return nota + (5 - (nota % 5))
         } else {
             return nota
         }
     }

 }

classificaAluno(100)
classificaAluno(30)
classificaAluno(38)
classificaAluno(88)
classificaAluno(61)

console.log('----EX10----')

function boolean(number){
    if(number % 3 == 0){
        return true
    } else {
        return false
    }
}

console.log(boolean(3))

