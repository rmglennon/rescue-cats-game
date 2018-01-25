$(document).ready(function(){

function startGame() {
  matchNumber();
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

giveCatsRandomValues();
// handleCatClicks();

// console.log(cats[0].name + " : " + cats[0].assignedValue );
// console.log(cats[1].name + " : " + cats[1].assignedValue );
// console.log(cats[2].name + " : " + cats[2].assignedValue );
// console.log(cats[3].name + " : " + cats[3].assignedValue );

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

  var catReadout = addClicks(cats[0].assignedValue);
  // console.log(catReadout);
});

$("#orange-cat").on("click", function() {
  console.log("orange cat value " + cats[1].assignedValue);
  addClicks(cats[1].assignedValue);
});

$("#fluffy-cat").on("click", function() {
  console.log("fluffy cat value " + cats[2].assignedValue);
  addClicks(cats[2].assignedValue);
});

$("#tabby-cat").on("click", function() {
  console.log("tabby cat value " + cats[3].assignedValue);
  addClicks(cats[3].assignedValue);
});

function generateRandomNum(min, max) {
  var num = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(num);
  return num;
}

function keepScore() {

}

// generates the total that clicks need to sum to match
// between 19-120
function matchNumber() {
  var match = generateRandomNum(19,120);
  $("#random-total").text(match);
  return match;
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

function compareClicksToMatch(clicks, match) {
  if (addClicks === match) {
    console.log("you win");
  }
  if (addClicks > match) {
    console.log("you lose");
  }
}

startGame();

});
