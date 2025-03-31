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
    let pontosKitSupli = 0 //conta os pontos do kit

    //Recupera quantidade de latas de suplemento avulsos
    let suplemento = document.getElementById("suplemento").value

    //Recupera a cor da equipe
    let equipe = document.getElementById("equipe").value
    if (equipe == "laranja"){
        // equipe é laranja
        if (kit >= 97 && suplemento >= 49){
            pontosKitSupli = 5000 + ((kit - 97) * 30) + ((suplemento - 49) * 15)
        }
        else if (kit >= 78){
            pontosKitSupli = 4000 + ((kit - 78) * 30) + ((suplemento - 39) * 15)
        }
        else if (kit >= 49){
            pontosKitSupli = 2500 + ((kit - 49) * 30) + ((suplemento - 25) * 15)
        }
        else if (kit >= 19){
            pontosKitSupli = 1000 + ((kit - 19) * 30)  + ((suplemento - 10) * 15)
        }
        else{
            pontosKitSupli = (kit * 30) + (suplemento * 15)
        }
    }
    else if(equipe == "preta"){
        // equipe é preta
        if (kit >= 103){
            pontosKitSupli = 5000 + ((kit - 103) * 30) + ((suplemento - 52) * 15)
        }
        else if (kit >= 82){
            pontosKitSupli = 4000 + ((kit - 82) * 30) + ((suplemento - 42) * 15)
        }
        else if (kit >= 52){
            pontosKitSupli = 2500 + ((kit - 52) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 21){
            pontosKitSupli = 1000 + ((kit - 21) * 30) + ((suplemento - 10) * 15)
        }
        else{
            pontosKitSupli = (kit * 30) + (suplemento * 15)
        }
    }
    else if(equipe == "roxa"){
        // equipe é roxa
        if (kit >= 102){
            pontosKitSupli = 5000 + ((kit - 102) * 30) + ((suplemento - 51) * 15)
        }
        else if (kit >= 82){
            pontosKitSupli = 4000 + ((kit - 82) * 30) + ((suplemento - 41) * 15)
        }
        else if (kit >= 51){
            pontosKitSupli = 2500 + ((kit - 51) * 30) + ((suplemento - 26) * 15)
        }
        else if (kit >= 20){
            pontosKitSupli = 1000 + ((kit - 20) * 30) + ((suplemento - 10) * 15)
        }
        else{
            pontosKitSupli = (kit * 30) + (suplemento * 15)
        }
    }
    else if(equipe == "verde"){
        // equipe é verde
        if (kit >= 88){
            pontosKitSupli = 5000 + ((kit - 88) * 30) + ((suplemento - 44) * 15)
        }
        else if (kit >= 70){
            pontosKitSupli = 4000 + ((kit - 70) * 30) + ((suplemento - 35) * 15)
        }
        else if (kit >= 44){
            pontosKitSupli = 2500 + ((kit - 44) * 30)  + ((suplemento - 22) * 15)
        }
        else if (kit >= 18){
            pontosKitSupli = 1000 + ((kit - 18) * 30) + ((suplemento - 9) * 15)
        }
        else{
            pontosKitSupli = (kit * 30) + (suplemento * 15)
        }
    }
    else if(equipe == "vermelha"){
        // equipe é preta
        if (kit >= 93){
            pontosKit = 5000 + ((kit - 93) * 30) + ((suplemento - 47) * 15)
        }
        else if (kit >= 74){
            pontosKit = 4000 + ((kit - 74) * 30) + ((suplemento - 38) * 15)
        }
        else if (kit >= 47){
            pontosKit = 2500 + ((kit - 47) * 30)  + ((suplemento - 24) * 15)
        }
        else if (kit >= 19){
            pontosKit = 1000 + ((kit - 19) * 30) + ((suplemento - 9) * 15)
        }
        else{
            pontosKit = (kit * 30) + (suplemento * 15)
        }
    }
    alert(pontosKit, pontosSuplemento)

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

    //Vamos somar os valores, defininbdo eles como numbers
    //Multiplicação converte automaticamente um arquivo em number
    // Number(acaoSocial) + Number(homenagem) + (2 * Number(leite))

    //Devolve o resultado para o html
    //innerHTML passa os valores parao html
    document.getElementById("soma").innerHTML = soma.toFixed(2)
}
