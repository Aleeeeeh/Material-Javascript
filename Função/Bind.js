//A função bind passa o objeto que você quer apontar com this,O principal objetivo do método bind é alterar 
//o contexto this de uma função independente de onde a mesma esteja sendo chamada.

const pessoa = {
    saudacao: 'Bom dia',
    falar() {
        console.log(this.saudacao)
    }
}

pessoa.falar()//Forma direta de chamar a função
const falar = pessoa.falar
falar() //Conflito entre paradigmas: funcional e oo

const falarDePessoa = pessoa.falar.bind(pessoa) //Aqui o bind faz apontar para o objeto, onde o this aponta
falarDePessoa()