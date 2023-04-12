function calorias() {
    let axPaes = Number(iptPaes.value)
    let axCasquinhas = Number(iptCasquinhas.value)
    let axCaminhada = Number(iptCaminhada.value)
    let axMusculacao = Number(iptMusculacao.value)
    let calPaes = axPaes * 100
    let calCasquinhas = axCasquinhas * 300
    let calCaminhada = axCaminhada * 50
    let calMusculacao = axMusculacao * 30
    let total = (calPaes + calCasquinhas) - (calCaminhada + calMusculacao)
    
    console.log("Calorias ganhas:  \n" +
    "Pães: " + calPaes + "\n" +
    "Casquinhas: " + calCasquinhas + "\n" +
    "Calorias Perdidas: \n" +
    "Caminhada: " + calCaminhada + "\n" +
    "Musculacao: " + calMusculacao + "\n" +
    "Total: " + total)
    alert("Entre calorias que ganhou e perdeu, seu saldo de calorias no dia é de " + total + " kcal")

}
