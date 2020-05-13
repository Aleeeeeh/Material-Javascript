//Criamos o método do forEach manualmente, onde pegamos o protótipo do Array, chamamos o forEach e recebemos uma callback
Array.prototype.forEach2 = function(callback){ 
    for(let i = 0; i < this.length; i++){ //Percorremos com laço for, this aponta paara os dados do array
        callback(this[i], i, this) //dentro da callback como abaixo passamos dados, indice e o array em si
    }
}

const family = ['Thaylane','Alane','Ayron','Alefe']

family.forEach2(function(dados, indice){
    console.log(`${indice + 1}) ${dados}`)
})
