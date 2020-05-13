//FlatMap utilizamos o Map para pegar os dados do array, e o concat para concatenar e deixar em um único array
const escola = [{
    nome:'Turma M1',
    alunos:[{
        nome:'Dolores',
        nota:9.0
    },{
        nome:'Godofredo',
        nota:6.5
    }]
}, {
        nome:'Turma M2',
        alunos:[{
            nome:'Clorofina',
            nota:8.0
        },{
            nome:'Zezin',
            nota:9.5
        }]
    }]
//LEMBRETE, é imprescidivel o uso do map para que de fato percorramos e pegamos os dados em especifico
getAlunos1 = e => e.nome
getNomes = escola.map(getAlunos1)
console.log(getNomes)

//Pegamos notas dos alunos e mapeamos o array todo tendo como parâmetro
getNota = aluno => aluno.nota //Usando método get por isso não declaramos o tipo da variável
getNotasTurmas = turma => turma.alunos.map(getNota)
//Temos as notas das duas turmas e dois arrays
const notas = escola.map(getNotasTurmas)
console.log(notas)

//criamos a função flatMap,lógica exemplo: console.log([].concat([1,2],[3,4],5,[[7,3]]))
Array.prototype.flatMap = function(callback){
    return Array.prototype.concat.apply([],this.map(callback))//1° param array vazio de dados o outro é o array mapeado
}
//Usando o flatMap conseguimos unir as turmas em um único vetor
const notas1 = escola.flatMap(getNotasTurmas)
console.log(notas1)