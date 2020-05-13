const tabela = [{
     time:'São paulo',
     gols:40,
    },
    {
        time: 'Corinthians',
        gols: 40
    },
    {
        time: 'Palmeiras',
        gols:20
    }
]

const grande = tabela.reduce((sum, gols) =>{
    return sum + gols.gols
},0)

console.log(grande)

