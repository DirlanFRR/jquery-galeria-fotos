    $(document).ready(function() {
        // Quando o botão "NOVA IMAGEM" é clicado o formulário que está com "display:none" aparece com um efeito de slideDown.
        $('header button').click(function() {
        $('form').slideDown();
        });
    
        // Quando o botão "CANCELAR" do formulário é clicado o mesmo formulário se recolhe da tela com efeito slideup.
        $('#botao-cancelar').click(function(){
        $('form').slideUp();
        });
    
        $('form').on('submit', function(e) {
        console.log('submit');
        e.preventDefault();
        // O valor do campo "endereco-imagem-nova" é armazenado na variável "enderecoNovaImagem"
        const enderecoNovaImagem = $('#endereco-imagem-nova').val();
        const novoItem = $('<li style="display: none"></li>');// Um novo item de lista é criado com o código HTML abaixo, contendo uma imagem e um link para ver a imagem em tamanho real
        $(`<img src="${enderecoNovaImagem}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
            <a href="${enderecoNovaImagem}" target="_blank" title="Ver imagem em tamanho real">
                Ver imagem em tamanho real
            </a>
            </div>
        `).appendTo(novoItem);// O novo item de lista é adicionado à lista existente na página
        $(novoItem).appendTo('ul');
        $(novoItem).fadeIn(5000);//é uma função jQuery que é usada para animar a exibição gradual de um elemento HTML na página. Quando essa função é chamada, ela adiciona gradualmente opacidade ao elemento HTML especificado por "novoItem", fazendo com que ele apareça gradualmente na tela em 5 segundos.
        $('#endereco-imagem-nova').val('')//Limpa o input 'url da imagem' cada vez que é adicionado uma imagem.
        });
    });