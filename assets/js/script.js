$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var time = moment();
var hour = moment().hours();

var clearEl = $('#clear');

function startSchedule() {
    $(".time-block").each(function () {
        var id = $(this).attr("id");
        var planner = localStorage.getItem(id);

        $(this).find(".planner").val(planner);
        console.log(typeof planner)
    });
}

startSchedule();
var saveBtn = $('.saveBtn');
saveBtn.on('click', function () {
    var time = $(this).parent().attr('id');
    var planner = $(this).siblings('.planner').val();
    localStorage.setItem(time, planner);
});

function colorBlock() {
    hour = time.hours();
    $(".time-block").each(function () {
        var thisHour = parseInt($(this).attr("id"));

        if (thisHour > hour) {
            $(this).addClass("future")
        } else if (thisHour === hour) {
            $(this).addClass("present");
        } else {
            $(this).addClass("past");
        }

    });

}

colorBlock();
