const funcs = []

for(var i=0; i < 10; i++){
    funcs.push(function(){ // Push para adicionar uma função no vetor(Incremetando valor dentro de vetor)
        console.log(i)
    })
}
//Exibe 10 porque está em uma variável e não let, e pelo fato de não ter escopo de função
funcs[2]()
funcs[8]()




