
function calc() {
    n1 = Number(iptN1.value);
    n2 = Number(iptN2.value);
    n3 = Number(iptN3.value);
    media = (n1 + n2 + n3) / 3;

    divMedia.innerHTML = '';

    divMedia.innerHTML = 'Sua média é de: ' + media;
    if (media >= 9.5) {
        divMedia.innerHTML += '<br>Parabéns, você é fora de série!';
        divMedia.innerHTML +='<br>Aprovado!';
    } else if (media >= 7) {
        divMedia.innerHTML +='<br>Aprovado!';
    } else {
        divMedia.innerHTML += '<br>Reprovado!';
    }
    iptN1.value = '';
    iptN2.value = '';
    iptN3.value = '';
}