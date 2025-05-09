function exercicio2(){
    let preco = 5
    let ingressosVendidos = 120
    let despesas = 200
    let lucro =(ingressosVendidos * preco) - despesas
    let contagem = 0

    while (preco > 1){
        alert("Quando o preço do ingresso é: R$" + preco.toFixed(2) + "\n" +
            "A quantidade de ingressos vendidos é: " + ingressosVendidos + "\n" +
            "E o lucro máximo esperado é de: R$" + lucro.toFixed(2)
        )
        preco = preco - 0.5
        ingressosVendidos = ingressosVendidos + 26
        lucro =(ingressosVendidos * preco) - despesas
    }

}