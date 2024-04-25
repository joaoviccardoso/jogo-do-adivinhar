let listaNumeroSecreto = [];
let numeroLimete = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1

function ExipirTextoNaTala(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto
}

function mensagemInicial() {
    ExipirTextoNaTala('h1', 'jogo do numero secreto');
    ExipirTextoNaTala('p', 'escolha um numero entre 1 e 100');
}

mensagemInicial()

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
         ExipirTextoNaTala('h1', 'Acertou');
         let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
         let mensagemTentativa = (`Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`);
         ExipirTextoNaTala('p', mensagemTentativa);
         document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto){
            ExipirTextoNaTala('p', 'O numero secreto e menor')
        } else {
            ExipirTextoNaTala('p', 'O numero secreto e maior')
        }
        tentativas++;
        limparTela();
    }
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimete + 1);
    let quantidadeDeElementosNaLista = listaNumeroSecreto.length

    if(quantidadeDeElementosNaLista == numeroLimete){
        listaNumeroSecreto = []
    }

    if (listaNumeroSecreto.includes(numeroEscolhido)) {   
        return gerarNumeroAleatorio();
    } else {
        listaNumeroSecreto.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparTela(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparTela();
    tentativas = 1
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled');
}

