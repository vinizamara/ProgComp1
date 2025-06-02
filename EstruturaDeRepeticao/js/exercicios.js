function exercicio0(){
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
}

function exercicio2(){
    let preco = 5
    let ingressosVendidos = 120
    const despesas = 200
    let lucro =(ingressosVendidos * preco) - despesas
    let aux = ""

    //Variavéis para calculo de maior lucro
    let maiorLucro = 0
    let precoMaiorLucro = 0
    let ingressosVendidosMaiorLucro = 0

    while (preco >= 1){
        aux = aux + (
            "Preço do ingresso: R$" + preco.toFixed(2) + " - " +
            "Quantidade de ingressos vendidos: " + ingressosVendidos + " - " +
            "Lucro máximo esperado: R$" + lucro.toFixed(2) + "\n"
        )
        if (lucro > maiorLucro){
            maiorLucro = lucro
            precoMaiorLucro = preco
            ingressosVendidosMaiorLucro = ingressosVendidos
        }
        preco = preco - 0.5
        ingressosVendidos = ingressosVendidos + 26
        lucro = (ingressosVendidos * preco) - despesas
    }

    alert(aux)
    alert(`O preço do ingresso que deu o maior lucro foi ${precoMaiorLucro}, vendendo ${ingressosVendidosMaiorLucro} ingressos e rendendo R$${maiorLucro}`)


    /*
        aux = aux + (
            "Quando o preço do ingresso é: R$" + preco.toFixed(2) + "\n" +
            "A quantidade de ingressos vendidos é: " + ingressosVendidos + "\n" +
            "E o lucro máximo esperado é de: R$" + lucro.toFixed(2) + "\n" + 
            "//////////" + "\n"
        )
    */
}

function exercicio3(){
    let contagem = 1
    let faixaEtaria1 = 0
    let faixaEtaria2 = 0
    let faixaEtaria3 = 0
    let faixaEtaria4 = 0
    let faixaEtaria5 = 0

    while(contagem <= 8){
        let idade = Number(prompt(`Qual a idade da pessoa ${contagem}? `))

        if (idade <= 15 && idade >= 0){
            faixaEtaria1++
        }
        else if(idade >= 16 && idade <= 30){
            faixaEtaria2++
        }
        else if(idade >= 31 && idade <= 45){
            faixaEtaria3++
        }
        else if(idade >= 46 && idade <= 60){
            faixaEtaria4++
        }
        else if(idade >= 61){
            faixaEtaria5++
        }
        else{
            alert(`Idade inválida, tente novamente`)
            continue
        }

        contagem++;
    }

    alert("Aquntidade de pessoas em cada faixa etária foi: " + "\n" +
        "1°: " + faixaEtaria1 + "\n" +
        "2°: " + faixaEtaria2 + "\n" +
        "3°: " + faixaEtaria3 + "\n" +
        "4°: " + faixaEtaria4 + "\n" +
        "5°: " + faixaEtaria5
    )
    alert("A porcentagem de pessoas na 1° faixa etária foi: " + (faixaEtaria1 / 8) * 100 + "%" + "\n" +
        "A porcentagem de pessoas na 5° faixa etária foi: " + (faixaEtaria5 / 8) * 100 + "%"
    )
}

function exercicio4(){
    let multiplo = Number(prompt("Insira o número que deseja ver a tabuada: "))
    let numero = 0
    let aux = `A tabuada do ${multiplo} é:\n`

    while(numero <= 10){
        aux = aux + (`${multiplo} x ${numero} = ${multiplo*numero}\n`)
        numero++
    }
    
    alert(aux)

    /*
    Usando for:
        for (let numero = 0; conta <= 10; numero++){

        }
    */
}

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

    /*
    Usando um for:
        for (let multiplo = 1; multiplo <= 10; multiplo++){
            let aux = `A tabuada do ${multiplo} é:\n`
            for (let numero = 0; numero <= 10; numero++){
                aux = aux + (`${multiplo} x ${numero} = ${multiplo*numero}\n`)
            }
        }
        alert(aux)
        aux = `A tabuada do ${multiplo} é:\n`
        numero = 0
    */
}

