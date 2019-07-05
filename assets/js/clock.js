document.addEventListener('DOMContentLoaded', () =>
    requestAnimationFrame(updateTime)
)

function updateTime() {
    var fr = moment().locale('fr');
    document.documentElement.style.setProperty('--timer-day', "'" + fr.format('Do MMMM YYYY') + "'");
    document.documentElement.style.setProperty('--timer-hours', "'" + fr.format("HH") + "'");
    document.documentElement.style.setProperty('--timer-minutes', "'" + fr.format("mm") + "'");
    document.documentElement.style.setProperty('--timer-seconds', "'" + fr.format("ss") + "'");
    requestAnimationFrame(updateTime);
}