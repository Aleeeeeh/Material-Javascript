//Uma função que recebe dois parâmetros, base e expoente , e retorne a base elevada ao expoente

function exponenciacao(num1, num2){
   let res = Math.pow(num1,num2)
   return res
}

console.log(exponenciacao(7,2))
//Função que receba dois números e exiba o resto da divisão no console

console.log('----QS4----')

function divide(div, divisor){
   console.log(div %= divisor)
}

divide(8,3)

