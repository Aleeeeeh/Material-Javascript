//Enquanto foriN impera em cima de indices, o ForOf impera em cima de valores

//Percorrendo os valores
for (let letra of 'Cod3r'){
    console.log(letra)
}

//Percorrendo os indices, para pegar os valores seria assunto[i]
const assunto = ['map','filter','reduce']

for(let i in assunto){
    console.log(i)
}

//Mesmo exemplo com ForOf
for(let ecma of assunto){
    console.log(ecma)
}

//Instanciando o Map e atribuindo a uma constante
const code = new Map([
    ['map',{abordado:true}],
    ['set',{abordado:true}],
    ['promisse',{abordado:false}]
])
//Percorrendo e exibindo o array como um todo utilizando forOf
for(let ex of code){
    console.log(ex)
}

//Apenas as chaves, utilizando Keys()
for(let chave of code.keys()){
    console.log(chave)
}

//Apenas os valores
for(let valor of code.values()){
    console.log(valor)
}

//Chave e valor utilizando entries, com destruring pegaremos apenas os valores fora do vetor
for(let [ch,vl] of code.entries()){
    console.log(ch,vl)
}
//Percorrendo com forOf naa estrutura de Set
const alfa = new Set(['a','b','c'])
for(let y of alfa){
    console.log(y)
}