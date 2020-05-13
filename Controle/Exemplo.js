//Exemplo de cálculo de Média Ponderada Eniac

function CalMedia(nota1, nota2, nota3, nota4) {
    const media = 'Media final: '
    cal = ((nota1 * 30 + nota2 * 15 + nota3 * 10 + nota4 * 45) / 100)
    console.log(media + cal)

}

CalMedia(10, 10, 10, 10)

const nome = texto => texto.toUpperCase()
console.log(`Ei...${nome('Alefe')} seu Lindão`)

console.log('-------Outro Exemplo-------')

const pessoa = {
    nome:  'Alefe',
    idade: 22,
    sexo: 'Masculino',
        endereco:{
            rua: 'nove',
            número: 84,
            bairro: 'Jardim silvestre'
        }
}

const{endereco:{rua,bairro}} = pessoa
console.log(rua,bairro)

const aum = texto => texto.toUpperCase()
console.log(`Aumente o tamanho para mim e...${aum('olá mundo')} TCHAMRAAAAAMMMM!`)

 function Media(nota){
    switch(Math.floor(nota)){
        case 10:
        case 9:
            console.log('Quadro de honra')
            break
        case 8:
        case 7:
        case 6:
            console.log('Aprovado')
            break
        case 5:
        case 4:
            console.log('Recuperação')
            break
        case 3:
        case 2:
        case 1:
        case 0:
            console.log('Reprovado')
            break
            default:
                console.log('Nota inválida')
    }
    console.log('Fim !!!')
}

Media(7)
Media(10)