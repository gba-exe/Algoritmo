const prompt = require('prompt-sync')();

n1 = Number(prompt('Digite a primeira nota: '));
n2 = Number(prompt('Digite a segunda nota: '));
n3 = Number(prompt('Digite a terceira nota: '));
media = (n1 + n2 + n3) / 3;
console.log('Sua média é de: ' + media);
if (media >= 7) {
    console.log('Aprovado!');
} else if (media >= 9.5) {
    console.log('Parabéns, você é fora de série!');
} 