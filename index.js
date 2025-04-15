let numero = parseInt(prompt("Digite um numero:"));

    if (isNaN(numero)) {
        alert("Digite um numero valido.");
    }
    if (numero % 5 === 0) {
        alert("O numero é multiplo de 5.");
    } else {
      alert("O numero não é multiplo.");
  }
