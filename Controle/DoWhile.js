function getInteiroAleatorioEntre(min, max){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

let opcao = -1

//A expressão 'DO' primeira executa o código depois verifica a condição se deve ou não continuar
do{
    opcao = getInteiroAleatorioEntre(-1, 10)
    console.log(`Opção Escolhida ${opcao}.`)
}while(opcao != -1)

console.log('Até a próxima')