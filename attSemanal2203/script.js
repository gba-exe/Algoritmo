function calcCorrida() {
  aResposta.innerHTML = ``;

  /* Variáveis */
  let error = false;
  let nomeP = iptNomeP.value;
  /* Erro */
  if (nomeP == "") {
    aResposta.innerHTML += `Erro: Digite o nome do passageiro.<br>`;
    error = true;
  }

  let distanciaKm = iptDistanciaKm.value;
  /* Erro */
  if (distanciaKm <= 0) {
    aResposta.innerHTML += `Erro: Informar corretamente a distância.<br>`;
    error = true;
  } else if (distanciaKm > 100) {
    aResposta.innerHTML += `Erro: Viagens acima de 100km devem ser negociadas com a nossa central.<br>`;
    error = true;
  }

  let bandeira = iptBandeira.value;
  /* Erro */
  if (bandeira < 1 || bandeira > 3) {
    aResposta.innerHTML += `Erro: A bandeira deve estar entre 1 e 3.<br>`;
    error = true;
  }

  let horario = iptHorario.value;
  /* Erro */
  if (horario < 0 || horario > 23 || horario == "") {
    aResposta.innerHTML += `Erro: O horário deve estar entre 0h e 23h.<br>`;
    error = true;
  }
  /* Erro */
  if (error) {
    alert(`Favor corrigir o(s) dado(s) de entrada para seguirmos em frete`);
  } else {
      let valorNominal = distanciaKm * 1.25;
      let valorTotal = valorNominal;

      /* Bandeira 1 */
      if (bandeira == 1 && horario < 7) {
        valorTotal = valorTotal * 0.075 + valorTotal;
      } else if (bandeira == 1 && horario < 13) {
        valorTotal = valorTotal * 0.1 + valorTotal;
      } else if (bandeira == 1 && horario < 24) {
        valorTotal = valorTotal * 0.125 + valorTotal;
      }

      /* Bandeira 2 */
      if (bandeira == 2 && horario < 7) {
        valorTotal = valorTotal * 0.1 + valorTotal;
      } else if (bandeira == 2 && horario < 13) {
        valorTotal = valorTotal * 0.15 + valorTotal;
      } else if (bandeira == 2 && horario < 24) {
        valorTotal = valorTotal * 0.2 + valorTotal;
      }

      /* Bandeira 3 */
      if (bandeira == 3 && horario < 7) {
        valorTotal = valorTotal * 0.15 + valorTotal;
      } else if (bandeira == 3 && horario < 13) {
        valorTotal = valorTotal * 0.3 + valorTotal;
      } else if (bandeira == 3 && horario < 24) {
        valorTotal = valorTotal * 0.45 + valorTotal;
      }

      /* Pagamentos */
      let pagPix = valorTotal - valorTotal * 0.025;
      let pagDin = valorTotal;
      let pagCartao = valorTotal + valorTotal * 0.035;

      /* Mensagens */
      aResposta.innerHTML = `Olá, ${nomeP}. Sua corrida, será na bandeira ${bandeira}, percorrerá ${distanciaKm} km e o total da corrida será de ${valorTotal}<br>`
      aResposta.innerHTML += `Se você efetuar o pagamento com PIX a corrida será de R$ ${pagPix}<br>`;

      aResposta.innerHTML += `Se você efetuar o pagamento em dinheiro a corrida será de R$ ${pagDin} (favor facilitar o troco)<br>`
   
      aResposta.innerHTML += `Se você efetuar o pagamento com cartão (débito ou crédito) a corrida será de R$ ${pagCartao}<br>`
      /* Testes de Mesa */
      console.table([
        {
          Nome: nomeP,
          Distância: distanciaKm,
          Bandeira: bandeira,
          Horário: horario,
        },
      ]);
      console.table([
        {
          "Valor Nominal": valorNominal,
          Bandeira: bandeira,
          Horário: horario,
          "PIX": pagPix,
          "Dinheiro": pagDin,
          "Cartão": pagCartao,
          "Valor Total": valorTotal,
        },
      ]);
  }
}
