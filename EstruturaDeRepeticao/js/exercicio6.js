function exercicio6(){
    let valorTotal = 0
    let transacaoPrazo = 0
    let transacaoVista = 0
    let contagem = 1

    while (contagem <= 2){
        let valorTransacao = Number(prompt(`Qual o valor da transação ${contagem}? `))
        valorTotal = valorTotal + valorTransacao
        let codigoTransacao = prompt(`Qual o código (P ou V) da transação ${contagem}? `)

        if (codigoTransacao == "P"){
            transacaoPrazo = transacaoPrazo + valorTransacao
        }

        else if (codigoTransacao == "V"){
            transacaoVista = transacaoVista + valorTransacao
        }

        else if (codigoTransacao != "V" || codigoTransacao != "P") {
            alert("Valor inválido")
            continue
        }

        contagem++
    }

    alert(`Valor total de transações a prazo: ${transacaoPrazo}\n
            Valor total de transações a vista: ${transacaoVista}\n
            Valor total de todas as transações: ${valorTotal}\n
            Por fim, o primeiro valor da prestação de todas as transações a prazo é: ${transacaoPrazo/3}`
        )
}