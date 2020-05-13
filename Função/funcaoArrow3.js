let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global) //Verdadeiro, pois o this aponta para o parametro do escopo global

const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(global) //Falso pois o bind está fazendo o this apontar para o objeto
comparaComThis(obj)

//Escrita de função arrow da comparação

let comparaComThisArrow = (param) => console.log(this === param)
comparaComThisArrow(global) //Na funcao Arrow o this não é igual a um escopo global
comparaComThisArrow(module.exports) //Mas é igual a um module exports

comparaComThisArrow = comparaComThisArrow.bind(obj) //Tentando apontar this para objeto
comparaComThisArrow(obj)//Não é possivel usar bind na função 
comparaComThisArrow(module.exports)//Continua igual a module exports