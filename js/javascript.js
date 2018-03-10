$(document).ready(function() {

  var shiftWindow = function() { scrollBy(0, -50) };
  if (location.hash) shiftWindow();
  window.addEventListener("hashchange", shiftWindow);

  var $window = $(window);
    
    $('.profileCard').click(function() {
        if(!$(this).parent().find('.cardContent').is(':visible')) {
            $(this).parent().find('.cardContent').slideDown();
            
        } else {
            $(this).parent().find('.cardContent').slideUp();
        }
    });

  // Function to handle changes to style classes based on window width
  function checkWidth() {
    if ($window.width() < 768) {
      $('#Social1').removeClass('text-right');
      $('#Social2').removeClass('text-left');
    }

    if ($window.width() >= 768) {
      $('#Social1').addClass('text-right');
      $('#Social2').addClass('text-left');
    }
  }

  // Execute on load
  checkWidth();

  // Bind event listener
  $(window).resize(checkWidth);

});

$(document).ready(function() {

  var video = document.getElementById("vid");

  $("#CarouselCaipira").on('slid.bs.carousel', function (e) {

    if($(".active", e.target).index()==3) {
      video.play();
    }
    else{
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
