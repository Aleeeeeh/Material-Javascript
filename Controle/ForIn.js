/* Exemplo com For In, o IN pega os indices do Array, mas para mostrar os valores ainda é necessário colocar 
a variavel em seguida */

const notas = [5.5, 9.2, 3.4, 10, 3.4]

for(let i in  notas){
    console.log(`Indice ${i} = ${notas[i]}`)
}

//Usando o For in com objetos

const pessoa = {
    nome: 'Alefe',
    sobrenome: 'Silva',
    idade: 22,
    peso: 64
}

console.log('----Exemplo com objeto-----')

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

