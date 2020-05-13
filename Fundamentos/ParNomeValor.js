//Situação onde o nome da variável é o mesmo, porém em contextos diferentes, funções e declarações literais

const saudacao = 'opa' //Contexto léxico 1

function exe(){
    const saudacao = 'Falaa' //Contexto léxico 2 
    return saudacao
}

//Objetos são grupos aninhados de pares/Nome/Valor

const cliente = {
    nome: 'Alefe Silva',
    idade: 22,
    peso: 64,
    endereco: {
        logradouro: 'Rua nove',
        numero: 84
    }

}

console.log(saudacao)
console.log(exe())
console.log(cliente)



