window.addEventListener('load',function(){

    var currentCarousel = 1;
    var totalCarousel;

    $.getJSON('js/slider.json', {get_param: 'value'}, function (getArray) {

        totalCarousel = getArray.length;

        //generation des squares carousel
        for (let id = 1; id <= totalCarousel ;id++) {
            if (id == currentCarousel) {
                $('#slider-square').append( "<div class='square"+id+" square--activ'></div>" );
            } else {
                $('#slider-square').append( "<div class='square"+id+"'></div>" );
            }
        }

        $.each(getArray, function (index, element) {
            
            $('.sliders').append(
                "<div class='carouselSlide slide"+(index+1)+"'>" +
                    "<div class='slide-img'>" +
                        "<img src='"+element.photo+"' alt='MockUp'>" +
                    "</div>" +

                    "<div class='slide-desc'>" +
                        "<div>" +
                            "<b>"+element.titre+"</b>" +
                            "<p>"+element.desc+"</p>" +
                        "</div>" +

                        "<a href='' >CHOISIR</a>" +
                    "</div>" +
                "</div>");
        
        });

    });


    //RIGHT ARROW
    $( ".slider-arrow.right" ).click(function() {

        let translation = currentCarousel * 104;

        $('.square'+currentCarousel).removeClass('square--activ');

        if ((parseInt(currentCarousel)+1) <= totalCarousel) { //SLIDE VERS LA DROITE
  
            slideAnimation(translation)
            currentCarousel++;

        } else { //RETOUR A SLIDE 1
  
            slideAnimation(1)
            currentCarousel = 1;
        }

        $('.square'+currentCarousel).addClass('square--activ');

    });


    //LEFT ARROW
    $( ".slider-arrow.left" ).click(function() {

        let translation = (currentCarousel-2) * 104;

        $('.square'+currentCarousel).removeClass('square--activ');

        if ((currentCarousel-1) >= 1) { // SLIDE VERS LA GAUCHE

            slideAnimation(translation)
            currentCarousel--;

        } else { // RETOUR VERS DERNIERE SLIDE

            slideAnimation(((totalCarousel-1)*104));
            currentCarousel = totalCarousel;
        }

        $('.square'+currentCarousel).addClass('square--activ');

    });

    $('#slider-square').on('click', 'div', function (target) {

        let square = ((target.currentTarget).className).replace ( /[^\d.]/g, '' );
        let translation = (square-1) * 104;
        
        $('.square'+currentCarousel).removeClass('square--activ');

        slideAnimation(translation);
        
        currentCarousel = square;
        $('.square'+currentCarousel).addClass('square--activ');
   
    });


    function slideAnimation (translation) {

        $(".carouselSlide").css({
            "transform": "translateX(-"+translation+"%) scale(0.7)",
            "opacity": "0.4"
        });

        setTimeout(function(){
            $(".carouselSlide").css({
                "transform": "translateX(-"+translation+"%)",
                "opacity": "1"
            });
        }, 405);
    }


});