$(document).ready(function() {
    var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var divWid = $('#team').width();
    // A variável n armazena quantos "cards" haverá por linha
    var n = Math.floor(divWid / 206);
    var active = 0;
    var semaphore = true;
    // A variável content armazena os nomes das fotos, nomes dos membros e descrições 
    // Para adicionar ou remover membros só será necessário apagar as entradas referentes ao mesmo em content
    var content = [
        ["daniloweber.jpg", "Alisson Mota", "<h3>Software</h3><p>Estudante de BCC no 3º ano</p>"],
        
        ["andreneves.jpg", "André Neves", "<h3>Hardware</h3><p>Estudante de engenhara elétrica, 4º ano, membro da equipe de Hardware.</p>"],
        
        ["daniloweber.jpg", "Danilo Weber", "<h3>Software e Gestão</h3><p>Danilo é aluno do quarto ano de Ciência da Computação, está a 3 anos no time e é levemente perturbado por documentação de código. Atualmente atuando como Coordenador Geral da equipe e como Co-Coordenador da área de Software do Carrossel Caipira, tem como objetivos no Carrossel tornar o time uma referência na modalidade VSSS (Very Small Size Soccer) assim como aumentar a visibilidade e participação da equipe no ambiente universitário.</p>"],
        
        ["izabelepizzo.jpg", "Izabele Pizzo", "<h3>Pesquisa</h3><p>Estudante do terceiro ano de Arquitetura e Urbanismo pela Unesp de Bauru, participante da equipe de pesquisa e atuante nas áreas de projetos de design, modelagem e movelaria. </p>"],
        
        ["daniloweber.jpg", "João Comini", "<h3>Software</h3><p>Biografia</p>"],
        
        ["jorgevicente.png", "Jorge Vicente", "<h3>Pesquisa</h3><p>Estudante de Licenciatura em Matemática, preocupado com a qualidade no ensino e aprendizagem dos alunos nas áreas de matemática, física, eletrônica, informática, mecânica e correlatas.</p><p>Hobbista e entusiasta por tecnologias físicas, virtuais, analógicas e digitais.</p><p>Participante na área de pesquisa, em constante empenho pelo crescimento do time seja pela imagem e divulgação do mesmo, seja pela qualidade e variedade dos projetos pesquisados e desenvolvidos por todos.</p><p>Criador e produtor de conteúdo para os canais <a href='https://www.youtube.com/user/mamatetemamatica' target='_blank' class='profileReference'>Matemática Descomplicada</a> e <a href='https://www.youtube.com/meunomeejorgevicente' target='_blank' class='profileReference'>Canal JV</a> na plataforma de vídeos youtube.com.</p>"],
        
        ["daniloweber.jpg", "Luiz Uzai", "<h3>Pesquisa</h3><p>Biografia</p>"],
        
        ["daniloweber.jpg", "Lumary Dinalle", "<h3>Comunicação</h3><p>Biografia</p>"],
        
        ["marcelohideaki.jpg", "Marcelo Hideaki", "<h3>Pesquisa</h3><p>Marcelo está no terceiro ano do curso de Ciência da Computação e participa na equipe de pesquisa.</p>"],
        
        ["marcelonunez.jpg", "Marcelo Nuñez", "<h3>Software</h3><p>Estudante do curso de Bacharelado em Ciências da Computação, está atualmente no 3° ano do curso. Como membro da área de software, procura ajudar com o que sabe o desenvolvimento do software, e está sempre disposto a aprender coisas novas para o time.</p>"],
        
        ["matheusviana.jpg", "Matheus Viana", "<h3>Hardware</h3><p>Estudante do 4º de engenharia elétrica, membro da equipe de hardware.</p>"],
        
        ["paulomaia.jpeg", "Paulo Maia", "<h3>Pesquisa</h3><p>Estudante de ciência da computação, integra a equipe de pesquisa do Carrossel, trabalhando especificamente na programação de microcontroladores.</p>"],
        
        ["rafaeltakagi.jpg", "Rafael Takagi", "<h3>Software</h3><p> Estudante do terceiro ano do curso de Ciência da Computação, procura sempre poder aprender e passar conhecimentos ao atuar no time de Software. Atualmente está trabalhando na produção de estratégias de jogo para os robôs.</p>"],
        
        ["rodneyrenato.jpg", "Rodney Renato", "<h3>Software</h3><p>Aluno do terceiro ano de computação e participa na equipe de software.</p>"],
        
        ["rodrigobueno.jpeg", "Rodrigo Bueno", "<h3>Software</h3><p>Rodrigo Bueno Rodrigues é aluno do Curso de Ciências da Computação na Unesp/Bauru. Atualmente coordenando a área de software, busca levar a equipe a um novo patamar com o uso de novos métodos e técnicas para adquirir o título nacional na categoria Very Small Size de futebol de robôs.</p>"],
        
        ["sergioguida.png", "Sergio Guida", "<h3>Hardware</h3><p>Sérgio Guida, aluno de Ciência da Computação na Unesp de Bauru. Atualmente faz parte da equipe de Hardware do time.</p>"],
        
        ["thiagomochetti.jpg", "Thiago Mochetti", "<h3>Hardware</h3><p>Thiago é técnico em eletrônica pelo CTI e cursa Engenharia Elétrica na UNESP. Apaixonado pelo mundo acadêmico, dá aulas desde pequeno e é ele mesmo aluno do tempo. É o integrante mais jovem do time, e faz uso disso para motivar a galera.</p>"]
    ];

    // Verifica se a página atual é "time.html". 
    // Apenas por segurança, no caso de haver uma div com id="team" em outra página
    var doc = document.location.href;    
    if(doc.substring(doc.lastIndexOf('/') + 1) === 'time.html') fillPage();
    // Popula o HTML com os dados de content
    function fillPage() { 
        for(var i = 0; i < content.length; i++) {
            $('#team').append('<div class="profile"><div class="profileCard" value = ' + (i + 1) + '><img src="../img/equipe/' + content[i][0] + '" class="profilePic"><p class="profile-name" align="center">' + content[i][1] + '</p></div></div>');
        }
    }
    
    function expandProfile(element, callback) {
        // Pega a largura da div team e verifica quantos "cards" cabem nela
        divWid = $('#team').width();
        n = Math.floor(divWid / 206);
        // Declara uma variável com o valor do delay
        var timeout = 600;
        var cardClicked = element.attr('value');
        // A variável insertAfter armazena o último "card" da linha clicada
        var insertAfter = Math.ceil(cardClicked / n) * n;
        // Satura a última linha, caso não esteja "cheia" pega o último "card" dela
        if(insertAfter > content.length) insertAfter = content.length;
        // Se outro card estiver ativo, desativa o mesmo
        if(active > 0) {
            $('.info').addClass('removeInfo');
            $('.selected').addClass('removeSelected');
            $('.removeSelected').fadeOut(500, function() {
                $('.removeSelected').remove();
            })
            $('.removeInfo').slideUp(500, function() {
                $('.removeInfo').remove();
                callback(element, timeout);
            });
        } else {
            timeout = 0;
        }
        
        if(cardClicked == active) {
            active = 0;
            return;
        }
        active = cardClicked;
        // Após o delay indicado por timeout, mostra a informação referente ao card clicado
        setTimeout(function() {
            $('.profileCard[value="' + active + '"]').after($('<div class="selected"></div>'));
            $('.profileCard[value="' + insertAfter + '"]').parent().after($('<div class="info">' + content[active - 1][2] + '</div>'));

            $('.selected').fadeIn(600);
            $('.info').slideDown(600, function() {
                callback(element, timeout); 
            });
        }, timeout);
    }
    
    // Função criada para tentar reduzir alguns "glitches visuais" ao expandir ou retrair as informações dos cards
    function callback(element, timeout) {
        setTimeout(function() {
            semaphore = true;
        }, timeout); 
    }
    
    // Função criada para tentar reduzir alguns "glitches visuais" ao expandir ou retrair as informações dos cards
    $('.profileCard').click(function() {
        if(!semaphore) return;
        semaphore = false;
        expandProfile($(this), callback);
    });
    
    function calcWidth() {
        if(windowWidth != $(window).width()) {
            windowWidth = $(window).width();
            $('.info').remove();
            $('.selected').remove();
            active = 0;   
        }
    }
    
    // Ao redimensionar a janela, recalcula as informações necessárias e retrai o card ativo
    $(window).on('resize', function() {
        calcWidth();
    });

    var shiftWindow = function() { scrollBy(0, -50) };
    if (location.hash) shiftWindow();
    window.addEventListener("hashchange", shiftWindow);

    var $window = $(window);


    // Execute on load
//    checkWidth();

    // Bind event listener
//    $(window).resize(checkWidth);

});

$(document).ready(function() {

    var video = document.getElementById("vid");

    $("#CarouselCaipira").on('slid.bs.carousel', function (e) {
        if($(".active", e.target).index() == 3) {
            video.play();
        } else{
            video.pause();
        }
    });

});

$(document).ready(function() {
  function carouselNormalization() {
    var items = $('#carousel-example-generic .item'), //grab all slides
    heights = [], //create empty array to store height values
    tallest; //create variable to make note of the tallest slide

    if (items.length) {
      function normalizeHeights() {
        items.each(function() { //add heights to array
          heights.push($(this).height());
        });
        tallest = Math.max.apply(null, heights); //cache largest value
        items.each(function() {
          $(this).css('min-height',tallest + 'px');
        });
    };
    normalizeHeights();

    $(window).on('resize orientationchange', function () {
      tallest = 0, heights.length = 0; //reset vars
      items.each(function() {
        $(this).css('min-height','0'); //reset min-height
      });
      normalizeHeights(); //run it again
    });
    }
  }
});
