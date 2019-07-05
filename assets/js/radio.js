$(document).ready(function () {
    console.log("ready!");
    updateTimeWithInfo();
    $.getJSON("assets/config/listRadio.json", function (data) {
        var items = [];
        $.each(data, function (key, val) {
            items.push(` <div class='three wide column'>
                            <a onClick='createAudioPlayer("` + val.src + `","` + val.titre + `")'>
                                <div class='ui segment' id='` + val.titre + `'>
                                    <img src='` + val.logo + `' class='ui image fluid'>
                                </div>
                            </a>
                        </div>`);
        });

        $("<div/>", {
            "class": "ui grid",
            html: items.join("")
        }).appendTo("#radioList");
    });
});


function createAudioPlayer(src, title) {
    // Clear div before
    $("#radioPlayer").empty();

    // Create divider to add the radio title
    $("#radioPlayer").html(`<h4 class="ui horizontal divider header">
                            <i class="music icon"></i>
                            ` + title + `
                            </h4>`);

    // Create the audio controller with source selected
    $("<audio />", {
        "controls": true,
        "autoplay": true,
        html: `<source src='` + src + `' type='audio/mp3'>`
    }).appendTo("#radioPlayer").attr("controls");
}

function updateTimeWithInfo() {
    var fr = moment().locale('fr');
    document.documentElement.style.setProperty('--timer-day', "'" + fr.format('Do MMMM YYYY') + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + fr.format("HH") + "'");
    document.documentElement.style.setProperty('--timer-minutes', "': " + fr.format("mm") + "'");
    document.documentElement.style.setProperty('--timer-seconds', "': " + fr.format("ss") + "'");
    requestAnimationFrame(updateTimeWithInfo);
}