//Uma estrutura não indexada, ou seja não é por indices e que não aceita repetição
const times = new Set()
times.add('Vasco')
times.add('Flamengo')
times.add('São paulo').add('Palmeiras').add('Corinthians')
times.add('Vasco')

//Repare que não repetiu, e tambem se atentar se está maiusculo ou minusculo
console.log(times)
console.log(times.size) //Size encontrado tanto na estrutura de Map como em Set
console.log(times.has('Vasco'))
console.log(times.has('vasco'))
times.delete('Flamengo')
console.log(times.has('Flamengo'))

//Criando um Set através de um Array
const nomes = ['Alefe','Thaylane','Ayron','Alane','Alefe']
const nomeSet = new Set(nomes)
console.log(nomeSet)
console.log(nomeSet.size)

