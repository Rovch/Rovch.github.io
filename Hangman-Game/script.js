//------------------------- PseudoCode ---------------------------//
// 1.  initiation
// 2.  ask the player if it wants 1 or 2 players, then allow if player one enter a word- 
//     if single player allow user to choose category and auto select a word from stored array
// 3.  computer reads "word" then displays word length
// 4.  computer displays life count and allows player 2 to begin to guess 
// 5. player either guesses the word or loses the game due to not enough lives 
// 6. reset.
//------------------------ PseudoCode ---------------------------//

//deletes the form field after user submits hidden word
// function displayFunction() {
//   var x = document.getElementById("form1");
//   if (x.style.display === "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }


//setting vars and arrays for below if else statements
var wordArray = [];
counter = 0;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
  'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
  't', 'u', 'v', 'w', 'x', 'y', 'z'];
var cars = ["bmw", "audi", "honda", "datsun", "lexus", "fiat"];
var food = ["pie", "bacon", "frys", "tuna", "taco", "steak"];
var animals = ["dog", "cat", "goat", "snake", "horse", "cow"];
var correct = 0;
var wrong = 0;
var playerSelect = 0;

var category = "";

function buttons() {
  for (var i = 0; i < alphabet.length; i++) {
    var liCreator = document.createElement("LI");
    liCreator.id = alphabet[i];
    liCreator.setAttribute("onclick", "letterClick(this.id)");
    liCreator.className = "letters";
    liCreator.innerHTML = alphabet[i];
    document.getElementById("mylist").appendChild(liCreator);
  }
}


function catIs() {
  var catHeader = document.createElement("h1");
  catHeader.innerHTML = "The category selected is " + category;
  document.getElementById("catId").appendChild(catHeader);
  letterGuess();
}


logPlace = 0;

function letterGuess() {
  for (var i = 0; i < wordArray.length; i++) {
    var hiddenLetters = document.createElement("li");
    hiddenLetters.id = logPlace;
    logPlace++;
    hiddenLetters.className = "hiddenLetters";
    hiddenLetters.innerHTML = "_";
    document.getElementById("hiddenWord").appendChild(hiddenLetters);
  }
}



function reset() {
  window.location.reload();
}

function myFunction() {

  //deletes the form field after user submits hidden word
  var x = document.getElementById("form1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  //Retrieves the "input" entered by user in the html form and logs it
  category = document.getElementById("inputContent").value;
  // console.log(category)

  // for loop will run until its equal to the statement aboves .length, it then pushes each character to an array. Then logs it
  for (var i = 0; i < category.length; i++) {
    wordArray.push(category.charAt(i));
  }
  console.log("Hidden word: " + wordArray.join(""));
  console.log(wordArray);
  counter++;
};

var x = document.getElementById("form1");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}

var x = document.getElementById("cats");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}

function onePlayer() {
  playerSelect = "1"
  console.log("Mode: SinglePlayer");
  var x = document.getElementById("cats");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }

  var x = document.getElementById("players");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function twoPlayer() {
  playerSelect = "2"
  // console.log("Mode: MultiPlayer");
  playerSelector();
  // var x = document.getElementById("players");
  // if (x.style.display === "none") {
  //   x.style.display = "block";
  // } else {
  //   x.style.display = "none";
  // }
}

function setCats(x) {
  category = x;
  playerSelector();

  var x = document.getElementById("cats");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
  catIs();
  buttons();
}

//if statement for player 1, asked player to select a category then chooses a random word in the category
function playerSelector() {
  if (playerSelect === "1") {
    if (category === "cars") {
      var i = Math.floor(Math.random() * cars.length);
      console.log("category: " + category);
      console.log("Hidden word: " + cars[i]);
      bank = cars[i];
    }
    else if (category === "food") {
      var i = Math.floor(Math.random() * food.length);
      console.log("category: " + category);
      console.log("Hidden word: " + food[i]);
      bank = food[i];
    }
    else if (category === "animals") {
      var i = Math.floor(Math.random() * animals.length);
      console.log("category: " + category);
      console.log("Hidden word: " + animals[i]);
      bank = animals[i];
    }
    else {
      alert("you have not chosen a category");
    }

    for (var i = 0; i < bank.length; i++) {
      wordArray.push(bank.charAt(i));
    }
    console.log(wordArray);
  }

  //if statement for player 2, lets player 1 input a word for player 2 to guess
  else if (playerSelect === "2") {
    // myFunction();
    // letterGuess();
    alert("under construction please choose single player");
  }

}


var found = "";
var newGuess = "";


function compare() {
found = wordArray.indexOf(guess);
console.log("letter index: " + found);
}

function replace() {
  newGuess = document.getElementById(guess).innerHTML;
  console.log("list item id: " + newGuess);
}



function replaceSpace() {
var xyz = document.getElementById(found);
xyz.innerHTML = newGuess;


}


function letterClick(x) {
  guess = x;
  guessEvaluate();
  compare();
  replace();
  replaceSpace();
}

var guess = " ";
var correctLetters = [];
var wrongLetters = [];

function guessEvaluate() {

  if (wordArray.includes(guess) === true) {
    correctLetters.push(guess);
    console.log("Correct Guess of: " + guess);
    correct++;
    correctF();

  } else {
    alert("wrong");
    wrongLetters.push(guess);
    console.log("Incorrect Guess of: " + guess);
    wrong++;
    console.log(wrong);
    wrongF();
  }
}

function wrongF() {
  if (wrong === 5) {
    var winLose = document.getElementById("win/lose")
    winLose.innerHTML = "You Lose!"


    var x = document.getElementById("hiddenWord");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var x = document.getElementById("catId");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var x = document.getElementById("mylist");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 
}

function correctF() {
  if (correct === wordArray.length) {
    var winLose = document.getElementById("win/lose")
    winLose.innerHTML = "You Win!"


    var x = document.getElementById("hiddenWord");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var x = document.getElementById("catId");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    var x = document.getElementById("mylist");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  } 
}


// ways to compare guess to an array
// console.log(wordArray.indexOf(guess) > -1);
// console.log(wordArray.includes(guess));


