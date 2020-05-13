//Receba 3 argumentos relacionados aos comprimentos do triangulo, e retorne sua classificação

function Triangulo(a, b, c){
    if(a === b && b === c){
        return 'Equilatero'
    }else if(a === b || b == c || a == c){
        return 'Isósceles'
    }else{
        return 'Escaleno'
    }
}

console.log(Triangulo(3,2,3))
console.log(Triangulo(3,3,3))
console.log(Triangulo(2,5,7))

