function rand([min = 0, max = 1000]){
    if(min > max) [min, max] = [max, min] // Irá inverter minimo para o máximo
    const valor = Math.random() * (max -  min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40])) // Exibir numeros randomicos entre 50 e 40
console.log(rand([992])) //Tendo como número minimo o 992
console.log(rand([]))// pegar o minimo e o maximo declarado lá em cima