$(document).ready(function() {

    
// To highlight the buttons
    $(".button-group button").click(function() {
        $(this).siblings().removeClass("highlight-button");
        $(this).addClass("highlight-button");
    });

// To flip the cards
    $(".tile").click(function() {
    $(this).toggleClass("is-flipped");
    });













});