$(document).ready(function() {

// To highlight the buttons
    $(".button-group button").click(function() {
        $(this).siblings().removeClass("highlight-button");
        $(this).addClass("highlight-button");
    });

    // Taken from:
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let birds = ['barn-owl.jpg', 'barn-owl.jpg','black-headed-gull.jpg', 'black-headed-gull.jpg', 'blue-tit.jpg', 'blue-tit.jpg'];

    function createTile(picture) {

        let tile = $(
            `<div class="scene">
                <div class="tile">
                    <div class="tile-back tile-face"><img class="pic-back" src="assets/images/oak-icon.png" alt="oak leaf icon">
                    </div>
                    <div class="tile-front tile-face"><img class="pic-front" src="" alt="barn owl">
                    </div>
                </div>
            </div>`);
       

        // Select second image tag from tile
        let frontImage = tile.find("img.pic-front");

        // TODO: work out which image to use based on which cards need to be placed (i.e. two gulls, two owls etc.)

        // Change src attribute to match image path
        frontImage.attr("src", "./assets/images/birds/" + picture); //possibly change to ./assets/images/ so that can reuse for other categories

        $("#game-board").append(tile);

    }

// To lay out cards randomly

    let maxTiles = 6;         //hard-coded for testing TODO: link to difficulty level button click
    
    

    for (let i = 0; i < maxTiles; i++) {

        createTile(birds[i]);
    }
 
// To flip the cards
    $(".tile").click(function() {
    $(this).toggleClass("is-flipped");
    });









});