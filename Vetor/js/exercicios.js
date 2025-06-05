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

function exercicio3(){
    let vet = [], quantidadeGostouMuito = 0, quantidadeGostou = 0, quantidadeNaoGostou = 0, porcentagemNaoGostou = 0
    for(let i = 0; i < 10; i++){
        do{
            vet[i] = Number(prompt(`Informe o ${i+1}° número: `))
        }while(vet[i] != 3 || vet[i] != 2 || vet[i] != 1)
    }

    for(let i = 0; i < 10; i++){
        if (vet[i] == 1){
            quantidadeGostouMuito++
        }
        if (vet[i] == 2){
            quantidadeGostou++
        }
        if (vet[i] == 3){
            quantidadeNaoGostou++
        }
    }

    if (quantidadeNaoGostou != 0){
        porcentagemNaoGostou = (quantidadeNaoGostou / 10) * 100
    }

    alert(`
    Quantidade de pessoas que gostaram muito: ${quantidadeGostouMuito} \n
    Quantidade de pessoas que gostaram: ${quantidadeGostou} \n
    Quantidade de pessoas que não gostaram: ${quantidadeNaoGostou} \n
    Porcentagem de pessoas que não gostaram: ${porcentagemNaoGostou.toFixed(2)}
    `)
}

function exercicio4(){
    let vet = [], vetMedia = [], quantidadeMedia = 0, soma = 0
    for(let i = 0; i < 8; i++){
        do{
            vet[i] = Number(prompt(`Informe o ${i+1}° número: `))
        }while(vet[i] < 0)
        soma += vet[i]
    }
    let media = soma/vet.length
    for(let i = 0; i < 8; i++){
        if (vet[i] > media){
            vetMedia.push(vet[i])
            quantidadeMedia++
        }
    }

    alert(`
    Vetor digitado: ${vet} \n
    Média calculada: ${media} \n
    Vetor maior que a média: ${vetMedia.toFixed(2)} \n
    Quantidade de números acima da média: ${quantidadeMedia}
    `)
}

function exercicio5(){
    let vet = [], maiores = 0, menores = 0, iguais = 0
    for(let i = 0; i < 10; i++){
        vet[i] = Number(prompt(`Informe o ${i+1}° número: `))
    }
    for(let i = 1; i < 10; i++){
        if (vet[0] < vet[i]){
            maiores++
        }
        else if (vet[0] > vet[i]){
            menores++
        }
        else if (vet[0] == vet[i]){
            iguais++
        }
    }
    alert(`
    O primeiro número do vetor era: ${vet[0]} \n
    Quantidade de números maiores: ${maiores} \n
    Quantidade de números menores: ${menores} \n
    Quantidade de números iguais: ${iguais} \n
    `)
}

function exercicio6(){
    let vet = [], aparece = "Não", posicao = [], quantidade = 0
    for(let i = 0; i < 12; i++){
        vet[i] = Number(prompt(`Informe o ${i+1}° número: `))
    }

    let numeroBuscado = Number(prompt(`Digite o número a ser buscado: `))

    for(let i = 0; i < 12; i++){
        if (numeroBuscado == vet[i]){
            aparece = "Sim"
            posicao.push(i)
            quantidade++
        }
    }

    alert(`
    O número "${numeroBuscado}" aparece no vetor: ${vet}? ${aparece} \n
    Nas posições: ${posicao} \n
    Ela aparece: ${quantidade} vezes
    `)
}
