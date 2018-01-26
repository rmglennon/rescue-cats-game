$(document).ready(function(){

// add variables and object for the four items to click
var matchNumber;
var wins = 0;
var losses = 0;

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

// start the game and execute related functions
function startGame() {
  resetCounter();
  generateMatchNumber();
  giveCatsRandomValues();
}

// generate a random point value for each of the items to click
function giveCatsRandomValues() {
  for (var i = 0; i < cats.length; i++) {
    cats[i].assignedValue = generateRandomNum(1, 12);
  }
}

// set up on-click functions and assign random point value
// compare points to secret total point value to match
// update the master point total for items to click

$("#gray-cat").on("click", function() {
  var catClick = addClicks(cats[0].assignedValue);
  $("#cat-totals").text(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

$("#orange-cat").on("click", function() {
  var catClick = addClicks(cats[1].assignedValue);
  $("#cat-totals").text(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

$("#fluffy-cat").on("click", function() {
  var catClick = addClicks(cats[2].assignedValue);
  $("#cat-totals").text(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

$("#tabby-cat").on("click", function() {
  var catClick = addClicks(cats[3].assignedValue);
  $("#cat-totals").text(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

// general function to generate a random number
function generateRandomNum(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

// generates the total that clicks need to sum to match
// between 19-120
function generateMatchNumber() {
  matchNumber = generateRandomNum(19,120);
  $("#random-total").text(matchNumber);
  return matchNumber;
}

// create a counter function
var addClicks = (function(clickValue) {
  var counter = 0;
  return function(clickValue) {
    return counter += clickValue;
  }
})();

// reset the counter
function resetCounter () {
  var myTotalScore = addClicks(0);
  myTotalScore = (myTotalScore * -1);
  addClicks(myTotalScore);
}

// test if the number of cats is equal to (winner) or more than the number to match
// update the score text and restart game
function compareClicksToMatch(catsCollected, matchNumber) {
  if (catsCollected === matchNumber) {
    wins++;
    $("#wins").text(wins);
    startGame();
  }
  if (catsCollected > matchNumber) {
    losses++;
    $("#losses").text(losses);
    startGame();
    }
}

startGame();

});
