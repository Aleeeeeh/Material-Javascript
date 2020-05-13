//Método concat serve para que consigamos concatenar arrays

const filhas = ['Matilda', 'Cibalena']
const filhos = ['Markito','Astolfo']
const todos = filhas.concat(filhos) //Com isso estamos concatenando filho em filhas
console.log(todos, filhas, filhos)

//Concatenando um array vazio a arrays e outros valores
console.log([].concat([1,2],[3,4],5,[[7,3]]))