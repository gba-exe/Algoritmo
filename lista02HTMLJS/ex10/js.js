function media() {
    let axComum = Number(iptComum.value)
    let axEstudante = Number(iptEstudante.value)
    let axValor = Number(iptValor.value)
    let valorEstudante = axValor / 2
    let arrecadacao = axValor * axComum + valorEstudante * axEstudante

    alert("A arrecadação foi de R$ " + arrecadacao)

}
