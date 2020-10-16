$(document).ready(function() {

    // NOTE: "Category" isn't being used right now. See Readme for details.
    let difficulty = sessionStorage.getItem("difficulty");
    // Default to medium.
    if (difficulty == null) {
        difficulty = "medium";
    }

    let difficulties = {
        "medium": 16,
        "hard": 36
    };

    let maxTiles = difficulties[difficulty];
    let pairNumber = maxTiles / 2;

    $.getJSON("/assets/data/birds.json", function(json) {

    // Shuffle the data to get random data each time
    shuffle(json);

    let gameData = [];

// Loop over json objects to create game data array
    for (let i = 0; i < pairNumber; ++i) {
        
        // Retrieve json object
        let oneBird = json[i];

        // Add id number in order to match tiles
        oneBird.id = i;
       
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

// Set up CSS for this number of tiles
    let numRows = Math.sqrt(maxTiles);
    $("#game-board").css("grid-template-columns", "repeat(" + numRows + ", 1fr)");

    function createTile(gameObject) {
        let scene = $(
            `<div class="scene inherit-height">
                <div class="tile">
                    <div class="tile-back tile-face"></div>
                    <div class="tile-front tile-face"></div>
                </div>
            </div>`);

        // Fill in image path

        // Select second img tag from tile
        let frontImage = scene.find(".tile-front");
        // Change css to match image path
        frontImage.css("background-image", "url(./assets/images/" + gameObject.tileImg + ")");
        
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

        matchTiles();
    }

    function createMatchedModal(index) {

        let gameObject = json[index];

        $("#matched-modal .modal-title").html(gameObject.name);
        $("#matched-modal .modal-subtitle").html(gameObject.latin);
        $("#matched-modal .modal-pic").attr("src", "./assets/images/" + gameObject.tileImg);
        $("#matched-modal .fact").html(gameObject.text);

        $("#matched-modal").modal();

        $("#matched-modal").on($.modal.AFTER_CLOSE, function() {

            window.setTimeout(checkCompletion, 100);
        });
    }

    function matchTiles() {
        // Check for matching pairs
        let flippedTiles = $(".is-flipped");
        if (flippedTiles.length == 2) {

            let tile1 = $(flippedTiles[0]);
            let tile2 = $(flippedTiles[1]);
            
            let tile1Id = tile1.attr("tileid");
            let tile2Id = tile2.attr("tileid");

            // MATCH FOUND
            if (tile1Id == tile2Id) {
                
                //Delay matching until flip animation finished
                window.setTimeout(function()  {

                    tile1.removeClass("is-flipped").addClass("is-matched");
                    tile2.removeClass("is-flipped").addClass("is-matched");

                    createMatchedModal(tile1Id);

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

    function checkCompletion() {
        
        //if all tiles have is-matched class, then show modal
        if ($(".is-matched").length == maxTiles) {
            $("#complete-modal").modal({
                showClose: false,
                clickClose: false,
                escapeClose: false
            });
        }
    }

    
    $(".tile").click(onClicked);


    // DEBUG: Used for testing
    window.testing = {
        complete: function() {
            $(".tile").addClass("is-matched");
            checkCompletion();
        }
    };

});

});


