//Sem promise, paara obter os dados de um arquivo JSON

//Require é um módulo do próprio Node
const http = require('http')

//Recebe letra da turma, e uma callback
const getTurma = (letra, callback) => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`

    http.get(url, res => {
        let resultado = ''
        //Recebe todos os dados e armazena na variável resultado
        res.on('data', dados => {
            resultado += dados
        })
        //Terminou de chegar os dados, e converter os arquivos JSON para objeto utilizando JSON.parse
        res.on('end', () => {
            callback(JSON.parse(resultado))
        })
    })
}

//Adicionar os dados em um array e concatenar, em getTurma letra da turma e uma função callback nos params
let nomes = []
//Aqui concatenamos os dados em array vazio, os dados contidos em alunos é mapeado, a params de dados chama nome do obj
getTurma('A', alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B', alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C', alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
})


/*Exibindo os dados ja convertidos em objeto, por alunos fazer alunos[0].nome exemplo irá exibir nome apenas o primeiro

getTurma('A', alunos => {
    console.log(alunos)
}) */

