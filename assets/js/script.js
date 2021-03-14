
function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    $('#current-time').text(rightNow);
}

setInterval(displayTime, 1000);