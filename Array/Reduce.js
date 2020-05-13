//Reduce pode transformar um array em um único elemento, ou em outro array, ou array em um número
//No exemplo faremos a soma das notas dos alunos, pois primeiro parâmetro é um acumulador e o segundo e dado atual em si

const alunos = [
    {nome: 'zezinho', nota:7.3, bolsista:false},
    {nome:'toiin', nota:9.2, bolsista:true},
    {nome:'astolfo', nota:9.8, bolsista:false},
    {nome:'clorisvaldo', nota:8.7, bolsista:true}
]

//O array de notas
console.log(alunos.map(dados => dados.nota))
//Como parâmetro do reduce temos acumulador, dado atual, indice e o array completo se quisermos
const resultado = alunos.map(dados => dados.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual //Irá Somando as notas
},0) //Valor inicial, no exemplo começando de zero

//Resultado do somatório das notas
console.log(resultado)