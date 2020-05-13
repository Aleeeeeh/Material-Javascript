//While

let num = 1

while(num <= 10){
    console.log(`Contador = ${num}`)
    num++
}

console.log('-------Exemplo com For--------')

for(let i=1; i<=10; i++){
    console.log(`i = ${i}`)
}

console.log('------Exemplo percorrendo um vetor--------')

const notas = [5.5, 7.2, 8.1, 10]

for(i=0; i<notas.length; i++){
    console.log(`Notas = ${notas[i]}`)
}