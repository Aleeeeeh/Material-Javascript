//Armazenando função em uma variável

const imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)

//Armazenando uma função arrow em uma variavel

const soma = (a, b) => {  //Simbolo do Arrow function => Forma mais simples de escrever uma funcao
    return a + b
}

console.log(soma(2, 3))

//Retorno Implícito
const subtracao = (a, b) => 5 - 2 //Quando é uma única sentença pode ser escrita dessa forma
console.log(subtracao())

const imprimir2 = a => console.log(a) //
imprimir2('Legal !!!')

