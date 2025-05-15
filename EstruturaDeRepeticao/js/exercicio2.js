function exercicio2(){
    let preco = 5
    let ingressosVendidos = 120
    const despesas = 200
    let lucro =(ingressosVendidos * preco) - despesas
    let aux = ""

    //Variavéis para calculo de maior lucro
    let maiorLucro = 0
    let precoMaiorLucro = 0
    let ingressosVendidosMaiorLucro = 0

    while (preco >= 1){
        aux = aux + (
            "Preço do ingresso: R$" + preco.toFixed(2) + " - " +
            "Quantidade de ingressos vendidos: " + ingressosVendidos + " - " +
            "Lucro máximo esperado: R$" + lucro.toFixed(2) + "\n"
        )
        if (lucro > maiorLucro){
            maiorLucro = lucro
            precoMaiorLucro = preco
            ingressosVendidosMaiorLucro = ingressosVendidos
        }
        preco = preco - 0.5
        ingressosVendidos = ingressosVendidos + 26
        lucro = (ingressosVendidos * preco) - despesas
    }

    alert(aux)
    alert(`O preço do ingresso que deu o maior lucro foi ${precoMaiorLucro}, vendendo ${ingressosVendidosMaiorLucro} ingressos e rendendo R$${maiorLucro}`)

}
/*
        aux = aux + (
            "Quando o preço do ingresso é: R$" + preco.toFixed(2) + "\n" +
            "A quantidade de ingressos vendidos é: " + ingressosVendidos + "\n" +
            "E o lucro máximo esperado é de: R$" + lucro.toFixed(2) + "\n" + 
            "//////////" + "\n"
        )
*/
