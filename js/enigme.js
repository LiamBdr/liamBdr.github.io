$( document ).ready(function() {


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

    /*
    
    */
});