function exercicio6(){
    let valorTotal = 0
    let transacaoPrazo = 0
    let transacaoVista = 0
    let contagem = 1

    while (contagem <= 15){
        let valorTransacao = Number(prompt(`Qual o valor da transação ${contagem}? `))
        valorTotal = valorTotal + valorTransacao
        let codigoTransacao = prompt(`Qual o código (P ou V) da transação ${contagem}? `).toUpperCase

        if (codigoTransacao == "P" /*|| codigoTransacao == "p"*/){
            transacaoPrazo = transacaoPrazo + valorTransacao
        }

        else if (codigoTransacao == "V" /*|| codigoTransacao == "v"*/){
            transacaoVista = transacaoVista + valorTransacao
        }

        else if (codigoTransacao != "V" || codigoTransacao != "P" /*|| codigoTransacao != "v" || codigoTransacao != "p"*/) {
            alert("Valor inválido")
            continue
        }

        contagem++
    }

    alert(`Valor total de transações a prazo: ${transacaoPrazo}\n
            Valor total de transações a vista: ${transacaoVista}\n
            Valor total de todas as transações: ${valorTotal}\n
            Por fim, o primeiro valor da prestação de todas as transações a prazo é: ${transacaoPrazo/3}`
    )

    /*
    Usando for:
        for (let contagem = 1; contagem <= 15; contagem++) {
            let valorTransacao = Number(prompt(`Qual o valor da transação ${contagem}? `));
            valorTotal += valorTransacao;
            
            let codigoTransacao = prompt(`Qual o código (P ou V) da transação ${contagem}? `);

            if (codigoTransacao === "P" || codigoTransacao === "p") {
                transacaoPrazo += valorTransacao;
            } else if (codigoTransacao === "V" || codigoTransacao === "v") {
                transacaoVista += valorTransacao;
            } else {
                alert("Valor inválido");
                contagem--; // desfaz a iteração inválida
                continue;
            }
        }
    Foi comentado na aula sobre utilizar o do{}while() - Faz pelo menos uma vez a repetição
    */
}

function exercicio7(){
    let idade, altura, peso, quantidadeIdadeSuperior = 0, totalAltura = 0, quantidadeAltura = 0, quantidadePeso = 0

    for(i = 1; i <= 5; i++){
        do{
            idade = Number(prompt(`Quantos anos você tem, pessoa ${i}?`))
        } while(idade <= 0)
        if (idade > 50){
            quantidadeIdadeSuperior++
        }

        do{
            altura = Number(prompt(`Quantos metros você tem, pessoa ${i}?`))
        } while(altura <= 0)
        if (idade >= 10 && idade <= 20){
            totalAltura += altura
            quantidadeAltura++
        }

        do{
            peso = Number(prompt(`Quantos kilos você pesa, pessoa ${i}?`))
        } while(peso <= 0)
        if (peso < 40){
            quantidadePeso++
        }
    }

    let mediaAltura = totalAltura/quantidadeAltura

    alert(`
    A quantidade de pessoas com idade superior a 50 anos é: ${quantidadeIdadeSuperior} \n
    Média de altura de pessoas entre 10 e 20 anos: ${mediaAltura.toFixed(2)} \n
    Porcentagem de pessoas com peso menor que 40kg: ${(quantidadeAltura/5)*100}%
    `)
}

