let json = [
  {
    "img": "birds/barn-owl.jpg",
    "text": "Birds are cool.",
    "id": 0
  },
  {
    "img": "birds/black-headed-gull.jpg",
    "text": "Birds are cool.",
    "id": 1
  },
  {
    "img": "birds/blue-tit.jpg",
    "text": "Birds are cool.",
    "id": 2
  },
];

$(document).ready(function() {

    let maxTiles = 6;         //hard-coded for testing TODO: link to difficulty level button click
    let pairNumber = maxTiles / 2;

// Highlight the buttons on index page
    $(".button-group button").click(function() {
        $(this).siblings().removeClass("highlight-button");
        $(this).addClass("highlight-button");
    });

    let gameData = [];
    //let birds = ["blue-tit.jpg", "blue-tit.jpg", "black-headed-gull.jpg","black-headed-gull.jpg", "barn-owl.jpg", "barn-owl.jpg"];

// Loop over json objects to create game data array
    for (let i = 0; i < pairNumber; ++i) {
        
        // Retrieve json object
        let oneBird = json[i];
       
        gameData.push(oneBird);
        gameData.push(oneBird);
    }
    
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
    shuffle(gameData)
    

    function createTile(gameObject) {
        let scene = $(
            `<div class="scene">
                <div class="tile">
                    <div class="tile-back tile-face"><img class="pic-back" src="assets/images/oak-icon.png" alt="oak leaf icon" draggable="false">
                    </div>
                    <div class="tile-front tile-face"><img class="pic-front" src="" alt="barn owl" draggable="false">
                    </div>
                </div>
            </div>`);

        // Fill in image path
        // Select second img tag from tile
        let frontImage = scene.find("img.pic-front");
        // Change src attribute to match image path
        frontImage.attr("src", "./assets/images/" + gameObject.img);
        
        // SET id as data tag on tile (for matching later)
        let tile = scene.find(".tile");
        tile.attr("tileid", gameObject.id)

        $("#game-board").append(scene);
    }

// Lay out cards randomly
    for (let i = 0; i < maxTiles; i++) {

        createTile(gameData[i]);
    }
    
// Flip the cards
    function onClicked() {

        // Prevent flipping of matched or already flipped cards

        if ($(this).hasClass('is-flipped') || $(this).hasClass("is-matched"))
            return;

        // Only flip two cards
        const flippedCount = $('.is-flipped').length;
        if (flippedCount < 2) {
            $(this).toggleClass("is-flipped");
        }

        // Check for matching pairs
        let flippedTiles = $(".is-flipped");
        if (flippedTiles.length == 2) {

            // GET id tag for flipped tiles 
            let tile1 = $(flippedTiles[0]);
            let tile2 = $(flippedTiles[1]);
            
            // MATCH FOUND
            if (tile1.attr("tileid") == tile2.attr("tileid")) {

                window.setTimeout(function()  {

                    console.log("match found");

                    tile1.removeClass("is-flipped").addClass("is-matched");
                    tile2.removeClass("is-flipped").addClass("is-matched");

                }, 1000);
            }
            // NO MATCH FOUND
            else {

                window.setTimeout(function()  {

                    tile1.removeClass("is-flipped");
                    tile2.removeClass("is-flipped");

                }, 1000);
            }
        }
    }

    $(".tile").click(onClicked);









});