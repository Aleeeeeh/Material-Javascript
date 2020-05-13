//Função aponta para Object.prototype
function MeuObjeto(){}
console.log(MeuObjeto.prototype) //.prototype mostra que é um objeto

//Instanciando objetos pela mesma função
const obj = new MeuObjeto
const obj1 = new MeuObjeto

//Para ambos os exemplos os protótipos apontam para o objeto prototype, que está no topo da hierarquia
console.log(obj.__proto__ === obj1.__proto__)
console.log(obj.__proto__ === MeuObjeto.prototype)

//Podemos modificar os atributos se quisermos nesse exemplo
MeuObjeto.prototype.nome = 'Alefe'
MeuObjeto.prototype.falar = function(){
    console.log(`Bom dia, meu nome é ${this.nome}!`)
}

//Como os objetos foram instanciados para a mesma função, onde temos o prototype no topo da hierarquia, conseguimos
//pegar os atributos e tambem modifica-los como no exemplo abaixo
obj.falar()
obj1.nome = 'Ayron'
obj1.falar()

const obj3 = {}
obj3.__proto__ = MeuObjeto.prototype //Protótipo do obj3 apontando para o Object.prototype e herdando, assim conseguimos modificar ou até mesmo adicionar atributos
obj3.nome = 'Thaylane'
obj3.falar()

//Resumo, a função tem um protótipo que é o function.prototype, o objeto tambem tem um protótipo que aponta para 
//object.prototype, e a function.prototype aponta tambem para o object.prototype

console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype)
console.log(Function.prototype.__proto__ === Object.prototype)

//Existe um protótipo de Object.prototype mais ele é null, não aponta para lugar nenhum

console.log(Object.prototype.__proto__ === null)