$(document).ready(function () {

  //hides game content
  hideGame();
  hideEnd();

  // --------question objects-------- //

  // question One
  var questionOne = {
    question: "What does 4+4 equal?",
    answer: "8",
    guessOne: "5",
    guessTwo: "10",
    guessThree: "13"
  };

  // question two
  var questionTwo = {
    question: "What is the houston basketball team?",
    answer: "Rockets",
    guessOne: "lakers",
    guessTwo: "celtics",
    guessThree: "spurs"
  };

  // question three
  var questionThree = {
    question: "What is the houston baseball team?",
    answer: "astros",
    guessOne: "dodgers",
    guessTwo: "red sox",
    guessThree: "yankees"
  };

  // question four
  var questionFour = {
    question: "what is 2+2?",
    answer: "4",
    guessOne: "66",
    guessTwo: "23",
    guessThree: "10"
  };

  // question four
  var questionFive = {
    question: "what is 9+9?",
    answer: "18",
    guessOne: "5",
    guessTwo: "3",
    guessThree: "6"
  };

  // ---------functions-------- //

  //hide functions
  function hideEnd() {
    $(".end").hide();
  }

  function showEnd() {
    $(".end").show();
  }

  function hideGame() {
    $(".gameToHide").hide();
  }

  function hideStart() {
    $(".start").remove();
    timerStuff();
  }


  function showGame() {
    $(".gameToHide").show();
    $(".correct").text(correct);
    $(".incorrect").text(incorrect);
  }

  $(".start").on("click", function () {
    hideStart();
    showGame();
  });

  //placeholder vars
  var q, g1, g2, g3, a1;

  //function to append question obj to html
  function questionInsert(x) {
    q = $("#question").text(x);
  }

  //function to append guesses obj to html
  function guessInsert(a, b, c, d) {
    g1 = $("#guessOne").text(a)
    g2 = $("#guessTwo").text(b)
    g3 = $("#guessThree").text(c)
    a1 = $("#answer").text(d)
  }

  //appends entire Q&A to rightful html area
  function slide(x) {
    questionInsert(x.question);
    guessInsert(x.guessOne, x.guessTwo, x.guessThree, x.answer);
  }
  var incorrect = 0;
  var correct = 0;

  //--------timer logic--------//
  //set time
  var timer = 10;
  var timerCounter = 0;
  var intId;
  slide(questionOne);
  function timerStuff() {
    intId = setInterval(timerFunc, 1000);
    function timerFunc() {
      timer--
      $("#timer").text(timer);
      if (timer <= 0 && timerCounter === 0) {
        console.log("User's time is up!");
        clearInterval(intId);
        timer = 10;
        slide(questionTwo)
        timerCounter++
        setInterval(timerFunc, 1000);
      } else if (timer <= 0 && timerCounter === 1) {
        clearInterval(intId);
        timer = 10;
        console.log("User's time is up!");
        slide(questionThree)
        timerCounter++
      } else if (timer <= 0 && timerCounter === 2) {
        clearInterval(intId);
        timer = 10;
        console.log("User's time is up!");
        slide(questionFour)
        timerCounter++
      } else if (timer <= 0 && timerCounter === 3) {
        clearInterval(intId);
        timer = 10;
        console.log("User's time is up!");
        slide(questionFive)
        timerCounter++
      } else if (timer <= 0 && timerCounter === 4) {
        console.log("in");
        clearInterval(intId);
        hideGame();
        showEnd();
      };
    }
  }

  $("#answer").on("click", function () {
    correct++
    $(".correct").text(correct);
    timer = 1;
    timerStuff();
  })

  $("#guessTwo").on("click", function () {
    incorrect++

    $(".incorrect").text(incorrect);
    timer = 1;
    timerStuff();
  })

  $("#guessThree").on("click", function () {
    incorrect++
    $(".incorrect").text(incorrect);
    timer = 1;
    timerStuff();
  })

  $("#guessOne").on("click", function () {
    incorrect++
    $(".incorrect").text(incorrect);
    timer = 1;
    timerStuff();

  })



$("#reset").on("click", function(){
  window.location.reload();
});














});


      // timer = 5;
      // setInterval(timerFunc, 1000);