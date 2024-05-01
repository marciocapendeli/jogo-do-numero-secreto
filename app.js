let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    ResponsiveVoice.speak(texto,'brazilian portuguese female',
    {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1','Jogo do numero secreto')
    exibirTextoNaTela('p','Escolha um numero entre 1 e 10')
    
}

function verificarChute(){
    let chute = document.querySelector('input') . value;
    
if(chute == numeroSecreto){
    exibirTextoNaTela('h1','acertou!');
    let palavraTentativa = tentativas > 1 ? ' tentativas' : 'tentativas';
    let mensagemTentativas = `Voce descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
    exibirTextoNaTela('p',mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
} else{
    if(chute > numeroSecreto) {
        exibirTextoNaTela('p', 'o numero secreto é menor');
    }else {
        exibirTextoNaTela('p','o numero secreto é maior');
    }
    tentativas ++;
    
}
}

function gerarNumeroAleatorio(){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementoNaLista = listaDeNumerosSorteados.length;

    if(quantidadeDeElementoNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }
    if(listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    } else{
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}

function limparCampo(){
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial()
    document.getElementById('reiniciar').setAttribute('disabled',true)
}
