function tratarErroLancar(erro){
    throw new Error ('Erro ao tentar acessar atributo da função')
  /* Outras formas de tratar o erro
    throw true    
    throw 'mensagem'
    throw{
        //nome:erro.name,
        msg:erro.mensagem
        date:new Date --- Data que foi gerada o erro
    }*/
    
}

function imprimirNomeGritado(obj){
    try{
        console.log(obj.name.toUpperCase() + "!!!")
    } catch(e) {
        tratarErroLancar(e)
    }finally{
        console.log('Aparecerá  indenpendentemente de erro ou Não')
    }
}

const obj = {nome: 'Thaylane'} //Erro porque na função esse "name" e aqui esta como nome
imprimirNomeGritado(obj)