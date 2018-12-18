// varibles for comp to choose from
var $guessedNumber = 53;

$(".guessed-number").text($guessedNumber);

var counter = 0;

// varibles assigned to images
var numberOptions = Math.floor(Math.random() * 27) +1;

// loop to create image for every option
for (var i = 0; i < numberOptions; i++) {
  var dragonBall = $("<img>");

  dragonBall.addClass("dragon-ball");

  dragonBall.attr("src", "assets/images/dragonball.jpeg");

  dragonBall.attr("data-ballvalue", numberOptions);

  $(".images").append(dragonBall);
}

$(".dragon-ball").on("click", function(){

  var ballValue = ($(this).attr("data-ballValue"));
  ballValue = parseInt(ballValue);

  counter += ballValue;

  alert("New score: " + counter);

  if (counter === $guessedNumber) {
    alert("You win!");
  }

  else if (counter >= $guessedNumber) {
    alert("you lose!");
  }

});

// wins/losses set to 0
// reset
// comp chooses random number 
// random values assigned to images
// make images clickable
// when image clicked number assigned to the image that is clicked will show
// adds together values of the image clicked for score

