//No contexto léxico a função tem prioridade na execução 
const valor = 'global'

function minhafuncao(){
    console.log(valor)
}

function exe(){
    const valor = 'local'
    minhafuncao() //Por conta do contexto minha função está pegando a const valor de cima, por isso o exe exec..
}

exe()