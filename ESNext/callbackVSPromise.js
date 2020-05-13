 //Com promise

//Require é um módulo do próprio Node
const http = require('http')

//Recebe uma letra como parâmetro que compoe a url, que seria a letra indicando a turma do arquivo JSON
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    //Uso da promisse
    return new Promise((resolve, reject) =>{
        http.get(url, res => {
            let resultado = ''
            //Recebe todos os dados e armazena na variável resultado
            res.on('data', dados => {
                resultado += dados
            })
            //Terminou de chegar os dados, usamos depois a estrutura try catch, para resolver ou rejeitar 
            res.on('end', () => {
            //Um erro provável é se o arquivo não for JSON, caira no catch
            try{
                resolve(JSON.parse(resultado))
            } catch(e) {
                reject(e) //O erro representa a msg de erro
            }
            })
        })
    })
   
}

//Espera até que todas as promises sejam resolvidas, e ai começa a encadear todas elas
Promise.all([getTurma('A'), getTurma('B'), getTurma('C')])
.then(turma => [].concat(...turma)) //Concatenando os dados em um array vazio
.then(alunos => alunos.map(aluno => aluno.nome)) //Acessando apenas os nomes dos alunos de cada turma
.then(nomes => console.log(nomes))
.catch(e => console.log(e.message))

//Neste exemplo caimos no Catch, pois não existe um arquivo JSON da turma D, sempre lembrar de tratar esses erros
getTurma('D').catch(e => console.log(e.message)) 

/*Aqui podemos usar o then, e ir concatenando ---Exemplo não muito indicado pois fica mais complexo
let nomes = []
getTurma('A').then(alunos => {
    nomes = nomes.concat(alunos.map(a => `A: ${a.nome}`))
    getTurma('B').then(alunos => {
        nomes = nomes.concat(alunos.map(a => `B: ${a.nome}`))
        getTurma('C').then(alunos => {
            nomes = nomes.concat(alunos.map(a => `C: ${a.nome}`))
            console.log(nomes)
        })
    })
}) */
