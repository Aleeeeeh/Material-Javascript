const notas = [7.7, 6.5, 5.2, 8.9, 3.6 ,7.1, 9.0]

//Sem CallBack

const notasBaixas = []

for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}

console.log(notasBaixas)

//Com CallBack

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})

console.log(notasBaixas2)

//Com arrow Function

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)

//Outra forma de fazer
const RefParaTodas = nota => nota < 7
const notasBaixas4 = notas.filter(RefParaTodas)
console.log(notasBaixas4)