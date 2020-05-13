let teste = false
console.log(teste)

teste = true
console.log(teste)

teste = 1
console.log(!!teste)//!! Mostra o valor original, teste se o número é verdadeiro ou falso

//Outros exemplos
console.log(!!true)
console.log(!true) // Apenas uma exclamação significa "não", ou seja converte para outro resultado

//Todo número inteiro ou array ou aspas simples vazio é verdadeiro
console.log("")
console.log("Valores Verdadeiros")
console.log(!! ' ')
console.log(!! - 1)
console.log(!! Infinity) // Número infinito ("Exemplo um número dividido por zero")

//falsos o zero e alguns erros ou valores null
console.log("")
console.log("Valores Falsos")
console.log(!! 0)
console.log(!! '')
console.log(!! null)

//Em uma sentença se houver um apenas que for verdadeiro, irá constar a sentença toda como verdadeiro
console.log("")
console.log("Para encerrar")
console.log(!!('' || null || 0 || ' ')) //Aspas com espaço seria verdadeira

//Nome ou conteudo, como nome está vazio será exibido o conteudo 
console.log("")
let nome = ''
console.log(nome || "Alefe Silva") // 
