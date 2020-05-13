//Arrays é uma função do tipo Object, array é uma estrutura dinamica que cresce e diminui dinamicamente, diferente de java
//por exemplo que o array é fixo
console.log(typeof Array, typeof new Array, typeof [])

//Forma de criar um array instanciando

let familia = new Array('Thaylane','Ayron', 'Alane')
console.log(familia)

//Acessando elementos de um array
console.log(familia[1])
console.log(familia[2])

//Duas formas de adicionar elementos no array
familia[3] = 'Alefe'
familia.push('My family')
console.log(familia.length)

//Irá contar como 10 indices no vetor porem, do 4° até o 8° será undefined
familia[9] = 'Borave'
console.log(familia.length)
console.log(familia[8] === undefined)
console.log(familia)

//Método que altera a sequência dos dados
familia.sort()
console.log(familia)

//Deletar dados no array
delete familia[4]
console.log(familia)

//Método splice adiciona e remove elementos, 1° número é aprtir daquele elemento, 2° quantos deletar apartir dele, 3°
//os que for adicionados
//familia.splice(1,0,'Olá','Mundo') Apartir do primeiro indice será adicionado essas duas strings sem deletar ninguem
familia.splice(1,1) //Apartir do primeiro elemento irei deletar, o outro um é quantos, no caso irá deletar apenas um 
console.log(familia)