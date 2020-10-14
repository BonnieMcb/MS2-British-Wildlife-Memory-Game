$(document).ready(function() {

    
// To highlight the buttons
    $(".button-group button").click(function() {
        $(this).siblings().removeClass("highlight-button");
        $(this).addClass("highlight-button");
    });

    $.getJSON("/assets/data/birds.json", function(json) {

// Fill in pathways for modal content
    // Write common name
        let commonName = $(".common");
        let nameObject = json[0];
        commonName.html(nameObject.name);

    // Write latin name
        let latinName = $(".latin");
        let latinObject = json[0];
        latinName.html(latinObject.latin);

    // Write modal image
        let modalPic = $(".modal-pic");
        let imageObject = json[0];
        //modalPic.html("src", "/assets/images/" + imageObject.modalImg);

        modalPic.attr("src", "./assets/images/" + imageObject.modalImg);

    // Write text / fact
        let fact = $(".fact");
        let textObject = json[0];
        fact.html(textObject.text);
        



    });



});