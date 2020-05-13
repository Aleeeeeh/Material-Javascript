//Conteudo do ClasseVsFactory feito em forma de função construtora

function Pessoa (nome){
   // this.nome = nome

    this.falar = function(){
        console.log(`Meu Nome é ${nome}`)
    }
}

const p1 = new Pessoa('Alefe')
p1.falar()
console.log(p1.nome) //Usando o this teria acesso a variavel nome