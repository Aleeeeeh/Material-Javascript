class pessoa {
    constructor(nome){
        this.nome = nome //Lembrete: This faz a variável nome ficar pública
    }

    falar(){
    console.log(`Meu nome é ${this.nome}`)
    }
}

const p1 = new pessoa('Alefe')
p1.falar() //Através da instância de p1 chamo a função falar

const criarPessoa = nome => {
    return {
        falar: ()  => console.log(`Meu nome é ${nome}`)
    }
}

const p2 = criarPessoa('Alefe') //Não precisa do new pois é uma função factory
p2.falar()