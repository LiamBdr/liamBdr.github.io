$( document ).ready(function() {

    //RANDOM BPM ÉNIGME
    function getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }

    bpm = document.querySelector('#bpm span');
    currentBpm = parseInt(bpm.innerHTML);

    setInterval(() => {

        randomIntervall = getRandomArbitrary(2, 20);

        newBpm = getRandomArbitrary((currentBpm - randomIntervall), (currentBpm + randomIntervall));


        if (newBpm <= 55) {
            newBpm = currentBpm + 3;
        }

        bpm.innerHTML = newBpm;
        
    }, 2000);


    //GESTION CARTE ÉNIGME
    $(".map").draggable({
        containment : "main",
        scroll:false
    });

    $("a#map").click(function() {

        if ($(this).hasClass("activ")) {

            $(this).removeClass("activ");
            $(".map").removeClass("activ");


            
        } else {

            $(this).addClass("activ");
            $(".map").addClass("activ");

        }
        
    });

    $(".map-close").click(function() {
        $("a#map").removeClass("activ");
        $(".map").removeClass("activ");
    });


    //INPUT NUMBER
    $('.input-num').on('focus', function() {
        $(this).val('');
    });

    $('.input-num').on('input keyup change paste', function(i) {
        $(this).val($(this).val().replace(/[^0-9]/gi, ''));

        $(this).val($(this).val().substring(0,1));
    });

    let total = document.getElementsByClassName('input-num');
    $('.input-num').on('keyup', function(i) {

        if (i.keyCode >= 48 && i.keyCode <= 57) {
            
            let currentId = i.target.id;
            let id = parseInt(currentId.match(/\d+/)[0]);
            let nextId = 'num'+(id+1);

            if (id <+ total.length) {
                document.getElementById(nextId).focus();
            }
            
        }

    });

});