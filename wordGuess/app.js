
//requires
var clear = require('clear');
var inquirer = require('inquirer');
var Word = require('./Word.js');
var List = require('./Word.js');
var Letter = require('./Letter.js');

//global vars
var lives = 5;
var tries = 0;
var stuff = [];
var guessedLetters = [];
var wordList = Word.wordList;
var currentWord = Word.currentWord


start();

//logic
function start() {
  clear();
  //grabs random word and splits it by char.
  Letter(currentWord);

  for (var i = 0; i < wordLetters.length; i++) {
    stuff.push("_");
  }
  console.log(stuff);
  looper();

  function guess() {
    inquirer.prompt({
      type: "input",
      name: "platform",
      message: "Guess a letter!"
    }).then(function (answer) {
      if (wordLetters.includes(answer.platform)) {
        clear();
        var replacer = wordLetters.indexOf(answer.platform);
        stuff[replacer] = answer.platform;
        guessedLetters.push(answer.platform);
        viewer();
        looper();
      } else {
        clear();
        tries++
        lives--
        viewer();
        console.log("Wrong! guess again!");
        looper();
      }
    });
  }

  function looper() {
    if (tries < 5 && guessedLetters.length !== stuff.length) {
      guess();
    } if (tries < 5 && guessedLetters.length === stuff.length) {
      console.log("you win!")
    } if (tries >= 5) {
      console.log("you lost sorry!");
    }
  }
}

function viewer() {
  console.log("answer.platform")
  console.log(stuff);
  console.log(`Lives: ${lives}`)
}
