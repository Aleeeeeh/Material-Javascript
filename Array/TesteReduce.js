const alunos = [
    {nome: 'zezinho', nota:7.3, bolsista:false},
    {nome:'toiin', nota:9.2, bolsista:true},
    {nome:'astolfo', nota:9.8, bolsista:false},
    {nome:'clorisvaldo', nota:8.7, bolsista:true}
]

//Desafio 1: Todos os alunos são bolsistas ?
const testeBolsa = alunos.map(dados => dados.bolsista).reduce(function(acumulador, valorInicial){
    if(valorInicial === true){
        return 'Nem todos alunos são bolsistas'
    } else {
        return 'Todos os alunos são bolsistas'
    }
})

console.log(testeBolsa)

/*Outra forma de fazer, result && bolsista,Função com dois parâmetros que se não estiverem todos true de padrao retorna
false
todosBolsistas = (result, bolsista) => 
console.log(alunos.map(e => e.bolsista).reduce(todosBolsistas)) */

//Desafio 2: Algum aluno é bolsista?
const algumBolsista = (result, bolsista) => result || bolsista
console.log(alunos.map(e => e.bolsista).reduce(algumBolsista))//Agora teste se existe algum bolsista

//Criando nosso próprio método Reduce
Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(i = 0; i < this[0].length; i++){
        acumulador = callback(acumulador, this[i],i, this) //Atribui aos acumulador, a callback com params do reduce
    }
    return acumulador
}
//Utilizando nosso método criado o reduce2
const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5, 6]
console.log(nums.reduce(soma)) //Com isso irá somar todos os números do Array