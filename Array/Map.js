//O Map serve para transformar um Array em outro

//Exemplo do Map transformando cada elemento do array, no caso o dobro de cada número, a função recebe mesmo parâmetro
//do forEach, dados, indice e Array em si

const nums = [1,2,3,4,5]
let resultado = nums.map((e) => { //Dado do array multiplicado por 2 no exemplo, e exibe outro array ba tela mapeado pelo map
    return e * 2
})

//Array mapeado e o array normal
console.log(resultado, nums)

//Exemplo do Map com 3 funções, com isso será somado com 10, multiplicado por 3,exibido com float, com 2 casas decimais
//e substituindo . por ,
const soma10 = e => e + 10
const triplo = e => e * 3
const dinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}` //Replace substituindo . por ,

resultado = nums.map(soma10).map(triplo).map(dinheiro)
console.log(resultado)

