function exercicio1(){
    let grupo = []
    let grupoCrescente = []
    let grupoDecrescente = []
    let contagem = 1

    while (contagem <= 5) {
        let n1 = Number(prompt(`Grupo ${contagem}, informe o primeiro valor:`))
        let n2 = Number(prompt(`Grupo ${contagem}, informe o segundo valor:`))
        let n3 = Number(prompt(`Grupo ${contagem}, informe o terceiro valor:`))
        let n4 = Number(prompt(`Grupo ${contagem}, informe o quarto valor:`))

        grupo.push(n1, n2, n3, n4)
        contagem++;
    }

    // Atribui o valor de grupo na variavél e utiliza o método sort para organizar
    grupoCrescente = [...grupo].sort((a, b) => a - b)
    grupoDecrescente = [...grupo].sort((a, b) => b - a)

    alert('Os números escritos foram: ' + grupo.join(', ') + '\n' +
        "Os números em ordem crescente ficam: " + grupoCrescente.join(', ') + "\n" +
        "Os números em ordem decrescente ficam: " + grupoDecrescente.join(', ')) // Alert só aceita um elemento
}
