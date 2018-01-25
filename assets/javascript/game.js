$(document).ready(function(){

var matchNumber;
var score;

function startGame() {
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
  //console.log(cats[0].name + " value: " + cats[0].assignedValue);
  // console.log(addClicks(cats[0].assignedValue));

  var catClick = addClicks(cats[0].assignedValue);
  console.log(catClick);
  compareClicksToMatch(catClick, matchNumber);

});

$("#orange-cat").on("click", function() {
  var catClick = addClicks(cats[1].assignedValue);
  console.log(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

$("#fluffy-cat").on("click", function() {
  var catClick = addClicks(cats[2].assignedValue);
  console.log(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

$("#tabby-cat").on("click", function() {
  var catClick = addClicks(cats[3].assignedValue);
  console.log(catClick);
  compareClicksToMatch(catClick, matchNumber);
});

// general function to generate a random number
function generateRandomNum(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min);
  return num;
}

function keepScore() {

}

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

function compareClicksToMatch(catClicks, matchNumber) {
  // var totalToMatch = matchNumber();
  if (catClicks === matchNumber) {
    console.log("you win");
  }
  if (catClicks > matchNumber) {
    console.log("you lose");
  }
}

startGame();

});
