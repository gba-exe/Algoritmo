function descontos() {
    let axSalario = Number(iptSalario.value)
    let inss = axSalario * 0.10
    let ir = axSalario * 0.20
    let impostoSindical = axSalario * (1/30)
    let total = axSalario - (inss + ir + impostoSindical)
    
    console.log("Salario bruto: " + axSalario + "\n" + 
    "Inss: " + inss + "\n" +
    "Ir: " + ir + "\n" +
    "Imposto sindical: " + impostoSindical + "\n" +
    "Total: " + total)
    alert("Apesar de seu bruto ser de R$ " + axSalario + ", após os descontos, você só receberá R$ " + total)

}
