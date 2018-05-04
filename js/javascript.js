$(document).ready(function() {
    
    
     var windowWidth = $(window).width();
    var windowHeight = $(window).height();
    var divWid = $('#team').width();
    var n = Math.floor(divWid / 206);
    var active = 0;
    var semaphore = true;
    var content = [
        "<h2>Alisson Mota</h2><h3>Software</h3><p>Estudante de BCC no 3º ano mais ou menos</p>",
        
        "<h2>André Neves</h2><h3>Hardware</h3><p>Estudante de engenhara elétrica, 4º ano, membro da equipe de Hardware.</p>",
        
        "<h2>Danilo Weber</h2><h3>Software e Gestão</h3><p>Danilo é aluno do quarto ano de Ciência da Computação, está a 3 anos no time e é levemente perturbado por documentação de código. Atualmente atuando como Coordenador Geral da equipe e como Co-Coordenador da área de Software do Carrossel Caipira, tem como objetivos no Carrossel tornar o time uma referência na modalidade VSSS (Very Small Size Soccer) assim como aumentar a visibilidade e participação da equipe no ambiente universitário.</p>",
        
        "<h2>Izabele Pizzo</h2><h3>Pesquisa</h3><p>Estudante do terceiro ano de Arquitetura e Urbanismo pela Unesp de Bauru, participante da equipe de pesquisa e atuante nas áreas de projetos de design, modelagem e movelaria. </p>",
        
        "<h2>João Comini</h2><h3>Software</h3><p>Biografia</p>",
        
        "<h2>Jorge Vicente</h2><h3>Pesquisa</h3><p>Estudante de Licenciatura em Matemática, preocupado com a qualidade no ensino e aprendizagem dos alunos nas áreas de matemática, física, eletrônica, informática, mecânica e correlatas.</p><p>Hobbista e entusiasta por tecnologias físicas, virtuais, analógicas e digitais.</p><p>Participante na área de pesquisa, em constante empenho pelo crescimento do time seja pela imagem e divulgação do mesmo, seja pela qualidade e variedade dos projetos pesquisados e desenvolvidos por todos.</p><p>Criador e produtor de conteúdo para os canais <a href='https://www.youtube.com/user/mamatetemamatica' target='_blank' class='profileReference'>Matemática Descomplicada</a> e <a href='https://www.youtube.com/meunomeejorgevicente' target='_blank' class='profileReference'>Canal JV</a> na plataforma de vídeos youtube.com.</p>",
        
        "<h2>Luiz Uzai</h2><h3>Pesquisa</h3><p>Biografia</p>",
        
        "<h2>Lumary Dinalle</h2><h3>Comunicação</h3><p>Biografia</p>",
        
        "<h2>Marcelo Hideaki</h2><h3>Pesquisa</h3><p>Marcelo está no terceiro ano do curso de Ciência da Computação e participa na equipe de pesquisa.</p>",
        
        "<h2>Marcelo Nuñez</h2><h3>Software</h3><p>Estudante do curso de Bacharelado em Ciências da Computação, está atualmente no 3° ano do curso. Como membro da área de software, procura ajudar com o que sabe o desenvolvimento do software, e está sempre disposto a aprender coisas novas para o time.</p>",
        
        "<h2>Matheus Viana</h2><h3>Hardware</h3><p>Estudante do 4º de engenharia elétrica, membro da equipe de hardware.</p>",
        
        "<h2>Paulo Maia</h2><h3>Pesquisa</h3><p>Estudante de ciência da computação, integra a equipe de pesquisa do Carrossel, trabalhando especificamente na programação de microcontroladores.</p>",
        
        "<h2>Rafael Takagi</h2><h3>Software</h3><p> Estudante do terceiro ano do curso de Ciência da Computação, procura sempre poder aprender e passar conhecimentos ao atuar no time de Software. Atualmente está trabalhando na produção de estratégias de jogo para os robôs.</p>",
        
        "<h2>Rodney Renato</h2><h3>Software</h3><p>Biografia</p>",
        
        "<h2>Rodrigo Bueno</h2><h3>Software</h3><p>Rodrigo Bueno Rodrigues é aluno do Curso de Ciências da Computação na Unesp/Bauru. Atualmente coordenando a área de software, busca levar a equipe a um novo patamar com o uso de novos métodos e técnicas para adquirir o título nacional na categoria Very Small Size de futebol de robôs.</p>",
        
        "<h2>Sergio Guida</h2><h3>Hardware</h3><p>Sérgio Guida, aluno de Ciência da Computação na Unesp de Bauru. Atualmente faz parte da equipe de Hardware do time.</p>",
        
        "<h2>Thiago Mochetti</h2><h3>Hardware</h3><p>Thiago é técnico em eletrônica pelo CTI e cursa Engenharia Elétrica na UNESP. Apaixonado pelo mundo acadêmico, dá aulas desde pequeno e é ele mesmo aluno do tempo. É o integrante mais jovem do time, e faz uso disso para motivar a galera.</p>"
    ];

    function expandProfile(element, callback) {
        var timeout = 600;
        var cardClicked = element.attr('value');
        var insertAfter = Math.ceil(cardClicked / n) * n;
        if(insertAfter > content.length) insertAfter = content.length;
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
//            return callback(element, timeout);
        }
        active = cardClicked;
        setTimeout(function() {
            $('.profileCard[value="' + active + '"]').after($('<div class="selected"></div>'));
            $('.profileCard[value="' + insertAfter + '"]').parent().after($('<div class="info">' + content[active - 1] + '</div>'));

            $('.selected').fadeIn(600);
            $('.info').slideDown(600, function() {
                callback(element, timeout);
                
            });

            
//            $('html, body').animate({
//                scrollTop: $(".info").offset().top - 140
//            }, 1000, "swing");
        }, timeout);
        

    }
    
    function callback(element, timeout) {
        setTimeout(function() {
            semaphore = true;
        }, timeout); 
    }
    
    $('.profileCard').click(function() {
        if(!semaphore) return;
        semaphore = false;
        expandProfile($(this), callback);
    });
    
    $(window).on('resize', function(){
        if(windowWidth != $(window).width()) {
            windowWidth = $(window).width();
            $('.info').remove();
            $('.selected').remove();
            active = 0;   
            divWid = $('#team').width();
            n = Math.floor(divWid / 206);
        }
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
