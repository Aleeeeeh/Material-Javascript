function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2 // Operador OU
    const comprarTv50 = trabalho1 && trabalho2 // Operador E
    //Const comprarTV32 = !!(trabalho1 ^ trabalho2) //Bitwise xor
    const comprarTv32 = trabalho1 != trabalho2 // Melhor forma para usar xor(OU especial)
    const manterSaudavel = !comprarSorvete
    return {comprarSorvete, comprarTv50, comprarTv32,manterSaudavel}
}

console.log(compras(true, true))
console.log('--------Exemplo2----------')
console.log(compras(true,false))
console.log('--------Exemplo3----------')
console.log(compras(false, false))