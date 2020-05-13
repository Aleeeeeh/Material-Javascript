//Object.preventExtensions, impede que consigamos extender, ou seja adicionar mais atributos, conseguiremos apenas
//deletar ou alter um atributo

const produto = Object.preventExtensions({
    nome:'Qualquer', preco: 1.99, tag: 'Promoção'
})

console.log('Extensivel: ', Object.isExtensible(produto))//Mostra que não poderemos extender

produto.nome = 'Borracha Escolar Branca' //Modificamos o atributo
produto.descricao = 'Borracha' //Não permite adicionar
delete produto.tag //Deletamos o atributo tag
console.log(produto)

//Object.seal não adiciona nem deleta apenas conseguimos modificar os atributos
const pessoa = {nome: 'Alefe', idade:21}
Object.seal(pessoa)
console.log('Selado: ', Object.isSealed(pessoa))//Mostra se está ou não selado, se true permite apenas modificar

pessoa.sobrenome = 'Ferreira' //Não adiciona
delete pessoa.nome //Não deleta
pessoa.nome = 'Thaylane'//Modificado com sucesso rs
console.log(pessoa)

//Object.freeze = Selado + valores constante, ou seja, não adiciona, modifica ou deleta atributos
