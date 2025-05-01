function exercicio1(){
    let conta = 1
    let soma = 0
    let satisfeito = 0
    let insatisfeito = 0

    while(conta <= 10){
        nota = Number(prompt(`Informe a nota de satisfação entre 0 a 10: ${conta}`))
        if (nota >= 8){
            satisfeito ++
        }
        else if (nota < 5){
            insatisfeito ++
        }
        soma = soma + nota
        conta ++
    }

    let media = soma / 10

    alert(`A média das notas foi: ${media}`)
    alert(`O número de pessoas satisfeitas foi: ${satisfeito}`)
    alert(`O número de pessoas insatisfeitas foi: ${insatisfeito}`)
}