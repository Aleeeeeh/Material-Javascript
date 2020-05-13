const escola = "cod3r"

console.log(escola.charAt(4)) // 4° letra da palavra
console.log(escola.charCodeAt(3))// Número 51 no unicode
console.log(escola.indexOf('d')) //Mostrar o indice o "d" está em segundo no indice

console.log(escola.substring(1)) //Apartir do em diante
console.log(escola.substring(0, 3)) //Recorta do 0 a 2 no indice

console.log('Escola '.concat(escola).concat('!'))
console.log('Escola '+ escola + ('!'))

console.log(escola.replace(3, 'e')) //Substituiu o caracter da 3°posição pela letra 'e', ou seja 3 pelo 'e'

console.log('Ana, Maria, Pedro'.split(','))