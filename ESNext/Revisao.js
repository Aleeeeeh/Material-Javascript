// let e const
{
    var a = 2
    let b = 3
    console.log(b)
}
console.log(a)

// Template String
const produto = 'iPad'
console.log(`${produto} é caro!`)

// Destructuring - Indepente das letras do vetor, irá ser substituida pela string que estamos atribuindo
const [l, e, ...tras] = "Cod3r"
console.log(l, e, tras)

const [x, , y] = [1, 2, 3]
console.log(x, y)
//Possivel tambem dando apelido ao atributo do objeto
const { idade: i, nome } = { nome: 'Ana', idade: 9 }
console.log(i, nome)

console.log('---Parte2---')

// Arrow Function
const soma = (a, b) => a + b
console.log(soma(2, 3))

// Arrow Function (this) - Essa forma de função o this não varia sempre aponta para o local aonde a fução foi escrita
const lexico1 = () => console.log(this === exports)
const lexico2 = lexico1.bind({})
lexico1()
lexico2()

// parametro default - Atribui um valor padrão ao parâmetro
function log(texto = 'Node') {
    console.log(texto)
}

log()
log('Sou mais forte')

// operador rest(Agrupar) - Quando temos um grupo de parâmetros
function total(...numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return total
}
console.log(total(2, 3, 4, 5)) 

console.log('---Parte3---')

// ES8: Object.values/Object.entries
const obj = { a: 1, b: 2, c: 3 }
console.log(Object.values(obj))
console.log(Object.entries(obj))

// Melhorias na Notação Literal
const nome1 = 'Carla'
const pessoa = {
    nome1,
    ola() {
       return 'Oi gente!' 
    }
}

console.log(pessoa.nome1, pessoa.ola())

// Class 
class Animal {}
class Cachorro extends Animal {
    falar() {
        return 'Au au!'
    }
}
//Para criar objetos apartir de um classe usamos o operador new, para que consigamos acessar a função da classe
console.log(new Cachorro().falar())