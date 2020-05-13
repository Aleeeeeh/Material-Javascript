Number.prototype.entre = function(inicio, fim){
    return this >= inicio && this <= fim //This aponta para função Number ou seja o valores são numeros
}
//A função 'entre' serve para ja nos dar os parametros de dois valores numericos entre um inicio e um fim
const ImprimirResultado = function(nota){
    if(nota.entre(9, 10)){
        console.log('Quadro de Honra')
    } else if (nota.entre(7, 8.99)){
        console.log('Aprovado')
    } else if(nota.entre(4, 6.99)){
        console.log('Recuperação')
    } else if(nota.entre(0, 3.99)){
        console.log('Reprovado')
    } else{
        console.log('Nota Inválida')
    }
    console.log('Fim')
}

ImprimirResultado(10)
console.log('----------')
ImprimirResultado(7.2)
console.log('----------')
ImprimirResultado(4.5)
console.log('-----------')
ImprimirResultado(2.5)
console.log('------------')
ImprimirResultado(-1)
console.log('------------')
ImprimirResultado(1)
