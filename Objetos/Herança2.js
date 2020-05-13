//Utilizando o Object.Create 
const pai = {nome: 'Alefe', corCabelo: 'Preto'}

const filha = Object.create(pai) //Tendo pai como paramentro dessa função Object.create
filha.nome = 'Alane'
console.log(filha.corCabelo) 

//Igual a defineProperty feito na aaula de funcoesObjetos
const filha2 = Object.create(pai, {
    nome: {value: 'Thaina', writable: false, enumerable:true}
})

console.log(filha2.nome)
filha2.nome = 'Indigente'
console.log(`${filha2.nome} tem a cor do cabelo ${filha2.corCabelo}`)

console.log(Object.keys(filha))
console.log(Object.keys(filha2))

//forIn as chaves contidas no objeto filha2, se quiser ver dar console log key
for(let key in filha2){
    filha2.hasOwnProperty(key) ? //hasOwnProperty exibe apenas a chave que vem do próprio objeto, e o resto é da herança
    console.log(key) : console.log(`Por herança ${key}`)
}
