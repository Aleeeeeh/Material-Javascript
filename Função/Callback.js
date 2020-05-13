//Uma função callback é uma função passada a outra função como argumento

const fabricantes = ["Mercedes", "Audi", "BMW"]

function imprimir(nome, indice){
    console.log(`${indice + 1}. ${nome}`)
}

fabricantes.forEach(imprimir)  //Para cada elemento do vetor fabricantes imprima na tela o indice e o nome
fabricantes.forEach(fabricante => console.log(fabricante))

