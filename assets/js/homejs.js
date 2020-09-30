$(document).ready(function() {

    console.log("lkjsalskdjf");

    $(".button-group button").click(function() {

        //$(".button-group button").removeClass("highlight-button");

        $(this).siblings().removeClass("highlight-button");

        $(this).addClass("highlight-button");
    });















});