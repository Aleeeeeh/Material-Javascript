//A diferença do map para o objeto é que a chave no objeto é tido como um literal, e o map é tido como uma função, um 
//número ou até mesmo um objeto

const tecnologias = new Map()
tecnologias.set('react',{framework:false}) //Set usado para modificar
tecnologias.set('angular',{framework: true})

//Forma errada de exibir através da estrutura Map
console.log(tecnologias.react)
console.log(tecnologias.get('react')) //Acrescentando .framework irá exibir apenas true or false

//Criando Array, Lembrando que é com base em chave e valor assim como no objeto, porém abaixo veremos um function como chave
//e uma string como valor

const chavesVariadas = new Map([
    [function (){}, 'Function'],
    [{}, 'Objeto'],
    [123, 'Número']
])
//Percorrendo o vetor, exibirá as chaves e valores do array
chavesVariadas.forEach((ch,vl) => {
    console.log(ch,vl)
})

//Has Mostra se um elemento está presente no Map,  o size mostra quantos elementos temos dentro do map
console.log(chavesVariadas.has(123))
chavesVariadas.delete(123)
console.log(chavesVariadas.has(123))
console.log(chavesVariadas.size)

//Modificando valor, ou até adicionando chave ou valores
chavesVariadas.set(123,'b') //123 é a chave no caso irmos mudar o valor acompanhada a essa chave
chavesVariadas.set(123,'c')
chavesVariadas.set(456,'c')//Dois valores C e a chave não aceita repetição por isso criamos outra chave 456
console.log(chavesVariadas)