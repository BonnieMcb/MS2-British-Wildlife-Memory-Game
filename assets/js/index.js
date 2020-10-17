$(document).ready(function() {

    // To highlight the buttons
    $(".button-group button").click(function() {
        $(this).siblings().removeClass("highlight-button");
        $(this).addClass("highlight-button");
    });

    $("#play").click(function() {
        let category = $("#category .button-group .highlight-button").attr("value");
        sessionStorage.setItem("category", category);

        let difficulty = $("#difficulty .button-group .highlight-button").attr("value");
        sessionStorage.setItem("difficulty", difficulty);
    });

});