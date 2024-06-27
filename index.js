const prompt = require('prompt-sync')();

function fatorial(n) {
    if (n === 0 || n === 1) {
        console.log(1);
    } else {
        let resultado = 1;
        for (let i = 2; i <= n; i++) {
            resultado *= i;
        }
        console.log(resultado);
    }
}

let numero = prompt("Digite um número para calcular o fatorial: ");
numero = parseInt(numero);

if (isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro não negativo.");
} else {
    console.log(`O fatorial de ${numero} é:`);
    fatorial(numero); 
}
