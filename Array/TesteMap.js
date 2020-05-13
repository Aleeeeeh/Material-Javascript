//Um Array com dados em formato JSON, pegue e exiba apenas os preços
const carrinho = [
    '{"nome":"Borracha", "preço":3.45}',
    '{"nome":"Caderno", "preço":13.90}',
    '{"nome":"Lápis", "preço":41.22}',
    '{"nome":"Caneta", "preço":7.50}'
]

//Primeiro convertemos o JSON para objeto, aqui estamos pegando os dados do JSON e atribuindo a constante
const convObjeto = json => JSON.parse(json)
//Criamos um função produto e chamamos o preço dentro do objeto convertido
const apenasPreco = produto => produto.preço 
//Chamamos vetor com Json ja convertido, depois o preço de dentro do objeto e atribuimos a result
const result = carrinho.map(convObjeto).map(apenasPreco)
console.log(result)