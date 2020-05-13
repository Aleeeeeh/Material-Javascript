//JSON é um formato de dados, é de um formato textual, para o compartilhamento de dados entre sistemas
const obj = {a:1, b:2, c:3, soma(){return a + b + c}}
//Convertendo o objeto para JSON, note que ele ignora a função, pois o JSON é um formato de dados apenas
console.log(JSON.stringify(obj)) 

//Objeto gerado apartir de um JSON ou seja um formato textual
console.log(JSON.parse('{"a":1, "b":2, "c":3}')) //Formato de escrita do JSON
//JSON colocando String, arrays,booleanos e objetos
console.log(JSON.parse('{"a":1.7, "b": "STRING", "c": true, "d": {}, "e": []}'))
//Sempre na mesma linha
console.log(JSON.parse('{"nome": "Alefe","idade": 23,"legal": true,"filhos": [{"nome": "Alane","idade": 5}, {	"Esposa": "Thaylane Vitoria Ferreira da Silva",	"Idade": 21}]}'))

//JSON.org - Documentação do JSON  e JSON Validator praticamos a digitação de seu formato textual de dados