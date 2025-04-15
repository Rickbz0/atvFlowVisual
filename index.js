let idade = parseFloat(prompt("Informe sua idade:"));

if (isNaN(idade) || idade < 0) {
    alert("Erro: digite uma idade válida usando apenas números.");
  } else if (idade >= 18) {
    alert("Você é maior de idade.");
  } else {
    alert("Você é menor de idade.");
  }