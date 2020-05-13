//Tranformar um código assincrono em algo que parece sincrono, objetivo é simplificar

const http = require('http')
const getTurma = letra => {
    const url = `http://files.cod3r.com.br/curso-js/turma${letra}.json`
    
    return new Promise((resolve, reject) =>{
        http.get(url, res => {
            let resultado = ''
            res.on('data', dados => {
                resultado += dados
            })
            res.on('end', () => {
            try{
                resolve(JSON.parse(resultado))
            } catch(e) {
                reject(e) 
            }
            })
        })
    })
   
}

//Recurso do ES8, objetivo simplificar o uso de promises
//Toda função com async me permite usar o Await
let obterAlunos = async () => {
    const ta = await getTurma('A') //Esse a se refere ao parâmetro de url la em cima, letra
    const tb = await getTurma('B')
    const tc = await getTurma('C')
    return [].concat(ta, tb, tc)
}//Teremos o retorno de uma async function, e com then temos de fato acesso ao que a função retornou

obterAlunos().then(alunos => alunos.map(aluno => aluno.nome)).then(nomes => console.log(nomes))
.catch(e => console.log(e.message))

