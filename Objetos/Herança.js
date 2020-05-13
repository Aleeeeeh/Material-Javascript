//Um objeto criado aponta para um Object.prototype utilizado o __proto_ conseguimos enxergar isso
//Cadeia de protótipos (Prototype chain)

Object.prototype.atr0 = 'Z' //Não recomendado
const avo = {atr1: 'A'} //Aponta para o Object.Prototype e está no topo da hierarquia, senão houver o Object.prot..
const pai = {__proto__: avo, atr2: 'B'} //Pai está herdando do avo
const filho = {__proto__: pai, atr3: 'C'}//E o filho está herdando do pai
const irmao = {__proto__: pai, atr4: 'Y'}

console.log(irmao.atr3)//No caso procurou no pai, e tambem no avo e retornou undefined ja que que esse atr é de filho 

//Ele procura no pai, senão achar essa chave ele procura no avo até encontra, senao encontrar, retorna undefined
console.log(filho.atr1, filho.atr0)

const carro = {
    velAtual: 0,
    velMax: 200,
    acelerarMais(delta) {
        if (this.velAtual + delta <= this.velMax) {
            this.velAtual += delta
        } else {
            this.velAtual = this.velMax
        }
    },
    status() {
        return `${this.velAtual}Km/h de ${this.velMax}Km/h`
    }
}

const ferrari = {
    modelo: 'F40',
    velMax: 324 // shadowing ('Sobrescrever a velMax')
}

const volvo = {
    modelo: 'V40',
    status() {
        return `${this.modelo}: ${super.status()}` //Super para referenciar ao objeto de protótipo, no caso de carro
    }
}

//Com isso ferrari e volvo estará referenciando ao objeto carro
Object.setPrototypeOf(ferrari, carro)
Object.setPrototypeOf(volvo, carro)

console.log(ferrari)
console.log(volvo)
//Conseguimos chamar a função contida em carro graças ao setPrototypeOf declarada
volvo.acelerarMais(100)
console.log(volvo.status())

ferrari.acelerarMais(300)
console.log(ferrari.status())