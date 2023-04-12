function verTemp(){
    aResposta.innerHTML = ``
    let renda = Number(iptRenda.value)
    let rendaF = Number(iptRendaF.value)

    if(renda <= 1050 && rendaF <= 2100){
        aResposta.innerHTML = `Você terá direito!`
    } else{
        aResposta.innerHTML = `Você não terá direito!`
    }
}