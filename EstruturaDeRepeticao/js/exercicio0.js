function exercicio0(){
    /* Recolhimento de Nota */
    
    //Conta de 1 a 6
    let conta = 1
    let nota
    let soma = 0

    //Exemplo de estrutura de repetição
    while (conta <= 6){
        nota = Number(prompt(`Informe a nota ${conta}`))
        soma = soma + nota
        conta ++ // conta = conta + 1
    }

    // //Soma das notas
    // let soma = nota1 + nota2 + nota3 + nota4 + nota5 + nota6
    let media = soma / 6

    //Mostra o resultado
    alert(`A média das notas inseridas é ${media.toFixed(1)}`)
}
