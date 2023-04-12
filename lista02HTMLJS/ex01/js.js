function aposentadoriaHomem() {
    console.log('Aposentadoria Homem')
    let axIdade = Number(iptIdade.value)
    let aposentadoria = 70 - axIdade
    alert('Faltam ' + aposentadoria + ' anos para você se aposentar!')
}
function aposentadoriaMulher() {
    console.log('Aposentadoria Mulher')
    let axIdade = Number(iptIdade.value)
    let aposentadoria = 60 - axIdade
    alert('Faltam ' + aposentadoria + ' anos para você se aposentar!')
}