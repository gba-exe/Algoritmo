function economia() {
    let axPassagem = Number(iptPassagem.value)
    let axViagem = Number(iptViagem.value)
    let economia = axPassagem / 2 * axViagem
    console.log('Metade da passagem ' + axPassagem / 2)
    alert('Você irá economizar R$' + economia)
}
