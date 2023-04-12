function economia() {
    let axHuguinho = Number(iptHuguinho.value)
    let axZezinho = Number(iptZezinho.value)
    let axLuizinho = Number(iptLuizinho.value)
    let ecoHuguinho = axHuguinho * 0.50
    let ecoZezinho = axZezinho * 0.50
    let ecoLuizinho = axLuizinho * 0.50

    console.log("Economias:  \n" +
    "Huguinho: " + ecoHuguinho + "\n" +
    "Luizinho: " + ecoLuizinho + "\n" +
    "Zezinho: " + ecoZezinho + "\n" +
    "Total: " + (ecoHuguinho + ecoLuizinho + ecoZezinho))
    alert("O Huguinho economizou R$ " + ecoHuguinho + " pois fez " + axHuguinho +" depósitos")
    alert("O Huguinho economizou R$ " + ecoZezinho + " pois fez " + axZezinho +" depósitos")
    alert("O Huguinho economizou R$ " + ecoLuizinho + " pois fez " + axLuizinho +" depósitos")

}
