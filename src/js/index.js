/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente
*/

// - passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const texto = document.querySelectorAll('.descricao');

// - passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        console.log('clicou no botao');

        // - passo 3 - desmarcar o botão selecionado anterior
        escondeBotao();

        // - passo 4 - marcar o botão clicado como se estivesse selecionada
        botao.classList.add('selecionado');

        // - passo 5 - esconder a imagem anterior
        esconderImagemAtiva();

        // - passo 6 - fazer aparecer a imagem correspondente ao botão clicado
        imagens[indice].classList.add('ativa');

        const textoAtiva = document.querySelector('.padrao');
        textoAtiva.classList.remove('padrao');

        texto[indice].classList.add('padrao');



    })
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function escondeBotao() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

