$( document ).ready(function() {

    window.scrollTo(0, 0);
    
    function getCurrentTime() {
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+(today.getFullYear()+25);

        
        var minutes = today.getMinutes();
        var heure = today.getHours();

        if (minutes.toString().length < 2) {
            minutes = 0+minutes.toString();
        }

        var time = heure + ":" + minutes;

        document.querySelector('#date').innerHTML = date;
        document.querySelector('#heure').innerHTML = time;
    }

    getCurrentTime();
    setInterval(getCurrentTime, 1000);

    

});