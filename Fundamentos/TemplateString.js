const nome = 'Rebeca'
const conc = 'Olá ' + nome + '!'
const template = `  
Olá ${nome}!`
//Abre e fecha Crase quando uar o template de String
console.log(conc, template)

//Expressões

console.log(`1 + 1 = ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`ei... ${up('cuidado')}`) //Constante up que usando o toUpperCase converteu o texto para maiusculo
