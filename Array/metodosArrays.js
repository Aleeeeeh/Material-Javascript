const jogadores = ['Neymar','Messi','CR7','Mbappe']

//Remove último elemento do Array
jogadores.pop()
console.log(jogadores)

//Adicionar elemento no Array
jogadores.push('Daniel Alves')
console.log(jogadores)

//Remove o primeiro elemento
jogadores.shift()
console.log(jogadores)

//Adicionando ao primeiro indice
jogadores.unshift('Neymar')
console.log(jogadores)

//Método Splice,apartir do indice 3, sem deletar niguem,adicione esse outros 2
jogadores.splice(3,0,'Ronaldinho','Zidane')
console.log(jogadores)

jogadores.splice(3,2)
console.log(jogadores)

//Simulando um Objeto
const quaseArray = { 0: 'Rafael', 1: 'Ana', 2: 'Bia' }
console.log(quaseArray)
//Função que irá retornas os valores dentro do objeto, não enumerado para que a função toString não apareça
Object.defineProperty(quaseArray, 'toString', {
    value: function() { return Object.values(this) },
    enumerable: false
})
//Pegando apartir do indice [0]
console.log(quaseArray[0])
//Aqui exibimos no console, o objeto chamando o toString que pega apenas os dados, e o array em si
const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)