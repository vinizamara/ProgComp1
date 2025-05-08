function exercicio1(){
    let conta = 1
    let soma = 0
    let satisfeito = 0
    let insatisfeito = 0

    while(conta <= 10){
        nota = Number(prompt(`Participante ${conta}, informe a nota de satisfação entre 0 a 10:`))
        if (nota >= 8 && nota <= 10){
            satisfeito ++
        }
        else if (nota < 5 && nota >= 0){
            insatisfeito ++
        }
        else if (nota < 0 || nota > 10){
            alert(`Nota inválida`)
            continue // Volta para o início, sem incrementar conta
        }
        soma = soma + nota
        conta ++
    }

    let media = soma / 10

    alert(`A média das notas foi: ${media.toFixed(2)}`)
    alert(`O número de pessoas satisfeitas foi: ${satisfeito}`)
    alert(`O número de pessoas insatisfeitas foi: ${insatisfeito}`)
}