function exercicio1(){
    let vet = [], numPar = [], numImpar = []
    for(let i = 0; i < 6; i++){
        vet.push(Number(prompt(`Informe o ${i+1}º número: `)))
    }

    for(let i = 0; i < 6; i++){
        if (vet[i] % 2 == 0){
            numPar.push(vet[i])
        }
        if(vet[i] % 2 == 1){
            numImpar.push(vet[i])
        }
    }

    alert(
        `A quantidade de números pares digitados foi: ${numPar.length}, \n
        sendo eles: ${numPar} \n
        A quantidade de números ímpares digitados foi: ${numImpar.length}, \n
        sendo eles: ${numImpar}`
    )
}

//Ler um vetor de 10 elementos, some 10 nos elementos das posições pares multiplique por 5 numeros impares.
function exercicio2(){
    let vet = [], numPar = [], numImpar = []
    for(let i = 0; i < 10; i++){
        vet.push(Number(prompt(`Informe o ${i+1}º número: `)))
    }

    for(let i = 0; i < 10; i++){
        if (vet[i] % 2 == 0){
            numPar.push(vet[i]+10)
        }
        if(vet[i] % 2 == 1){
            numImpar.push(vet[i]*5)
        }
    }

    alert(
        `A quantidade de números pares digitados foi: ${numPar.length}, \n
        sendo eles: ${numPar} \n
        A quantidade de números ímpares digitados foi: ${numImpar.length}, \n
        sendo eles: ${numImpar}`
    )
}
