
let numero = parseInt(prompt("Digite um número:"));

if (isNaN(numero) || numero < 0) {
  alert("Erro: digite apenas numeros validos.");
}
if (numero % 2 === 0) {
    alert("O número é par.");
} else {
    alert("O número não é par.");
}