function msgFal(){
    alert("Você pesa " + iptPes.value + "kg e tem " + iptAlt.value + "m de altura.");
}

function msgIMC(){
    let imc = iptPes.value / (iptAlt.value * iptAlt.value);
    alert("Seu IMC é de " + imc)
}