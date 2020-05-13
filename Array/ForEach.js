//Uma das formas de percorrer um Array
const family = ['Thaylane','Alane','Ayron','Alefe']
//Passamos uma função callback, com os dados e posição do indice, 3° parametro seria um array
family.forEach(function(dados, indice, array){
    console.log(`${indice + 1}) ${dados}`)
    console.log(array)
})

//Mostrando apenas o nome
family.forEach(nome =>{console.log(`${nome}`)})

//Armazendo em uma constantem, irá mostrar apenas o nome por causa da ultima função acima
const exiba = family =>{console.log(family)}
family.forEach(exiba)

