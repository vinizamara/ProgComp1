function exercicio4(){
    let multiplo = Number(prompt("Insira o número que deseja ver a tabuada: "))
    let numero = 0
    let multiplicacao
    let aux = `A tabuada do ${multiplo} é:\n`

    while(numero <= 10){
        aux = aux + (`${multiplo} x ${numero} = ${multiplo*numero}\n`)
        numero++
    }
    
    alert(aux)
}