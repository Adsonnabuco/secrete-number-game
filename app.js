// let  titulo = document.querySelector('h1');
// titulo.innerHTML = 'Jogo do número secreto';
// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 e 10';
//-------------------------------------------------------------------------------------------------------------------------------

let numerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;



function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function mensagemInical() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

}

let mensagem = mensagemInical();

function verificarChute() {
    let chute = document.querySelector('input').value;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativa == 1 ? 'tentativa' : 'tentativas';
        let mensagemTentativas = `você acertou em ${tentativa} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemTentativas);
        
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else 
        if (chute > numeroSecreto) {
        exibirTextoNaTela('p', 'O número secreto é menor.');
    } else if (chute < numeroSecreto){
        exibirTextoNaTela('p', 'O número secreto é maior.');
        tentativa++;
        limparCampo();
    }
}

 function gerarNumeroAleatorio() {

    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);

    let quantidadeDeElementosNaLista = numerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        numerosSorteados = [];
    }

    if (numerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio;
    } else {
        numerosSorteados.push(numeroEscolhido);
        return numeroEscolhido;
    }
}

function limparCampo() {
    campolimpo = document.querySelector('input');
    campolimpo.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    tentativa = 1;
    limparCampo();
    mensagemInical();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//-------------------------------------------------------------------------------------------------------------------------------
// //Desafio
// //1) Criar uma função que exibe "Olá, mundo!" no console.
// let exibi = exibeHello();
// function exibeHello() {
    //     console.log('Olá, mundo!');
    // }
// //2) Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
// let exibir = exibiHelloComNome("Jose");
// function exibiHelloComNome(nome) {
    //     console.log(`Olá, ${nome}!`);
    // }
    // //3) Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
    // let exibirr3 = numeroComParametroERetornaDobro(6);
    // function numeroComParametroERetornaDobro(num1) {
        //     return console.log(num1 * 2);
        // }
        // //4) Criar uma função que recebe três números como parâmetros e retorna a média deles.
        // let resultado = retornoMediaDe3(5, 4, 7);
        // function retornoMediaDe3(num2, num3, num4) {
//     console.log((num2 + num3 + num4)/3);
// }
// //5) Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
// let exercicio5 = comparacaoDeNumeros(19,4235);
// function comparacaoDeNumeros(num5, num6) {
//     if (num5 > num6) {
    //         resultado = `O numero ${num5} é o maior comparado ao outro número informado.`;
    //     } else {
//         resultado = `O numero ${num6} é o maior comparado ao outro número informado.`;
//     }
//     console.log(resultado)
// }
// //6) Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
// let exercicio6 = retornaResultadoDaMultiplicacaoPorEleMesmo(6);
// function retornaResultadoDaMultiplicacaoPorEleMesmo(num7) {
    //     return console.log(`Resultado da multiplicação por ele mesmo é: ` + num7*num7);
    //     // return console.log(num7 * num7);
    //     // let valor = num7*num7;
    //     // return console.log(`Resultado da multiplicação por ele mesmo é: ${valor}`);
    // }
    //

    
//-------------------------------------------------------------------------------------------------------------------------------
// Desafios
//1) Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

//2) Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

//3) Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$4,80.

//4) Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

//5) Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

//6) Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.