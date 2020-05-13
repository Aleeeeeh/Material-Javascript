//Break para e sai do bloco quando atendida a condição, o continue da sequencia até acabar a repetição

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//Qaundo o indice for igual a 5 do vetor ele para
for (x in nums) {
    if (x == 5) {
        break
    }
    console.log(`${x} = ${nums[x]}`)
}

console.log('----Exemplo com continue----')

for (y in nums) {
    if (y == 5) {
        continue //Ele interrompe depois passa para a próxima
    }
    console.log(`${y} = ${nums[y]}`)
}

console.log('----Exemplo com laço interno e externo----')
//Dar nome a um rótulo para conseguir acessar o laço externo

externo: for (a in nums){
    for (b in nums) {
        if (a == 2 && b == 3) break externo // Colocar break rotulado para que consiga acessar laço externo
        console.log(`par = ${a},${b}`)
    }
}

