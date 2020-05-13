//Array, Object e String são função, ambas tem protótipos

//Reverse é um método da String
String.prototype.reverse = function(){
    return this.split('').reverse().join('') //split pega, reverse reverte, e o join une tudo denovo
}
//Reverse atribuido acima
console.log('ETIEL MOC EFAC'.reverse())

Array.prototype.first = function(){
    return this[0] //Pegando do primeiro indice do Array 
}

console.log([1,2,3,4,5].first())
console.log(['A','B','C '].first())

//Exemplo quando usamos o operador new, ele aponta para o prototipo da função
function Aula(nome, videoID){
    this.nome = nome
    this.videoID = videoID
}

//Através do this, e instanciando a funçao, apontando para seu protótipo acessamos nome e videoID
const aula1 = new Aula('Bem vindo', 123)
const aula2 = new Aula('Ate breve', 456)

console.log(aula1, aula2)

//Simulando o new
function novo(f, ...params){ //Usamos 3 pontos, pois são um conjunto de parâmetros
    const obj = {}
    obj.__proto__ = f.prototype //Apontando para o protótipo da função
    f.apply(obj, params)//Meu objeto seria a Funcao Aula, e seus parametros
    return obj
}

const aula3 = new novo(Aula,'Bem vindo', 123)
const aula4 = new novo(Aula,'Bem vindo',456)

console.log(aula3, aula4)

//EXEMPLO DE COMO O OPERADOR NEW FUNCIONA, NOTE QUE O RESULTADO É O MESMO