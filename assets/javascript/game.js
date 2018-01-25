$(document).ready(function(){

var matchNumber;
var wins = 0;
var losses = 0;

function startGame() {
  generateMatchNumber();
  giveCatsRandomValues();
}

function playAgain() {
  generateMatchNumber();
  giveCatsRandomValues();
}

var cats = [
  {
    name: "#gray-cat",
  },
  { name: "#orange-cat"
  },
  { name: "#fluffy-cat"
  },
  { name: "#tabby-cat"
  }
]

function giveCatsRandomValues() {
  for (var i = 0; i < cats.length; i++) {
    cats[i].assignedValue = generateRandomNum(1, 12);
  }
}

// function handleCatClicks() {
//   for (var i = 0; i < cats.length; i++) {
//     $(cats[i].name).on("click", function() {
//       addClicks(cats[i].assignedValue);
//     });
//
//   }
// }

$("#gray-cat").on("click", function() {

  var catClick = addClicks(cats[0].assignedValue);
  console.log(catClick);
  $("#cat-totals").text(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

$("#orange-cat").on("click", function() {
  var catClick = addClicks(cats[1].assignedValue);
  console.log(catClick);
    $("#cat-totals").text(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

$("#fluffy-cat").on("click", function() {
  var catClick = addClicks(cats[2].assignedValue);
  console.log(catClick);
    $("#cat-totals").text(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

$("#tabby-cat").on("click", function() {
  var catClick = addClicks(cats[3].assignedValue);
  console.log(catClick);
    $("#cat-totals").text(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

// general function to generate a random number
function generateRandomNum(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

// TODO: switch back to 120 range
// generates the total that clicks need to sum to match
// between 19-120
function generateMatchNumber() {
  matchNumber = generateRandomNum(19,30);
  $("#random-total").text(matchNumber);
  return matchNumber;
}

// var clickCounter = 0;
// function addClicks(clickValue) {
//
//     clickCounter += clickValue;
//     console.log(clickCounter);
// }

var addClicks = (function(clickValue) {
  var counter = 0;
  return function(clickValue) {
    return counter += clickValue;
  }
})();

function compareClicksToMatch(catsCollected, matchNumber) {
  // var totalToMatch = matchNumber();
  if (catsCollected === matchNumber) {
    wins++;
    $("#wins").text(wins);
    console.log("you win");
    // addClicks(catClicks * -1);
    playAgain();
  }
  if (catsCollected > matchNumber) {
    losses++;
    $("#losses").text(losses);
    console.log("you lose");
        // addClicks(catClicks * -1);
    playAgain();
    }
}

startGame();



});



// // // query the value of the addClicks counter
// var myTotalScore = addClicks(0);
//
// // // multiple the current value of the counter times negative one
// myTotalScore = (myTotalScore * -1);
//
// // // reset the counter to zero
// addClick(myTotalScore);
//
// // // check to make sure the counter is at zero
// console.log("The big counter is now at: " + addClick(0));
