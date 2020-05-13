//Função anônima é uma função sem nome

const soma = function(x, y){
    return x + y
}

const imprimirResultado = function(a, b, operacao = soma){
    console.log(operacao(a,b))

}

imprimirResultado(3,4)
imprimirResultado(3, 4, function(x, y){  //Função dentro de outra função
    return x - y
})
imprimirResultado(3, 4, (x, y) => x * y) // Usando função arrow

//Outro exemplo de função anônima é criando através de um objeto

const pessoa = {
    falar: function(){
        console.log('Hello World')
    }
}

pessoa.falar()