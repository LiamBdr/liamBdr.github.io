$( document ).ready(function() {

    window.scrollTo(0, 0);

    document.querySelector('#heure span:nth-child(2)').innerHTML = ":";

    
    function getCurrentTime() {
        var today = new Date();
        var date = today.getDate()+'-'+(today.getMonth()+1)+'-'+(today.getFullYear()+25);

        
        var minutes = today.getMinutes();
        var heure = today.getHours();

        if (minutes.toString().length < 2) {
            minutes = 0+minutes.toString();
        }

        document.querySelector('#date').innerHTML = date;
        document.querySelector('#heure span:nth-child(1)').innerHTML = heure;
        document.querySelector('#heure span:nth-child(3)').innerHTML = minutes;
    }

    getCurrentTime();
    setInterval(getCurrentTime, 3000);

    setInterval(() => {

        document.querySelector('#heure span:nth-child(2)').style.opacity = '0';

        setTimeout(() => {
            document.querySelector('#heure span:nth-child(2)').style.opacity = '1';
        }, 1000);
        

    }, 2000);

    

});