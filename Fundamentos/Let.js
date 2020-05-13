var numero = 1
{
    let numero = 2
    console.log('Dentro = ',numero)
}

console.log('Fora = ',numero)//Mesmo com mesmo numero mas o let está dentro de um escopo

//Let não consegue ser acessada fora do escopo de bloco, ja var sim
