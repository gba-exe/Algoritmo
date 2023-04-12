function verTemp(){
    aResposta.innerHTML = ``
    let temp = Number(iptTemp.value)

    if(temp >= 21 && temp <= 24){
        aResposta.innerHTML = `Temperatura confortável :)`
    } else{
        aResposta.innerHTML = `Temperatura desconfortável :(`
    }
}