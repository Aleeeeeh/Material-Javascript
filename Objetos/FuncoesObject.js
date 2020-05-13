const pessoa = {
    nome: 'Alefe',
    idade: 23,
    peso: 65
}

console.log(Object.keys(pessoa)) //Irá mostrar apenas as chaves do objeto
console.log(Object.values(pessoa)) //Apenas os atributos de dentro do objeto
console.log(Object.entries(pessoa))//Arrays com chave e atributo

//Usando forEach iremos pecorrer todo objeto mostrando chave e valor como no exemplo
Object.entries(pessoa).forEach(e => {
    console.log(`${e[0]}: ${e[1]}`)
})
//Outro exemplo agora utilizando operador destructing
Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento',{
    enumerable: true, // Ou seja esse atributo irá aparecer no objeto
    writable: false, //Não poderá ter seu valor sobrescrito
    value:'01/01/2017'
})

pessoa.dataNascimento = '01/01/2020' //Writable false impede que a data seja sobrescrita 
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

// Object.assign (ECMAScript 2015), faz com que tudo que vem depois do dest, seja concatenado, ou seja 4 2 3, a fica
//4 pois sobresscreve
const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2)