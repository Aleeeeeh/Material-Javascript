//Novo recurso do ES2015
//Forma com Objeto
const pessoa = {
    nome: 'Alefe',
    idade: '23 Anos',
    endereco: {
        Logradouro: 'Rua nove',
        numero: 84,
        bairro: 'Jardim silvestre'
    }
}

const{nome, idade} = pessoa // Retirou os atributos nome e idade do objeto pessoa com Destructuring
console.log(nome, idade)

const{nome: N, idade: I} = pessoa // Forma de alterar o nome da variável
console.log(N, I)

const{endereco:{Logradouro, numero, bairro}} = pessoa
console.log(Logradouro, numero, bairro) //Extraindo do objeto que está dentro do objeto pessoa