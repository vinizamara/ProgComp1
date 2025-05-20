function exercicio5(){
    let multiplo = 1
    let numero = 0

    while (multiplo <= 10){
        let aux = `A tabuada do ${multiplo} é:\n`
        while(numero <= 10){
            aux = aux + (`${multiplo} x ${numero} = ${multiplo*numero}\n`)
            numero++
        }
        alert(aux)
        aux = `A tabuada do ${multiplo} é:\n`
        numero = 0
        multiplo++
    }
}