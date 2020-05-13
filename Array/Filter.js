//Filter serve para filtrar apenas alguns elementos do array, Exemplo básico:
function values(value){
    return value >= 10
}

var result = [5,10,3,15,7,25,40].filter(values)
console.log(result)

//Exemplo com produtos, filtrando alguns elementos conforme programado
const produtos = [
    {nome:'Notebook', preco:2499, fragil:true},
    {nome:'Iphone Pro', preco:4199, fragil: true},
    {nome:'Copo de vidro', preco:12.50, fragil:true},
    {nome:'Copo de plastico', preco:18.99, fragil:false}
]

//Retornando falso para todos apenas para mostrar que existe o vetor
console.log(produtos.filter(function(dados){
    return false
}))

const caro = produto => produto.preco >= 500
const fragil = produto=> produto.fragil //Por padrao irá retornar o produto que estiver como verdadeiro

console.log(produtos.filter(caro).filter(fragil))

/*Outra forma de fazer o o mesmo exemplo
function verifica(dados){
    return dados.preco >= 500 && dados.fragil
}

var result = produtos.filter(verifica)
console.log(result) */

