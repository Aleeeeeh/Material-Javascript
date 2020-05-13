//Promise é uma promessa, usada quando queremos ter um processamento assicrono, teremos dois parÂmetros uma se a promise
//foi resolvida ou se ela foi rejeitada

function falarDepoisDe(segundos,frase,teste){
    return new Promise((resolve, reject) => { //Promisse params resolver ou rejeitar
        setTimeout(()=>{ //SetTimeOut depois de certo tempo como a ser executado
            resolve(frase)  
        }, segundos * 1000) //Segundos * os milisegundos da função, resultado será em segundos
    })
}

//Then é quando uma promise ela é resolvida, e detalhe que podemos encadear o then como no exemplo
//Catch usamos para tratar um erro ou seja o reject
falarDepoisDe(3, 'Que Legal!').then((frase)=> frase.concat('?!?')).then(outraFrase => console.log(outraFrase))
