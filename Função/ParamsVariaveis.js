function soma(){
    let soma = 0
    for(i in arguments){
        soma += arguments[i] //Arguments é um array interno de uma função que tem todos argumentos
    }
    return soma
}

//Vai somando todos argumentos ou no caso concatenando quando Strings
console.log(soma())
console.log('OLA','HEYHEY','Tmj')
console.log(soma(2,1))