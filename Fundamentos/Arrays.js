//Em javascript ou array não é fixo como acontece no java 
const valores =[7.7, 8.9, 9.9, 2.3 ]
console.log(valores[0], valores[3]) //Lembrando que os indice começa no zero
console.log(valores[4]) //Quando não existe a posição exibe a msg dizendo que está indefinido

valores[4] = 10
console.log(valores) //Adicionando um array 
console.log(valores.length)//Mostrar quantos arrays temos"No caso 5"

//Adicionar valores no array, lembrando que poder haver texto pois a linguagem é de tipagem fraca

valores.push({id: 3}, false, null, 'Teste')
console.log(valores)

//deletar um valor do array

delete valores[0]
console.log(valores)

console.log(typeof valores)//Arrays é do tipo object
