$(document).ready(function () {
    console.log("ready!");
    updateTimeWithInfo();
    var countDownDate;
    var interval;
    var startTimer = function () {
        console.log('toito');
        diff = countDownDate.diff(moment());
        if (diff <= 0) {
            clearInterval(x);
            // If the count down is finished, write some text 
            var audio = new Audio('../assets/song/alarm.mp3');
            audio.play();
        }
        else {
            $('#timer').text(moment.utc(diff).format("HH:mm:ss"));
        }

    };

    $("#start").click(function () {
        var timer = $("#timer").html();
        var time = timer.split(':');
        countDownDate = moment().add(time[1], 'minutes');
        interval = setInterval(startTimer, 1000);
    })

    $("#stop").click(function () {
        $("#timer").html("00:00:00");
        clearInterval(interval);
    })

});

function setTimer(val) {
    var timer = moment().startOf('date').hours(0).minutes(val);
    $("#timer").html(timer.format("HH:mm:ss"));
}


function updateTimeWithInfo() {
    var fr = moment().locale('fr');
    document.documentElement.style.setProperty('--timer-day', "'" + fr.format('Do MMMM YYYY') + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + fr.format("HH") + "'");
    document.documentElement.style.setProperty('--timer-minutes', "': " + fr.format("mm") + "'");
    document.documentElement.style.setProperty('--timer-seconds', "': " + fr.format("ss") + "'");
    requestAnimationFrame(updateTimeWithInfo);
}