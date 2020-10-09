$(document).ready(function() {

// To highlight the buttons
    $(".button-group button").click(function() {
        $(this).siblings().removeClass("highlight-button");
        $(this).addClass("highlight-button");
    });


    let birds = ['barn-owl.jpg', 'barn-owl.jpg','black-headed-gull.jpg', 'black-headed-gull.jpg', 'blue-tit.jpg', 'blue-tit.jpg'];

// Shuffle an array code taken from:
// https://medium.com/@nitinpatel_20236/how-to-shuffle-correctly-shuffle-an-array-in-javascript-15ea3f84bfb
    function shuffle(array) {
        for(let i = array.length - 1; i > 0; i--){
            let j = Math.floor(Math.random() * i);
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
// Shuffle the tiles
    shuffle(birds)
    

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
        // Select second img tag from tile
        let frontImage = tile.find("img.pic-front");
        // Change src attribute to match image path
        frontImage.attr("src", "./assets/images/birds/" + picture); // change to ./assets/images/ so that can reuse for other categories
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