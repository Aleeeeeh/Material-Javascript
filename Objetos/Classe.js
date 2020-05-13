//Classe é uma função, Lembre-se que toda classe começa com letra maiuscula
class Lancamentos{
    constructor(nome = 'Genérico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes,ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = [] //Inicializamos um array
    }
    addLancamentos(...lancamentos){//Paramentros irá receber no caso nome e valor
    //Para cada elemtento contido em lancamentos, adicione no nosso array elementos
    lancamentos.forEach(l => this.lancamentos.push(l)) //l é var temporaria representa os conteudo contidos nos lancamentos
    }
//Irá percorrer os lancamentos e adicionar a variavel valor consolidado e retornar o resultado
    sumario(){
        let valorConsolidado = 0
   //Para todo lancamento contido em l, adicione na variavel let valorConsolidado     
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}
//Intanciando da classe Lancamentos, e atribuindo o nome e o valor
const salario = new Lancamentos('Salario', 45000)
const contaDeLuz = new Lancamentos('Luz', -220)

//Instanciando e tambem herdando as funções, pegando nome e valor e adc ao vetor, depois em sumario adicionando tudo 
//a variável valorConsolidado e retornado o resultado no exemplo 45000 - 220
const contas = new CicloFinanceiro(6, 2020)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas)
console.log(`Restante do salário do mês: ${contas.sumario()}`)