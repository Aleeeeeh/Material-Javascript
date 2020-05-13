//Função sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
imprimirSoma(2) //Faltar um valor para o parametro, irá alertar not a Number
imprimirSoma(2, 10 , 11, 56, 89)// irá simplesmente somar os dois primeiros e ignorar o resto dos valores 
console.log("----------------------")

//Função com retorno

function soma(a, b=0){
    return a + b
}

console.log(soma(2, 3))
console.log(soma(2))// Como parametro b foi iniciado com zero então exibira apenas o 2