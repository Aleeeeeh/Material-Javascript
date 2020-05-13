//Função em JS é first-Class object(Citizens)
//Higher-order function - Significa que podemos passar a função como parametro de outra função

//Criar de forma literal
function fun1() { }

//Armazenar em uma variável
const fun2 = function () { }

//Armazenar em um array
const array = [function (a, b) { return a + b }, fun1, fun2]
console.log(array[0](2, 3)) //Array indice 0 pega a primeira função de somar dois números dado como parametro

//Armazenar em um atributo de objeto
const obj = {}
obj.falar = function () { return 'DEU CERTO' }
console.log(obj.falar())

//Passando função como parametro
function run(fun) {
    fun()
}
run(function () { console.log('EXECUTANDO....') })

//Uma função pode retornar/Conter uma função

function soma(a, b) {
    return function (c) {
        console.log(a + b + c)
    }
}

soma(4,4)(2)
//Outra forma de exibir resultado de uma função dentro de outra função

const someMais = soma(4,4)
someMais(2) // someMais ja tem o resultado da primeira função, o 2 é o valor da outra função