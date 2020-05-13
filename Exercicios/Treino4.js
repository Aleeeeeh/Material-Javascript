console.log('---EX27---')

//Ler um vetor de números inteiros, e mostrar quais são pares e quais são impares
console.log('---EX28---')

const vetor = [1,2,3,4,5,6,7,8,9,10]

function par_impar(vetorNumeros){
    let qtdPares = 0
    let qtdImpares = 0

    for(let i = 0; i < vetorNumeros.length; i++){
        if(vetorNumeros[i] % 2 == 0){
            qtdPares++
        } else {
            qtdImpares++
        }
    }
    console.log(`${qtdPares} números pares  e ${qtdImpares} números impares`)
}

par_impar(vetor)
console.log('---Ex29---')
//Percorra um vetor e mostra quantos número estão dentro de um intervalo [10,20], ou seja entre 10 e 20 
//Nome do vetor tem que ser igual ao parâmetro
const dados = [10,5,20,65,98,30,15,14,19]

function interval(dados){
    qtdValoresInterval = 0
    
    for(let i = 0; i < dados.length; i++){
        if(dados[i] >= 10 && dados[i] <= 20){
            qtdValoresInterval++
        }
    }
    return `${qtdValoresInterval} Números dentro do Intervalo`
}

console.log(interval(dados))

console.log('---Ex30---')
//Percorrer um vetor, e mostrar o maior e o menor valor dentre eles

const ex = [10,20,30,40,50,60,70,89]

function maiorMenor(ex){
    let maior
    let menor

    for(let y = 0; y < ex.length; y++){
        if(maior === undefined && menor === undefined){
            maior = ex[y]
            menor = ex[y]
        } else {
            if(ex[y] > maior){
                maior = ex[y]
            }
            if(ex[y] < menor){
                menor = ex[y]
            }
        }
    }
    return [maior, menor]
}

console.log(maiorMenor(ex))