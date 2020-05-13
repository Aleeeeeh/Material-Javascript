// Operadores relacionais são operadores tambem binários, compara dois valores e retorna verdadeiro ou falso

console.log('1)', '1' == 1) //compara se os valores são iguais independente do tipo
console.log('2)', '1' === 1)//Quando existe 3 iguais, o fato de de um  valor estar como String ja retorna falso
console.log('3)', '3' != 3)
console.log('4)', '4' !== 4)

//Criando um data

const d1 = new Date(0) //O zero siginifica a data de referencia que é 01/12/1970
const d2 =  new Date(0)

console.log('5)', d1 == d2) // falso por causa de alocações diferentes na memória
console.log('6)', d1.getTime() == d2.getTime())//Pega os milissigundos de referencia da linguagem então true