function exercicio8(){
    let idade, altura, peso, corOlho, corCabelo, 
    quantidadePeso = 0, idadeQuantidade = 0, idadeTotal = 0, olhoAzul = 0, ruivoSemOlhoAzul = 0, 
    olhoAzulPorcentagem = 0, idadeMedia = 0

    for(i = 1; i <= 6; i++){
        do{
            idade = Number(prompt(`Quantos anos você tem, pessoa ${i}?`))
        } while(idade <= 0)

        do{
            altura = Number(prompt(`Quantos metros você tem, pessoa ${i}?`))
        } while(altura <= 0)
        if (altura < 1.50){
            idadeQuantidade++
            idadeTotal += idade
        }

        do{
            peso = Number(prompt(`Quantos kilos você pesa, pessoa ${i}?`))
        } while(peso <= 0)
        if (altura > 1.50 && peso < 60){
            quantidadePeso++
        }

        do{
            corOlho = String(prompt(`Qual a cor dos seus olhos, pessoa ${i}?`)).toUpperCase()
        } while(corOlho != "A" && corOlho != "P" && corOlho != "V" && corOlho != "C")
        if (corOlho == "A"){
            olhoAzul++
        }

        do{
            corCabelo = String(prompt(`Qual a cor do seu cabelo, pessoa ${i}?`)).toUpperCase()
        } while(corCabelo != "P" && corCabelo != "C" && corCabelo != "L" && corCabelo != "R")
        if(corCabelo == "R" && corOlho != "A"){
            ruivoSemOlhoAzul++
        }
    }

    if (idadeQuantidade > 0) {
        idadeMedia = idadeTotal / idadeQuantidade
    }
    if (olhoAzul > 0){
        olhoAzulPorcentagem = ((olhoAzul/6) * 100).toFixed(2)
    }

    alert(`
    A quantidade de pessoas com idade superiror a 50 anos e peso inferior a 60kg é: ${quantidadePeso} pessoas \n
    A média de idade de pessoas com altura inferior a 1,50 m é: ${idadeMedia} anos \n
    A porcentagem de pessoas que possuem olhos azuis é: ${olhoAzulPorcentagem} % \n
    A quantidade de pessoas ruivas que não possuem olhos azuis é: ${ruivoSemOlhoAzul} pessoas
    `)
}

function exercicio9(){
    let idade, altura, peso, somaIdade = 0, quantidadePesoAltura = 0, quantidadeAltura190 = 0, 
    quantidadeIdadeAltura190 = 0, porcentagemAltura190 = 0

    for(i = 1; i <= 10; i++){
        do{
            idade = Number(prompt(`Quantos anos você tem, pessoa ${i}?`))
        } while(idade <= 0)
        somaIdade += idade

        do{
            altura = Number(prompt(`Quantos metros você tem, pessoa ${i}?`))
        } while(altura <= 0)

        do{
            peso = Number(prompt(`Quantos kilos você pesa, pessoa ${i}?`))
        } while(peso <= 0)
        
        if (peso > 90 && altura < 1.50){
            quantidadePesoAltura++
        }
        if(altura > 1.90){
            quantidadeAltura190++
            if(idade >= 10 && idade <= 30){
                quantidadeIdadeAltura190++
            }
        }
    }

    if (quantidadeIdadeAltura190 > 0 && quantidadeAltura190 > 0){
        porcentagemAltura190 = quantidadeIdadeAltura190/quantidadeAltura190 * 100
    }

    alert(`
        A média da idade das 10 pessoas é: ${(somaIdade/10)} anos \n
        A quantidade de pessoas com mais de 90kg e menos de 1.50 metros de altura é: ${quantidadePesoAltura} \n
        A porcentagem de pessoas entre 10 e 30 anos que estão entre as pessoas com 1.90 metros de altura é: 
        ${porcentagemAltura190.toFixed(2)}%
    `)
}

function exercicio10(){
    let somaPar = 0, somaPrimos = 0, numero, aux, divisivel = 0

    for(i = 0; i < 10; i++){
        do{
        numero = Number(prompt('Forneça o valor do número:'))
        }while(numero < 1)
        if(numero % 2 == 0){
            somaPar += numero
        }
        for(aux = numero - 1; aux > 1; aux--){
            if(numero % aux == 0){
                divisivel++
            }
        }
        if (divisivel == 0){
            somaPrimos += numero
        }
        divisivel = 0
    }

    alert(`Soma dos números pares digitados: ${somaPar} \n
        Soma dos números primos digitados: ${somaPrimos}`)
}
