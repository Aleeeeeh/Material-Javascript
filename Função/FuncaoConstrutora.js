//Função construtora apartir dela se cria instancias
function carro(velocidadeMaxima = 200, delta = 5) {
    //Atributo privado
    let velocidadeAtual = 0

    //Metodo publico
    this.acelerar = function () {   //O this torna a função visivel, ou seja torna publica
        if (velocidadeAtual + delta <= velocidadeMaxima) {
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    //Metodo publico
    this.getvelocidadeAtual = function () {  //Para pegar um atributo privado usamos o get
        return velocidadeAtual
    }

}

const uno = new carro //A função ('carro') funciona como uma classe e pode ser usada para criar obj
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(350, 20)
ferrari.acelerar()   //velAtual é 0 + o valor de delta vai incrementando de acordo com a quantidade de acel..
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual()) //60 = delta que é 20 + 20 + 20

