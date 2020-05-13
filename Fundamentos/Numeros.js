const peso1 = 1.0
const peso2 = Number('2.1')//outra forma de colocar um N° ponto flutuante

console.log(peso1,peso2)
console.log(Number.isInteger(peso1)) //Mesmo sendo ponto flutuante, por ser 1.0 é considerado inteiro
console.log(Number.isInteger(peso2)) 

const avaliacao1 = 9.871
const avaliacao2 =6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media.toFixed(2))//Duas casas após a virgula
console.log(media.toString())//Pegar números e mostrar como forma de string
console.log(media.toString(2))//Converter para binário

console.log(typeof media)
console.log(typeof Number)