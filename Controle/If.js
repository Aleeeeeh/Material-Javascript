function soBoaNoticia(nota){
    if(nota >= 7){
        console.log("Aprovado com Nota: " + nota)
    }
}

soBoaNoticia(8.1)
soBoaNoticia(6.1)

//Se o valor for verdadeiro será exibido

function seForVerdadeiroEuFalo(valor){
    if(valor){
        console.log('É Verdadeiro...' + valor)
    }
}

seForVerdadeiroEuFalo(1)
seForVerdadeiroEuFalo(0) // 0 é o único número falso
seForVerdadeiroEuFalo(null) //Tambem o NaN, undefined etc...
seForVerdadeiroEuFalo(' ') //String mesmo vazia é verdadeiro
