var pontuacao = 0;

window.addEventListener('load', function (e) {
  opcao();
});

function opcao() {
  console.log(
    'Escolha sua jogada:' +
      '\n' +
      '1 - Papel' +
      '\n' +
      '2 - Pedra' +
      '\n' +
      '3 - Tesoura' +
      '\n',
  );
  var escolha = parseInt(prompt());
  jogo(escolha);
}

function validaOpcao(escolhaJogador) {
  if (escolhaJogador === 1 || escolhaJogador === 2 || escolhaJogador === 3)
    return true;
  else return false;
}

function retornaOpcao(escolha) {
  if (escolha === 1) return 'papel';
  if (escolha == 2) return 'pedra';
  if (escolha == 3) return 'tesoura';
}

function comparaJogadas(escolhaJogador, escolhaComputador) {
  var escolhaJ = retornaOpcao(escolhaJogador);
  var escolhaC = retornaOpcao(escolhaComputador);
  var vencedor = '';

  if (escolhaJ == 'pedra') {
    if (escolhaC == 'pedra') {
      vencedor = 'empate';
    } else if (escolhaC == 'papel') {
      vencedor = 'computador';
    } else if (escolhaC == 'tesoura') {
      vencedor = 'jogador';
    }
  } else if (escolhaJ == 'papel') {
    if (escolhaC == 'pedra') {
      vencedor = 'jogador';
    } else if (escolhaC == 'papel') {
      vencedor = 'empate';
    } else if (escolhaC == 'tesoura') {
      vencedor = 'computador';
    }
  } else if (escolhaJ == 'tesoura') {
    if (escolhaC == 'pedra') {
      vencedor = 'computador';
    } else if (escolhaC == 'papel') {
      vencedor = 'jogador';
    } else if (escolhaC == 'tesoura') {
      vencedor = 'empate';
    }
  }
  if (vencedor === 'jogador') pontuacao++;
  return vencedor;
}

function finalizaJogo() {
  console.log('Você perdeu! A sua pontuação foi de: ' + pontuacao + '\n');
}

function jogo(escolhaJogador) {
  if (validaOpcao(escolhaJogador)) {
    var escolhaComputador = Math.floor(Math.random() * 3) + 1;

    console.log('O computador jogou ' + retornaOpcao(escolhaComputador) + '\n');

    var resultado = comparaJogadas(escolhaJogador, escolhaComputador);

    if (resultado === 'computador') finalizaJogo();
    if (resultado === 'jogador') {
      console.log('Você ganhou!' + '\n');
      opcao();
    }
    if (resultado === 'empate') {
      console.log('A rodada empatou!');
      opcao();
    }
  } else {
    finalizaJogo();
  }
}
