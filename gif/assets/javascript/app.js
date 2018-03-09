
$(document).ready(function () {
  var key = "7kUBgo6uJq3ftUyWdMmASY6KLUu9Nf2b"
  var cars = ["bmw", "audi", "aston martin"];

  function displayGif() {
    var actualGif = $(this).attr("data-name");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + actualGif + "&api_key=" + key +"&limit=5"

    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function (response) {

      gifGrab(response);
      $(".gif").on("click", function () {
        var state = $(this).attr("data-state");
        console.log(state);
        if (state === "still") {
          $(this).attr("src", $(this).attr("data-animate"));
          $(this).attr("data-state", "animate");
        } else {
          $(this).attr("src", $(this).attr("data-still"));
          $(this).attr("data-state", "still");
        }
      });
    });
  }

  function gifGrab(response) {
    $("#gifView").empty();
    var results = response.data;
    for (var i = 0; i < results.length; i++) {
      var newDiv = $("<div>").addClass("user");
      var gifStill = results[i].images.fixed_height_still.url;
      var moving = results[i].images.fixed_height.url;
      var rating = results[i].rating;
      var gifDiv = $("<img>").addClass("gif").attr("src", gifStill).attr("data-still", gifStill).attr("data-animate", moving).attr("data-state", "still");
      var ratingInsert = $("<div class = 'rating drop'>").text("Rating:" + rating);
      newDiv.append(ratingInsert);
      newDiv.append(gifDiv);
      $("#gifView").append(newDiv);
    }
  }

  function renderButtons() {
    $("#buttons-view").empty();
    for (var i = 0; i < cars.length; i++) {
      var a = $("<button>");
      a.addClass("gifBtn btn btn-success");
      a.attr("data-name", cars[i]);
      a.text(cars[i]);
      $("#buttons-view").append(a);
    }
  }

  $("#addGif").on("click", function (event) {
    event.preventDefault();
    var actualGif = $("#newInput").val().trim();
    cars.push(actualGif);
    renderButtons();
  });

  $(document).on("click", ".gifBtn", displayGif);
  renderButtons();

});
