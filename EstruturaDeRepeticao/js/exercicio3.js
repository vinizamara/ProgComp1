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

    let porcentagem1 = (faixaEtaria1 / 8) * 100

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