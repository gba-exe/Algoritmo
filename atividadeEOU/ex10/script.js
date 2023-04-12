function verAlt(){
    aResposta.innerHTML = ``
    let altI = Number(iptAltI.value)
    let altF = Number(iptAltF.value)

    if(altI > 1 && altF > altI){
        divContent2.style.display = 'block'
    } else{
        aResposta1.innerHTML = `Altura inválida!`
    }
}

function enviar(){
    aResposta1.innerHTML = ``
    aResposta2.innerHTML = ``

    let altI = Number(iptAltI.value)
    let altF = Number(iptAltF.value)
    let nome = Number(iptNome.value)
    let altP = Number(iptAltP.value)

    if(altI > 1 && altF > altI){
        aResposta2.innerHTML = `O candidato ${nome} com altura de ${altP} participará do processo de seleção
        de piloto.`
    } else{
        aResposta2.innerHTML = `Infelizmente o candidato ${nome} com altura de ${altP} não atende aos requisitos.`
    }
}
