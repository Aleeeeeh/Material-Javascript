const funcs = []

for(let i=0; i < 10; i++){
    funcs.push(function(){ // Push para adicionar uma função no vetor(Incrementando valor dentro de vetor)
        console.log(i)
    })
}

//Exibe normalmente o indice do array pois o let respeita o escopo da função
funcs[2]()
funcs[8]()