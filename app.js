let listaDeNumerosSorteados = [];

let numeroLimite = 10;

let numeroSecreto = gerarNumeroAleatorio();

let tentativas =1;

console.log(numeroSecreto);

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto , 'Brazilian Portuguese Female' , {rate:1.2} );
}

function mensagemIncial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto){
        let palavraTentativa = tentativas > 1? "tentativas" : "tentativa";
        let mensagemTentativa = (`Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`);
        exibirTextoNaTela("h1", "Parabéns!");
        exibirTextoNaTela("p", mensagemTentativa);
        document.getElementById("reiniciar").removeAttribute ("disabled");
    
    } else{

      if (chute > numeroSecreto){
       
        exibirTextoNaTela ("p", "O número secreto é menor");
      }  else{
       
        exibirTextoNaTela ("p", "O número secreto é maior");
      }
      tentativas++;
      limparCampo();
      document.getElementById("reiniciar").removeAttribute ("disabled");

    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)){
        return gerarNumeroAleatorio();
    }

    else {
        listaDeNumerosSorteados.push(numeroEscolhido);
        console.log(listaDeNumerosSorteados);
        return numeroEscolhido;
    }
}
function limparCampo() {
    chute = document.querySelector ("input");
    chute.value = "";    
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    mensagemIncial();
    tentativas = 1;
    console.log(numeroSecreto);
    /* a linha abaixo serve para habilitar e desabilitar o botao novo jogo,
    no curso foi recomendado deixa-lo desabilitado, habilitando-o apenas no
    momento em que acertar o numero secreto, entretanto, discordo dessa premissa,
    acho que o mesmo deve ser habilitado sempre, o jogador deve ter liberdade p escolher*/
    
    //document.getElementById ("reiniciar").setAttribute("disabled", true);
        
}









