//Expressão While, repete N vezes até atender a uma determinada condição

function getInteiroAleatoriamente(min, max){
    const valor = Math.random() * (max - min) + min //Para sortear um número entre máx  e min
    return Math.floor(valor) //Para arredondar o valor para menos
}

let opcao = 0 //se fosse menos ja cairia fora do laço

while(opcao != -1){
    opcao = getInteiroAleatoriamente(-1, 10)
    console.log(`A opção escolhida foi ${opcao}.`)
}

console.log('Até a próxima')