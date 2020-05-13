//Closure é um escopo criado quando uma função é declarada
//Esse escopo permite a função acessar e manipular variáveis externas á função

//Contexto léxico em ação

const x = 'global'

function fora(){
    const x = 'Local'
    function dentro(){ //No caso a função dentro está tendo acesso a variavel externa da função fora
        return x 
    }
    return dentro
}

const minhaFuncao = fora()
console.log(minhaFuncao())