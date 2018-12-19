// varibles for comp to choose from
var $guessedNumber = Math.floor(Math.random() * 100) +52;

$(".guessed-number").text("Number to guess: " + $guessedNumber);

// counter for game 
var counter = 0;
var wins = 0;
var losses = 0;
var gameActive = true;

// reset function
function reset() {
  $guessedNumber = Math.floor(Math.random() * 100) +52;
  $('.guessed-number').text($guessedNumber);
  counter = 0;
  numberOptions = [];
  numberOptions2 = [];
  numberOptions3 = [];
  numberOptions4 = [];
  gameActive = true;

  $(".dragon-ball").each(function() {
    var randomNumber = Math.floor(Math.random() * 13) +1;

    $(this).attr("data-ballvalue", randomNumber);
  })

  $(".score").empty();
}

// reset button
$("#reset-button").on("click", function() {
  reset();
});


// varibles assigned to first image
var numberOptions = Math.floor(Math.random() * 13) +1;

// creating first image
  var dragonBall1 = $("<img>");

  // add class for css attributes to image
  dragonBall1.addClass("dragon-ball");

  // linking image
  dragonBall1.attr("src", "assets/images/dragonball.jpeg");

  // creating data attributes for images
  dragonBall1.attr("data-ballvalue", numberOptions);

  // printing image to screen
  $(".images").append(dragonBall1);

// image 2
var numberOptions2 = Math.floor(Math.random() * 13) +1;


  var dragonBall2 = $("<img>");

  dragonBall2.addClass("dragon-ball");

  dragonBall2.attr("src", "assets/images/dragonball.jpeg");

  dragonBall2.attr("data-ballvalue", numberOptions2);

  $(".images").append(dragonBall2);

// image 3
var numberOptions3 = Math.floor(Math.random() * 13) +1;


  var dragonBall3 = $("<img>");

  dragonBall3.addClass("dragon-ball");

  dragonBall3.attr("src", "assets/images/dragonball.jpeg");

  dragonBall3.attr("data-ballvalue", numberOptions3);

  $(".images").append(dragonBall3);

// image 4
var numberOptions4 = Math.floor(Math.random() * 13) +1;

  var dragonBall4 = $("<img>");

  dragonBall4.addClass("dragon-ball");

  dragonBall4.attr("src", "assets/images/dragonball.jpeg");

  dragonBall4.attr("data-ballvalue", numberOptions4);

  $(".images").append(dragonBall4);


// runs when an image is clicked 
$(".dragon-ball").on("click", function(){
  if (gameActive !== true) {
    return false;
  } 
   
  var ballValue = ($(this).attr("data-ballValue"));
  ballValue = parseInt(ballValue);

  counter += ballValue;

  $(".score").text("New score: " + counter);

  if (counter === $guessedNumber) {
    $(".score").text("You win!");
    wins++;
    $(".player-wins").text("Wins: " + wins);
    gameActive = false;
    
  }

  else if (counter >= $guessedNumber) {
    $(".score").text("you lose!");
    losses++;
    $(".player-losses").text("Losses: " + losses);
    gameActive = false;
  }

});

// wins/losses set to 0
// reset
// comp chooses random number 
// random values assigned to images
// make images clickable
// when image clicked number assigned to the image that is clicked will show
// adds together values of the image clicked for score

