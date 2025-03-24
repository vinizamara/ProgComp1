function calcular(){
    // Recupera o valor da ação social digitado
    // Declaração de variável sem tipo

    let acaoSocial = document.getElementById("acaoSocial").value
    
    //Recupera o valor da homenagem digitado
    let homenagem = document.getElementById("homenagem").value

    //Vamos somar os valores
    let soma = Number(acaoSocial) + Number(homenagem)
    alert(soma)
}
