$(document).ready(function () {

  var globalCounter;
  function randomN() {
    var rn = Math.floor((Math.random()) * 20);
    return rn;
  }

  function hideA() {
    var z = $(".a").hide();
  };

  function showA(card) {
    card.show();
  };

  hideA();

  //card objects//
  // card 1
  var card1Object = {
    health1Total: $("#health1Total").text(),
    damage1Total: $("#damage1Total").text(),
    attack1Total: "",
    card1: $(".card1"),
    counter2: 0,
    attackBtn: $(".attack1")

  };

  //card2
  var card2Object = {
    health2Total: $("#health2Total").text(),
    damage2Total: $("#damage2Total").text(),
    attack2Total: "",
    card2: $(".card2"),
    counter2: 0,
    attackBtn: $(".attack2")
  };

  //card3
  var card3Object = {
    health3Total: $("#health3Total").text(),
    damage3Total: $("#damage3Total").text(),
    attack3Total: "",
    card3: $(".card3"),
    counter3: 0,
    attackBtn: $(".attack3")
  };

  //card4
  var card4Object = {
    health4Total: $("#health4Total").text(),
    damage4Total: $("#damage4Total").text(),
    attack4Total: "",
    card4: $(".card4"),
    counter4: 0,
    attackBtn: $(".attack4")
  };


  //attack functions//
  function attack() {
    //card1 
    if (globalCounter === 1) {
      $(".attack1").on("click", function () {
        card1Object.attack1Total = Math.floor((Math.random()) * 45);
        card2Object.health2Total = card2Object.health2Total - card1Object.attack1Total;
        card3Object.health3Total = card3Object.health3Total - card1Object.attack1Total;
        card4Object.health4Total = card4Object.health4Total - card1Object.attack1Total;
        card1Object.health1Total = card1Object.health1Total - randomN();
        $("#health2Left").text(card2Object.health2Total);
        $("#health3Left").text(card3Object.health3Total);
        $("#health4Left").text(card4Object.health4Total);
        $("#health1Left").text(card1Object.health1Total);
        if ($("#health2Left").text() < 0) {
          card2Object.card2.remove();
          card3Object.card3.remove();
          card4Object.card4.remove();
        } else if ($("#health1Left").text() < 0) {
          card1Object.card1.remove();
        }
      });
    }

    //card2
    else if (globalCounter === 2) {
      $(".attack2").on("click", function () {
        card2Object.attack2Total = Math.floor((Math.random()) * 60);
        card1Object.health1Total = card1Object.health1Total - card2Object.attack2Total;
        card3Object.health3Total = card3Object.health3Total - card2Object.attack2Total;
        card4Object.health4Total = card4Object.health4Total - card2Object.attack2Total;
        card2Object.health2Total = card2Object.health2Total - randomN();
        $("#health1Left").text(card1Object.health1Total);
        $("#health3Left").text(card3Object.health3Total);
        $("#health4Left").text(card4Object.health4Total);
        $("#health2Left").text(card2Object.health2Total);
        if ($("#health1Left").text() < 0) {
          card1Object.card1.remove();
          card3Object.card3.remove();
          card4Object.card4.remove();
        } else if ($("#health2Left").text() < 0) {
          card2Object.card2.remove();
        }
      });
    }

    //card3
    else if (globalCounter === 3) {
      $(".attack3").on("click", function () {
        card3Object.attack3Total = Math.floor((Math.random()) * 45);
        card2Object.health2Total = card2Object.health2Total - card3Object.attack3Total;
        card1Object.health1Total = card1Object.health1Total - card3Object.attack3Total;
        card4Object.health4Total = card4Object.health4Total - card3Object.attack3Total;
        card3Object.health3Total = card3Object.health3Total - randomN();
        $("#health2Left").text(card2Object.health2Total);
        $("#health1Left").text(card1Object.health1Total);
        $("#health4Left").text(card4Object.health4Total);
        $("#health3Left").text(card3Object.health3Total);
        if ($("#health1Left").text() < 0) {
          card1Object.card1.remove();
          card2Object.card2.remove();
          card4Object.card4.remove();
        } else if ($("#health3Left").text() < 0) {
          card3Object.card3.remove();
        }
      });
    }

    //card4
    else if (globalCounter === 4) {
      $(".attack4").on("click", function() {
        card4Object.attack4Total = Math.floor((Math.random()) * 45);
        card2Object.health2Total = card2Object.health2Total - card4Object.attack4Total;
        card3Object.health3Total = card3Object.health3Total - card4Object.attack4Total;
        card1Object.health1Total = card1Object.health1Total - card4Object.attack4Total;
        card4Object.health4Total = card4Object.health4Total - randomN();
        $("#health2Left").text(card2Object.health2Total);
        $("#health3Left").text(card3Object.health3Total);
        $("#health1Left").text(card1Object.health1Total);
        $("#health4Left").text(card4Object.health4Total);
        if ($("#health1Left").text() < 0) {
          card1Object.card1.remove();
          card3Object.card3.remove();
          card2Object.card2.remove();
        } else if ($("#health4Left").text() < 0) {
          card4Object.card4.remove();
        }
      });
    };
  };

  //select functions//
  //card1
  $(".select1").on("click", function () {
    console.log("clicked worked");
    globalCounter = 1;
    attack();
    showA(card1Object.attackBtn);
    $(".0").append(card1Object.card1);
    $(".4").append(card2Object.card2);
    $(".4").append(card3Object.card3);
    $(".4").append(card4Object.card4);
  });

  // card2
  $(".select2").on("click", function () {
    console.log("clicked worked");
    globalCounter = 2;
    attack();
    showA(card2Object.attackBtn);
    $(".0").append(card2Object.card2);
    $(".4").append(card1Object.card1);
    $(".4").append(card3Object.card3);
    $(".4").append(card4Object.card4);
  });

// card3
  $(".select3").on("click", function () {
    console.log("clicked worked");
    globalCounter = 3;
    attack();
    showA(card3Object.attackBtn);
    $(".0").append(card3Object.card3);
    $(".4").append(card1Object.card1);
    $(".4").append(card2Object.card2);
    $(".4").append(card4Object.card4);
  });

  // card4
  $(".select4").on("click", function () {
    console.log("clicked worked");
    globalCounter = 4;
    attack();
    showA(card4Object.attackBtn);
    $(".0").append(card4Object.card4);
    $(".4").append(card1Object.card1);
    $(".4").append(card3Object.card3);
    $(".4").append(card2Object.card2);
  });

});