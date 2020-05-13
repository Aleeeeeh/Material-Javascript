//Criando nosso próprio map, lembrando que o o map faz um cópia de um array, e de padrão percorrer nosso array com for
Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome":"Borracha", "preço":3.45}',
    '{"nome":"Caderno", "preço":13.90}',
    '{"nome":"Lápis", "preço":41.22}',
    '{"nome":"Caneta", "preço":7.50}'
]

const convObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preço 
const result = carrinho.map2(convObjeto).map2(apenasPreco)
console.log(result)