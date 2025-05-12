//Algoritmo de Ordenação
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
/*
Outra forma de fazer o algoritmo de ordenação:
    let conta = 1
    let a = Number(prompt(`Informe o valor de A:`))
    let b = Number(prompt(`Informe o valor de B:`))
    let c = Number(prompt(`Informe o valor de C:`))
    let d = Number(prompt(`Informe o valor de D:`))
    while (conta <= 3){
        if (a > b){
            aux = a; a = b; b = aux;
        }
        if (b > c){
            aux = b; b = c; c = aux;
        }
        if (c > d){
            aux = c; c = d; d = aux;
        }
        conta ++
    }
    alert("Ordem crescente: "+ a + b + c + d)
    alert("Ordem decrescente: "+ d + c + b + a)
*/

