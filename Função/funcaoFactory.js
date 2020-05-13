//Factory é uma função que retorna um objeto

//Factory Simples
function criarPessoa(){
    return {
        nome: 'Alefe',
        Sobrenome: 'Ferreira'
    }
}

console.log(criarPessoa())

console.log('-----COM BASE EM PARAMETROS-----')

//Retorno de objetos com valores com base nos parametros passados
function criarProduto(nome, preco){
    return {
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criarProduto('Notebook',2300))
console.log(criarProduto('Iphone', 4000))