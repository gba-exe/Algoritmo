function media() {
    let axContinuada = Number(iptContinuada.value)
    let axSemestral = Number(iptSemestral.value)
    let media = axContinuada*0.40 + axSemestral*0.60

    alert("A média de " + iptNome.value + " será de " + media)

}
