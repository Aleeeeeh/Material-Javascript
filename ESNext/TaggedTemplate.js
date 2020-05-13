// tagged templates - processa o template dentro de uma função
function tag(partes, ...valores) {
    console.log(partes)
    console.log(valores)
    return 'Outra string'
}

const aluno = 'Gui'
const situacao = 'Aprovado'
console.log(tag `${aluno} está ${situacao}.`)

//Outro Exemplo
function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {//valor é a formatação o indice são nossos valores
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}` //Senao for um número retorne apenas, se for retorne valor reconfigurado com R$ e duas casas decimais depois da virgula
        resultado.push(partes[indice], valor)//Parte é string digitada, e o valor são params a receber no caso as const
    })
    return resultado.join('')//Para unir os valores
}


const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)//real seria a taggedTemplate para reconstruir a string final