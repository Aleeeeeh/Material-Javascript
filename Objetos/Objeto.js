//Forma de criar objeto
//Objeto em Js, utilizando o new
//produto -> endereco de memoria -> obj em si (O que modificados é esse obj)
const produto = new Object //Const conseguimos mudar o nome e preco mesmo sendo const pois estamos modificando o dado
//do obj em si, exemplo acima
produto.nome = 'Xiaomi'
produto.preco = 4000
//Object.freeze(produto)Com isso tornariamos o objeto em constante, não conseguiriamos mod os dados dele

console.log(produto)
//Deletando objeto (delete produto.nome)

//Criando de cara um objeto constante
const objConstante = Object.freeze({nome: 'Alefe'})
objConstante.nome = 'Ayron' //Continua sendo Alefe pois freeze impede que o dados seja modificado dentro do obj
console.log(objConstante)

//Usando notação literal
const obj1 = {}
console.log(obj1)

//Função construtora
function Produto(nome, preco, desc){
    this.nome = nome //Com isso tornamos visivel para que consigamos por exemplo modificar o nome
    this.PrecoComDesconto = () =>{
        return preco * (1 - desc)
    }
}

const p1 = new Produto('caneta', 7.99, 0.15)
const p2 = new Produto('notebook', 2998.99, 0.25)
console.log(p1.PrecoComDesconto(), p2.PrecoComDesconto())

//Função factory
function criarFuncionario(nome,salarioBase, faltas){
    return{
        nome,
        salarioBase,
        faltas,
        getSalario(){
            return salarioBase / 30 * (30 - faltas)
        }
    }
}

const f1 = criarFuncionario('Joao', 7980, 4)
const f2 = criarFuncionario('Maria', 11400, 1)
console.log(f1.getSalario(), f2.getSalario())

//Object.create
const filha = Object.create(null)
filha.nome = 'Alane'
console.log(filha)
