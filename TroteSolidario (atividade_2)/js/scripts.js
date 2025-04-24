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
    let kit = Number(document.getElementById("kit").value)

    //Recupera quantidade de latas de suplemento avulsos
    let suplemento = document.getElementById("suplemento").value

    let pontosKitSupli = 0 //conta os pontos do kit

    //Recupera a cor da equipe para cálculo do suplemento e do kit alimentação
    let equipe = document.getElementById("equipe").value
    if (equipe == "laranja"){
        // equipe é laranja
        if (kit >= 97 && suplemento >= 49){
            pontosKitSupli = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78 && suplemento >= 39){
            pontosKitSupli = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49 && suplemento >= 25){
            pontosKitSupli = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19 && suplemento >= 10){
            pontosKitSupli = 1000 + ((kit - 19) * 30)  + ((suplemento - 10) * 15)
        }
        else {
            pontosKitSupli = (kit * 30) + (suplemento * 15)
        }
    }
    else if(equipe == "preta"){
        // equipe é preta
        if (kit >= 103 && suplemento >= 52){
            pontosKitSupli = 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if (kit >= 82 && suplemento >= 42){
            pontosKitSupli = 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
        }
        else if (kit >= 52 && suplemento >= 26){
            pontosKitSupli = 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21 && suplemento >= 10){
            pontosKitSupli = 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
        }
        else {
            pontosKitSupli = (kit * 30) + (suplemento * 15)
        }
    }
    else if(equipe == "roxa"){
        // equipe é roxa
        if (kit >= 102 && suplemento >= 51){
            pontosKitSupli = 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15)
        }
        else if (kit >= 82 && suplemento >= 41){
            pontosKitSupli = 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15)
        }
        else if (kit >= 51 && suplemento >= 26){
            pontosKitSupli = 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 20 && suplemento >= 10){
            pontosKitSupli = 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15)
        }
        else {
            pontosKitSupli = (kit * 30) + (suplemento * 15)
        }
    }
    else if(equipe == "verde"){
        // equipe é verde
        if (kit >= 88 && suplemento >= 44){
            pontosKitSupli = 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15)
        }
        else if (kit >= 70 && suplemento >= 35){
            pontosKitSupli = 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15)
        }
        else if (kit >= 44 && suplemento >= 22){
            pontosKitSupli = 2500 + ((kit - 44) * 30)  + ((suplemento - 22) * 15)
        }
        else if (kit >= 18 && suplemento >= 9){
            pontosKitSupli = 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15)
        }
        else {
            pontosKitSupli = (kit * 30) + (suplemento * 15)
        }
    }
    else if(equipe == "vermelha"){
        // equipe é preta
        if (kit >= 93 && suplemento >= 47){
            pontosKitSupli = 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15)
        }
        else if (kit >= 74 && suplemento >= 38){
            pontosKitSupli = 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15)
        }
        else if (kit >= 47 && suplemento >= 24){
            pontosKitSupli = 2500 + ((kit - 47) * 30)  + ((suplemento - 24) * 15)
        }
        else if (kit >= 19 && suplemento >= 9){
            pontosKitSupli = 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15)
        }
        else {
            pontosKitSupli = (kit * 30) + (suplemento * 15)
        }
    }
    soma += pontosKitSupli

    let doacaoSangue = document.getElementById("doacaoSangue").value
    let pontosSangue = 0
    //Recupera a cor da equipe para cálculo da doação de sangue
    if (equipe == "laranja"){
        // equipe é laranja
        if (doacaoSangue >= 49){
            pontosSangue = 2500 + ((doacaoSangue - 49) * 20)
        }
        else {
            pontosSangue = doacaoSangue * 20
        }
    }
    else if(equipe == "preta"){
        // equipe é preta
        if (doacaoSangue >= 52){
            pontosSangue = 2500 + ((doacaoSangue - 52) * 20)
        }
        else {
            pontosSangue = doacaoSangue * 20
        }
    }
    else if(equipe == "roxa"){
        // equipe é roxa
        if (doacaoSangue >= 51){
            pontosSangue = 2500 + ((doacaoSangue - 51) * 20)
        }
        else {
            pontosSangue = doacaoSangue * 20
        }
    }
    else if(equipe == "verde"){
        // equipe é verde
        if (doacaoSangue >= 44){
            pontosSangue = 2500 + ((doacaoSangue - 44) * 20)
        }
        else {
            pontosSangue = doacaoSangue * 20
        }
    }
    else if(equipe == "vermelha"){
        // equipe é vermelha
        if (doacaoSangue >= 47){
            pontosSangue = 2500 + ((doacaoSangue - 47) * 20)
        }
        else {
            pontosSangue = doacaoSangue * 20
        }
    }
    soma += pontosSangue

    //Soma dos outros possiveis produtos pontuadores
    let pacoteArroz5kg = document.getElementById("pacoteArroz5kg").value
    soma += Number(5 * Number(pacoteArroz5kg))

    let pacoteArroz1kg = document.getElementById("pacoteArroz1kg").value
    soma += Number(1 * Number(pacoteArroz1kg))

    let pacoteFeijao2kg = document.getElementById("pacoteFeijao2kg").value
    soma += Number(2 * Number(pacoteFeijao2kg))

    let pacoteFeijao1kg = document.getElementById("pacoteFeijao1kg").value
    soma += Number(pacoteFeijao1kg)

    let pacoteMacarrao = document.getElementById("pacoteMacarrao").value
    soma += Number(0.5 * Number(pacoteMacarrao))

    let oleo = document.getElementById("oleo").value
    soma += Number(oleo)

    //Soma das atividades noturnas:
    let mascote = document.getElementById("mascote").value
    soma += Number(mascote)

    let caracterizacaoAnimacao = document.getElementById("caracterizacaoAnimacao").value
    soma += Number(caracterizacaoAnimacao)

    let atividadesRecreativas = document.getElementById("atividadesRecreativas").value
    soma += Number(atividadesRecreativas)

    let registroVisual = document.getElementById("registroVisual").value
    soma += Number(registroVisual)

    //Vamos somar os valores, defininbdo eles como numbers
    //Multiplicação converte automaticamente um arquivo em number
    // Number(acaoSocial) + Number(homenagem) + (2 * Number(leite))

    //Devolve o resultado para o html
    //innerHTML passa os valores parao html
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}
