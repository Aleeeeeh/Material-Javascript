//Notação Ponto usada para criar objeto dinamicamente ou usar funções, segue alguns exemplos

console.log(Math.ceil(6.1))// Para arredondar para mais

const obj1 = {}
obj1.nome = 'Bola'
obj1.teste = 'Bolinha'
obj1['nome'] = 'NãoBola' //Forma de sobrescrever uma variavel

console.log(obj1)

function obj (nome){
    this.nome = nome
    this.exec = function(){
        console.log('Exec....')
    }
}

const obj2 = new obj('Cadeira')
const obj3 = new obj('Mesa')

console.log(obj2.nome)
console.log(obj3.nome)

obj3.exec()

