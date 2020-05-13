//Função escrita de forma normal
let dobro = function(a){
    return 2 * a
}

dobro = a => 2 * a //Retorno implicito
console.log(dobro(Math.PI))

console.log('----Funçãa arrow 2----')

function pessoa (){
    this.idade = 0

    setInterval(() => { // Função Arrow então não terá necessidade do bind, pois o this não varia 
        this.idade++
        console.log(this.idade)
    }, 1000)
}

new pessoa

