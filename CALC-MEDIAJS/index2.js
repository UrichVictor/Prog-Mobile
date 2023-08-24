function somar(){
    Varmedia = document.getElementById('media')
    varbr1 = document.getElementById('barra1')
    varbr2 = document.getElementById('barra2')
    varbr3 = document.getElementById('barra3')
    varbr4 = document.getElementById('barra4')
    varbr1 = Number(br1.value)
    varbr2 = Number(br2.value)
    varbr3 = Number(br3.value)
    varvalor = (br1 * 2 + br2 * 3 + br3 * 5)/10
    document.getElementById('media').innerHTML = valor
    varresultado = (valor>= 60 ? 'Você atingiu a média' : 'Você não atingiu a média')
    document.getElementById('aprovado-reprovado').innerHTML = resultado
    if (valor>= 60){
        document.getElementById('media').style.color = 'green'
        document.getElementById('aprovado-reprovado').style.color = 'green'
    }
}

else{
    document.getElementById('media').style.color = 'red'
    document.getElementById('aprovado-reprovado').style.color = 'red'
}