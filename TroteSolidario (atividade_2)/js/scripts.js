function calcular(){
    // Recupera o valor da ação social digitado
    // Declaração de variável sem tipo
    let soma = 0

    let acaoSocial = document.getElementById("acaoSocial").value
    soma += Number(acaoSocial)
    
    //Recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value
    soma += Number(homenagem)

    //Recupera a quantidade de litros de leite
    let leite = document.getElementById("leite").value
    soma += (2 * Number(leite))

    //Recupera a quantidade de kits avulsos
    let kitAvulso = document.getElementById("kitAvulso").value
    soma += Number(30 * Number(kitAvulso))

    //Recupera quantidade de latas de suplemento avulsos
    let suplementoAvulso = document.getElementById("suplementoAvulso").value
    soma += Number(15 * Number(suplementoAvulso))

    //Vamos somar os valores, defininbdo eles como numbers
    //Multiplicação converte automaticamente um arquivo em number
    // Number(acaoSocial) + Number(homenagem) + (2 * Number(leite))
    //Devolve o resultado para o html
    //innerHTML passa os valores parao html
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}
