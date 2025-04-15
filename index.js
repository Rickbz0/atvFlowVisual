  let valorCompra = parseFloat(prompt("Digite o valor da compra:"));
  
  if (isNaN(valorCompra) || valorCompra <= 0) {
      alert("Por favor, digite um valor válido para a compra.");
  }

  if (valorCompra >= 100) {
      let desconto = valorCompra * 0.10;
      let total = valorCompra - desconto;
      alert(`Você ganhou um desconto de 10%! \nValor do desconto: R$ ${desconto.toFixed(2)} \nValor total: R$ ${total.toFixed(2)}`);
  } else {
      alert("O valor da compra não da desconto.");
  }